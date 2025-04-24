"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black/60 border border-[#FFD700]/20 rounded-xl transition-colors duration-300 overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-white hover:text-[#FFD700] font-medium focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className={`${open ? "text-[#FFD700]" : ""}`}>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#FFD700] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={ref}
        className={`transition-all origin-top duration-300 ease-in-out ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } px-6 pb-4 text-gray-300`}
        style={{
          transformOrigin: "top",
          display: open ? "block" : "none",
        }}
      >
        {answer}
      </div>
    </div>
  );
}
