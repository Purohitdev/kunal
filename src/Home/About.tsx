import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Film, User } from 'lucide-react';
import MagnetButton from '../Button';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current || !imageRef.current) return;

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: -80,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      });

      textRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        });
      });

      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='about'
      className="bg-gradient-to-br from-[#FFEDE1] to-[#fef0e8] px-6 md:px-20 md:py-24 sm:py-12"
    >
      {/* Section Title */}
      <div className="max-w-8xl mx-auto text-center mb-16" ref={titleRef}>
        <h2 className="text-3xl md:text-7xl font-extrabold text-[#30312C]">
          I'm Kunal Kapil
          <span className="bg-[#EBC8F9] px-2 rounded-3xl inline-block mt-2">
            Video Editor
          </span>{' '}

        </h2>
        <p className="mt-6 text-gray-700 text-md md:text-lg font-medium max-w-xl mx-auto">
          Editing for emotion. Designing for impact. Helping creators & brands tell unforgettable stories.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Styled Image */}
        <div className="flex items-center justify-center" ref={imageRef}>
          <img
            src="/me.jpeg"
            alt="Kunal working"
            className="w-full max-w-md rounded-2xl shadow-lg border-4 border-[#EBC8F9] transform rotate-[-1.5deg]"
          />
        </div>

        {/* Right: Bullet Story */}
        <div className="space-y-8 text-[15px] text-[#30312C]">
          {[
            {
              icon: <Sparkles className="text-[#EBC8F9] min-w-5 mt-1" />,
              text: `I turn raw footage into bold, digital stories — from snappy reels to brand edits that connect.`,
            },
            {
              icon: <Film className="text-[#D6DF3F] min-w-5 mt-1" />,
              text: `From 15s reels to cinematic cuts, I blend speed, style, and clarity to craft standout content.`,
            },
            {
              icon: <User className="text-[#BDB4F4] min-w-5 mt-1" />,
              text: `Trusted by creators and brands — I deliver content that scales, performs, and resonates.`,
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4"
              ref={(el: HTMLDivElement | null) => {
                textRefs.current[i] = el;
              }}
            >
              {item.icon}
              <p className="text-[22px] leading-relaxed text-[#1A1A1A]/90 font-medium">
                {item.text}
              </p>
            </div>
          ))}

          <div
            ref={buttonRef}
            className=" flex justify-center sm:justify-start"
            >          <a href="#contact">

              <MagnetButton className="mt-5 px-8 py-4">Let’s Collaborate</MagnetButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
