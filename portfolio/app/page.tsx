"use client"
import { useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Header />

      <div className="max-w-8xl mx-20">
        <Intro />
        <About />
        <Projects />
      </div>
    </div>
  );
}
