import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import SocialCards from "@/components/ui/card-fan-carousel";
import type { CardItem } from "@/components/ui/card-fan-carousel";

const featuredProjects: CardItem[] = [
  {
    imgUrl: "/images/projects/dragonbot.png",
    alt: "DragonBot V2 — Chess AI",
    linkUrl: "https://github.com/derekyuan1000/DragonBotV2",
  },
  {
    imgUrl: "/images/projects/quicknotzz.png",
    alt: "QuickNotzz — Notes App",
    linkUrl: "https://github.com/derekyuan1000/QuickNotzz",
  },
  {
    imgUrl:
      "https://raw.githubusercontent.com/derekyuan1000/ChessToolkit/master/Screenshots/BATTLE_ARENA.png",
    alt: "Chess Toolkit — Utilities",
    linkUrl: "https://github.com/derekyuan1000/ChessToolkit",
    objectPosition: "top left",
  },
  {
    imgUrl: "/images/projects/electiontracker.png",
    alt: "ElectionTracker — UK Vote Share Projection",
    linkUrl: "https://electiontracker.derekyuan.co.uk/",
  },
  {
    imgUrl:
      "https://raw.githubusercontent.com/derekyuan1000/PixelMasterX/Master/Screenshots/img.png",
    alt: "PixelMasterX — Pixel Art",
    linkUrl: "https://github.com/derekyuan1000/PixelMasterX",
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className="relative bg-background py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            03 / Selected work
          </p>
          <h2 className="mb-6 font-deltha text-4xl tracking-tight text-foreground md:text-5xl">
            Projects
          </h2>
          <a
            href="https://github.com/derekyuan1000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            All on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {mounted && <SocialCards cards={featuredProjects} />}
    </section>
  );
}
