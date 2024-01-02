import React from "react";
import clsx from "clsx";
import { AccordionItemProps } from "./types";
import { accordionItemStyle } from "./style.css";

const AccordionItem = (
  props: AccordionItemProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = React.Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map(child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, itemName });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
};

const _AccordionItem = React.forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
