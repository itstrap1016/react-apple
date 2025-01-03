import { useState, useEffect } from "react";

const useScrollHeight = () => {
  const heightNum = 5;
  const [scrollHeight, setScrollHeight] = useState(0);

  const calculateHeight = () => {
    setScrollHeight(heightNum * window.innerHeight);
  };

  useEffect(() => {
    calculateHeight();

    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return scrollHeight;
};

export default useScrollHeight;
