import React, { useCallback } from "react";
import clsx from "clsx";
import { useButton } from "@package/react-hooks-button";
import { useAccordionContext } from "./AccordionContext";
import { AccordionButtonProps } from "./types";
import { accordionButtonStyle } from "./style.css";

const AccordionButton = (
  props: AccordionButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { className, itemName = "", onClick, children, ...rest } = props;

  const { setActiveItem } = useAccordionContext();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
    },
    [itemName, setActiveItem, onClick],
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
    >
      {children}
    </button>
  );
};

const _AccordionButton = React.forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
