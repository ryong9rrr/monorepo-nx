import React from "react";
import clsx from "clsx";
import { vars } from "@package/themes";
import { useSelect } from "@package/react-hooks-select";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { SelectProps } from "./types";
import {
  colorVariant,
  errorBorderColorVariant,
  focusBorderColorVariant,
  selectStyle,
} from "./style.css";

const Select = (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => {
  const {
    color = "gray",
    size = "md",
    variant = "outline",
    errorBorderColor = "#E53E3E",
    focusBorderColor = "#3182CE",
    className,
    style,
    ...rest
  } = props;

  const { selectProps } = useSelect(rest);

  return (
    <select
      {...selectProps}
      ref={ref}
      className={clsx([
        selectStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
        ...style,
      }}
    />
  );
};

const _Select = React.forwardRef(Select);

export { _Select as Select };
