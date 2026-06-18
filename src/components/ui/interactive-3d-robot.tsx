import { Suspense, lazy, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

function Fallback({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full w-full items-center justify-center bg-transparent", className)}>
      <svg
        className="h-6 w-6 animate-spin text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
        />
      </svg>
    </div>
  );
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <Fallback className={className} />;

  return (
    <Suspense fallback={<Fallback className={className} />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

export default InteractiveRobotSpline;
