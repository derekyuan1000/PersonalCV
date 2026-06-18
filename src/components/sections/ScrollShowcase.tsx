import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ScrollShowcase() {
  const aboutFacts = [
    { key: "role", value: "Developer" },
    { key: "location", value: "UK-based, working across web and AI" },
    { key: "experience", value: "Full-stack apps, bots, games, and tooling" },
    { key: "focus", value: "Python, Unity, web apps, AI" },
    { key: "interests", value: "Chess, typing, finance" },
    { key: "strengths", value: "Clean builds, polished UI, practical automation" },
    { key: "builds", value: "Tools, bots, games, and systems" },
    { key: "current", value: "Refining projects and shipping small improvements" },
  ];

  return (
    <section className="relative bg-background">
      <ContainerScroll
        titleComponent={
          <div className="pb-6">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              About me
            </p>
            <h2 className="font-deltha text-3xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Scroll into the <span className="text-primary">about section</span>
            </h2>
          </div>
        }
      >
        <div className="flex h-full flex-col">
          {/* IDE header */}
          <div className="flex items-center gap-2 border-b border-border bg-[#0a0a0a] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 font-mono text-xs text-[#8b949e]">
              derek@portfolio ~ about.ts
            </span>
          </div>
          {/* Code body */}
          <div className="flex-1 overflow-auto p-6 font-mono text-sm md:p-10 md:text-base">
            <div className="space-y-2 text-[#bdbdbd]">
              <div>
                <span className="text-[#8b949e]">
                  // A short snapshot of who I am and what I build
                </span>
              </div>
              <div>
                <span className="text-[#8b949e]">
                  // A mix of software, hobbies, and the way I like to work
                </span>
              </div>
              <div>
                <span className="text-[#8b949e]">
                  // Focused on making things useful, fast, and visually clean
                </span>
              </div>
              <div>
                <span className="text-primary">const</span>{" "}
                <span className="text-foreground">about</span>{" "}
                <span className="text-[#8b949e]">=</span> <span className="text-foreground">[</span>
              </div>
              {aboutFacts.map((item, i) => (
                <div key={item.key} className="ml-6 leading-relaxed">
                  <span className="text-foreground">{"{"}</span>{" "}
                  <span className="text-[#e8a87c]">{item.key}:</span>{" "}
                  <span className="text-primary">"{item.value}"</span>
                  <span className="text-foreground">{"}"}</span>
                  {i < aboutFacts.length - 1 ? "," : ""}
                </div>
              ))}
              <div className="ml-6 leading-relaxed">
                <span className="text-foreground">{"{"}</span>{" "}
                <span className="text-[#e8a87c]">note:</span>{" "}
                <span className="text-primary">"Always building, always refining"</span>
                <span className="text-foreground">{"}"}</span>
              </div>
              <div>
                <span className="text-foreground">]</span>
              </div>
              <div className="mt-6 space-y-1 text-[#8b949e]">
                <div>// Scroll down to see the full story ↓</div>
                <div>
                  // The rest of the portfolio expands on projects, certifications, and contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
