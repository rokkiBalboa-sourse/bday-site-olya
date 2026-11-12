"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Gift, Sparkles, MessageCircleHeart } from "lucide-react";

interface QRCodeCardProps {
  qrImageUrl?: string;
  address?: string;
  note?: string;
}

export const QRCodeCard: React.FC<QRCodeCardProps> = ({
  qrImageUrl = "/WB_podarok.png",
  address = "Европейский проспект, 21к2",
  note = "Если не успеешь сегодня забрать, напиши мне)",
}) => {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      className="w-full max-w-md mx-auto my-2"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-pink-50/70 to-rose-50/50 border border-pink-200/80 shadow-2xl backdrop-blur-xl p-6 sm:p-8 text-center">
        {/* Декоративные мягкие свечения */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-pink-300/25 to-rose-400/25 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-gradient-to-br from-rose-300/25 to-pink-200/25 rounded-full blur-2xl pointer-events-none" />

        {/* Верхняя плашка */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-900 border border-pink-200">
            <Gift className="w-3.5 h-3.5 text-pink-600" /> Сюрприз
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500">
            <Sparkles className="w-3.5 h-3.5" /> WB
          </span>
        </div>

        {/* Заголовок */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-2">
          Твой QR-код на получение
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-5">
          Покажи этот QR-код сотруднику в пункте выдачи
        </p>

        {/* Контейнер QR кода */}
        <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 p-3 bg-white rounded-3xl shadow-md border border-pink-100 flex items-center justify-center overflow-hidden mb-5 group">
          <img
            src={qrImageUrl}
            alt="QR код для получения подарка"
            className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Блок адреса */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-pink-200/70 text-left mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-0.5">
                Подарок можно забрать тут:
              </p>
              <p className="text-sm sm:text-base font-extrabold text-slate-800">
                {address}
              </p>
            </div>
          </div>
        </div>

        {/* Примечание P.s. */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-rose-600 bg-rose-50/80 py-2.5 px-4 rounded-xl border border-rose-200/60">
          <MessageCircleHeart className="w-4 h-4 shrink-0" />
          <span>P.s. {note}</span>
        </div>
      </div>
    </motion.div>
  );
};

