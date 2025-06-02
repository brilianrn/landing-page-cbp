"use client";

import classNames from "clsx";
import { motion } from "framer-motion";
import {
  Boxes,
  Building,
  Diamond,
  DoorOpen,
  Droplet,
  FolderOpenDot,
  GlassWater,
  Grid,
  Hammer,
  Layers,
  LayoutPanelLeft,
  Wind,
} from "lucide-react";
import { useState } from "react";

const categories = [
  {
    label: "Atap",
    icon: Building,
    subcategories: [
      "Atap Aluminium",
      "Atap Asbes",
      "Atap Bebas Asbes",
      "Atap Bitumen",
      "Atap Polycarbonate",
      "Atap PVC",
      "Atap Transparan",
      "Atap Transparan | Translucent",
      "Atap UPVC",
      "Atap Zincalume | Galvalume",
    ],
  },
  {
    label: "Pintu",
    icon: DoorOpen,
    subcategories: [
      "Pintu",
      "Pintu Angszdoor",
      "Pintu Excellent",
      "Pintu PVC",
      "Pintu Tulusdoor",
    ],
  },
  {
    label: "Genteng",
    icon: Grid,
    subcategories: ["Genteng Beton", "Genteng Keramik", "Genteng Metal"],
  },
  {
    label: "Semen & Perekat",
    icon: Layers,
    subcategories: ["Semen", "Lemkra"],
  },
  {
    label: "Keramik & Lantai",
    icon: LayoutPanelLeft,
    subcategories: ["Keramik", "Decking | Bondek"],
  },
  {
    label: "Air & Plumbing",
    icon: Droplet,
    subcategories: ["Kran Air", "Pipa Air", "Tandon Air"],
  },
  {
    label: "Ventilasi",
    icon: Wind,
    subcategories: ["Turbine Ventilator", "Ventilator"],
  },
  {
    label: "Pelapis & Waterproofing",
    icon: GlassWater,
    subcategories: ["Pelapis Anti Bocor", "Waterproofing"],
  },
  {
    label: "Besi & Baja",
    icon: Hammer,
    subcategories: ["Besi Beton", "Baja", "Wiremesh", "Hollow Galvalume"],
  },
  {
    label: "Plafon & Partisi",
    icon: Diamond,
    subcategories: ["Plafon | Partisi"],
  },
  {
    label: "Lainnya",
    icon: FolderOpenDot,
    subcategories: [
      "Bata Ringan",
      "Bedding",
      "Insulation",
      "Jilumesh | Ornamesh",
      "Kawat Silet",
      "Pagar",
      "Polycarbonate",
      "Rangka Atap",
      "Plat Galvalume",
    ],
  },
];

export const ProductSectionCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Kategori");

  return (
    <div
      className="flex gap-3 overflow-x-auto w-full pb-3 no-scrollbar mb-6 px-6 md:px-10"
      style={{
        scrollSnapType: "x mandatory", // Menambahkan snap untuk scroll horizontal
      }}
    >
      {[{ label: "Semua Kategori", icon: Boxes }, ...categories].map(
        (kategori, index) => {
          const Icon = kategori.icon;
          const isActive = activeCategory === kategori.label;

          return (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(kategori.label)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={classNames(
                "shrink-0 flex items-center gap-2 px-4 py-2 text-sm border rounded-full whitespace-nowrap transition cursor-pointer",
                {
                  "bg-orange-100 border-orange-300 text-orange-600 dark:bg-orange-300/10 dark:text-orange-300 dark:border-orange-500":
                    isActive,
                  "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-300/5":
                    !isActive,
                }
              )}
              style={{
                scrollSnapAlign: "center", // Memastikan setiap kategori berhenti di tengah
              }}
            >
              <Icon
                className={classNames(
                  "w-4 h-4",
                  {
                    "text-orange-600 dark:text-orange-300": isActive,
                  },
                  "text-orange-500"
                )}
              />
              {kategori.label}
            </motion.button>
          );
        }
      )}
    </div>
  );
};
