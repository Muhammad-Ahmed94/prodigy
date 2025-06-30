import React, { useRef, useState, useEffect, useCallback } from 'react';

interface BentoCardProps {
  source: string;
  title: string;
  details: string;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  source,
  title,
  details,
  className = ""
}) => {
  const [play, setPlay] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video loading
  useEffect(() => {
    if (isInView && videoRef.current && !isLoaded) {
      const video = videoRef.current;
      
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.load();

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [isInView, isLoaded]);

  const playVideo = useCallback(() => {
    if (videoRef.current && isLoaded && !play) {
      videoRef.current.play().catch(console.error);
      setPlay(true);
    }
  }, [isLoaded, play]);

  const stopVideo = useCallback(() => {
    if (videoRef.current && play) {
      videoRef.current.pause();
      setPlay(false);
    }
  }, [play]);

  return (
    <div
      ref={containerRef}
      className={`relative size-full text-feature-primary overflow-hidden rounded-md ${className}`}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
    >
      {/* Loading */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="text-white text-sm">Loading...</p>
          </div>
        </div>
      )}

      {!isInView && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      )}

      <video
        ref={videoRef}
        src={isInView ? source : undefined}
        autoPlay={false}
        loop
        muted
        playsInline
        className="absolute top-0 left-0 size-full object-center object-cover"
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
      
      <div className="p-3 sm:p-5 relative z-10 flex flex-col size-full">
        <div>
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl uppercase leading-tight">
            {title}
          </h2>
          <p className="mt-2 sm:mt-3 max-w-80 text-xs sm:text-sm md:text-base leading-relaxed">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [play, setPlay] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const playVideo = useCallback(() => {
    if (videoRef.current && isLoaded && !play) {
      videoRef.current.play().catch(console.error);
      setPlay(true);
    }
  }, [isLoaded, play]);

  const stopVideo = useCallback(() => {
    if (videoRef.current && play) {
      videoRef.current.pause();
      setPlay(false);
    }
  }, [play]);

  return (
    <section className="min-h-screen w-screen bg-black py-4 sm:py-8">
      <div className="px-4 sm:px-8 lg:px-16 mt-2 pb-10 sm:pb-20 text-left font-robert_regular">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-feature-primary font-semibold tracking-wide">
          Step into the Prodigy Gaming Universe
        </h3>
        <p className="font-semibold text-feature-secondary text-sm sm:text-base mt-2">
          Immerse yourself in a dynamic and ever-evolving <br className="hidden sm:block" /> 
          ecosystem where a diverse range of products <br className="hidden sm:block" /> 
          seamlessly unite within an interconnected world.
        </p>
      </div>

      <div className="container mx-auto px-4 relative w-full overflow-hidden flex flex-col gap-2 sm:gap-4">
        {/* First card */}
        <div className="h-64 sm:h-80 md:h-96 lg:h-[55vh]">
          <BentoCard
            source="/videos/feature-1.mp4"
            title="Radiant"
            details="Immerse yourself in a dynamic and ever-evolving ecosystem where a diverse range of products seamlessly unite within an interconnected world."
          />
        </div>

        {/* Grid layout  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-7">
          {/* Left card */}
          <div className="h-64 sm:h-80 lg:h-[70vh] order-1">
            <BentoCard
              source="/videos/feature-2.mp4"
              title="Zigma"
              details="An anime and gaming inspired NFT collection - prime D valorant"
            />
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-2 sm:gap-4 lg:gap-7 order-2">
            <div className="h-32 sm:h-40 lg:h-[30vh]">
              <BentoCard
                source="/videos/feature-3.mp4"
                title="Nexus"
                details="A gamified social hub, adding a new dimension of play to your identity. Web-3 engagement"
              />
            </div>
            
            <div className="h-32 sm:h-40 lg:h-[30vh]">
              <BentoCard
                source="/videos/feature-4.mp4"
                title="Azule"
                details="A cross-world AI agent elevating your gameplay to be more fun and interactive"
              />
            </div>
          </div>

          {/* Bottom section */}
          <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 order-3 py-4">
            {/* Coming soon card */}
            <div className="h-40 w-full sm:h-64 sm:w-64 bg-voilet-300 uppercase text-black text-2xl sm:text-3xl lg:text-5xl font-extrabold font-zentry_regular rounded-md flex justify-center items-center text-center p-4">
              <h2 className="leading-tight">more coming soon</h2>
            </div>

            {/* Video card */}
            <div
              ref={containerRef}
              className="h-40 w-full sm:h-64 sm:w-64 flex justify-center overflow-hidden rounded-md relative bg-gray-800"
              onMouseEnter={playVideo}
              onMouseLeave={stopVideo}
            >
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              
              <video
                ref={videoRef}
                src="/videos/feature-5.mp4"
                className="object-contain object-center origin-center scale-125 sm:scale-150"
                autoPlay={false}
                loop
                muted
                playsInline
                onLoadedData={() => setIsLoaded(true)}
                style={{ display: isLoaded ? 'block' : 'none' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;