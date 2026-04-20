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

  return (
    <motion.span
      variants={variants}
      // style={{ x, rotate }}
      className="hover:text-accent-gold-dark cursor-pointer transition-colors duration-500 ease-in-out inline-block bg-linear-to-b from-foreground via-foreground to-accent-gold/20 bg-clip-text text-transparent"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

const HeaderWord = ({
  word,
  wordIndex,
  smoothScroll,
  childVariants
}: {
  word: string;
  wordIndex: number;
  smoothScroll: MotionValue<number>;
  childVariants: Variants;
}) => {
  const start = wordIndex * 33;
  const end = (wordIndex + 1) * 33;
  const wordOpacity = useTransform(smoothScroll, [start, end], [1, 0]);

  return (
    <motion.span
      style={{ opacity: wordOpacity }}
      className="flex mr-4"
    >
      {word.split("").map((letter, letterIndex) => (
        <ScatteringLetter
          key={letterIndex + 1}
          letter={letter}
          index={letterIndex}
          smoothScroll={smoothScroll}
          variants={childVariants}
        />
      ))}
    </motion.span>
  );
};

export default function Header() {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const pointerEvents = useTransform(smoothScroll, (v) => v > 100 ? "none" : "auto");
  // 1. Padding: Transitions from 20px (py-5) to 0px
  const headerPadding = useTransform(smoothScroll, [0, 100], ["20px", "0px"]);

  // 2. Nav Background: Transitions from transparent to white
  const navBg = useTransform(smoothScroll, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);

  // 3. Nav Text Color: Transitions from your theme color to black
  const navColor = useTransform(smoothScroll, [0, 100], ["#fdfcf0", "#000000"]);

  // 4. Nav Rounding: Creates the "pill" shape on scroll
  const navRadius = useTransform(smoothScroll, [0, 100], ["0px", "999px"]);

  // 5. Extra: Add some padding to the pill for breathing room
  const navInsidePadding = useTransform(smoothScroll, [0, 100], ["0px 0px", "9px 26px"]);

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
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const name = "Full Stack Developer";
  const words = name.split(" ");

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <motion.div
        // We use headerPadding for the overall shrinking effect, but remove top-level opacity 
        // because we are now doing it word-by-word inside the h1.
        style={{ pointerEvents: pointerEvents, paddingTop: headerPadding, paddingBottom: headerPadding }}
        className="flex justify-center overflow-visible"
      >
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-sekuya tracking-tight flex select-none drop-shadow-2xl"
        >
          {words.map((word, wordIndex) => (
            <HeaderWord
              key={wordIndex}
              word={word}
              wordIndex={wordIndex}
              smoothScroll={smoothScroll}
              childVariants={childVariants}
            />
          ))}
        </motion.h1>
      </motion.div>



      <nav className="pb-8 flex justify-center sticky top-5">
        <motion.ul
          // Link the background, color, and padding to the scroll
          style={{ backgroundColor: navBg, color: navColor, borderRadius: navRadius, padding: navInsidePadding }}
          className="flex gap-14 items-center  justify-center border border-white/0"
        >
          {headerlinks.map((links, index) => (
            <li key={index}>
              <Link
                href={links.link}
                // We use motion.a so we can pass down the color transform
                className="text-[11px] font-sans hover:bg-accent-gold-dark p-2 rounded-full hover:text-black tracking-[0.3em] uppercase hover:-skew-x-6 transition-all duration-500 ease-in-out relative group"
              >
                {links.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      </nav>

    </header>
  );
}


