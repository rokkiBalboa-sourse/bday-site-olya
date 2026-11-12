"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeartItem {
  id: number;
  emoji: string;
  left: number; // Позиция по горизонтали (в %)
  scale: number;
  duration: number;
  delay: number;
  sway: number;
}

const HEART_EMOJIS = ["❤️", "💖", "💗", "💕", "♥️", "💓", "💞"];

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

    // Генерируем 25 уникальных сердечек с случайными траекториями
    const items: HeartItem[] = Array.from({ length: 28 }).map((_, index) => ({
      id: index,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      left: Math.floor(Math.random() * 90) + 5, // 5% - 95%
      scale: Math.random() * 0.7 + 0.7, // 0.7 - 1.4
      duration: Math.random() * 3 + 3.5, // 3.5s - 6.5s
      delay: Math.random() * 2.5, // задержка 0s - 2.5s
      sway: Math.random() * 60 - 30, // отклонение влево-вправо
    }));

    setHearts(items);
  }, [isActive]);

  if (!isActive || hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "105vh",
            x: 0,
            opacity: 0,
            scale: heart.scale * 0.5,
          }}
          animate={{
            y: "-20vh",
            x: [0, heart.sway, -heart.sway, 0],
            opacity: [0, 1, 1, 0],
            scale: [heart.scale * 0.5, heart.scale, heart.scale * 0.9],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut",
          }}
          style={{ left: `${heart.left}%` }}
          className="absolute text-2xl sm:text-4xl filter drop-shadow-md select-none"
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};
