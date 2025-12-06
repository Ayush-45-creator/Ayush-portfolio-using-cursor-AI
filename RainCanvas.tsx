'use client';
import { useEffect, useRef } from 'react';

export default function RainCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const drops: { x: number; y: number; vy: number; len: number; alpha: number }[] = [];

    for (let i = 0; i < Math.floor((width * height) / 80000); i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: 0.6 + Math.random() * 1.4,
        len: 10 + Math.random() * 20,
        alpha: 0.06 + Math.random() * 0.08
      });
    }

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', onResize);

    let raf = 0;
    function loop() {
      ctx.clearRect(0, 0, width, height);
      drops.forEach((d) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${d.alpha})`;
        ctx.lineWidth = 1;
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + 1 * d.vy, d.y + d.len);
        ctx.stroke();
        d.y += d.vy;
        if (d.y > height) {
          d.y = -20;
          d.x = Math.random() * width;
        }
      });
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="w-full h-full block" />;
}
