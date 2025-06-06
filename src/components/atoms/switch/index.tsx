"use client";

import { Switch as HeadlessSwitch } from "@headlessui/react";
import classNames from "clsx";
import { FC, ReactNode } from "react";

interface SwitchProps {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
}

export const Switch: FC<SwitchProps> = ({
  enabled,
  setEnabled,
  className,
  children,
  iconClassName,
}) => {
  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={setEnabled}
      className={classNames([
        className,
        "group relative flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10",
      ])}
    >
      <div
        aria-hidden="true"
        className={classNames([
          iconClassName,
          "pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7",
        ])}
      >
        {children}
      </div>
    </HeadlessSwitch>
  );
};
