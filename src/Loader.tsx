import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const words = ["LOADING", "YOUR", "EDITOR."];

const Loader: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const indexRef = useRef(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const bubblesRef = useRef<HTMLDivElement[]>([]);
  const [progress, setProgress] = useState(0);

  // Word cycling (reduced interval for faster transitions)
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      setCurrentWord(words[indexRef.current]);
    }, 1000); // Reduced interval to 1 second
    return () => clearInterval(interval);
  }, []);

  // Word animation (reduced duration for quicker transitions)
  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.children;
      gsap.set(letters, { y: "100%", opacity: 0 });
      gsap.to(letters, {
        y: "0%",
        opacity: 1,
        duration: 0.6, // Reduced duration
        ease: "power3.inOut",
        stagger: 0.02, // Faster stagger
        onComplete: () => {
          gsap.to(letters, {
            y: "-100%",
            opacity: 0,
            duration: 0.6, // Reduced duration
            ease: "power3.inOut",
            stagger: 0.02, // Faster stagger
          });
        },
      });
    }
  }, [currentWord]);

  // Floating bubbles animation (same but faster duration)
  useEffect(() => {
    bubblesRef.current.forEach((bubble, i) => {
      gsap.to(bubble, {
        y: -30,
        x: "+=20",
        repeat: -1,
        yoyo: true,
        duration: 2 + Math.random(), // Faster duration
        ease: "sine.inOut",
        delay: i * 0.3, // Reduced delay between bubbles
      });
    });
  }, []);

  // Progress animation (faster progress bar)
  useEffect(() => {
    let start = 0;
    const duration = 2500; // Reduced duration for faster progress
    const interval = 50; // Update every 50ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        start = 100;
        clearInterval(timer);
      }
      setProgress(Math.floor(start));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#FFEDE1] z-50 overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FFDEC9] via-[#FFEDE1] to-[#FFEDE1] animate-pulse z-0" />

      {/* Floating blurred bubbles */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) bubblesRef.current[i] = el;
          }}
          className="absolute rounded-full bg-[#FFBC8B] opacity-30 blur-2xl"
          style={{
            width: `${60 + i * 15}px`,
            height: `${60 + i * 15}px`,
            top: `${10 + i * 10}%`,
            left: `${15 + i * 12}%`,
          }}
        />
      ))}

      {/* Animated Loading Text */}
      <a
        href="#"
        className="relative z-10 block whitespace-nowrap text-[#1A1A1A] text-6xl font-black uppercase sm:text-7xl md:text-8xl lg:text-[10rem]"
        style={{ lineHeight: 0.75 }}
      >
        <span ref={textRef} className="relative inline-flex">
          {currentWord.split("").map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}
        </span>
      </a>

      {/* Loading Percentage at Bottom-Right */}
      <div className="absolute bottom-5 right-6 text-[#1A1A1A] text-6xl  font-bold z-20">
        {progress}%
      </div>
    </div>
  );
};

export default Loader;
