"use client";

import React from "react";
import { motion } from "framer-motion";

interface CorgiIllustrationProps {
  variant?: "happy" | "party" | "sleeping" | "ticket-mascot";
  className?: string;
  customImageUrl?: string;
}

export const CorgiIllustration: React.FC<CorgiIllustrationProps> = ({
  variant = "party",
  className = "",
  customImageUrl,
}) => {
  if (customImageUrl) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <img
          src={customImageUrl}
          alt="Corgi mascot"
          className="w-full h-full object-contain filter drop-shadow-md"
        />
      </div>
    );
  }

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 45 130 Q 30 110 40 95 Q 55 105 50 125 Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="3"
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "50px 125px" }}
        />

        <ellipse cx="100" cy="135" rx="55" ry="40" fill="#F59E0B" />
        <ellipse cx="100" cy="142" rx="32" ry="25" fill="#FFFFFF" />

        <rect x="65" y="160" width="18" height="25" rx="9" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="3" />
        <rect x="117" y="160" width="18" height="25" rx="9" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="3" />

        <circle cx="100" cy="90" r="42" fill="#F59E0B" />

        <path
          d="M 100 65 Q 92 80 88 105 L 112 105 Q 108 80 100 65 Z"
          fill="#FFFFFF"
        />

        <motion.path
          d="M 62 82 Q 40 45 68 45 Q 80 62 76 82 Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="2"
          animate={{ rotate: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <path d="M 65 78 Q 50 52 67 52 Z" fill="#FDE68A" />

        <motion.path
          d="M 138 82 Q 160 45 132 45 Q 120 62 124 82 Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="2"
          animate={{ rotate: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
        />
        <path d="M 135 78 Q 150 52 133 52 Z" fill="#FDE68A" />

        {variant === "happy" || variant === "party" ? (
          <>
            <circle cx="82" cy="85" r="5" fill="#1E293B" />
            <circle cx="80" cy="83" r="1.8" fill="#FFFFFF" />
            <circle cx="118" cy="85" r="5" fill="#1E293B" />
            <circle cx="116" cy="83" r="1.8" fill="#FFFFFF" />
          </>
        ) : (
          <>
            <path d="M 77 86 Q 82 81 87 86" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
            <path d="M 113 86 Q 118 81 123 86" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          </>
        )}

        <ellipse cx="100" cy="94" rx="6" ry="4" fill="#1E293B" />

        <path d="M 94 98 Q 100 104 106 98" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <motion.path
          d="M 97 101 Q 100 112 103 101 Z"
          fill="#FF6B6B"
          animate={{ scaleY: [1, 1.25, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />

        <circle cx="73" cy="94" r="6" fill="#FF6B6B" opacity="0.35" />
        <circle cx="127" cy="94" r="6" fill="#FF6B6B" opacity="0.35" />

        {variant === "party" && (
          <g>
            <path d="M 85 54 L 100 18 L 115 54 Z" fill="#FF6B6B" />
            <path d="M 88 46 L 100 18 L 105 46 Z" fill="#4EBD98" opacity="0.8" />
            <circle cx="100" cy="18" r="6" fill="#FCD34D" />
            <circle cx="95" cy="40" r="2" fill="#FFFFFF" />
            <circle cx="104" cy="34" r="2.5" fill="#FFFFFF" />
            <circle cx="98" cy="48" r="2" fill="#FFFFFF" />
          </g>
        )}
      </svg>
    </motion.div>
  );
};
