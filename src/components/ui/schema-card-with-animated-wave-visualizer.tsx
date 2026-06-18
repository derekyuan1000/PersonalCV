import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WaveVisualizerProps {
  className?: string;
}

export default function WaveVisualizer({ className }: WaveVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let raf = 0;
    const waveData = Array.from({ length: 10 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updateWaveData = () => {
      waveData.forEach((d) => {
        if (Math.random() < 0.01) d.targetValue = Math.random() * 0.7 + 0.1;
        d.value += (d.targetValue - d.value) * d.speed;
      });
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      waveData.forEach((d, i) => {
        const freq = d.value * 7;
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          const nx = (x / w) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 10);
          const y = (py + 1) * h / 2;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        // Voltagent electric green: #00d992 → (0, 217, 146)
        const r = 0 + intensity * 40;
        const g = 217;
        const b = 146 - intensity * 30;
        ctx.lineWidth = 1 + i * 0.25;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.55)`;
        ctx.shadowColor = `rgba(0,217,146,0.45)`;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    const animate = () => {
      time += 0.02;
      updateWaveData();
      draw();
      raf = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={cn("block h-full w-full", className)} />;
}