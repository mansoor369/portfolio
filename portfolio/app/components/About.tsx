"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function SkillRow({ skill, index }: { skill: { label: string, items: string[] }, index: number }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05, // Subtle stagger even if they trigger at the same time
        ease: [0.33, 1, 0.68, 1] 
      }}
      className="group flex flex-col md:flex-row items-start md:items-center py-6 border-b border-white/10 transition-all duration-500 hover:bg-white/[0.02] px-4 md:px-8"
    >
      {/* Category Label */}
      <div className="w-full md:w-64 mb-6 md:mb-0">
        <span className="text-[14px] font-mono font-bold tracking-[0.4em] text-accent-gold-dark uppercase">
          {skill.label}
        </span>
      </div>

      {/* Skill Items with Premium Spans */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-0">
        {skill.items.map((item, itemIndex) => (
          <div key={itemIndex} className="flex items-center">
            <span className="text-xl md:text-[16px] font-bold text-neutral-400 font-sans tracking-tight group-hover:text-foreground transition-colors duration-300">
              {item}
            </span>
            {itemIndex < skill.items.length - 1 && (
              <span className="ml-6 text-white/10 text-xs select-none">/</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const skills = [
    { label: "LANGS", items: ["TypeScript", "JavaScript", "C++", "Java", "C#"] },
    { label: "FRONT", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { label: "BACK", items: ["Node.js", "Express.js", "Socket.io"] },
    { label: "DATA", items: ["MongoDB", "PostgreSQL", "SupaBase", "NeonDB"] },
    { label: "TOOLS", items: ["Git", "GitHub", "Docker", "Figma"] },
    { label: "DEPLOY", items: ["Vercel", "AWS", "Docker"] },
  ];

  // Title still uses scroll progress for continuous parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const smoothTitleY = useSpring(titleY, { stiffness: 100, damping: 30 });

  return (
    <section id="about" ref={containerRef} className="mt-32 pb-32 overflow-hidden">
      <div className="flex flex-col gap-4 mb-8">
        <span className="text-[13px] font-mono tracking-[0.4em] text-accent-gold-dark uppercase whitespace-nowrap">
          / WHO AM I / P.001
        </span>
        <p className="text-[18px] mt-10 font-bebas tracking-widest text-accent-gold-dark">THE CODE</p>
      </div>

      <motion.h1 
        style={{ y: smoothTitleY }}
        className="text-[12vw] font-bebas text-foreground leading-none mb-24 select-none will-change-transform"
      >
        WHAT I BUILD
      </motion.h1>

      <div className="flex flex-col w-full border-t border-white/10">
        {skills.map((skill, index) => (
          <SkillRow key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}