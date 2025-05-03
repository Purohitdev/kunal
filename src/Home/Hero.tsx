

// import  { useEffect, useRef } from "react";
// import gsap from "gsap";
// import MagnetButton from "../Button";

// const icons = [
//   {
//     src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6aa3cf1f137cdb30a48_videotypes-06%402x.webp", // Insta
//     className: "left-10 top-10 w-14 rotate-[10deg]",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9ca3661d848f31009_videotypes-07%402x.webp", // YouTube
//     className: "right-20 top-28 w-16 rotate-[-15deg]",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6aa05292e7bfef455b7_videotypes-03%402x.webp", // Cut Tool
//     className: "left-[20%] bottom-30 w-14 rotate-[25deg]",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a93fecb2687bff5349_videotypes-09%402x.webp", // Timeline
//     className: "right-[10%] bottom-54 w-16 rotate-[-10deg]",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9be223ef7f3bfe537_videotypes-08%402x.webp", // Camera
//     className: "top-[30%] left-[5%] w-14 rotate-[8deg]",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9d4728da34ee4ec1f_videotypes-04%402x.webp", // Text Tool
//     className: "top-[25%] right-[30%] w-14 rotate-[-8deg]",
//   },
  
// ];

// const Hero = () => {
//   const wrapper = useRef<HTMLDivElement>(null);
//   const text = useRef<HTMLDivElement>(null);
//   const iconRefs = useRef<HTMLImageElement[]>([]);

//   useEffect(() => {
//     // Animate text in
//     gsap.fromTo(
//       text.current,
//       { y: 60, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
//     );

//     // Floating icons
//     iconRefs.current.forEach((el, index) => {
//       gsap.to(el, {
//         y: -20,
//         repeat: -1,
//         yoyo: true,
//         duration: 2 + index * 0.2,
//         ease: "sine.inOut",
//       });
//     });

//     const quickSetters = iconRefs.current.map((el) => ({
//       x: gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" }),
//       y: gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" }),
//     }));

//     // Cursor parallax for text
//     const moveTextX = gsap.quickTo(text.current, "x", {
//       duration: 0.5,
//       ease: "power2.out",
//     });
//     const moveTextY = gsap.quickTo(text.current, "y", {
//       duration: 0.5,
//       ease: "power2.out",
//     });

//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const x = (e.clientX - innerWidth / 2) / 30;
//       const y = (e.clientY - innerHeight / 2) / 30;

//       quickSetters.forEach(({ x: setX, y: setY }, i) => {
//         const factor = (i + 1) / iconRefs.current.length;
//         setX(x * factor * 2);
//         setY(y * factor * 2);
//       });

//       moveTextX(x * 0.5);
//       moveTextY(y * 0.5);
//     };

//     const wrapperEl = wrapper.current;
//     wrapperEl?.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       wrapperEl?.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={wrapper}
//       className="relative min-h-[90vh] w-full bg-[#FFEDE1] text-[#2e2e2e] overflow-hidden flex items-center justify-center px-6"
//     >
//       {/* Floating Icons */}
//       {icons.map((icon, index) => (
//         <img
//           key={index}
//           src={icon.src}
//           className={`float-icon absolute ${icon.className} h-25 w-25 blur-xs opacity-80 sm:h-50 sm:w-50`}
//           ref={(el) => {
//             if (el) iconRefs.current[index] = el;
//           }}          alt={`icon-${index}`}
//         />
//       ))}

//       {/* Main Text */}
//       <div ref={text} className="text-center max-w-6xl z-10">
//       <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#30312C] ">
//            Work with a high-performing freelance{' '}
//            <span className="bg-[#CABFF0] px-2 rounded-3xl inline-block ">video editor</span>and save on agency costs
//          </h1>

//         <p className="mt-6 text-base sm:text-lg md:text-xl text-[#30312C] font-medium max-w-2xl mx-auto">
//           I create scroll-stopping short-form content and engaging long-form videos tailored to help your brand stand out, without the overhead of a large agency.
//         </p>

