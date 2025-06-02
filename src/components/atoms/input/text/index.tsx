"use client";

import sxInput from "@/shared/styles/components/Input.module.css";
import { formatRupiah, isNumber, unformatRupiah } from "@/shared/utils";
import classNames from "clsx";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { InputTextProps } from "./text";

export const InputText = ({
  type,
  className,
  icon,
  iconClassName,
  iconOnClick,
  iconPosition,
  register,
  label,
  required,
  labelClassName,
  errorMessage,
  placeholder,
  name,
  value,
  setValue,
  disabled = false,
  iconType = "image",
  iconHeight = 50,
  iconWidth = 50,
  useLabelInside = false,
  onBlur,
  onFocus,
  onEnter,
  size = "lg",
}: InputTextProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputState, setInputState] = useState<string>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tempValue = e.target.value;
    if (type === "price") {
      const nonIDR = unformatRupiah(tempValue);
      if (isNumber(nonIDR)) {
        const IDR = formatRupiah(Number(nonIDR || "0"), ".");
        return setValue && setValue(IDR);
      }
      return (
        setValue &&
        setValue(
          tempValue === "" || tempValue.length < 4 ? "" : (value as string)
        )
      );
    } else if (type === "bank-account-number") {
      if (isNumber(tempValue)) {
        return setValue && setValue(tempValue);
      }
      return setValue && setValue(tempValue === "" ? "" : (value as string));
    }
    return setValue && setValue(tempValue);
  };

  return (
    <div
      className={classNames([
        labelClassName,
        "relative w-full",
        label && !useLabelInside && "flex flex-col gap-2",
      ])}
    >
      {label && !useLabelInside && (
        <label
          className={classNames([
            useLabelInside &&
              sxInput[`form-label-inside${value ? "-active" : ""}`],
            useLabelInside && "text-primary-default dark:text-white",
          ])}
        >
          {label}
          {required && <span className="text-danger-default">*</span>}
        </label>
      )}
      <span className="relative block">
        {register && name ? (
          <input
            {...register(name, {
              onChange: ({ target }) => setInputState(target?.value),
              valueAsNumber: type === "number",
            })}
            onBlur={() => {
              setIsFocused(false);
              if (onBlur) onBlur();
            }}
            onFocus={() => {
              setIsFocused(true);
              if (onFocus) onFocus();
            }}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === "enter") {
                e.preventDefault();
                if (onEnter) onEnter();
              }
            }}
            type={type === "price" ? "text" : type}
            placeholder={useLabelInside ? "" : placeholder}
            disabled={disabled}
            className={classNames([
              sxInput[size],
              className,
              disabled
                ? "cursor-not-allowed !bg-gray-100"
                : "!bg-white dark:!bg-dark-default text-black dark:text-white focus:border-primary-default border-gray-300 dark:focus:border-primary-lighter",
              useLabelInside &&
                sxInput[`form-input-inside${inputState ? "-active" : ""}`],
              errorMessage
                ? sxInput[
                    `form-input${
                      icon && iconPosition ? `-with-icon-${iconPosition}` : ""
                    }-error`
                  ]
                : sxInput[
                    `form-input${
                      icon && iconPosition ? `-with-icon-${iconPosition}` : ""
                    }`
                  ],
              isFocused && "input-focused",
            ])}
          />
        ) : (
          <input
            onBlur={() => {
              setIsFocused(false);
              if (onBlur) onBlur();
            }}
            onFocus={() => {
              setIsFocused(true);
              if (onFocus) onFocus();
            }}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === "enter") {
                e.preventDefault();
                if (onEnter) onEnter();
              }
            }}
            type={type === "price" ? "text" : type}
            value={value || ""}
            onChange={onChange}
            placeholder={useLabelInside ? "" : placeholder}
            disabled={disabled}
            className={classNames([
              sxInput[size],
              className,
              disabled
                ? "cursor-not-allowed bg-gray-100"
                : "!bg-white dark:!bg-dark-default text-black dark:text-white focus:border-primary-default border-gray-300 dark:focus:border-primary-lighter",
              useLabelInside &&
                sxInput[`form-input-inside${value ? "-active" : ""}`],
              errorMessage
                ? sxInput[
                    `form-input${
                      icon && iconPosition ? `-with-icon-${iconPosition}` : ""
                    }-error`
                  ]
                : sxInput[
                    `form-input${
                      icon && iconPosition ? `-with-icon-${iconPosition}` : ""
                    }`
                  ],
              isFocused && "input-focused",
            ])}
          />
        )}
        {label && useLabelInside && (
          <label
            className={classNames([
              sxInput[
                `form-label-inside${inputState || value ? "-active" : ""}`
              ],
              isFocused || value || inputState
                ? "text-primary-default dark:text-white"
                : "text-gray-400",
            ])}
          >
            <span>{label}</span>
            {required && (isFocused || value || inputState) && (
              <span className="text-danger-default">*</span>
            )}
          </label>
        )}
        {icon &&
          iconPosition &&
          iconType === "image" &&
          typeof icon === "string" && (
            <span
              className={classNames([
                "absolute top-[50%] translate-y-[-50%]",
                iconPosition === "right" ? "right-4" : "left-4",
                disabled ? "!cursor-not-allowed" : "",
              ])}
            >
              <Image
                alt={`input-${name}`}
                src={icon}
                className={`${iconClassName} ${
                  disabled ? "!cursor-not-allowed" : ""
                }`}
                onClick={iconOnClick}
                height={iconHeight}
                width={iconWidth}
              />
            </span>
          )}
        {icon && iconPosition && iconType === "string" && (
          <span
            className={classNames([
              iconClassName,
              "absolute top-[50%] translate-y-[-50%]",
              iconPosition === "right" ? "right-4" : "left-4",
              disabled ? "!cursor-not-allowed" : "",
            ])}
            onClick={iconOnClick}
          >
            {icon}
          </span>
        )}
      </span>
      {errorMessage && (
        <p className="text-danger-default font-medium text-sm pl-4">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
