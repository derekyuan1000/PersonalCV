import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Keyboard, TrendingUp, Trophy, ExternalLink } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const interests = [
  {
    id: "coding",
    category: "Backend Website Development",
    title: "Full Stack Developer",
    subtitle: "Public repositories",
    glowColor: "blue" as const,
    link: "https://github.com/derekyuan1000",
    linkLabel: "github.com/derekyuan1000",
    icon: <Code2 size={20} />,
  },
  {
    id: "typing",
    category: "Speed Typing",
    title: "Competitive Typist",
    subtitle: "161 WPM — 15 sec PB",
    glowColor: "purple" as const,
    link: "https://monkeytype.com/profile/dyuan",
    linkLabel: "monkeytype.com/profile/dyuan",
    icon: <Keyboard size={20} />,
  },
  {
    id: "finance",
    category: "Finance",
    title: "Fundamental Analyst",
    subtitle: "Small-cap equities",
    glowColor: "green" as const,
    link: "https://trades.derekyuan.co.uk",
    linkLabel: "trades.derekyuan.co.uk",
    icon: <TrendingUp size={20} />,
  },
  {
    id: "chess",
    category: "Chess",
    title: "Candidate Master",
    subtitle: "2000+ Blitz & Rapid",
    glowColor: "orange" as const,
    link: "https://lichess.org/@/dereky123",
    linkLabel: "lichess.org/@/dereky123",
    icon: <Trophy size={20} />,
  },
];

export default function About() {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-32">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            01 / Hobbies
          </p>
          <h2 className="mb-10 font-deltha text-4xl tracking-tight text-foreground md:text-5xl">
            Hobbies
          </h2>
        </div>

        {/* Interest cards */}
        <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest.id}
              className="group cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
              onClick={() => setOpen(interest.id)}
            >
              <GlowCard glowColor={interest.glowColor} customSize className="w-full h-60">
                {/* Main content — fills 1fr row */}
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="text-white/70">{interest.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {interest.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{interest.title}</h3>
                    <p className="mt-1 text-sm text-white/50">{interest.subtitle}</p>
                  </div>
                </div>
                {/* Footer row — learn more left, link right */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors">
                    Learn more →
                  </span>
                  <a
                    href={interest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs text-white/40 transition-colors hover:text-white/70"
                  >
                    {interest.linkLabel} <ExternalLink size={11} />
                  </a>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>

        {/* Interest detail dialogs */}
        <Dialog
          open={open !== null}
          onOpenChange={(o) => {
            if (!o) setOpen(null);
          }}
        >
          <DialogContent className="max-w-lg">
            {open === "coding" && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Code2 size={18} className="text-blue-500" /> Coding
                  </DialogTitle>
                  <DialogDescription>
                    Full stack development across multiple domains
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-foreground">
                  <p>
                    I build everything across the stack, however there is usually a heavier emphasis
                    on the backend, so don't expect a great UI! I do branch out however, I work with
                    different technologies, with a heavier emphasis on algorithmic usage of logical
                    process such as finance and chess.
                  </p>
                  <a
                    href="https://github.com/derekyuan1000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                  >
                    github.com/derekyuan1000 <ExternalLink size={13} />
                  </a>
                </div>
              </>
            )}

            {open === "typing" && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Keyboard size={18} className="text-purple-500" /> Typing
                  </DialogTitle>
                  <DialogDescription>
                    Competitive speed typing & open-source contribution
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-foreground">
                  <p>
                    Typing has always been a passion of mine. Starting as just a minor efficiency
                    improvement, it has now become a genuine hobby!
                  </p>
                  <div className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Personal best
                    </p>
                    <p className="text-5xl font-bold text-primary">161</p>
                    <p className="mt-1 text-sm text-muted-foreground">WPM — 15-second test</p>
                  </div>
                  <a
                    href="https://monkeytype.com/profile/dyuan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                  >
                    monkeytype.com/profile/dyuan <ExternalLink size={13} />
                  </a>
                </div>
              </>
            )}

            {open === "finance" && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <TrendingUp size={18} className="text-green-500" /> Finance
                  </DialogTitle>
                  <DialogDescription>Fundamental analysis & equity research</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-foreground">
                  <p>
                    Outside of code I enjoy trading stocks and finance. Primarily I focus on
                    fundamental analysis, however I do sometimes venture into trading with
                    technicals. However it is usually a combination of both! All of my trades are
                    available at the link below.
                  </p>
                  <a
                    href="https://trades.derekyuan.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                  >
                    trades.derekyuan.co.uk <ExternalLink size={13} />
                  </a>
                </div>
              </>
            )}

            {open === "chess" && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Trophy size={18} className="text-orange-500" /> Chess
                  </DialogTitle>
                  <DialogDescription>
                    Candidate Master — 2000+ Blitz & Rapid on Lichess
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm text-foreground">
                  <p>
                    I have always enjoyed chess, it's a game which I feel really tests your thinking
                    ability, and you really have to consider what could happen next. I hold an ACM
                    title with ratings of over 2000 on Lichess.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Title", value: "ACM" },
                      { label: "Blitz", value: "2000+" },
                      { label: "Rapid", value: "2000+" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg border border-border bg-muted/30 p-3 text-center"
                      >
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-2xl font-bold text-primary">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://lichess.org/@/dereky123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                  >
                    lichess.org/@/dereky123 <ExternalLink size={13} />
                  </a>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
