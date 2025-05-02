

import React, { useRef, useState, useEffect } from 'react';

type VideoData = {
    id: number;
    url: string;
    name: string;
    aspect: 'horizontal' | 'vertical';
    thumbnail: string;
};

const originalVideos: VideoData[] = [
    {
        id: 1,
        url: 'https://videos.pexels.com/video-files/6663650/6663650-uhd_2732_1318_30fps.mp4',
        name: 'Problems',
        aspect: 'horizontal',
        thumbnail: 'https://i.pinimg.com/736x/86/ea/63/86ea635035047f5c2e2736983a047a19.jpg',
    },
    {
        id: 2,
        url: 'https://videos.pexels.com/video-files/12173629/12173629-uhd_1440_2560_25fps.mp4',
        name: 'The 2/3 rule',
        aspect: 'vertical',
        thumbnail: 'https://i.pinimg.com/736x/64/2b/c1/642bc1cafe8a196fec5c20140ee137b4.jpg',
    },
    {
        id: 3,
        url: 'https://videos.pexels.com/video-files/30013912/12877421_1080_1920_60fps.mp4',
        name: 'trust & will',
        aspect: 'vertical',
        thumbnail: 'https://i.pinimg.com/736x/73/9a/75/739a7533eb5dd79b87a73c9da01dd853.jpg',
    },
    {
        id: 4,
        url: 'https://videos.pexels.com/video-files/3945877/3945877-uhd_2560_1440_30fps.mp4',
        name: "Ali’s Tip",
        aspect: 'horizontal',
        thumbnail: 'https://i.pinimg.com/736x/23/4c/f8/234cf8e68e011a7f6b89929641566b5a.jpg',
    },
    {
        id: 5,
        url: 'https://videos.pexels.com/video-files/7213889/7213889-uhd_2560_1440_30fps.mp4',
        name: 'Problems again',
        aspect: 'horizontal',
        thumbnail: 'https://i.pinimg.com/736x/32/45/99/324599adcbe42ef2f793056d1f20fb6d.jpg',
    },
];

const videos = [
    ...originalVideos.slice(-2),
    ...originalVideos,
    ...originalVideos.slice(0, 2),
];

const VideoCarouselFlexible: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(2);

    const scrollToCenter = (index: number, smooth = true) => {
        const card = cardRefs.current[index];
        if (card && containerRef.current) {
            card.scrollIntoView({
                behavior: smooth ? 'smooth' : 'auto',
                inline: 'center',
                block: 'nearest',
            });
        }
    };

    const next = () => setActiveIndex((prev) => prev + 1);
    const prev = () => setActiveIndex((prev) => prev - 1);

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        scrollToCenter(activeIndex);

        if (activeIndex === videos.length - 2) {
            setTimeout(() => {
                setActiveIndex(2);
                scrollToCenter(2, false);
            }, 600);
        }
        if (activeIndex === 1) {
            setTimeout(() => {
                setActiveIndex(videos.length - 3);
                scrollToCenter(videos.length - 3, false);
            }, 600);
        }
    }, [activeIndex]);

    return (
        <div className="min-h-screen w-screen bg-[#FFEDE1] flex flex-col items-center justify-center py-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Recent videos from our team:</h2>

            <div className="relative w-[90vw] h-[80vh] flex items-center justify-center">
                <button
                    onClick={prev}
                    className="absolute left-2 md:-left-6 bg-[#30312C] text-white w-10 h-10 md:w-22 md:h-22 rounded-full z-20 flex items-center justify-center shadow-md"
                >←</button>

                
                <button
                    onClick={next}
                    className="absolute right-2 md:-right-6 bg-[#30312C] text-white w-10 h-10 md:w-22 md:h-22 rounded-full z-20 flex items-center justify-center shadow-md"
                >→</button>

                <div
                    ref={containerRef}
                    className="flex gap-8 items-end justify-start overflow-x-auto scroll-smooth hide-scrollbar px-6 md:px-10"
                >
                    {videos.map((video, index) => {
                        const isActive = index === activeIndex;
                        const width = video.aspect === 'horizontal' ? '700px' : '300px';

                        return (
                            <div
                                key={`${video.id}-${index}`}
                                ref={(el) => { cardRefs.current[index] = el; }}
                                onClick={() => handleCardClick(index)}
                                className={`relative flex-shrink-0 transition-all duration-500 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col items-center cursor-pointer ${isActive ? 'scale-100 opacity-100 blur-0 z-10' : 'scale-80 opacity-40 blur-[2px] z-0'
                                    }`}
                                style={{ width, height: '550px' }}
                            >
                                <div className="relative w-full h-full group">
                                    <video
                                        ref={(el) => { videoRefs.current[index] = el; }}
                                        src={video.url}
                                        poster={video.thumbnail}
                                        className="w-full h-full object-cover rounded-2xl"
                                        muted
                                        playsInline
                                        onClick={() => {
                                            const currentVideo = videoRefs.current[index];
                                            if (!currentVideo) return;

                                            // Pause all other videos
                                            videoRefs.current.forEach((v, i) => {
                                                if (i !== index && v) {
                                                    v.pause();
                                                    v.currentTime = 0;
                                                    v.load(); // restore poster
                                                }
                                            });

                                            // Toggle current video
                                            if (currentVideo.paused) {
                                                currentVideo.play();
                                            } else {
                                                currentVideo.pause();
                                                currentVideo.currentTime = 0;
                                                currentVideo.load(); // This reloads and shows the poster again
                                            }
                                        }}
                                    />



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
