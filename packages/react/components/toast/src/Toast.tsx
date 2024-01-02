import clsx from "clsx";
import { ToastPayload } from "./types";
import { toastStyle } from "./style.css";

export const Toast = (props: ToastPayload) => {
  const { message } = props;

  return <div className={clsx([toastStyle])}>{message}</div>;
};
