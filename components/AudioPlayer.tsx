"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Volume1, Music } from "lucide-react";

interface AudioPlayerProps {
  src?: string;
  isActive: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src = "/music.mp3",
  isActive,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(0.6);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Управление воспроизведением при появлении билета
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isActive) {
      audio.volume = isMuted ? 0 : volume;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Если браузер заблокировал автовоспроизведение
          setIsPlaying(false);
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [isActive]);

  // Зацикливание с 2-секундной паузой
  const handleAudioEnded = () => {
    setIsPlaying(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Пауза 2 секунды перед повторным воспроизведением
    timeoutRef.current = setTimeout(() => {
      const audio = audioRef.current;
      if (audio && isActive) {
        audio.currentTime = 0;
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }, 2000);
  };

  // Изменение громкости
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  // Переключение Mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="fixed bottom-6 left-0 right-0 mx-auto w-max max-w-[92vw] z-50 px-3.5 sm:px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-pink-200/80 shadow-xl flex items-center gap-2.5 sm:gap-3 select-none"
    >
      {/* Скрытый тег audio */}
      <audio
        ref={audioRef}
        src={src}
        onEnded={handleAudioEnded}
        preload="auto"
      />

      {/* Кнопка Mute/Unmute */}
      <button
        onClick={toggleMute}
        className="w-8 h-8 rounded-full bg-pink-100/80 text-pink-700 flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer shrink-0"
        title={isMuted ? "Включить звук" : "Выключить звук"}
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="w-4 h-4 text-rose-500" />
        ) : volume < 0.5 ? (
          <Volume1 className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </button>

      {/* Иконка и статус */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 min-w-0">
        <Music className={`w-3.5 h-3.5 text-pink-500 shrink-0 ${isPlaying ? "animate-spin" : ""}`} />
        <span className="truncate max-w-[140px] sm:max-w-none">Аффинаж - Прыгаю-Стою</span>
      </div>

      {/* Ползунок громкости */}
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-20 sm:w-24 h-1.5 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-pink-500"
        />
      </div>
    </motion.div>
  );
};
