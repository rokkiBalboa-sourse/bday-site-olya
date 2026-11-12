"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";

interface ConcertTicketProps {
  pdfUrl: string;
}

const NOTCH_MASK =
  "radial-gradient(circle at 0 50%, transparent 13px, #000 13.5px) left / 51% 100% no-repeat, radial-gradient(circle at 100% 50%, transparent 13px, #000 13.5px) right / 51% 100% no-repeat";

const SCALLOP_MASK =
  "radial-gradient(circle at 50% 100%, transparent 14px, #000 14.5px) bottom / 48px 100% repeat-x";

const BARCODE = [
  2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 1, 2, 1, 1, 3, 1, 2,
  1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 1, 3, 1, 1, 2, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1,
];

const Notch = ({ dashed = "border-slate-300" }: { dashed?: string }) => (
  <div
    className="relative h-7 bg-white"
    style={{ WebkitMask: NOTCH_MASK, mask: NOTCH_MASK }}
  >
    <div className={`absolute left-6 right-6 top-1/2 border-t-2 border-dashed ${dashed}`} />
  </div>
);

export const ConcertTicket: React.FC<ConcertTicketProps> = ({ pdfUrl }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.96 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 90, damping: 15 }}
      className="w-full max-w-[380px] mx-auto"
      style={{
        filter: "drop-shadow(0 12px 20px rgba(190, 24, 93, 0.12))",
        transform: "translateZ(0)",
      }}
    >
      {/* Верх: группа */}
      <div className="bg-white rounded-t-[28px] px-5 pt-5 pb-4 text-center">
        <div className="overflow-hidden rounded-2xl aspect-[3/2] bg-slate-100">
          <img
            src="/affinage.jpg"
            alt="Группа Аффинаж"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-4 text-2xl font-black text-slate-900 tracking-tight">Аффинаж</h3>
        <p className="mt-1 text-sm text-slate-500">Твой билет на концерт 🎉</p>
      </div>

      <Notch />

      {/* Детали */}
      <div className="bg-white px-5 sm:px-6 pt-2 pb-5">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500">Дата и время</p>
            <p className="mt-0.5 font-semibold text-slate-900">17 ноября • 20:00</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wider text-slate-500">Кол-во</p>
            <p className="mt-0.5 font-semibold text-slate-900">1</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-500">Место</p>
            <p className="mt-0.5 font-semibold text-slate-900">Подземка</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wider text-slate-500">Сектор</p>
            <p className="mt-0.5 font-semibold text-slate-900">Танцпол</p>
          </div>
        </div>

        <a
          href="https://yandex.ru/maps/?text=%D0%9F%D0%BE%D0%B4%D0%B7%D0%B5%D0%BC%D0%BA%D0%B0%2C%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%2C%20161%2C%20%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 active:bg-slate-100 transition-colors"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <MapPin className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block font-semibold text-slate-900">Подземка</span>
            <span className="block text-sm text-slate-500">Красный просп., 161 · м. Заельцовская</span>
          </span>
        </a>

        <a
          href={pdfUrl}
          download="affinage-ticket.pdf"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 py-3.5 text-base font-bold text-white active:scale-[0.98] transition-transform"
        >
          <Download className="h-5 w-5" />
          Скачать билет (PDF)
        </a>
      </div>

      <Notch dashed="border-slate-200" />

      {/* Штрихкод */}
      <div
        className="bg-white px-6 pt-2 pb-9"
        style={{ WebkitMask: SCALLOP_MASK, mask: SCALLOP_MASK }}
      >
        <div className="mx-auto flex h-16 w-full max-w-[260px] items-stretch">
          {BARCODE.map((w, i) => (
            <span
              key={i}
              className={i % 2 === 0 ? "bg-slate-900" : "bg-transparent"}
              style={{ flex: w }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-center font-mono text-xs tracking-[0.3em] text-slate-700">
          1711 2026 2000
        </p>
      </div>
    </motion.div>
  );
};
