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
  const heroRef = useRef(null);

  // Track the scroll progress of the entire quote container for sticky text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track global scroll for parallax effects on the name and line
  const { scrollYProgress: globalScroll } = useScroll();

  // "MANSOOR" moves UP
  const mansoorY = useTransform(globalScroll, [0, 0.15], [0, -100]);
  // "KHAN" moves RIGHT
  const khanX = useTransform(globalScroll, [0, 0.15], [0, 300]);
  // Line fades to 0
  const lineX = useTransform(globalScroll, [0, 0.05], [0, 2000]);

  return (
    <section className="mt-6 md:mt-12 lg:mt-0">
      <div className="link flex justify-between">
        <span className="text-[10px] md:text-[11px] font-bebas tracking-widest text-accent-gold-dark">
          mky333.vercel.app
        </span>
        <span className="text-[10px] md:text-[11px] font-sekuya tracking-widest text-accent-gold-dark">
          Vol. 1 / 2026
        </span>
      </div>

      {/* Main Hero Typography */}
      <div
        ref={heroRef}
        onMouseEnter={() => setcolorchange(true)}
        onMouseLeave={() => setcolorchange(false)}
        className="mt-6 md:mt-8 flex flex-col items-start select-none w-full overflow-hidden cursor-default"
      >
        <motion.div
          style={{ y: mansoorY }}
          className={`font-bebas transition-colors duration-300 text-[24vw] sm:text-[22vw] md:text-[20.5vw] font-bold leading-[0.85] tracking-wider ${colorchange ? "text-accent-gold-dark" : "text-foreground"}`}
        >
          MANSOOR
        </motion.div>
        <motion.div
          style={{ x: khanX }}
          className={`font-bebas transition-colors duration-300 text-[24vw] sm:text-[22vw] md:text-[20.5vw] font-bold leading-[0.9] ml-2 md:ml-5 tracking-wider -mt-[0.1em] ${colorchange ? "text-white" : "text-accent-gold-dark"}`}
        >
          KHAN
        </motion.div>
        <motion.div
          style={{ x: lineX }}
          className="h-px my-8 bg-accent-gold-dark w-full shadow-[0_0_10px_rgba(212,178,83,0.3)] animate-pulse"
        ></motion.div>
      </div>

      {/* STICKY SCROLL SECTION */}
      <div ref={containerRef} className="relative h-[300vh] mt-16 md:mt-32">
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full px-4 md:px-10">
            <StickySentence
              text="Make IT FEEL."
              progress={scrollYProgress}
              range={[0, 0.33]}
              classname="font-bebas text-[18vw] sm:text-[16vw] md:text-[14vw] leading-[0.8]"
            />
            <StickySentence
              text="Make IT MEAN SOMETHING."
              progress={scrollYProgress}
              range={[0.33, 0.66]}
              classname="font-bebas text-[12vw] sm:text-[10vw] md:text-[8vw] mx-1 md:mx-3 leading-[1]"
            />
            <StickySentence
              text="KEEP IT RAW."
              progress={scrollYProgress}
              range={[0.66, 1.0]}
              classname="font-bebas text-[18vw] sm:text-[16vw] md:text-[14vw] leading-[1] md:-mx-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}





