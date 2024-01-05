import React, { useContext, useRef, useState } from "react";
import { ToastPayload } from "./types";
import { ToastConfigProps, ToastContext } from "./ToastContext";
import { ToastContainer } from "./ToastContainer";
import { Toast } from "./Toast";

export const ToastProvider = ({ children }: React.PropsWithChildren) => {
  const [toastPayload, setToastPayload] = useState<ToastPayload | null>(null);

  const timeoutRef = useRef<number | null>(null);

  const handleToast = (toastProps: ToastConfigProps) => {
    const { duration = 3000 } = toastProps;

    if (toastPayload) {
      setToastPayload(null);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    setToastPayload(toastProps.payload);

    timeoutRef.current = window.setTimeout(() => {
      setToastPayload(null);
      timeoutRef.current = null;
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ toast: handleToast }}>
      {children}
      <ToastContainer>
        {toastPayload && <Toast {...toastPayload} />}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
