"use client"

import { useState } from "react";

export default function Intro() {
  const [colorchange, setcolorchange] = useState(false);

  return (
    <section className=" mt-16">

      <div className="link flex justify-between">
        <span className="text-[11px] font-bebas tracking-widest text-accent-gold-dark">
          mky333.vercel.app
        </span>
        <span className="text-[11px] font-sekuya tracking-widest text-accent-gold-dark">
          Vol. 1 / 2026
        </span>
      </div>

      {/* Main Hero Typography */}
      <div
        onMouseEnter={() => setcolorchange(true)}
        onMouseLeave={() => setcolorchange(false)}
        className="mt-8 flex flex-col items-start select-none w-full overflow-hidden cursor-default"
      >
        <div className={`font-bebas transition-colors duration-300 text-[14.5vw] font-bold leading-[0.85] tracking-tighter ${colorchange ? "text-accent-gold-dark" : "text-foreground"}`}>
          MANSOOR
        </div>
        <div className={`font-bebas transition-colors duration-300 text-[14.5vw] font-bold leading-[0.85] ml-5 tracking-tighter -mt-[0.1em] ${colorchange ? "text-white" : "text-accent-gold-dark"}`}>
          KHAN
        </div>
      </div>
    </section>
  );
}


