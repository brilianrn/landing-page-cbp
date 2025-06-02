"use client";

import { motion } from "framer-motion";

export const ContactCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  idx?: number;
}) => (
  <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm gap-3 bg-white dark:bg-gray-800 cursor-pointer hover:bg-orange-100 duration-200 transition-all hover:scale-105">
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-orange-500"
    >
      {icon}
    </motion.span>
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-normal text-sm text-gray-800 dark:text-gray-200"
    >
      {label} : <br />
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-medium text-medium dark:text-gray-300"
      >
        {value}
      </motion.span>
    </motion.span>
  </div>
);
