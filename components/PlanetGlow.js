export default function PlanetGlow({ rotation = 0 }) {
  const shift = Math.max(-30, Math.min(30, rotation * 0.15));
  const centerOffset = -20; // negative moves left, positive moves right — adjust as needed
  const bandShift = rotation * 0.5; // ties band drift to your drag/rotation

  return (
    <div
      className="absolute left-1/2 pointer-events-none"
      style={{
        bottom: -230,
        width: 400,
        height: 400,
        transform: `translateX(calc(-50% + ${shift + centerOffset}px))`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* outer atmosphere glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(57,255,140,0.35) 0%, rgba(57,255,140,0.1) 45%, transparent 70%)",
          filter: "blur(30px)",
          transform: "scale(1.3)",
        }}
      />

      {/* sphere body */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          boxShadow:
            "inset -50px -50px 90px rgba(0,0,0,0.7), inset 20px 20px 40px rgba(150,255,200,0.12)",
        }}
      >
        {/* the color bands themselves, drifting horizontally with rotation */}
        <div
          className="absolute animate-[band-drift_14s_linear_infinite]"
          style={{
            inset: "-10%",
            backgroundImage: `repeating-linear-gradient(
              4deg,
              #0a1f14 0px,
              #123422 22px,
              #1d5236 40px,
              #123422 58px,
              #0a1f14 80px,
              #051209 100px
            )`,
            transform: `translateX(${bandShift}px)`,
          }}
        />

        {/* spherical shading on top, to curve the bands visually */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(150,255,200,0.35) 0%, transparent 30%, rgba(0,0,0,0.55) 75%)",
          }}
        />

        {/* directional highlight sheen */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 24%, rgba(220,255,235,0.5) 0%, transparent 30%)",
          }}
        />
      </div>
    </div>
  );
}