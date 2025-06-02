"use client";

import sxLoader from "@/shared/styles/components/loader.module.css";
import classNames from "clsx";
import { FC } from "react";
import { LoaderProps } from "./loader";

export const Loader: FC<LoaderProps> = ({ className, size }) => (
  <div
    style={
      (typeof size === "number" && { height: size, width: size }) || undefined
    }
    className={classNames([
      typeof size === "string" ? sxLoader[size] : "border-b-4",
      sxLoader["loader"],
      className,
    ])}
  />
);
