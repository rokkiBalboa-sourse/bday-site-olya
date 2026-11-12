"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, RefreshCw, Lock, KeyRound, ArrowRight } from "lucide-react";
import { ConcertTicket } from "@/components/ConcertTicket";
import { AudioPlayer } from "@/components/AudioPlayer";
import { FloatingHearts } from "@/components/FloatingHearts";
import { triggerCorgiConfetti } from "@/components/CorgiConfetti";

export default function BirthdayPage() {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [authorizedCode, setAuthorizedCode] = useState<string>("");
  const [inputCode, setInputCode] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setHasError(false);

    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: inputCode.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setAuthorizedCode(inputCode.trim());
        triggerCorgiConfetti();
        setIsAuthorized(true);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsChecking(false);
    }
  };

  const handleOpenGift = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsRevealed(true);
      setIsAnimating(false);
    }, 400);
  };

  const handleReset = () => {
    setIsRevealed(false);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 pt-8 pb-28 sm:p-6 sm:pb-28 md:p-10 md:pb-28 overflow-hidden selection:bg-pink-200">

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div
          style={{ "--float-duration": "6s", "--float-delay": "0s" } as React.CSSProperties}
          className="absolute top-10 left-[6%] text-3xl sm:text-5xl opacity-40 sm:opacity-60 animate-bg-float"
        >
          🎈
        </div>
        <div
          style={{ "--float-duration": "7s", "--float-delay": "1s" } as React.CSSProperties}
          className="absolute top-12 right-[8%] text-3xl sm:text-5xl opacity-40 sm:opacity-60 animate-bg-float"
        >
          ✨
        </div>
        <div
          style={{ "--float-duration": "5.5s", "--float-delay": "0.5s" } as React.CSSProperties}
          className="absolute top-1/3 left-[4%] text-2xl sm:text-4xl opacity-35 sm:opacity-50 animate-bg-float"
        >
          🎉
        </div>
        <div
          style={{ "--float-duration": "8s", "--float-delay": "1.5s" } as React.CSSProperties}
          className="absolute top-1/3 right-[5%] text-2xl sm:text-4xl opacity-35 sm:opacity-50 animate-bg-float"
        >
          🥳
        </div>
        <div
          style={{ "--float-duration": "5s", "--float-delay": "2s" } as React.CSSProperties}
          className="absolute bottom-16 left-[8%] text-2xl sm:text-4xl opacity-35 sm:opacity-50 animate-bg-float"
        >
          🎁
        </div>
        <div
          style={{ "--float-duration": "7.5s", "--float-delay": "0.8s" } as React.CSSProperties}
          className="absolute bottom-24 right-[10%] text-3xl sm:text-5xl opacity-40 sm:opacity-60 animate-bg-float"
        >
          🎂
        </div>
        <div
          style={{ "--float-duration": "6.5s", "--float-delay": "1.2s" } as React.CSSProperties}
          className="absolute top-24 left-[22%] text-3xl opacity-40 hidden md:block animate-bg-float"
        >
          ⭐
        </div>
        <div
          style={{ "--float-duration": "6.8s", "--float-delay": "2.2s" } as React.CSSProperties}
          className="absolute top-20 right-[24%] text-3xl opacity-40 hidden md:block animate-bg-float"
        >
          🎵
        </div>
        <div
          style={{ "--float-duration": "7.2s", "--float-delay": "1.8s" } as React.CSSProperties}
          className="absolute bottom-10 left-[28%] text-4xl opacity-50 hidden sm:block animate-bg-float"
        >
          💖
        </div>
        <div
          style={{ "--float-duration": "8.2s", "--float-delay": "0.3s" } as React.CSSProperties}
          className="absolute bottom-12 right-[26%] text-4xl opacity-50 hidden sm:block animate-bg-float"
        >
          🐕
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto z-10">

        <AnimatePresence mode="wait">

          {!isAuthorized ? (
            <motion.div
              key="lock-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={hasError ? { x: [-12, 12, -8, 8, -4, 4, 0], opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md mx-auto px-2"
            >
              <div className="kumo-card p-8 sm:p-10 rounded-3xl shadow-kumo text-center relative overflow-hidden">

                <div className="w-16 h-16 rounded-3xl bg-pink-100/90 border border-pink-300/60 flex items-center justify-center mx-auto mb-4 text-pink-600 shadow-sm">
                  <Lock className="w-8 h-8" />
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
                  Доступ ограничен 🔒
                </h1>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Этот секретный сюрприз только для Оли!
                </p>

                <form onSubmit={handleVerifyCode} className="space-y-4 text-left">
                  <div>
                    <label htmlFor="pin-input" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 ml-1">
                      Секретный код
                    </label>
                    <div className="relative">
                      <input
                        id="pin-input"
                        type="password"
                        required
                        autoFocus
                        placeholder="••••"
                        value={inputCode}
                        onChange={(e) => {
                          setInputCode(e.target.value);
                          if (hasError) setHasError(false);
                        }}
                        className={`w-full px-4 py-3.5 rounded-2xl kumo-input text-slate-800 text-center font-mono text-lg tracking-widest ${hasError ? "border-rose-400 focus:border-rose-500 bg-rose-50/50" : ""
                          }`}
                      />
                      <KeyRound className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {hasError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-rose-500 font-medium text-center"
                    >
                      Неверный код доступа! Попробуй ещё раз ❌
                    </motion.p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isChecking}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white font-extrabold text-base shadow-lg shadow-pink-200/50 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isChecking ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 animate-spin" /> Проверка...
                      </span>
                    ) : (
                      <>
                        <span>Открыть доступ</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>

              </div>
            </motion.div>
          ) : (

            <AnimatePresence mode="wait">
              {!isRevealed ? (
                <motion.div
                  key="welcome-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-2xl sm:max-w-3xl mx-auto px-2"
                >
                  <div className="kumo-card p-5 sm:p-12 rounded-3xl shadow-kumo text-center relative overflow-hidden">

                    <div className="absolute -top-16 -left-16 w-36 h-36 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-rose-400/20 rounded-full blur-2xl pointer-events-none" />

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                      <span>Оля, с днем рождения!</span>
                      <span className="inline-block animate-bounce">🎂</span>
                    </h1>

                    <div className="space-y-4 text-slate-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-7 w-full max-w-2xl mx-auto">
                      <p className="font-semibold text-slate-800">
                        Сегодня прекрасный день, потому что в этот день появилась ты.
                      </p>
                      <p>
                        Оставайся всегда такой, какая ты есть, а именно: доброй, жизнерадостной, весёлой, открытой, смелой и ещё много комплиментов, которые не поместятся на эту страницу)
                      </p>
                      <p>
                        Пусть эта жизнь будет наполнять тебя только положительными и красочными воспоминаниями.
                      </p>
                    </div>

                    {/* Фотография в стиле кружка под текстом поздравления */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative mx-auto mb-8 w-52 h-52 sm:w-64 sm:h-64"
                    >
                      <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-pink-400 via-rose-300 to-amber-200 shadow-xl hover:scale-[1.03] transition-transform duration-300">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                          <img
                            src="/photo.jpg"
                            alt="Оля"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleOpenGift}
                      disabled={isAnimating}
                      className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white font-extrabold text-lg shadow-lg shadow-pink-200/50 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75"
                    >
                      {isAnimating ? (
                        <span className="flex items-center gap-2">
                          <RefreshCw className="w-5 h-5 animate-spin" /> Открываем...
                        </span>
                      ) : (
                        <>
                          <Gift className="w-6 h-6" />
                          <span>Открыть подарок</span>
                        </>
                      )}
                    </motion.button>

                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="gift-reveal-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col items-center"
                >

                  <div className="text-center mb-6">
                    <motion.h2
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="text-2xl sm:text-4xl font-extrabold text-slate-800 tracking-tight"
                    >
                      Твой подарок!
                    </motion.h2>
                  </div>

                  <div className="w-full flex items-center justify-center my-2">
                    <ConcertTicket pdfUrl={`/api/ticket?code=${authorizedCode}`} />
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6"
                  >
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 border border-pink-200 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4 text-pink-500" /> Вернуться к поздравлению
                    </button>
                  </motion.div>

                </motion.div>
              )}
            </AnimatePresence>
          )}

        </AnimatePresence>

        <footer className="text-center mt-8 sm:mt-12 text-xs text-slate-600 font-medium">
          Powered by obolensky.dev
        </footer>

      </div>

      <FloatingHearts isActive={isRevealed} />
      <AudioPlayer isActive={isRevealed} src="/music.mp3" />
    </main>
  );
}
