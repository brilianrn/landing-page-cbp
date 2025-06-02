import { ReactNode } from "react";
import { Control, UseFormRegister } from "react-hook-form";

export interface SelectOptionValue {
  value: string;
  label: ReactNode;
}

export interface SelectOptionProps {
  name?: string;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  required?: boolean;
  icon?: string;
  iconPosition?: "right" | "left";
  iconClassName?: string;
  value?: SelectOptionValue | null;
  setValue?: (prop: SelectOptionValue | null) => void;
  isMulti?: boolean;
  options: Array<SelectOptionValue>;
  closeMenuOnSelect?: boolean;
  // eslint-disable-next-line
  register?: UseFormRegister<any>;
  // eslint-disable-next-line
  control?: Control<any>;
  errorMessage?: string;
  isSubmitted?: boolean;
  isSubmitSuccessful?: boolean;
  isSubmitting?: boolean;
  isValidating?: boolean;
  isValid?: boolean;
  disabled?: boolean;
  isClearable?: boolean;
  useInsideLabel?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  defaultValue?: SelectOptionValue;
  onBlur?: () => void;
  onFocus?: () => void;
}
