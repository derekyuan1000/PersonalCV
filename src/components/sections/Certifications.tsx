import { useState, useEffect } from "react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { certTimelineData, featuredCertTimelineData } from "@/data/certifications-timeline";
import { MousePointer, ChevronRight, X } from "lucide-react";

export default function Certifications() {
  const [mounted, setMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => setMounted(true), []);

  const categories = Array.from(new Set(certTimelineData.map((c) => c.category)));

  return (
    <section id="certifications" className="relative bg-black">
      {/* Title overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 text-center pointer-events-none">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
          02 / Credentials
        </p>
        <h2 className="font-deltha text-4xl tracking-tight text-white md:text-5xl">
          Certifications
        </h2>
        <p className="mt-3 text-sm text-white/50 flex items-center gap-2 justify-center">
          <MousePointer className="text-primary animate-bounce" size={16} />
          Hover any node to view the certificate
        </p>
      </div>

      {mounted && <RadialOrbitalTimeline timelineData={featuredCertTimelineData} />}

      {/* See all button */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center pointer-events-auto">
        <button
          onClick={() => setShowAll(true)}
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_rgba(0,217,146,0.15)]"
        >
          See all certifications
          <ChevronRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* All certifications dialog */}
      {showAll && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowAll(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-1">
                  All credentials
                </p>
                <h3 className="font-deltha text-2xl text-white md:text-3xl">All Certifications</h3>
              </div>
              <button
                onClick={() => setShowAll(false)}
                className="rounded-full border border-white/10 p-2 text-white/50 transition hover:border-white/30 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {categories.map((category) => {
              const certs = certTimelineData.filter((c) => c.category === category);
              return (
                <div key={category} className="mb-8 last:mb-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    {category}
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {certs.map((cert) => (
                      <a
                        key={cert.id}
                        href={cert.image}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 transition-all duration-200 hover:border-primary/40 hover:bg-white/[0.06]"
                      >
                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <cert.icon size={16} />
                        </div>
                        <p className="text-xs font-semibold leading-snug text-white group-hover:text-primary transition-colors">
                          {cert.title}
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/30">{cert.date}</p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
