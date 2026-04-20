"use client";

export default function About() {
  const skills = [
    { label: "LANGS", items: ["TypeScript", "JavaScript", "C++", "Java", "C#"] },
    { label: "FRONT", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { label: "BACK", items: ["Node.js", "Express.js", "Socket.io"] },
    { label: "DATA", items: ["MongoDB", "PostgreSQL", "SupaBase", "NeonDB"] },
    { label: "TOOLS", items: ["Git", "GitHub", "Docker", "Figma"] },
    { label: "DEPLOY", items: ["Vercel", "AWS", "Docker"] },
  ];

  return (
    <section id="about" className="mt-32 pb-32">
      <div className="flex flex-col  gap-4 mb-8">
        <span className="text-[13px] font-mono tracking-[0.4em] text-accent-gold-dark uppercase whitespace-nowrap">
          / WHO AM I / P.001
        </span>
        <p className="text-[18px] mt-10  font-bebas tracking-widest text-accent-gold-dark"> THE CODE</p>

        {/* <div className="h-px w-full bg-accent-gold-dark/20" /> */}
      </div>

      <h1 className="text-[12vw] font-bebas text-foreground leading-none mb-24 select-none">
        WHAT I BUILD
      </h1>

      <div className="flex flex-col w-full border-t border-white/10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row items-start md:items-center py-4 border-b border-white/10 transition-all duration-500 hover:bg-white/[0.02] px-4 md:px-8"
          >
            {/* Category Label (Modern Accent Red) */}
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
          </div>
        ))}
      </div>
    </section>
  );
}