"use client"

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * Individual Word component that reveals based on its specific range in the scroll progress.
 */
function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#404040", "#fdfcf0"]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.2em] tracking-wider transition-colors duration-100">
      {children}
    </motion.span>
  );
}

/**
 * Container component for a single sentence that distributes the scroll progress 
 * across its words.
 */
function StickySentence({ text, progress, range, classname }: { text: string, progress: MotionValue<number>, range: [number, number], classname: string }) {
  const words = text.split(" ");

  return (
    <motion.p className={classname}>
      {words.map((word, i) => {
        // Divide the sentence's assigned range [start, end] into sub-ranges for each word
        const step = (range[1] - range[0]) / words.length;
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return (
          <Word key={i} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
}

export default function Intro() {
  const [colorchange, setcolorchange] = useState(false);
  const containerRef = useRef(null);

  // Track the scroll progress of the entire quote container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
        <div className={`font-bebas transition-colors duration-300 text-[20.5vw] font-bold leading-[0.85] tracking-wider ${colorchange ? "text-accent-gold-dark" : "text-foreground"}`}>
          MANSOOR
        </div>
        <div className={`font-bebas transition-colors duration-300 text-[20.5vw] font-bold leading-[0.9] ml-5 tracking-wider -mt-[0.1em] ${colorchange ? "text-white" : "text-accent-gold-dark"}`}>
          KHAN
        </div>
      </div>

      {/* STICKY SCROLL SECTION */}
      <div ref={containerRef} className="relative h-[300vh] mt-32">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
          <div className=" w-full px-10">
            <StickySentence
              text="Make IT FEEL."
              progress={scrollYProgress}
              range={[0, 0.33]}
              classname="font-bebas text-[14vw] leading-[0.8]"
            />
            <StickySentence
              text="Make IT MEAN SOMETHING."
              progress={scrollYProgress}
              range={[0.33, 0.66]}
              classname="font-bebas text-[8vw] mx-3 leading-[1]"
            />
            <StickySentence
              text="KEEP IT RAW."
              progress={scrollYProgress}
              range={[0.66, 1.0]}
              classname="font-bebas -mx-10 text-[14vw] leading-[1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



