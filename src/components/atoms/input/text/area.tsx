"use client";

import sxInput from "@/shared/styles/components/input.module.css";
import classNames from "clsx";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { InputTextareaProps } from "./text";

export const InputTextarea = ({
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
}: InputTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputState, setInputState] = useState<string>();

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const tempValue = e.target.value;
    return setValue && setValue(tempValue);
  };

  return (
    <div
      className={classNames([
        labelClassName,
        "w-full",
        label && !useLabelInside && "flex flex-col gap-2",
      ])}
    >
      {label && !useLabelInside && (
        <label
          className={classNames([
            useLabelInside &&
              sxInput[`form-label-inside${value ? "-active" : ""}`],
          ])}
        >
          {label}
          {required && <span className="text-danger-default">*</span>}
        </label>
      )}
      <span className="relative block">
        {label && useLabelInside && (
          <label
            className={classNames([
              sxInput[
                `form-area-label-inside${
                  isFocused || inputState || value ? "-active" : ""
                }`
              ],
              isFocused || value || inputState
                ? "text-primary-default dark:text-white bg-white dark:bg-dark-default !w-[91%]"
                : "text-gray-400",
            ])}
          >
            <span>{label}</span>
            {required && (isFocused || value || inputState) && (
              <span className="text-danger-default">*</span>
            )}
          </label>
        )}
        {register && name ? (
          <textarea
            {...register(name, {
              onChange: ({ target }) => setInputState(target?.value),
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
            placeholder={useLabelInside ? "" : placeholder}
            disabled={disabled}
            className={classNames([
              "!bg-white dark:!bg-dark-default text-black dark:text-white min-h-20 h-full !top-2",
              sxInput[size],
              className,
              disabled && "cursor-not-allowed",
              useLabelInside &&
                sxInput[`form-area-input-inside${inputState ? "-active" : ""}`],
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
          <textarea
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
            value={value || ""}
            onChange={onChange}
            placeholder={useLabelInside ? "" : placeholder}
            disabled={disabled}
            className={classNames([
              "!bg-white dark:!bg-dark-default text-black dark:text-white min-h-20 h-full",
              sxInput[size],
              className,
              disabled && "cursor-not-allowed",
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
