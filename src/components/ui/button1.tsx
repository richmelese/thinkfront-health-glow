import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all",
        className
      )}
    >
      {children}
    </button>
  );
};
