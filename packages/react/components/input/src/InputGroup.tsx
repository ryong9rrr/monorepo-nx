import React from "react";
import clsx from "clsx";
import { InputGroupProps } from "./types";
import { inputGroupStyle } from "./style.css";

const InputGroup = (props: InputGroupProps, ref: React.Ref<HTMLDivElement>) => {
  const { children, className, color = "gray", size = "md", ...rest } = props;

  const childrenWithProps = React.Children.toArray(children);

  const inputStyle: React.CSSProperties = {};

  // AddonLeft이 들어오면 Input 의 왼쪽 상단, 왼쪽 하단의 BorderRadius를 0으로 만들어준다.
  childrenWithProps.forEach(child => {
    // @ts-ignore
    if (child.type.displayName === "InputLeftAddon") {
      // 왼쪽상단, 왼쪽하단 borderRadius를 제거
      inputStyle.borderStartStartRadius = 0; // 왼쪽상단
      inputStyle.borderEndStartRadius = 0; // 왼쪽하단
    }
  });

  const inputGroupChildren = childrenWithProps.map(child => {
    if (React.isValidElement(child)) {
      // @ts-ignore
      if (child.type.displayName === "Input") {
        return React.cloneElement(child, {
          ...child.props,
          color,
          size,
          style: {
            ...child.props.style,
            ...inputStyle,
          },
        });
      }

      return React.cloneElement(child, { ...child.props, color, size });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([inputGroupStyle, className])}>
      {inputGroupChildren}
    </div>
  );
};

const _InputGroup = React.forwardRef(InputGroup);
export { _InputGroup as InputGroup };
