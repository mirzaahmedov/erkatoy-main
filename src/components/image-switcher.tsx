"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";

export interface ImageSwitcherProps {
  srcs: string[];
  intervalMS?: number;
  children: (index: string) => ReactNode;
}
export const ImageSwitcher: FC<ImageSwitcherProps> = ({
  srcs,
  intervalMS = 10000,
  children,
}) => {
  const intervalRef = useRef<NodeJS.Timeout>();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setCurrentIndex(0);
    }

    const interval = (intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        if (newIndex >= srcs.length) {
          return 0;
        }
        return newIndex;
      });
    }, intervalMS));

    return () => {
      clearInterval(interval);
    };
  }, [srcs, intervalMS]);

  return srcs.length ? children(srcs[currentIndex]) : null;
};
