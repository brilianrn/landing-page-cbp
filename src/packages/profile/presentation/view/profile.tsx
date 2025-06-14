"use client";

import { EmptyState, Image } from "@/components/atoms";
import {
  ProfileAbout,
  ProfileOverview,
  ProfileProjects,
  ProfileShare,
} from "@/components/organism/profile";
import classNames from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "public/assets/images";
import { useState } from "react";

const tabs = ["Overview", "About", "Projects", "Gallery"];

export const ProfileView = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleTabChange = (tab: string, index: number) => {
    const currentIndex = tabs.indexOf(activeTab);
    setDirection(index > currentIndex ? 1 : -1);
    setActiveTab(tab);
  };

  return (
    <section className="relative w-full">
      <div className="h-[240px] md:h-[320px] w-full bg-cover bg-center bg-[url('/assets/images/home/building.jpg')] relative">
        <Link href="/" replace>
          <ArrowLeft className="absolute top-8 left-8 size-8 text-white bg-gray-800/50 rounded-full p-1 hover:bg-gray-800 transition-all duration-200" />
        </Link>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl -mt-20 p-6 md:p-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-primary-darker flex items-center justify-center text-2xl font-bold text-white p-2">
              <Image
                src={Logo}
                alt="cahaya bangun perkasa logo"
                height={80}
                width={80}
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between w-full">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  PT Cahaya Bangun Perkasa
                </h2>
                <ProfileShare />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sidoarjo, Jawa Timur, Indonesia
              </p>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Spesialis material bangunan berkualitas tinggi — atap, bata,
                semen, dan lainnya.
              </p>
              <div className="flex gap-3 mt-3">
                <Link
                  href="#"
                  target="_blank"
                  className="hover:scale-125 transition-all duration-200 cursor-pointer"
                >
                  <Instagram className="size-4 text-primary-darker" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:scale-125 transition-all duration-200 cursor-pointer"
                >
                  <Facebook className="size-4 text-primary-darker" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:scale-125 transition-all duration-200 cursor-pointer"
                >
                  <Twitter className="size-4 text-primary-darker" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:scale-125 transition-all duration-200 cursor-pointer"
                >
                  <Linkedin className="size-4 text-primary-darker" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            {tabs.map((tab, index) => (
              <li key={tab}>
                <button
                  type="button"
                  onClick={() => handleTabChange(tab, index)}
                  className={classNames(
                    "pb-2 cursor-pointer",
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-orange-500"
                      : "hover:border-b-2 hover:border-orange-400"
                  )}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area with Animation */}
        <div className="mt-6 relative min-h-[120px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              {activeTab === "Overview" && <ProfileOverview />}
              {activeTab === "About" && <ProfileAbout />}
              {activeTab === "Projects" && <ProfileProjects />}
              {activeTab === "Gallery" && <EmptyState />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
