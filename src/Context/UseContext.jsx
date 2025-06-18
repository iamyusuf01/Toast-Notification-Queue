import React, {
  createContext,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import Toast from "../components/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children, position = "top-right" }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (
    message,
    type = "info",
    duration = 3000,
    undoAction = null
  ) => {
    setToasts((prev) => [
      ...prev,
      { id: Date.now(), message, type, duration, undoAction },
    ]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => removeToast(toasts[0].id),
        toasts[0].duration
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div className="relative">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
            duration={toast.duration}
            onUndo={toast.undoAction ? () => toast.undoAction() : null}
            position={position}
          />
        ))}
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
