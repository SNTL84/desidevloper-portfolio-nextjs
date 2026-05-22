'use client';
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.4 + 0.2,
        opacity: Math.random() * 0.7 + 0.1,
        speed: Math.random() * 0.15 + 0.02,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      stars.forEach((star) => {
        const twinkle =
          star.opacity +
          Math.sin(frame * star.twinkleSpeed + star.twinkleOffset) * 0.3;
        const alpha = Math.max(0.05, Math.min(1, twinkle));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${alpha})`;
        ctx.fill();

        // Slow drift upward
        star.y -= star.speed;
        if (star.y < -2) {
          star.y = canvas.height + 2;
          star.x = Math.random() * canvas.width;
        }
      });

      // Subtle golden shooting star every ~300 frames
      if (frame % 320 === 0) {
        const sx = Math.random() * canvas.width;
        const sy = Math.random() * canvas.height * 0.5;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 80, sy + 20);
        const grad = ctx.createLinearGradient(sx, sy, sx + 80, sy + 20);
        grad.addColorStop(0, 'rgba(201,168,76,0.8)');
        grad.addColorStop(1, 'rgba(201,168,76,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