//         <a href="#contact">
//           <MagnetButton className="mt-8 sm:mt-10 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-black text-white rounded-full hover:scale-105 transition-all font-bold">
//            Let's Connect
//           </MagnetButton>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;



import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagnetButton from "../Button";

const icons = [
  {
    src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6aa3cf1f137cdb30a48_videotypes-06%402x.webp", // Insta
    className: "left-4 top-6 sm:left-10 sm:top-10 w-14 rotate-[10deg]",
  },
  {
    src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9ca3661d848f31009_videotypes-07%402x.webp", // YouTube
    className: "right-6 top-16 sm:right-20 sm:top-28 w-16 rotate-[-15deg]",
  },
  {
    src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6aa05292e7bfef455b7_videotypes-03%402x.webp", // Cut Tool
    className: "left-[10%] bottom-12 sm:left-[20%] sm:bottom-30 w-14 rotate-[25deg]",
  },
  {
    src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a93fecb2687bff5349_videotypes-09%402x.webp", // Timeline
    className: "right-[5%] bottom-20 sm:right-[10%] sm:bottom-54 w-16 rotate-[-10deg]",
  },
  {
    src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9be223ef7f3bfe537_videotypes-08%402x.webp", // Camera
    className: "top-[40%] left-[2%] sm:top-[30%] sm:left-[5%] w-14 rotate-[8deg]",
  },
  {
    src: "https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9d4728da34ee4ec1f_videotypes-04%402x.webp", // Text Tool
    className: "top-[55%] right-[15%] sm:top-[25%] sm:right-[30%] w-14 rotate-[-8deg]",
  },
];

const Hero = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Animate text in
    gsap.fromTo(
      text.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
    );

    // Floating icons
    iconRefs.current.forEach((el, index) => {
      gsap.to(el, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 2 + index * 0.2,
        ease: "sine.inOut",
      });
    });

    const quickSetters = iconRefs.current.map((el) => ({
      x: gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" }),
      y: gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" }),
    }));

    const moveTextX = gsap.quickTo(text.current, "x", {
      duration: 0.5,
      ease: "power2.out",
    });
    const moveTextY = gsap.quickTo(text.current, "y", {
      duration: 0.5,
      ease: "power2.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 30;
      const y = (e.clientY - innerHeight / 2) / 30;

      quickSetters.forEach(({ x: setX, y: setY }, i) => {
        const factor = (i + 1) / iconRefs.current.length;
        setX(x * factor * 2);
        setY(y * factor * 2);
      });

      moveTextX(x * 0.5);
      moveTextY(y * 0.5);
    };

    const wrapperEl = wrapper.current;
    wrapperEl?.addEventListener("mousemove", handleMouseMove);

    return () => {
      wrapperEl?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={wrapper}
      className="relative min-h-[90vh] w-full bg-[#FFEDE1] text-[#2e2e2e] overflow-hidden flex items-center justify-center px-6"
    >
      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          className={`float-icon absolute ${icon.className} h-25 w-25 md:h-50 md:w-50  blur-xs opacity-80`}
          ref={(el) => {
            if (el) iconRefs.current[index] = el;
          }}
          alt={`icon-${index}`}
        />
      ))}

      {/* Main Text */}
      <div ref={text} className="text-center max-w-6xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#30312C] ">
          Work with a high-performing freelance{" "}
          <span className="bg-[#CABFF0] px-2 rounded-3xl inline-block ">
            video editor
          </span>
          and save on agency costs
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#30312C] font-medium max-w-2xl mx-auto">
          I create scroll-stopping short-form content and engaging long-form videos tailored to help your brand stand out, without the overhead of a large agency.
        </p>

        <a href="#contact">
          <MagnetButton className="mt-8 sm:mt-10 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-black text-white rounded-full hover:scale-105 transition-all font-bold">
            Let's Connect
          </MagnetButton>
        </a>
      </div>
    </div>
  );
};

export default Hero;
