import React, { useState } from "react";
import { UseInputProps, UseInputReturn } from "./types";

export const useInput = (props: UseInputProps): UseInputReturn => {
  const {
    isDisabled = false,
    isInvalid = false,
    isReadOnly = false,
    isRequired = false,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const isControlled = value !== undefined && onChange !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? "",
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isControlled) {
      onChange(event);
    } else {
      setUncontrolledValue(event.target.value);
    }
  };

  const currentValue = isControlled ? value : uncontrolledValue;

  return {
    inputProps: {
      ...rest,
      defaultValue,
      value: currentValue,
      onChange: handleChange,
      disabled: isDisabled,
      readOnly: isReadOnly,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
    valueCount: currentValue.toString().length, // 이런 식으로 새로운 '기능'을 추가할 수 있다.
  };
};
