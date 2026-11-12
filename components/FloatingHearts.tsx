"use client";

import React, { useEffect, useState } from "react";

interface HeartItem {
  id: number;
  emoji: string;
  left: number;
  scale: number;
  duration: number;
  delay: number;
  sway: number;
}

const HEART_EMOJIS = ["❤️", "💖", "💗", "💕", "♥️", "💓", "💞"];
const HEART_COUNT = 18;

interface FloatingHeartsProps {
  isActive: boolean;
}

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({ isActive }) => {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    if (!isActive) {
      setHearts([]);
      return;
    }

    const items: HeartItem[] = Array.from({ length: HEART_COUNT }).map((_, index) => ({
      id: index,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      left: Math.floor(Math.random() * 88) + 6,
      scale: Number((Math.random() * 0.55 + 0.75).toFixed(2)),
      duration: Number((Math.random() * 2.2 + 3.4).toFixed(2)),
      delay: Number((Math.random() * 1.8).toFixed(2)),
      sway: Math.floor(Math.random() * 44 - 22),
    }));

    setHearts(items);

    // Размонтируем сердечки после завершения самого долгого полёта, чтобы не держать лишние слои в DOM
    const maxLifetimeMs =
      Math.max(...items.map((item) => (item.duration + item.delay) * 1000)) + 300;
    const cleanupTimer = setTimeout(() => {
      setHearts([]);
    }, maxLifetimeMs);

    return () => clearTimeout(cleanupTimer);
  }, [isActive]);

  if (!isActive || hearts.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
      style={{ contain: "layout style paint" }}
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={
            {
              left: `${heart.left}%`,
              top: 0,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
              "--heart-scale": heart.scale,
              "--heart-sway": `${heart.sway}px`,
            } as React.CSSProperties
          }
          className="absolute text-2xl sm:text-4xl select-none animate-heart-float"
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};
