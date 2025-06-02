"use client";

import { Image } from "@/components/atoms";
import { IArticle } from "@/packages/home/dto/response";
import classNames from "clsx";
import { motion, MotionValue } from "framer-motion";
import { FC } from "react";

interface ArticleCardProps {
  data: IArticle;
  y: MotionValue<string>;
  imageClassName?: string;
  idx: number;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({
  data,
  imageClassName,
  y,
  idx,
  descriptionClassName,
  titleClassName,
}) => {
  return (
    <div className="flex items-start gap-4 w-full h-full cursor-pointer group hover:bg-black/5 dark:hover:bg-white/5 rounded-lg duration-300 transition-all">
      <motion.div
        style={{
          transform: `translateY(${parseFloat(y.get()) * 0.1}px)`,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-right w-14 flex-shrink-0 pt-2"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.2 }}
          className="text-red-600 font-bold text-2xl"
        >
          {new Date(data.createdAt).getDate()}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.2 }}
          className="text-gray-500 text-sm"
        >
          {new Intl.DateTimeFormat("id-ID", { month: "short", year: "2-digit" })
            .format(new Date(data.createdAt))
            .toUpperCase()}
        </motion.p>
      </motion.div>
      <div className="flex-1 space-y-2">
        <div className="relative h-full w-full overflow-hidden rounded-lg dark:bg-gray-700">
          <Image
            src={data.image}
            alt={data.title}
            className={classNames([
              imageClassName,
              "object-cover h-full w-full -z-[1]",
            ])}
            height={200}
            width={200}
          />
          <div
            className="bg-black/70 absolute inset-0 z-0"
            style={{
              maskImage: "linear-gradient(to top, black 1%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 1%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 px-4 pb-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={classNames([
                titleClassName,
                "text-xl duration-300 transition-all md:text-2xl lg:text-[28px] leading-auto lg:leading-[42px] text-white font-medium",
              ])}
            >
              {data?.title}
            </motion.p>
            <motion.p
              className={classNames([
                descriptionClassName,
                "text-white line-clamp-2 text-sm max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out",
              ])}
            >
              {data?.description}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
