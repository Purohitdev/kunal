import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    image: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/65f1a4547cb37fca55f2e566_illo2-p-800.png',
    title: 'Discovery Call',
    description:
      'We’ll meet to discuss your content goals and make sure ViralCuts has the right editors for your needs.',
  },
  {
    id: 2,
    image: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/65f1a454917490fe32b7b527_illo1-p-800.png',
    title: 'Editor Selection',
    description:
      'Using our bench of pre-vetted editors, we’ll select the perfect editor for your requirements and share samples of their work for you to review.',
  },
  {
    id: 3,
    image: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/65f1a4552eb11fa11dd0719a_illo3-p-800.png',
    title: 'Kickoff & Editing Begins',
    description:
      'Your editor is ready for kickoff and full-time placement with your team to start creating content.',
  },
];

const HowItWorks: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#FFEDE1] py-24 px-6 md:px-20 text-[#1A1A1A] font-sans">
      <h2 className="text-3xl md:text-7xl font-extrabold mb-20 max-w-6xl mx-auto text-center leading-tight">
        How I Work
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20 text-left">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el: HTMLDivElement | null) => {
              cardsRef.current[index] = el;
            }}
            className="flex flex-col space-y-4 md:w-1/3"
          >
            <img
              src={step.image}
              alt={step.title}
              className="h-36 md:h-80 object-contain drop-shadow-md"
            />
            <h3 className="text-[28px] font-bold leading-snug">{step.title}</h3>
            <p className="text-[22px] leading-relaxed text-[#1A1A1A]/90 font-medium">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
