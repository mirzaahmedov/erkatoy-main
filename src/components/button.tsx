import { ButtonHTMLAttributes, FC } from "react";

import { twMerge } from "tailwind-merge";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "w-full flex justify-center py-2 px-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold shadow hover:from-orange-600 hover:to-orange-500 transition",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
