import { useState, useEffect, useRef } from "react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

export default function Blog() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="relative min-h-screen overflow-hidden bg-black">
      {/* Spiral animation — full background */}
      {inView && (
        <div className="absolute inset-0 z-0">
          <SpiralAnimation />
        </div>
      )}

      {/* Left-side gradient so text stays readable over the spiral */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      {/* 3D Robot — right half */}
      {inView && (
        <div className="absolute inset-y-0 right-0 z-10 hidden w-[52%] md:block">
          <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="h-full w-full" />
        </div>
      )}

      {/* Content — left half, vertically centred */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-5xl items-center px-6 md:px-10">
        <div className="max-w-md">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            04 / Blog
          </p>

          <h2 className="font-deltha mb-6 text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
            Blog
          </h2>

          <p className="mb-10 text-base leading-relaxed text-[#bdbdbd] md:text-lg">
            Weekly posts about whatever is interesting to me at the time. Topics will range from
            technological advances, finance or even chess! Whatever is interesting to me at that
            time.
          </p>

          {/* Enter button */}
          <a
            href="https://blog.derekyuan.co.uk"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-white/20 px-10 py-4 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(0,217,146,0.25)]"
          >
            {/* Glow bg on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative z-10 text-xl font-extralight uppercase tracking-[0.35em] text-white transition-all duration-500 group-hover:tracking-[0.45em] group-hover:text-primary">
              Enter
            </span>
            <span className="relative z-10 text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-primary">
              ›
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
