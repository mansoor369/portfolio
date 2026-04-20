import Link from "next/link";

export default function ContactMe() {
  const links = [
    { label: "GITHUB", href: "https://github.com/mansoor369" },
    // { label: "LINKEDIN", href: "https://www.linkedin.com/in/mkyzai333/" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/mansoorkhan_._/" },
  ]

  return (
    <section id="contact" className="mt-32 flex flex-col">
      <span className="text-[11px] mb-44 font-extralight font-mono relative tracking-[0.2em] text-accent-gold-dark uppercase whitespace-nowrap">
        / OPEN CHANNEL / p. 002
      </span>
      <span className="text-[11px] font-mono capitalize font-extralight tracking-[0.4em] text-accent-gold-dark uppercase whitespace-nowrap">
        Lets make something that means something
      </span>

      <Link href="mailto:mkyzai3333@gmail.com" className="text-[6vw] mt-4 uppercase font-bebas hover:text-accent-gold-dark duration-150 ease-in transition-all cursor-none">
        mkyzai3333@gmail.com
      </Link>

      <div className="h-px my-8 bg-accent-gold-dark w-full shadow-[0_0_10px_rgba(212,178,83,0.3)] animate-pulse"></div>

      {/* Social Links Row */}
      <div className="flex flex-wrap gap-x-12 gap-y-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-mono tracking-[0.2rem] text-accent-gold-dark/60 hover:text-accent-gold-dark transition-colors duration-300 group"
          >
            {link.label}{" "}
            <span className="text-[10px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* Footer Row */}
      <div className="mt-40 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] font-mono tracking-[0.2rem] text-accent-gold-dark/40 uppercase">
        <div className="flex items-center gap-2">
          <span>© 2026 MANSOOR KHAN</span>
          <span className="opacity-50">—</span>
          <span className="hover:text-accent-gold-dark/80 transition-colors">mky333.vercel.app</span>
        </div>
        <div className="flex items-center gap-2">
          <span>BUILT RAW</span>
          <span className="text-accent-gold-dark/20">•</span>
          <span>SHIPPED WITH INTENT</span>
        </div>
      </div>
    </section>
  );
}

