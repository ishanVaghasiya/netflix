/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

interface Dimension {
  height: number;
  width: number;
}

export const useDebounceScreenSize = (time: number = 0) => {
  const hasWindow = typeof window !== "undefined";
  const getDimension = () => {
    if (hasWindow) {
      return {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    }
  };
  const [dimension, setDimension] = useState<Dimension | undefined>(
    getDimension()
  );

  const handleResize = useCallback(() => {
    const debouncedHandleResize = debounce(() => {
      setDimension(getDimension());
    }, time);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  useEffect(() => handleResize(), []);
  return { width: dimension?.width, height: dimension?.height };
};
