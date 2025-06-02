/* eslint-disable */

import { SelectOptionProps } from "./select";

export default ({
  size,
  errorMessage,
  useInsideLabel,
}: Partial<SelectOptionProps>) => ({
  control: (base: any, state: any) => {
    return {
      ...base,
      background: "white",
      fontWeight: useInsideLabel ? "700" : "400",
      fontSize:
        size === "lg"
          ? "18px"
          : size === "sm"
          ? "12px"
          : size === "md"
          ? "16px"
          : "20px",
      letterSpacing: (size === "md" || size === "lg") && "0.75px",
      borderColor: errorMessage
        ? "#e60013"
        : !state.isFocused
        ? "#c9ced4"
        : "oklch(0.5 0.22 240)",
      borderRadius: "8px",
      maxHeight: "auto",
      minHeight: "auto",
      borderWidth: "1px",
      cursor: "pointer",
      boxShadow: state.isFocused ? null : null,
      padding:
        size === "lg"
          ? "7px 7px"
          : size === "sm"
          ? "2px 4px"
          : size === "md"
          ? "2.5px 4px"
          : "2px 4px",
      "&:hover": {
        borderColor: errorMessage
          ? "#e60013"
          : state.isFocused
          ? "oklch(0.5 0.22 240)"
          : "#DADADA",
      },
    };
  },
  option: (
    styles: { [x: string]: any },
    { isDisabled, isFocused, isSelected }: any
  ) => {
    return {
      ...styles,
      fontSize:
        size === "lg"
          ? "18px"
          : size === "sm"
          ? "14px"
          : size === "md"
          ? "16px"
          : "14px",
      lineHeight: "28px",
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "oklch(0.5 0.22 240)"
        : isFocused
        ? "#e0edfe"
        : undefined,
      color: isDisabled ? "#ccc" : isSelected ? "white" : "black",
      cursor: isDisabled ? "not-allowed" : "pointer",
      ":active": {
        ...styles[":active"],
        backgroundColor: isSelected ? "#F5F7FA" : undefined,
      },
    };
  },
});
