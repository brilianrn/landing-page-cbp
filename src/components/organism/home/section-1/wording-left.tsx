"use client";

import { Button, Popover } from "@/components/atoms";
import { useScreenSize } from "@/shared/hooks";
import { motion } from "framer-motion";
import { ICArrow } from "public/assets/icons";
import { FC } from "react";
import { Phones } from "./phones";
import { WordingProps } from "./section-1";

export const WordingLeft: FC<WordingProps> = ({ description, title }) => {
  const { isMobile } = useScreenSize();

  return (
    <div className="flex justify-start w-full items-center h-full bg-gradient-to-r from-black/50 to-transparent">
      <div className="flex flex-col gap-2 text-white tracking-wide md:w-8/12 w-full md:pl-24 pl-4">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-amber-300 font-medium md:text-xl text-sm"
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="md:text-3xl text-lg font-semibold tracking-075 md:leading-10"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          <Popover
            itemClassName="w-60 !p-0 !bg-white dark:!bg-gray-800"
            position="bottom end"
            panelClassName="!p-0"
            trigger={
              <Button
                label="Hubungi Kami"
                type="orange"
                btnType="button"
                size={isMobile ? "sm" : "lg"}
                className="mt-8 !w-fit !rounded-full !px-12"
                icon={<ICArrow className="text-white md:size-6 size-4" />}
              />
            }
          >
            <Phones />
          </Popover>
        </motion.div>
      </div>
    </div>
  );
};
