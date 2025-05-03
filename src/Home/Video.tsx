import React, { useRef, useState, useEffect } from 'react';
import Player from '@vimeo/player';

type VideoData = {
  id: number;
  url?: string;
  aspect: 'horizontal' | 'vertical';
  thumbnail?: string;
  embedHtml?: string;
};

const videos: VideoData[] = [
  {
    id: 0,
    aspect: 'horizontal',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080865124?h=634e7cc0c5&badge=0&autopause=0&muted=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  },
  {
    id: 1,
    aspect: 'vertical',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080899686?h=4b2006017a&badge=0&autopause=0&muted=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  },
  {
    id: 2,
    aspect: 'horizontal',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080872648?h=604dc4997c&badge=0&autopause=0&muted=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  },

  {
    id: 3,
    aspect: 'horizontal',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080902923?h=be3ec4c007&badge=0&autopause=0&muted=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  },
  {
    id: 4,
    aspect: 'vertical',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080914358?h=53780bd038&badge=0&autopause=0&muted=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
  },
];

const VideoCarouselFlexible: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Center + autoplay when activeIndex changes
  useEffect(() => {
    scrollToCenter(activeIndex);

    // Play the active Vimeo player
    const currentIframe = iframeRefs.current[activeIndex];
    if (currentIframe) {
      const player = new Player(currentIframe);
      player.play().catch(() => { });
    }

    // Pause all other Vimeo players
    iframeRefs.current.forEach((iframe, i) => {
      if (i !== activeIndex && iframe) {
        const player = new Player(iframe);
        player.pause();
      }
    });
  }, [activeIndex]);

  const scrollToCenter = (index: number, smooth = true) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (activeIndex < videos.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-[80vh] w-screen bg-[#FFEDE1] flex flex-col items-center justify-center  ">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Recent projects I’ve worked on:</h2>

      <div className="relative w-[90vw]  flex items-center justify-center ">
        {/* Navigation Arrows */}
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="absolute left-2 md:-left-6 bg-[#30312C] text-white w-[60px] h-[60px] md:w-20 md:h-20 rounded-full z-20 flex items-center justify-center shadow-md disabled:opacity-40"
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={activeIndex === videos.length - 1}
          className="absolute right-2 md:-right-6 bg-[#30312C] text-white w-[60px] h-[60px] md:w-20 md:h-20 rounded-full z-20 flex items-center justify-center shadow-md disabled:opacity-40"
        >
          →
        </button>

        {/* Video Cards */}
        <div
          ref={containerRef}
          className="flex gap-8 items-center justify-start overflow-x-auto scroll-smooth hide-scrollbar px-6 md:px-10"
        >
          {videos.map((video, index) => {
            const isActive = index === activeIndex;
            const width =
              video.aspect === 'horizontal'
                ? isMobile
                  ? '90vw'
                  : '700px'
                : isMobile
                  ? '70vw'
                  : '300px';
            const aspectRatio = video.aspect === 'horizontal' ? '16 / 9' : '9 / 16';

            return (
              <div
                key={video.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`relative flex-shrink-0 transition-all duration-500 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col items-center ${isActive
                    ? 'scale-100 opacity-100 blur-0 z-10'
                    : 'scale-80 opacity-40 blur-[2px] z-0'
                  }`}
                style={{
                  width: width,
                  aspectRatio: aspectRatio,
                }}
              >
                <div className="relative w-full h-full">
                  <iframe
                    ref={(el) => {
                      iframeRefs.current[index] = el;
                    }} src={new DOMParser()
                      .parseFromString(video.embedHtml || '', 'text/html')
                      .querySelector('iframe')?.getAttribute('src') || ''}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    frameBorder="0"
                    allowFullScreen
                  />
                  {!isActive && (
                    <div
                      className="absolute inset-0 z-20 cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoCarouselFlexible;
