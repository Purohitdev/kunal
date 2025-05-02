// import React, { useRef, useState, useEffect } from 'react';

// type VideoData = {
//     id: number;
//     url?: string;
//     name: string;
//     aspect: 'horizontal' | 'vertical';
//     thumbnail?: string;
//     embedHtml?: string;
// };

// const originalVideos: VideoData[] = [
//     {
//         id: 0,
//         name: 'Teaser Vimeo',
//         aspect: 'horizontal',
//         embedHtml: `<iframe 
// src="https://player.vimeo.com/video/1080865124?h=634e7cc0c5&badge=0&autopause=0&player_id=0&app_id=58479"
//   width="100%" 
//   height="100%" 
//   frameborder="0"
//   allow="autoplay; fullscreen"
//   style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
// ></iframe>

//         `,
//     },
//     {
//         id: 2,
//         name: 'The 2/3 rule',
//         aspect: 'horizontal',
//         thumbnail: 'https://i.pinimg.com/736x/64/2b/c1/642bc1cafe8a196fec5c20140ee137b4.jpg',
//         embedHtml: `<iframe 
// src="https://player.vimeo.com/video/1080872648?h=604dc4997c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//   width="100%" 
//   height="100%" 
//   frameborder="0"
//   allow="autoplay; fullscreen"
//   style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
// ></iframe>

//         `,
//     },
//     {
//         id: 3,
//         name: 'trust & will',
//         aspect: 'vertical',
//         thumbnail: 'https://i.pinimg.com/736x/73/9a/75/739a7533eb5dd79b87a73c9da01dd853.jpg',
//         embedHtml: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1080876447?h=4070afc50b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sequence 01"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
        
//                 `,
//     },

// ];

// const videos = [
//     ...originalVideos.slice(-2),
//     ...originalVideos,
//     ...originalVideos.slice(0, 2),
// ];

// const VideoCarouselFlexible: React.FC = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
//     const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
//     const [activeIndex, setActiveIndex] = useState(2);

//     const scrollToCenter = (index: number, smooth = true) => {
//         const card = cardRefs.current[index];
//         if (card && containerRef.current) {
//             card.scrollIntoView({
//                 behavior: smooth ? 'smooth' : 'auto',
//                 inline: 'center',
//                 block: 'nearest',
//             });
//         }
//     };

//     const next = () => setActiveIndex((prev) => prev + 1);
//     const prev = () => setActiveIndex((prev) => prev - 1);
//     const handleCardClick = (index: number) => setActiveIndex(index);

//     useEffect(() => {
//         scrollToCenter(activeIndex);
//         if (activeIndex === videos.length - 2) {
//             setTimeout(() => {
//                 setActiveIndex(2);
//                 scrollToCenter(2, false);
//             }, 600);
//         }
//         if (activeIndex === 1) {
//             setTimeout(() => {
//                 setActiveIndex(videos.length - 3);
//                 scrollToCenter(videos.length - 3, false);
//             }, 600);
//         }
//     }, [activeIndex]);

//     return (
//         <div className="min-h-screen w-screen bg-[#FFEDE1] flex flex-col items-center justify-center py-10">
//             <h2 className="text-xl md:text-2xl font-semibold mb-6">Recent videos from our team:</h2>

//             <div className="relative w-[90vw] h-[80vh] flex items-center justify-center">
//                 <button
//                     onClick={prev}
//                     className="absolute left-2 md:-left-6 bg-[#30312C] text-white w-10 h-10 md:w-22 md:h-22 rounded-full z-20 flex items-center justify-center shadow-md"
//                 >←</button>

//                 <button
//                     onClick={next}
//                     className="absolute right-2 md:-right-6 bg-[#30312C] text-white w-10 h-10 md:w-22 md:h-22 rounded-full z-20 flex items-center justify-center shadow-md"
//                 >→</button>

//                 <div
//                     ref={containerRef}
//                     className="flex gap-8 items-center justify-start overflow-x-auto scroll-smooth hide-scrollbar px-6 md:px-10"
//                 >
//                     {videos.map((video, index) => {
//                         const isActive = index === activeIndex;
//                         const baseWidth = video.aspect === 'horizontal' ? '700px' : '300px';
//                         const baseAspectRatio = video.aspect === 'horizontal' ? '16 / 9' : '9 / 16';

