/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

// Interface for defining the screen dimension object
interface Dimension {
  height: number;
  width: number;
}

// Custom hook for obtaining debounced screen dimensions
export const useDebounceScreenSize = (time: number = 0) => {
  const hasWindow = typeof window !== "undefined";

   // Function to get the current screen dimensions
  const getDimension = () => {
    if (hasWindow) {
      return {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    }
  };

   // State to store the screen dimensions
  const [dimension, setDimension] = useState<Dimension | undefined>(
    getDimension()
  );

  // Callback function to handle screen resizing with debounce
  const handleResize = useCallback(() => {
    const debouncedHandleResize = debounce(() => {
      setDimension(getDimension());
    }, time);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  // useEffect to trigger the handleResize callback on component mount
  useEffect(() => handleResize(), []);
  return { width: dimension?.width, height: dimension?.height };
};
