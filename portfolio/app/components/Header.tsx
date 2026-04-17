"use client"
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, Variants, MotionValue } from "framer-motion";

const ScatteringLetter = ({
  letter,
  index,
  smoothScroll,
  variants
}: {
  letter: string;
  index: number;
  smoothScroll: MotionValue<number>;
  variants: Variants;
}) => {
  const x = useTransform(smoothScroll, [0, 400], [0, (index - 6) * 60]);
  const rotate = useTransform(smoothScroll, [0, 400], [0, (index - 6) * 15]);

  return (
    <motion.span
      variants={variants}
      style={{ x, rotate }}
      className="hover:text-accent-gold-dark cursor-pointer transition-colors duration-500 ease-in-out inline-block bg-linear-to-b from-foreground via-foreground to-accent-gold/20 bg-clip-text text-transparent"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export default function Header() {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const headerY = useTransform(smoothScroll, [0, 400], [0, -50]);
  const headerScale = useTransform(smoothScroll, [0, 400], [1, 0.8]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
      }
    }
  };

  const headerlinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const name = "Full Stack Developer";

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <motion.div
        style={{ y: headerY, scale: headerScale }}
        className="py-12 flex justify-center overflow-visible"
      >
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-sekuya tracking-tight flex select-none drop-shadow-2xl"
        >
          {name.split("").map((letter, index) => (
            <ScatteringLetter
              key={index}
              letter={letter}
              index={index}
              smoothScroll={smoothScroll}
              variants={childVariants}
            />
          ))}
        </motion.h1>
      </motion.div>

      <nav className="pb-8">
        <ul className="flex gap-14 items-center justify-center">
          {headerlinks.map((links, index) => (
            <li key={index}>
              <Link
                href={links.link}
                className="text-[11px] hover:text-white font-sans tracking-[0.3em] uppercase text-foreground/50 hover:-skew-x-6 transition-all duration-500 ease-in-out relative group"
              >
                {links.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-accent-gold/50 transition-all duration-500 group-hover:w-8"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


