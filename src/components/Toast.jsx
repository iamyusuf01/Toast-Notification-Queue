import React, { useEffect, useRef } from "react";

const Toast = ({ message, type, onClose, duration, onUndo, position }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    let timer;
    let progress = 100;

    progressRef.current.style.transition = `width ${duration}ms linear`;
    progressRef.current.style.width = "100%";

    const interval = setInterval(() => {
      progress -= 100 / (duration / 100);
      if (progress <= 0) clearInterval(interval);
    }, 100);

    const startTimer = () => {
      timer = setTimeout(() => onClose(), duration);
    };
    startTimer();

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onClose, duration]);

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`flex w-42 justify-between items-center p-4 rounded-lg shadow-lg text-white transition-opacity duration-300 ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : "bg-blue-500"
      } ${
        position === "top-left"
          ? "top-4 left-4"
          : position === "bottom-right"
          ? "bottom-4 right-4"
          : "top-4 right-4"
      } fixed z-50`}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.8";
        clearTimeout(e.currentTarget.timer);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.timer = setTimeout(
          () => onClose(),
          (progressRef.current.style.width.slice(0, -1) / 100) * duration
        );
      }}
    >
      <span>{message}</span>
      <div className="flex space-x-2">
        {onUndo && (
          <button
            className="text-white hover:text-gray-200 focus:outline-none mr-2"
            onClick={onUndo}
          >
            Undo
          </button>
        )}
        <button
          className="text-white hover:text-gray-200 focus:outline-none"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <div
        ref={progressRef}
        className="progress-bar h-1 bg-white absolute bottom-0 left-0"
      />
    </div>
  );
};
export default Toast;
