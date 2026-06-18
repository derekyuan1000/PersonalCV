import MagneticDock from "@/components/ui/magnetic-dock";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Derek Yuan</p>
        </div>
        <div className="flex justify-start md:justify-end">
          <MagneticDock className="mx-0" />
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-6 text-xs text-[#8b949e] md:px-10">
        © {new Date().getFullYear()} Derek Yuan. All rights reserved.
      </p>
    </footer>
  );
}