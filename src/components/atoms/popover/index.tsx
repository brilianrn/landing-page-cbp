"use client";

import {
  PopoverButton,
  Popover as PopoverHUI,
  PopoverPanel,
} from "@headlessui/react";
import { AnchorProps } from "@headlessui/react/dist/internal/floating";
import classNames from "clsx";
import { ReactNode } from "react";

type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode | ReactNode[];
  panelClassName?: string;
  itemClassName?: string;
  position?: AnchorProps;
};

export const Popover = ({
  trigger,
  children,
  panelClassName,
  itemClassName,
  position = "bottom",
}: PopoverProps) => {
  const items = Array.isArray(children) ? children : [children];

  return (
    <PopoverHUI>
      <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
        {trigger}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor={position}
        className={classNames(
          "z-20 divide-y divide-white/5 rounded-xl bg-white text-sm/6 text-black transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 shadow-2xl border border-gray-200/30",
          panelClassName
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "px-3 py-2 hover:bg-gray-200/50 rounded transition cursor-pointer",
              itemClassName
            )}
          >
            {item}
          </div>
        ))}
      </PopoverPanel>
    </PopoverHUI>
  );
};
