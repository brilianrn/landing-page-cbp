"use client";

import btnStyle from "@/shared/styles/components/button.module.css";
import classNames from "clsx";
import Image from "next/image";
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  memo,
  useState,
} from "react";
import { Loader } from "../";
import { ButtonDefaultProps } from "./button";

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonDefaultProps
> = (
  {
    label = "Button",
    iconPosition = "right",
    icon,
    className,
    onClick,
    isDisable = false,
    btnType = "button",
    type = "primary",
    isSubmit = false,
    iconType = "image",
    iconHeight,
    iconWidth,
    iconClassName,
    id,
    size = "lg",
    ...props
  },
  ref
) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleOnClick = (e: React.MouseEvent) => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
    if (btnType === "button" && onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <button
      {...props}
      ref={ref}
      id={id}
      type={btnType}
      onClick={handleOnClick}
      disabled={isDisable || isSubmit}
      className={classNames([
        className,
        btnStyle[size],
        btnStyle.button,
        btnStyle[isDisable || isSubmit ? "btn-disabled" : `btn-${type}`],
        isClicked && "animate-bounce-down",
      ])}
    >
      {icon ? (
        iconPosition === "right" ? (
          <>
            {label}
            <span className={`${"-mt-[2px]"}`}>
              {iconType === "image" && typeof icon === "string" ? (
                <Image
                  className={`${iconClassName} group-hover:opacity-[0.50] ml-2`}
                  src={(typeof icon === "string" && icon) || ""}
                  alt={label as string}
                  height={iconHeight || 15}
                  width={iconWidth || 15}
                />
              ) : (
                icon
              )}
            </span>
          </>
        ) : (
          <>
            {isSubmit ? (
              <Loader size="sm" />
            ) : (
              <span>
                {iconType === "image" && typeof icon === "string" ? (
                  <Image
                    className={`${iconClassName} group-hover:opacity-[0.50] mr-2`}
                    src={icon}
                    alt={label as string}
                    height={iconHeight || 15}
                    width={iconWidth || 15}
                  />
                ) : (
                  icon
                )}
              </span>
            )}
            {label}
          </>
        )
      ) : (
        <>
          {isSubmit && <Loader size="sm" />}
          {label}
        </>
      )}
    </button>
  );
};

export const Button = memo(forwardRef(ButtonComponent));
