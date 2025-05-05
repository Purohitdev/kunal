import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader: React.FC = () => {
  const topRef = useRef<HTMLImageElement>(null);
  const bottomRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === "complete") {
      handleLoad(); // ✅ Already loaded (mobile fix)
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (loaded && topRef.current && bottomRef.current) {
      gsap.to(topRef.current, {
        y: 5,
        x: -20,
        rotateX: 10,
        duration: 0.5,
        delay: 1,
        ease: "power1.inOut",
      });

      gsap.to(bottomRef.current, {
        y: -5,
        x: 10,
        duration: 0.5,
        delay: 1,
        ease: "power1.inOut",
      });
    }
  }, [loaded]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#FFEDE1] z-50 overflow-hidden">
      <div className="flex items-center relative">
        <img
          ref={topRef}
          src="/1.png"
          alt="Layer 1"
          className="h-[300px] sm:h-[400px] md:h-[500px] object-contain relative"
        />
        <img
          ref={bottomRef}
          src="/2.png"
          alt="Layer 2"
          className="h-[300px] sm:h-[400px] md:h-[500px] object-contain absolute left-0 ml-[0px] md:ml-[3px]"
        />
      </div>
    </div>
  );
};

export default Loader;
