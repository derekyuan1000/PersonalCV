import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import SocialCards from "@/components/ui/card-fan-carousel";
import type { CardItem } from "@/components/ui/card-fan-carousel";

const featuredProjects: CardItem[] = [
  {
    imgUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=600&fit=crop",
    alt: "DragonBot V2 — Chess AI",
    linkUrl: "https://github.com/derekyuan1000/DragonBotV2",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=600&fit=crop",
    alt: "QuickNotzz — Notes App",
    linkUrl: "https://github.com/derekyuan1000/QuickNotzz",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=400&h=600&fit=crop",
    alt: "Chess Toolkit — Utilities",
    linkUrl: "https://github.com/derekyuan1000/ChessToolkit",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=600&fit=crop",
    alt: "Neural Network — Deep Learning",
    linkUrl: "https://github.com/derekyuan1000/NeuralNetwork",
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop",
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
