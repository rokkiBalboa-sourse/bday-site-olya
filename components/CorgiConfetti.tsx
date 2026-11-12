"use client";

import confetti from "canvas-confetti";

export const triggerCorgiConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Запуск праздничного салюта конфети с гармоничной палитрой
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ["#f59e0b", "#ff6b6b", "#4ebd98", "#fcd34d"],
  });

  fire(0.2, {
    spread: 60,
    colors: ["#fb7185", "#34d399", "#fbbf24"],
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ["#f59e0b", "#ffffff", "#ff6b6b"],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ["#4ebd98", "#fcd34d"],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ["#ff6b6b", "#f59e0b"],
  });
};
