import { FC, TextareaHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

export const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => {
  return (
    <textarea
      className={twMerge(
        "resize-none rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 min-h-[60px]",
        className,
      )}
      {...props}
    />
  );
};
