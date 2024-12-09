import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "reset" | "submit";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
  autofocus?: boolean;
  loadingIcon?: string;
}

//事件类型定义
export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}