//                         return (
//                             <div
//                                 key={`${video.id}-${index}`}
//                                 ref={(el) => { cardRefs.current[index] = el; }}
//                                 onClick={() => handleCardClick(index)}
//                                 className={`relative flex-shrink-0 transition-all duration-500 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col items-center cursor-pointer ${isActive ? 'scale-100 opacity-100 blur-0 z-10' : 'scale-80 opacity-40 blur-[2px] z-0'
//                                     }`}
//                                 style={{
//                                     width: baseWidth,
//                                     aspectRatio: baseAspectRatio,
//                                 }}
//                             >
//                                 <div className="relative w-full h-full group">
//                                     {video.embedHtml ? (
//                                         <div className="absolute inset-0">
//                                             <div
//                                                 className="w-full h-full"
//                                                 dangerouslySetInnerHTML={{ __html: video.embedHtml }}
//                                             />
//                                         </div>
//                                     ) : (
//                                         <video
//                                             ref={(el) => { videoRefs.current[index] = el; }}
//                                             src={video.url}
//                                             poster={video.thumbnail}
//                                             className="w-full h-full object-cover rounded-2xl"
//                                             muted
//                                             playsInline
//                                             onClick={() => {
//                                                 const currentVideo = videoRefs.current[index];
//                                                 if (!currentVideo) return;
//                                                 videoRefs.current.forEach((v, i) => {
//                                                     if (i !== index && v) {
//                                                         v.pause();
//                                                         v.currentTime = 0;
//                                                         v.load();
//                                                     }
//                                                 });
//                                                 if (currentVideo.paused) {
//                                                     currentVideo.play();
//                                                 } else {
//                                                     currentVideo.pause();
//                                                     currentVideo.currentTime = 0;
//                                                     currentVideo.load();
//                                                 }
//                                             }}
//                                         />
//                                     )}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VideoCarouselFlexible;


import React, { useRef, useState, useEffect } from 'react';

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
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080865124?h=634e7cc0c5&badge=0&autopause=0&player_id=0&app_id=58479" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></iframe>`,
  },

  {
    id: 1,
    aspect: 'horizontal',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080872648?h=604dc4997c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=5847" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></iframe>`,
  },

  {
    id: 2,
    aspect: 'vertical',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080899686?h=4b2006017a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></iframe>`,
  },

  {
    id: 3,
    aspect: 'horizontal',
    embedHtml: `<iframe src="https://player.vimeo.com/video/1080902923?h=be3ec4c007&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></iframe>`,
  },
 


  
];

const VideoCarouselFlexible: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

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
    scrollToCenter(activeIndex);
  }, [activeIndex]);

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
    <div className="min-h-screen w-screen bg-[#FFEDE1] flex flex-col items-center justify-center py-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Recent videos from our team:</h2>

      <div className="relative w-[90vw] h-[80vh] flex items-center justify-center">
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="absolute left-2 md:-left-6 bg-[#30312C] text-white w-20 h-20 rounded-full z-20 flex items-center justify-center shadow-md disabled:opacity-40"
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={activeIndex === videos.length - 1}
          className="absolute right-2 md:-right-6 bg-[#30312C] text-white w-20 h-20 rounded-full z-20 flex items-center justify-center shadow-md disabled:opacity-40"
        >
          →
        </button>

        <div
          ref={containerRef}
          className="flex gap-8 items-center justify-start overflow-x-auto scroll-smooth hide-scrollbar px-6 md:px-10"
        >
          {videos.map((video, index) => {
            const isActive = index === activeIndex;
            const baseWidth = video.aspect === 'horizontal' ? '700px' : '300px';
            const baseAspectRatio = video.aspect === 'horizontal' ? '16 / 9' : '9 / 16';

            return (
              <div
                key={video.id}
                ref={(el) => {
                    cardRefs.current[index] = el;
                  }}                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 transition-all duration-500 rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer flex flex-col items-center ${
                  isActive ? 'scale-100 opacity-100 blur-0 z-10' : 'scale-80 opacity-40 blur-[2px] z-0'
                }`}
                style={{
                  width: baseWidth,
                  aspectRatio: baseAspectRatio,
                }}
              >
                <div className="relative w-full h-full">
                  {video.embedHtml ? (
                    <div className="absolute inset-0" dangerouslySetInnerHTML={{ __html: video.embedHtml }} />
                  ) : (
                    <video
                    ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      
                      src={video.url}
                      poster={video.thumbnail}
                      className="w-full h-full object-cover rounded-2xl"
                      muted
                      playsInline
                      onClick={() => {
                        const currentVideo = videoRefs.current[index];
                        if (!currentVideo) return;
                        videoRefs.current.forEach((v, i) => {
                          if (i !== index && v) {
                            v.pause();
                            v.currentTime = 0;
                          }
                        });
                        currentVideo.paused ? currentVideo.play() : currentVideo.pause();
                      }}
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
