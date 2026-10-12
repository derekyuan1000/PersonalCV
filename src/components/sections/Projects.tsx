import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import SocialCards from "@/components/ui/card-fan-carousel";
import type { CardItem } from "@/components/ui/card-fan-carousel";
import {
  DragonBotCover,
  ElectionTrackerCover,
  MonolithCover,
  StockTrackerCover,
  StockTrackerMobileCover,
} from "./project-covers";

const featuredProjects: CardItem[] = [
  {
    content: <DragonBotCover />,
    alt: "DragonBot V2 — Chess AI",
    linkUrl: "https://github.com/derekyuan1000/DragonBotV2",
  },
  {
    content: <MonolithCover />,
    alt: "Monolith — CAS add-in for the Casio fx-CG50",
    linkUrl: "https://github.com/derekyuan1000/Monolith-FXCG50",
  },
  {
    content: <StockTrackerCover />,
    alt: "StockTracker — Portfolio Tracker",
    linkUrl: "https://github.com/derekyuan1000/StockTracker",
  },
  {
    content: <ElectionTrackerCover />,
    alt: "ElectionTracker — UK Vote Share Projection",
    linkUrl: "https://electiontracker.derekyuan.co.uk/",
  },
  {
    content: <StockTrackerMobileCover />,
    alt: "StockTracker Mobile — Portfolio Tracker Companion App",
    linkUrl: "https://github.com/derekyuan1000/StockTracker-Mobile",
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
