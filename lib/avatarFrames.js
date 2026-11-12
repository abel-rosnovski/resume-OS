// Scroll-scrubbed avatar video, drawn frame by frame onto a canvas.
//
// Video elements seek slowly backwards (AI video often has a single keyframe), so the clip
// is played once, off-screen, and every presented frame is captured as a JPEG blob.
// Blobs are decoded to ImageBitmaps on demand and kept in a small LRU window.

const LRU_SIZE = 56;
const MAX_INFLIGHT = 8;
const AHEAD = 14;
const BEHIND = 4;
const NEAREST = 12;

export class AvatarFrames {
  constructor(canvas, { src, frames, fps }, onFirstFrame) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.src = src;
    this.total = frames;
    this.fps = fps;
    this.onFirstFrame = onFirstFrame;
    this.blobs = new Array(frames);
    this.edges = new Array(frames);
    this.bitmaps = new Map(); // index -> ImageBitmap, insertion order = recency
    this.inflight = new Set();
    this.vw = 1280;
    this.vh = 720;
    this.lastKey = "";
    this.dead = false;
    this.resize();
  }

  start() {
    const v = document.createElement("video");
    v.src = this.src;
    v.muted = true;
    v.playsInline = true;
    v.preload = "auto";
    v.crossOrigin = "anonymous";
    // It must be painted for frame callbacks to fire, so keep it tiny and nearly invisible.
    Object.assign(v.style, {
      position: "fixed",
      left: "0",
      top: "0",
      width: "2px",
      height: "2px",
      opacity: "0.01",
      pointerEvents: "none",
      zIndex: "-1",
    });
    document.body.appendChild(v);
    this.video = v;

    if (!("requestVideoFrameCallback" in HTMLVideoElement.prototype)) {
      this.fail();
      return;
    }

    const grab = document.createElement("canvas");
    const gctx = grab.getContext("2d", { willReadFrequently: true });

    const onFrame = (_now, meta) => {
      if (this.dead) return;
      const i = Math.min(this.total - 1, Math.round(meta.mediaTime * this.fps));
      if (!this.blobs[i]) {
        if (grab.width !== v.videoWidth) {
          grab.width = this.vw = v.videoWidth;
          grab.height = this.vh = v.videoHeight;
        }
        gctx.drawImage(v, 0, 0);
        this.edges[i] = [edgeColor(gctx, 0, grab.height), edgeColor(gctx, grab.width - 4, grab.height)];
        grab.toBlob(
          (b) => {
            if (!b || this.dead) return;
            this.blobs[i] = b;
            if (!this.started) {
              this.started = true;
              this.onFirstFrame?.();
            }
          },
          "image/jpeg",
          0.88,
        );
      }
      if (!v.ended) v.requestVideoFrameCallback(onFrame);
    };
    v.requestVideoFrameCallback(onFrame);
    v.addEventListener("ended", () => v.remove(), { once: true });
    v.addEventListener("error", () => this.fail(), { once: true });
    v.playbackRate = 0.5; // slower playback = fewer dropped frames while capturing
    v.play().catch(() => this.fail());
  }

  fail() {
    this.failed = true;
    this.video?.remove();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const r = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.round(r.width * dpr);
    this.canvas.height = Math.round(r.height * dpr);
    this.lastKey = "";
  }

  // Decode frames around the playhead; drop the least recently used.
  prefetch(from, to) {
    const lo = Math.max(0, Math.min(from, to) - BEHIND);
    const hi = Math.min(this.total - 1, Math.max(from, to) + AHEAD);
    const order = [];
    const start = Math.round(from);
    for (let d = 0; start + d <= hi || start - d >= lo; d++) {
      if (start + d <= hi) order.push(start + d);
      if (d && start - d >= lo) order.push(start - d);
    }
    for (const i of order) {
      if (this.inflight.size >= MAX_INFLIGHT) break;
      if (this.bitmaps.has(i) || this.inflight.has(i) || !this.blobs[i]) continue;
      this.inflight.add(i);
      createImageBitmap(this.blobs[i])
        .then((bmp) => {
          this.inflight.delete(i);
          if (this.dead) return bmp.close();
          this.bitmaps.set(i, bmp);
          while (this.bitmaps.size > LRU_SIZE) {
            const [k, old] = this.bitmaps.entries().next().value;
            this.bitmaps.delete(k);
            old.close();
          }
          this.lastKey = "";
        })
        .catch(() => this.inflight.delete(i));
    }
  }

  get(i) {
    const b = this.bitmaps.get(i);
    if (b) {
      this.bitmaps.delete(i);
      this.bitmaps.set(i, b);
    }
    return b;
  }

  nearest(i) {
    for (let d = 0; d <= NEAREST; d++) {
      const a = this.get(i - d) || this.get(i + d);
      if (a) return [a, this.bitmaps.has(i - d) ? i - d : i + d];
    }
    return [null, i];
  }

  // cur: fractional frame index. t: framing 0 (hero, cover) → 1 (full height, centred).
  draw(cur, target, t) {
    this.prefetch(cur, target);
    const i = Math.floor(cur);
    const frac = cur - i;
    const key = `${i}|${frac.toFixed(2)}|${t.toFixed(3)}|${this.bitmaps.size}`;
    if (key === this.lastKey) return;

    const [base, bi] = this.nearest(i);
    if (!base) return;
    this.lastKey = key;

    const { width: W, height: H } = this.canvas;
    const ctx = this.ctx;
    const ar = this.vw / this.vh;

    // rect 0: cover-fit into W × max(W·900/1440, H), anchored top
    const boxH = Math.max((W * 900) / 1440, H);
    let w0 = W;
    let h0 = W / ar;
    if (h0 < boxH) {
      h0 = boxH;
      w0 = h0 * ar;
    }
    const r0 = [(W - w0) / 2, 0, w0, h0];
    // rect 1: full canvas height, centred
    const h1 = H;
    const w1 = h1 * ar;
    const r1 = [(W - w1) / 2, 0, w1, h1];
    const [x, y, w, h] = r0.map((v, k) => v + (r1[k] - v) * t);

    const edge = this.edges[bi] || ["#f7f6f3", "#f7f6f3"];
    ctx.fillStyle = edge[0];
    ctx.fillRect(0, 0, W / 2, H);
    ctx.fillStyle = edge[1];
    ctx.fillRect(W / 2, 0, W - W / 2, H);

    ctx.globalAlpha = 1;
    ctx.drawImage(base, x, y, w, h);
    const next = bi === i && frac > 0.01 ? this.bitmaps.get(i + 1) : null;
    if (next) {
      ctx.globalAlpha = frac;
      ctx.drawImage(next, x, y, w, h);
      ctx.globalAlpha = 1;
    }

    // feather the frame's side edges into the fill colour on wide screens
    if (x > 0) {
      const f = w * 0.06;
      let g = ctx.createLinearGradient(x, 0, x + f, 0);
      g.addColorStop(0, edge[0]);
      g.addColorStop(1, hexA(edge[0], 0));
      ctx.fillStyle = g;
      ctx.fillRect(x, 0, f, H);
      g = ctx.createLinearGradient(x + w - f, 0, x + w, 0);
      g.addColorStop(0, hexA(edge[1], 0));
      g.addColorStop(1, edge[1]);
      ctx.fillStyle = g;
      ctx.fillRect(x + w - f, 0, f, H);
    }
  }

  destroy() {
    this.dead = true;
    this.video?.remove();
    for (const b of this.bitmaps.values()) b.close();
    this.bitmaps.clear();
  }
}

function edgeColor(ctx, x, h) {
  const d = ctx.getImageData(x, 0, 4, h).data;
  let r = 0;
  let g = 0;
  let b = 0;
  const n = d.length / 4;
  for (let k = 0; k < d.length; k += 4) {
    r += d[k];
    g += d[k + 1];
    b += d[k + 2];
  }
  return `rgb(${Math.round(r / n)},${Math.round(g / n)},${Math.round(b / n)})`;
}

function hexA(rgb, a) {
  return rgb.replace("rgb(", "rgba(").replace(")", `,${a})`);
}
