"use client";

import sxInput from "@/shared/styles/components/input.module.css";
import classNames from "clsx";
import { ICChevron, ICCross } from "public/assets/icons";
import { FC, useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import customStyle from "./custom-style";
import { SelectOptionProps, SelectOptionValue } from "./select";

export const SelectOption: FC<SelectOptionProps> = ({
  placeholder = "Pilih ...",
  setValue,
  value,
  options,
  disabled,
  errorMessage,
  label,
  name,
  required,
  isClearable,
  control,
  useInsideLabel,
  size = "lg",
  defaultValue,
  onBlur,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputState, setInputState] = useState<string>();

  const customStyles = useMemo(() => {
    return customStyle({ size, errorMessage });
  }, [errorMessage, size]);

  return (
    <div
      className={classNames([
        "relative",
        errorMessage && "mb-4",
        label && !useInsideLabel && "flex flex-col gap-2",
      ])}
    >
      {label && !useInsideLabel && (
        <label
          className={classNames([
            useInsideLabel &&
              sxInput[`form-label-inside${value ? "-active" : ""}`],
          ])}
        >
          {required && <span>*</span>}
          {label}
        </label>
      )}
      <span className="relative block">
        {control && !setValue ? (
          <Controller
            name={name || "select"}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={(value) => {
                  field.onChange(value);
                  setInputState(
                    value ? (value as SelectOptionValue).value : ""
                  );
                }}
                components={{
                  ...makeAnimated(),
                  DropdownIndicator: () => (
                    <div className="px-2">
                      <ICChevron className="size-4 rotate-90" />
                    </div>
                  ),
                  IndicatorSeparator: () => null,
                }}
                onBlur={() => {
                  setIsFocused(false);
                  if (onBlur) onBlur();
                }}
                onFocus={() => {
                  setIsFocused(true);
                  if (onFocus) onFocus();
                }}
                classNames={{
                  placeholder: () =>
                    useInsideLabel
                      ? "hidden"
                      : classNames([
                          "font-semibold text-gray-default",
                          size === "lg"
                            ? "text-lg"
                            : size === "sm"
                            ? "text-sm"
                            : size === "md"
                            ? "text-medium"
                            : "text-xs",
                        ]),
                  valueContainer: () =>
                    useInsideLabel
                      ? "absolute !pb-[-20px] -bottom-[10px] -left-[1px]"
                      : "",
                }}
                placeholder={placeholder}
                options={options}
                styles={{ ...customStyles }}
                isClearable={isClearable}
                isDisabled={disabled}
                defaultValue={defaultValue}
              />
            )}
          />
        ) : (
          <Select
            components={{
              ...makeAnimated(),
              DropdownIndicator: () => (
                <div className="px-2">
                  {value?.value && isClearable ? (
                    <ICCross
                      className="size-3 text-danger-default"
                      onClick={() => setValue && setValue(null)}
                    />
                  ) : (
                    <ICChevron className="size-4 rotate-90" />
                  )}
                </div>
              ),
              IndicatorSeparator: () => null,
            }}
            onBlur={() => {
              setIsFocused(false);
              if (onBlur) onBlur();
            }}
            onFocus={() => {
              setIsFocused(true);
              if (onFocus) onFocus();
            }}
            classNames={{
              placeholder: () =>
                useInsideLabel
                  ? "hidden"
                  : classNames([
                      "font-normal text-gray-default",
                      size === "lg"
                        ? "text-lg"
                        : size === "sm"
                        ? "text-sm"
                        : size === "md"
                        ? "text-medium"
                        : "text-xs",
                    ]),
              valueContainer: () =>
                useInsideLabel
                  ? "absolute !pb-[-20px] -bottom-[10px] -left-[1px]"
                  : "",
              control: ({ isFocused }) =>
                classNames([
                  isFocused &&
                    "!border-primary-default dark:!border-primary-lighter",
                  "bg-white dark:!bg-dark-default text-black dark:text-white !border-gray-300 dark:border-gray-600 focus:border-primary-default dark:focus:border-primary-lighter rounded-lg",
                ]),
              singleValue: () => "text-black dark:!text-white",
              option: ({ isSelected, isFocused }) =>
                classNames([
                  isSelected && "!bg-primary-default",
                  isFocused && "!bg-gray-100 dark:!bg-dark-lighter",
                  "text-black dark:!text-white",
                ]),
              menu: () =>
                "bg-white dark:!bg-dark-default text-black dark:!text-white",
            }}
            placeholder={placeholder}
            options={options}
            styles={{ ...customStyles }}
            isDisabled={disabled}
            defaultValue={defaultValue}
            value={value}
            onChange={(value) => {
              // eslint-disable-next-line
              setValue && setValue(value as SelectOptionValue);
              setInputState(value ? (value as SelectOptionValue).value : "");
            }}
          />
        )}
        {label && useInsideLabel && (
          <label
            className={classNames([
              sxInput["form-label-inside"],
              isFocused || value || inputState
                ? sxInput["form-select-label-inside-focused"] +
                  " text-primary-default dark:text-white"
                : "text-gray-400",
            ])}
          >
            <span>{label}</span>
            {required && (isFocused || value || inputState) && (
              <span className="text-danger-default">*</span>
            )}
          </label>
        )}
      </span>
      {errorMessage && (
        <p className="text-danger-default font-medium text-sm pl-4 absolute -bottom-5">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
