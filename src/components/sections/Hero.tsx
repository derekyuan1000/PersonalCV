import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Github } from "lucide-react";
import WaveVisualizer from "@/components/ui/schema-card-with-animated-wave-visualizer";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const waveY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-background">
      {/* Wave canvas background */}
      <motion.div style={{ y: waveY, opacity: 0.55 }} className="absolute inset-0 z-0">
        <WaveVisualizer />
      </motion.div>

      {/* Green orb glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 z-0 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[80px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 z-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[60px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Profile picture — right side */}
      <motion.div
        style={{ y: imageY, opacity: fade }}
        className="absolute inset-y-0 right-0 z-20 hidden w-[48%] md:flex items-center justify-center"
      >
        <div className="relative">
          {/* Ambient glow */}
          <div className="absolute inset-0 scale-125 rounded-full bg-primary/20 blur-[60px]" />
          {/* Decorative rings */}
          <div className="absolute -inset-4 rounded-full border border-primary/20 animate-[spin_18s_linear_infinite]" />
          <div className="absolute -inset-8 rounded-full border border-primary/10" />
          {/* Image */}
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/50 shadow-[0_0_60px_rgba(0,217,146,0.25)] md:h-72 md:w-72 lg:h-[22rem] lg:w-[22rem]">
            <img
              src="/images/ProfilePicture.jpeg"
              alt="Derek Yuan"
              className="h-full w-full object-cover object-top"
            />
            {/* Subtle inner vignette to blend with dark theme */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10"
      >
        <div className="max-w-2xl">
          <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#00d992]" />
            Portfolio / 2026
          </p>
          <h1 className="text-5xl font-medium leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Derek
            <br />
            <span className="text-primary">Yuan</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-[#bdbdbd] md:text-lg">
            Developer · Chess engineer · AI builder. I ship Python, Unity, full-stack web, and
            real-time systems — from neural networks built from scratch to a Lichess bot that plays
            sharp tactical chess.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-[#2fd6a1]"
            >
              View projects
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://github.com/derekyuan1000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-[#8b949e]"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
