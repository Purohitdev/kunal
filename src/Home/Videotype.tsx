

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: 'Vlog Videos',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6aa3cf1f137cdb30a48_videotypes-06%402x.webp',
  },
  {
    title: 'Instagram Reels',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9ca3661d848f31009_videotypes-07%402x.webp',
  },
  {
    title: 'Product Demos',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6aa05292e7bfef455b7_videotypes-03%402x.webp',
  },
  {
    title: 'Video Explainers',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a93fecb2687bff5349_videotypes-09%402x.webp',
  },
  {
    title: 'Podcast Shorts',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9be223ef7f3bfe537_videotypes-08%402x.webp',
  },
  {
    title: 'Poadcast',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9d4728da34ee4ec1f_videotypes-04%402x.webp',
  },
  {
    title: 'Social Media Ads',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a93b40f72b2c258c78_videotypes-05%402x.webp',
    subtext: 'Facebook, Twitter, Instagram, LinkedIn, TikTok. We can do it all.',
  },
  {
    title: 'Landing  Videos',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6aad8b971d7946bc8c4_videotypes-01%402x.webp',
  },
  {
    title: 'Motion Graphics',
    icon: 'https://cdn.prod.website-files.com/644ce907322b022df1244c29/659ee6a9879f13bcfacaff38_videotypes-02%402x.webp',
  },
];

const BentoGrid: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  return (
    <section  id="service"className="bg-[#FFEDE1] py-24 px-6 text-[#1A1A1A] font-sans">
      <div className="text-center mb-12">
        <p className="text-lg font-semibold mb-2">Types of Videos</p>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto">
        Whatever your vision, I’ve got the edit for it
                </h2>
      </div>

      <div className="min-h-[110vh] flex flex-col md:flex-row gap-2 md:gap-0">
      <div className="h-[115h] w-full md:w-[40%] flex flex-wrap gap-2 ">
      {items.slice(0, 4).map((item, index) => (
            <div
              key={index}
              ref={(el) => setRef(el, index)}
              className="bg-[#E9C0E5] w-[48%] h-[49%] rounded-3xl flex flex-col justify-between p-8"
            >
              <div>
              <h3 className="font-bold text-[1.2rem] leading-[1.5rem] md:text-[2rem] md:leading-[2rem]">{item.title}</h3>                {item.subtext && <p className="text-sm">{item.subtext}</p>}
              </div>
              <div className="flex justify-center items-center h-full">
                <img src={item.icon} alt={item.title} className="w-42 h-42 object-contain" />
              </div>
            </div>
          ))}
        </div>

        <div className="h-full w-full md:w-[60%] flex flex-col gap-2 ">
        <div className="h-[30%] flex gap-2 ">
            {items.slice(4, 6).map((item, index) => (
              <div
                key={index + 4}
                ref={(el) => setRef(el, index + 4)}
                className="bg-[#E9C0E5] w-[49%] rounded-3xl flex flex-col justify-between p-8"
              >
                <div>
                <h3 className="font-bold text-[1.2rem] leading-[1.5rem] md:text-[2rem] md:leading-[2rem]">{item.title}</h3>                {item.subtext && <p className="text-sm">{item.subtext}</p>}
                {item.subtext && <p className="text-sm">{item.subtext}</p>}
                </div>
                <div className="flex justify-center items-center h-full">
                  <img src={item.icon} alt={item.title} className="w-42 h-42 object-contain" />
                </div>
              </div>
            ))}
          </div>

          <div className="h-[40%]">
            <div
              ref={(el) => setRef(el, 6)}
              className="bg-[#E9C0E5] w-[99%] h-[99%] rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-[1.2rem] leading-[1.5rem] md:text-[2rem] md:leading-[2rem]">{items[6].title}</h3>
                {items[6].subtext && (
                  <p className="text-2xl w-[100%] md:w-1/2 mt-2 text-[#A0869A] font-bold">
  {items[6].subtext}
</p>                )}
              </div>
              <div className="flex justify-center items-center h-full">
                <img src={items[6].icon} alt={items[6].title} className="w-42 h-42 object-contain" />
              </div>
            </div>
          </div>

          <div className="h-[30%] flex gap-2">
            {items.slice(7, 9).map((item, index) => (
              <div
                key={index + 7}
                ref={(el) => setRef(el, index + 7)}
                className="bg-[#E9C0E5] w-[49%] rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                <h3 className="font-bold text-[1.2rem] leading-[1.5rem] md:text-[2rem] md:leading-[2rem]">{item.title}</h3>                {item.subtext && <p className="text-sm">{item.subtext}</p>}
                {item.subtext && <p className="text-sm">{item.subtext}</p>}
                </div>
                <div className="flex justify-center items-center h-full">
                  <img src={item.icon} alt={item.title} className="w-42 h-42 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

