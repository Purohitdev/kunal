

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import MagnetButton from '../Button';

// const Hero: React.FC = () => {
//   const shape1 = useRef<HTMLDivElement>(null);
//   const shape2 = useRef<HTMLDivElement>(null);
//   const content = useRef<HTMLDivElement>(null);
//   const wrapper = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.fromTo(shape1.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
//     gsap.fromTo(shape2.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
//     gsap.fromTo(content.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, delay: 0.5, ease: 'power3.out' });

//     const moveX1 = gsap.quickTo(shape1.current, "x", { duration: 0.5, ease: "power2.out" });
//     const moveY1 = gsap.quickTo(shape1.current, "y", { duration: 0.5, ease: "power2.out" });
//     const moveX2 = gsap.quickTo(shape2.current, "x", { duration: 0.5, ease: "power2.out" });
//     const moveY2 = gsap.quickTo(shape2.current, "y", { duration: 0.5, ease: "power2.out" });

//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const offsetX = (e.clientX - innerWidth / 2) / 25;
//       const offsetY = (e.clientY - innerHeight / 2) / 25;

//       moveX1(-offsetX);
//       moveY1(-offsetY);
//       moveX2(offsetX);
//       moveY2(offsetY);
//     };

//     const wrapperEl = wrapper.current;
//     wrapperEl?.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       wrapperEl?.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={wrapper}
//       className="relative bg-[#FFEDE1] min-h-screen flex flex-col items-center justify-center px-4 md:px-6 text-center overflow-hidden"
//     >
//       {/* Background Shapes */}
      
//       <div
//         ref={shape1}
//         className="absolute left-0 top-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-[#D7DF3F] clip-polygon-1 z-0"
//       />
//       <div
//         ref={shape2}
//         className="absolute right-[-100px] bottom-[80px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#D7DF3F] rounded-full z-0"
//       />

//       {/* Main Content */}
//       <div ref={content} className="z-10 max-w-2xl md:max-w-6xl">
//         <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#30312C] ">
//           Hire high-performing overseas{' '}
//           <span className="bg-[#EBC8F9] px-2 rounded-3xl inline-block">video editors</span> and save up to 70%
//         </h1>

//         <p className="mt-6 text-base sm:text-lg md:text-xl text-[#30312C] font-medium">
//           Embedded video editors expertly trained to create the high-performing content your team needs to stand out in a sea of sameness.
//         </p>

//         <MagnetButton className="mt-8 sm:mt-10 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
//           Hire an Editor
//         </MagnetButton>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagnetButton from '../Button';

const Hero: React.FC = () => {
  const shape1 = useRef<HTMLDivElement>(null);
  const shape2 = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(shape1.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    gsap.fromTo(shape2.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
    gsap.fromTo(content.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, delay: 0.5, ease: 'power3.out' });

    const moveX1 = gsap.quickTo(shape1.current, "x", { duration: 0.5, ease: "power2.out" });
    const moveY1 = gsap.quickTo(shape1.current, "y", { duration: 0.5, ease: "power2.out" });
    const moveX2 = gsap.quickTo(shape2.current, "x", { duration: 0.5, ease: "power2.out" });
    const moveY2 = gsap.quickTo(shape2.current, "y", { duration: 0.5, ease: "power2.out" });

    const moveContentX = gsap.quickTo(content.current, "x", { duration: 0.6, ease: "power2.out" });
    const moveContentY = gsap.quickTo(content.current, "y", { duration: 0.6, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / 25;
      const offsetY = (e.clientY - innerHeight / 2) / 25;

      moveX1(-offsetX);
      moveY1(-offsetY);
      moveX2(offsetX);
      moveY2(offsetY);

      // Subtle movement for text
      moveContentX(offsetX / 2);
      moveContentY(offsetY / 2);
    };

    const handleMouseLeave = () => {
      // Reset to initial position when mouse leaves
      gsap.to([shape1.current, shape2.current], { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.to(content.current, { x: 0, y: 0, duration: 0.8, ease: 'power3.out' });
    };

    const wrapperEl = wrapper.current;
    wrapperEl?.addEventListener('mousemove', handleMouseMove);
    wrapperEl?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapperEl?.removeEventListener('mousemove', handleMouseMove);
      wrapperEl?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={wrapper}
      className="relative bg-[#FFEDE1] min-h-screen flex flex-col items-center justify-center px-4 md:px-6 text-center overflow-hidden"
    >
      {/* Background Shapes */}
      <div
        ref={shape1}
        className="absolute left-0 top-0 w-[180px] h-[180px] md:w-[300px] md:h-[300px] bg-[#D7DF3F] clip-polygon-1 z-0"
      />
      <div
        ref={shape2}
        className="absolute right-[-100px] bottom-[80px] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#D7DF3F] rounded-full z-0"
      />

      {/* Main Content */}
      <div ref={content} className="z-10 max-w-2xl md:max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#30312C] ">
          Hire high-performing Inidan{' '}
          <span className="bg-[#EBC8F9] px-2 rounded-3xl inline-block">video editors</span> and save ur Money
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#30312C] font-medium">
          Embedded video editors expertly trained to create the high-performing content your team needs to stand out in a sea of sameness.
        </p>

        <MagnetButton className="mt-8 sm:mt-10 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
          Hire an Editor
        </MagnetButton>
      </div>
    </div>
  );
}; 

export default Hero;
