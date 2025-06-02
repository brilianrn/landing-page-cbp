"use client";

import classNames from "clsx";
import Link from "next/link";
import { FC } from "react";
import { ISectionHeader } from "./topbar";

export const Menus: FC<{
  items: Array<ISectionHeader>;
  activeSection: string;
}> = ({ items, activeSection }) => {
  return (
    <div className="md:flex hidden justify-center items-center md:gap-6 gap-4">
      {items?.map((e) => (
        <Link
          key={e?.headerID}
          className={classNames(
            activeSection === e?.headerID &&
              "bg-primary-darker !text-white py-[0.8px] px-3 rounded-full",
            "md:text-lg text-medium tracking-075 font-medium cursor-pointer transition-all duration-200 hover:text-primary-default text-black dark:text-white text-nowrap"
          )}
          href={e?.headerID}
        >
          {e?.headerTitle}
        </Link>
      ))}
    </div>
  );
};
