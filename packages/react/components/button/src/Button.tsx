import React from "react";
import clsx from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@package/themes";
import { ButtonProps } from "./types";
import {
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  activeColorVariant,
  spinnerStyle,
  spanStyle,
} from "./style.css";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled,
    children,
    onKeyDown,
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);

    if (event.key === "Enter" || event.key === "13" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <button
      {...props}
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...props.style,
      }}
      disabled={disabled}
      data-loading={isLoading}
      onKeyDown={handleKeyDown}
      role="button"
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
