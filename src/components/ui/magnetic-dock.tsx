import { createContext, useContext, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const GithubMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M12 .5C5.65.5.5 5.77.5 12.26c0 5.17 3.29 9.56 7.86 11.11.58.11.79-.26.79-.58 0-.29-.01-1.06-.02-2.08-3.2.71-3.87-1.59-3.87-1.59-.53-1.39-1.3-1.76-1.3-1.76-1.06-.75.08-.74.08-.74 1.17.09 1.79 1.24 1.79 1.24 1.04 1.82 2.73 1.29 3.39.99.11-.77.41-1.29.74-1.58-2.56-.3-5.25-1.32-5.25-5.88 0-1.3.45-2.36 1.19-3.19-.12-.3-.52-1.5.11-3.13 0 0 .98-.32 3.22 1.22.93-.26 1.93-.39 2.92-.4.99.01 1.99.14 2.92.4 2.24-1.54 3.22-1.22 3.22-1.22.63 1.63.23 2.83.11 3.13.74.83 1.19 1.89 1.19 3.19 0 4.57-2.69 5.57-5.26 5.87.42.38.8 1.14.8 2.3 0 1.66-.02 3-.02 3.4 0 .32.21.69.8.57 4.56-1.55 7.85-5.94 7.85-11.11C23.5 5.77 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 8.98H4.8V24H.2V8.98ZM8.47 8.98h4.4v2.05h.06c.61-1.16 2.12-2.38 4.37-2.38 4.67 0 5.53 3.07 5.53 7.06V24h-4.6v-6.76c0-1.61-.03-3.68-2.24-3.68-2.24 0-2.58 1.75-2.58 3.56V24h-4.6V8.98Z" />
  </svg>
);

const MailMark = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
    <path d="m22 7-10 7L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CoffeeMark = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
    <path d="M3 8h13a4 4 0 0 1 0 8H9a6 6 0 0 1-6-6V8Z" stroke="currentColor" strokeWidth="2" />
    <path d="M20 9h1a2 2 0 0 1 0 4h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 4v2M10 3v3M13 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 20h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export interface DockItem {
  label: string;
  href: string;
  icon: ReactNode;
  description?: string;
  external?: boolean;
}

export const defaultDockItems: DockItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/derekyuan1000",
    icon: <GithubMark />,
    description: "github.com/derekyuan1000",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/derek-yuan-6900a6406/",
    icon: <LinkedinMark />,
    description: "linkedin.com/in/derek-yuan-6900a6406/",
  },
  {
    label: "Email",
    href: "mailto:contact@derekyuan.co.uk",
    icon: <MailMark />,
    description: "contact@derekyuan.co.uk · derekyuan@gmail.com",
    external: false,
  },
  {
    label: "Ko-fi",
    href: "https://ko-fi.com/derekyuan",
    icon: <CoffeeMark />,
    description: "ko-fi.com/derekyuan",
  },
];

type MousePosition = {
  x: number;
  y: number;
};

const MouseContext = createContext<MousePosition>({ x: 0, y: 0 });

interface DockIconProps {
  item: DockItem;
}

function DockIcon({ item }: DockIconProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouse = useContext(MouseContext);
  const distance = useMotionValue(240);

  useEffect(() => {
    const icon = ref.current;
    const parent = icon?.parentElement;

    if (!icon || !parent || (mouse.x === 0 && mouse.y === 0)) {
      distance.set(240);
      return;
    }

    const iconRect = icon.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2;
    const iconCenterY = iconRect.top + iconRect.height / 2;
    const mouseX = parentRect.left + mouse.x;
    const mouseY = parentRect.top + mouse.y;

    distance.set(Math.hypot(mouseX - iconCenterX, mouseY - iconCenterY));
  }, [distance, mouse.x, mouse.y]);

  const scale = useTransform(distance, [0, 120, 240], [1.18, 1.06, 1]);
  const springScale = useSpring(scale, { mass: 0.14, stiffness: 180, damping: 16 });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      aria-label={item.label}
      title={item.description ?? item.label}
      target={item.external === false ? undefined : "_blank"}
      rel={item.external === false ? undefined : "noreferrer noopener"}
      style={{ scale: springScale }}
      className={cn(
        "group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-colors hover:border-primary hover:text-primary",
      )}
    >
      <span className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-110">
        {item.icon}
      </span>
      <span className="sr-only">{item.label}</span>
    </motion.a>
  );
}

interface MagneticDockProps {
  items?: DockItem[];
  className?: string;
}

export default function MagneticDock({ items = defaultDockItems, className }: MagneticDockProps) {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

  const onMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setPos({ x: clientX - left, y: clientY - top });
  };

  const onMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <MouseContext.Provider value={pos}>
      <div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cn(
          "flex w-fit flex-none items-end gap-3 rounded-2xl border border-border/70 bg-card/80 px-4 pb-4 pt-4 shadow-lg shadow-black/10 backdrop-blur-sm",
          className,
        )}
      >
        {items.map((item) => (
          <DockIcon key={item.label} item={item} />
        ))}
      </div>
    </MouseContext.Provider>
  );
}
