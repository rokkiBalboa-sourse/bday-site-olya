"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Music, Ticket } from "lucide-react";

interface TicketCardProps {
  recipientName?: string;
  eventName?: string;
  date?: string;
  location?: string;
  pdfUrl?: string;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  recipientName = "Елизавета",
  eventName = "CREAM SODA",
  date = "26.09.2026 20:00",
  location = "Подземка • Танцпол",
  pdfUrl = "/api/ticket",
}) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 15 }}
      className="w-full max-w-2xl mx-auto my-6"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-amber-50/60 to-rose-50/40 border border-amber-200/60 shadow-ticket backdrop-blur-xl">
        
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-rose-400/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-emerald-300/20 to-amber-300/20 rounded-full blur-2xl pointer-events-none" />

        <div className="absolute top-1/2 -left-4 w-8 h-8 rounded-full bg-[#fff7ed] border border-amber-200/60 z-20 transform -translate-y-1/2 hidden md:block" />
        <div className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-[#fff7ed] border border-amber-200/60 z-20 transform -translate-y-1/2 hidden md:block" />

        <div className="flex flex-col md:flex-row">
          
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative z-10">
            
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs uppercase tracking-widest font-semibold text-rose-500 flex items-center gap-1.5">
                <Music className="w-4 h-4 text-rose-500" /> Подарочный билет на концерт
              </p>
              <Ticket className="w-6 h-6 text-amber-500 opacity-60" />
            </div>

            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight">
                {eventName}
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1.5">
                Билет на имя: <span className="font-semibold text-slate-800">{recipientName}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-amber-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-bold text-slate-400">Дата & Время</p>
                  <p className="text-xs font-semibold text-slate-700">{date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-bold text-slate-400">Локация</p>
                  <p className="text-xs font-semibold text-slate-700">{location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-amber-200/40">
              <div className="flex flex-col items-start gap-1">
                <div className="h-8 flex items-center gap-1 opacity-75 select-none">
                  {[3, 1, 4, 2, 5, 2, 1, 3, 2, 4, 1, 3, 5, 2, 1, 4, 2].map((width, i) => (
                    <div
                      key={i}
                      className="bg-slate-800 h-full rounded-sm"
                      style={{ width: `${width * 2}px` }}
                    />
                  ))}
                </div>
                <span className="text-[10px] tracking-widest font-mono text-slate-400">
                  TICKET-CREAM-SODA
                </span>
              </div>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-coral-500 to-rose-500 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center group"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Скачать билет</span>
              </a>
            </div>

          </div>

          <div className="w-full md:w-48 bg-gradient-to-b from-amber-100/70 via-rose-100/50 to-amber-200/60 p-6 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-dashed border-amber-300/80 relative">
            
            <div className="text-5xl mb-3 animate-bounce">
              🎁
            </div>

            <span className="text-xs font-mono font-bold text-amber-900 tracking-wider">
              Билетик на концертик
            </span>

            <div className="mt-4 pt-3 border-t border-amber-300/40 w-full">
              <span className="text-[10px] text-amber-900/70 uppercase tracking-widest font-semibold block">
                С Днём Рождения! 🎉
              </span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
