"use client";

import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "./article";

const articles = [
  {
    id: "1",
    createdAt: "2025-02-12T00:00:00Z",
    title: "Konkid ensures sustainable water resources",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/images/home/bricks.jpeg",
  },
  {
    id: "2",
    createdAt: "2025-03-23T00:00:00Z",
    title: "Collaboration Innovation between Konkrid & Stembayo University...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/images/home/bricks.jpeg",
  },
  {
    id: "3",
    createdAt: "2022-12-03T00:00:00Z",
    title: "Non-executive Director and Chair designate appointment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/images/home/bricks.jpeg",
  },
];

export const ArticleSection = ({ y }: { y: MotionValue<string> }) => {
  return (
    <div className="flex flex-col w-full max-w-7xl h-full items-start justify-center px-6 md:px-12 lg:pt-0 lg:pb-0 md:pt-24 md:pb-24 pt-14 pb-4 mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white md:mb-12 mb-4 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Artikel Terbaru
        <div className="border-t-3 rounded-full border-orange-600 absolute bottom-0 left-0 w-16" />
      </motion.h2>
      <div className="flex lg:flex-row flex-col gap-6 items-center w-full h-full">
        <div className="lg:w-[150%] w-full">
          <ArticleCard y={y} data={articles[0]} idx={1} />
        </div>
        <motion.div className="flex flex-col gap-6 w-full">
          {articles.slice(1).map((article, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={idx}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <ArticleCard
                y={y}
                data={article}
                imageClassName="lg:!h-[195px]"
                idx={idx + 1}
                titleClassName="lg:!text-lg lg:!leading-[28px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.button
        whileHover={{ x: 4 }}
        className="mt-8 flex items-center gap-2 text-sm text-orange-600 hover:underline transition cursor-pointer"
      >
        Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
};
