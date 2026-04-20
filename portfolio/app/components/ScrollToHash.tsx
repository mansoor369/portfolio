"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollToHash = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay to ensure page content is fully rendered
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Initial check on mount/navigation
    handleHashScroll();

    // Listen for hash changes (e.g., when clicking back/forward or internal links)
    window.addEventListener("hashchange", handleHashScroll);

    // Intercept all anchor clicks for a smoother experience
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.origin === window.location.origin &&
        anchor.pathname === window.location.pathname
      ) {
        e.preventDefault();
        const id = anchor.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          // Update URL hash without jumping
          window.history.pushState(null, "", anchor.hash);
          
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    window.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
      window.removeEventListener("click", handleAnchorClick);
    };
  }, [pathname, searchParams]);

  return null;
};

export default ScrollToHash;
