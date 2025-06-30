import { useState, useEffect, useRef } from "react";
import { BiPlay } from "react-icons/bi";
import Button from "./Button";

interface VideoState {
  [key: number]: {
    loaded: boolean;
    element: HTMLVideoElement | null;
  };
}

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [videosLoaded, setVideosLoaded] = useState<VideoState>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const miniVideoRef = useRef<HTMLVideoElement>(null);
  const preloadedVideos = useRef<{ [key: number]: HTMLVideoElement }>({});

  // Preload videos
  useEffect(() => {
    const preloadVideos = () => {
      [1, 2, 3].forEach((index) => {
        const video = document.createElement("video");
        video.src = `/videos/hero-${index}.mp4`;
        video.preload = "metadata";
        video.muted = true;
        video.loop = true;

        video.addEventListener("loadeddata", () => {
          setVideosLoaded((prev) => ({
            ...prev,
            [index]: { loaded: true, element: video },
          }));
        });

        video.addEventListener("error", (e) => {
          console.error(`Failed to load video ${index}:`, e);
        });

        preloadedVideos.current[index] = video;
        video.load();
      });
    };

    preloadVideos();

    return () => {
      // Cleanup
      Object.values(preloadedVideos.current).forEach((video) => {
        video.src = "";
        video.load();
      });
    };
  }, []);

  const changeMiniVideo = () => {
    if (isTransitioning) return;

    const nextIndex = (currentIndex % 3) + 1;

    // Check next video is loaded
    if (!videosLoaded[nextIndex]?.loaded) {
      return; // Don't switch video isn't loaded
    }

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsTransitioning(false);
    }, 100);
  };

  const currentVideo = `/videos/hero-${currentIndex}.mp4`;
  const isCurrentVideoLoaded = videosLoaded[currentIndex]?.loaded;

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden">
      <div className="z-10 relative">
        {/* Loading spinner */}
        {!isCurrentVideoLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
              <p className="text-white text-lg">Loading Experience...</p>
            </div>
          </div>
        )}

        <video
          ref={mainVideoRef}
          src={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-screen object-cover z-0 transition-opacity duration-300 ${
            isTransitioning ? "opacity-50" : "opacity-100"
          }`}
          style={{ display: isCurrentVideoLoaded ? "block" : "none" }}
        />

        <div className="flex flex-col absolute top-0 left-0 w-full h-screen text-white p-3 sm:p-5">
          {/* Top header */}
          <div className="text-left mt-4 sm:mt-8 pl-1 sm:pl-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-2 font-zentry_regular font-bold tracking-wide leading-none">
              Prodigy
            </h1>
            <p className="mb-2 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold font-robert_regular leading-tight">
              Let's get started <br />
              Immersive gaming
            </p>
            <div className="flex">
              <Button
                title="watch trailer"
                styles="bg-yellow-100 text-xs sm:text-sm px-3 sm:px-4 py-2"
                icon={BiPlay}
              />
            </div>
          </div>

          {/* Mini video player */}
          <div className="flex justify-center items-center mt-6 sm:mt-8 lg:mt-12 px-4">
            <div
              className={`w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-64 lg:w-1/5 lg:h-[350px] cursor-pointer relative overflow-hidden rounded-lg bg-black transition-transform duration-200 ${
                isTransitioning ? "scale-95" : "scale-100 hover:scale-105"
              }`}
              onClick={changeMiniVideo}
            >
              {/* Loading indicator for mini video */}
              {!isCurrentVideoLoaded && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}

              <video
                ref={miniVideoRef}
                src={currentVideo}
                className="w-full h-full object-cover scale-110 sm:scale-125 md:scale-150 clip-hex"
                autoPlay
                loop
                muted
                playsInline
                style={{ display: isCurrentVideoLoaded ? "block" : "none" }}
              />

              {/* Click indicator */}
              <div className="absolute z-10 inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="text-white text-xs sm:text-sm font-medium bg-black/50 px-2 py-1 rounded">
                  Switch Video
                </div>
              </div>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-right pb-4 sm:pb-0">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase font-zentry_regular font-bold tracking-wide leading-none">
              gaming
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
