import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Loader = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current, // DOM element to render the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://lottie.host/de2431dc-f778-4685-838e-f90e02a2e862/aSMRRUiUnU.lottie", // Lottie animation URL
      });

      return () => animation.destroy(); // Cleanup on component unmount
      return () => animation.destroy(); // Cleanup on component unmount
    }
  }, []);

  return (
    <div
      ref={lottieContainer}
      style={{
        height: "64px", // Set the desired height
        width: "64px",  // Set the desired width
        display: "inline-block",
      }}
    ></div>
  );
};

export default Loader;
