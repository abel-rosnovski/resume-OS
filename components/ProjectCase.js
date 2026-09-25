"use client";

import { useState } from "react";
import Card from "./ui/Card";

export default function ProjectCase({ title, whatIDid, whatItAccomplished, gradient }) {
  const [open, setOpen] = useState(false);

  return (
    <Card
  className="mb-6"
  style={
    gradient
      ? { background: "linear-gradient(135deg, #10261a 0%, #0a0a0a 70%)" }
      : undefined
  }
>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-bold text-lg">
          <span className="text-accent">$</span> ./{title.toLowerCase().replace(/\s+/g, "-")}
        </span>
        <span className="text-muted text-sm">{open ? "[-] collapse" : "[+] run"}</span>
      </button>

      {open && (
        <div className="mt-5 space-y-5 border-t border-border pt-5">
          <div>
            <p className="text-accent text-sm font-bold mb-2">{"// what I did"}</p>
            <ul className="space-y-2 text-foreground">
              {whatIDid.map((item, i) => (
                <li key={i} className="pl-4 border-l border-border">
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      {item.main}
                      {item.sub && (
                        <ul className="mt-2 space-y-1 pl-4">
                          {item.sub.map((s, j) => (
                            <li key={j} className="text-muted text-sm">
                              — {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {whatItAccomplished && whatItAccomplished.length > 0 && (
  <div>
    <p className="text-accent text-sm font-bold mb-2">{"// what it accomplished"}</p>
    <ul className="space-y-2 text-foreground">
      {whatItAccomplished.map((item, i) => (
        <li key={i} className="pl-4 border-l border-border">
          {item}
        </li>
      ))}
    </ul>
  </div>
)}
        </div>
      )}
    </Card>
  );
}