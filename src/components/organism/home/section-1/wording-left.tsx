"use client";

import { Button } from "@/components/atoms";
import { motion } from "framer-motion";
import { ICArrow } from "public/assets/icons";
import { FC } from "react";
import { WordingProps } from "./section-1";

export const WordingLeft: FC<WordingProps> = ({ description, title }) => {
  return (
    <div className="flex justify-start w-full items-center h-full bg-gradient-to-r from-black/50 to-transparent">
      <div className="flex flex-col gap-2 text-white tracking-wide w-8/12 pl-24">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-amber-300 font-medium text-xl"
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl font-semibold tracking-075 leading-10"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          <Button
            label="Hubungi Kami"
            type="orange"
            btnType="button"
            size="lg"
            className="mt-8 !w-fit !rounded-full !px-12"
            icon={<ICArrow className="text-white size-6" />}
          />
        </motion.div>
      </div>
    </div>
  );
};
