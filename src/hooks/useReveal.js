import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fades up every [data-r] element inside the ref'd container, staggered per batch.
export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray("[data-r]");
      gsap.set(els, { y: 40, opacity: 0 });
      ScrollTrigger.batch(els, {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out", overwrite: true }),
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return ref;
}
