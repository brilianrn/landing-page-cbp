"use client";

import classNames from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TestimonialCardProps {
  logoSrc: string;
  logoAlt: string;
  message: string;
  name: string;
  role: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    logoSrc: "/logo/zambon.png",
    logoAlt: "Zambon",
    message:
      "Bekerjasama dengan GoApotik membuka wawasan baru tentang e-commerce, GoApotik memiliki jumlah merchant yang luas dan sudah dikenal baik oleh costumer.",
    name: "David Barus",
    role: "Associate Brand Manager | Zambon",
  },
  {
    logoSrc: "/logo/dexagroup.png",
    logoAlt: "Dexa",
    message:
      "Working with GoApotik and their commitment to excellence have made it possible to build innovative solutions and move forward together.",
    name: "Dhandy Dwi Yustica",
    role: "Marketing Communication | Dexa",
  },
  {
    logoSrc: "/logo/kalbe.png",
    logoAlt: "Kalbe",
    message:
      "Kami sangat terbantu dengan ekosistem GoApotik yang luas dan terpercaya di dunia farmasi digital.",
    name: "Laras Sari",
    role: "Digital Brand Executive | Kalbe",
  },
  {
    logoSrc: "/logo/sanbe.png",
    logoAlt: "Sanbe",
    message:
      "GoApotik memberikan solusi e-commerce yang efektif dan efisien untuk distribusi produk kami.",
    name: "Bima Prakoso",
    role: "Product Manager | Sanbe",
  },
  {
    logoSrc: "/logo/kimiafarma.png",
    logoAlt: "Kimia Farma",
    message:
      "Kami percaya kemitraan dengan GoApotik akan terus tumbuh dan memberikan dampak positif.",
    name: "Rina Utami",
    role: "Brand Supervisor | Kimia Farma",
  },
  {
    logoSrc: "/logo/tempo.png",
    logoAlt: "Tempo",
    message:
      "Platform GoApotik sangat user-friendly dan membantu dalam pemasaran digital.",
    name: "Yudi Saputra",
    role: "Marketing | Tempo Scan Pacific",
  },
  {
    logoSrc: "/logo/guardian.png",
    logoAlt: "Guardian",
    message:
      "Dukungan GoApotik sangat luar biasa untuk pengembangan bisnis kami secara online.",
    name: "Tiara Ayu",
    role: "Sales Executive | Guardian",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleIndexes = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [prev, activeIndex, next];
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <div className="relative flex justify-center items-center min-h-[440px] bg-white px-4">
      <button
        onClick={goPrev}
        className="absolute left-0 z-10 px-2 py-1 text-2xl"
        aria-label="Previous"
      >
        ◀
      </button>

      <div className="flex gap-6 overflow-hidden">
        {testimonials.map((t, i) => {
          const isVisible = visibleIndexes.includes(i);
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={i}
              className={classNames(
                "rounded-xl p-6 border transition-all duration-500 w-[360px] min-h-[340px]",
                isActive
                  ? "bg-white shadow-md scale-100 opacity-100 z-10"
                  : isVisible
                  ? "bg-white/60 blur-[1px] scale-95 opacity-40 z-0"
                  : "hidden"
              )}
              layout
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={t.logoSrc}
                    alt={t.logoAlt}
                    width={60}
                    height={60}
                    className="rounded-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-700 mb-4">{t.message}</p>
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={goNext}
        className="absolute right-0 z-10 px-2 py-1 text-2xl"
        aria-label="Next"
      >
        ▶
      </button>
    </div>
  );
}
