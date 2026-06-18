import { useState, useEffect } from "react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { certTimelineData } from "@/data/certifications-timeline";
import { MousePointerClick } from "lucide-react";

export default function Certifications() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="certifications" className="relative bg-black">
      {/* Title overlay — pointer-events-none so clicks pass through to the orbital */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 text-center pointer-events-none">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
          02 / Credentials
        </p>
        <h2 className="font-deltha text-4xl tracking-tight text-white md:text-5xl">
          Certifications
        </h2>
        <p className="mt-3 text-sm text-white/50 flex items-center gap-2 justify-center">
          <span className="inline-flex items-center gap-2">
            <MousePointerClick className="text-primary animate-bounce" size={16} />
            Click any node to view the certificate
          </span>
        </p>
      </div>

      {mounted && <RadialOrbitalTimeline timelineData={certTimelineData} />}
    </section>
  );
}
