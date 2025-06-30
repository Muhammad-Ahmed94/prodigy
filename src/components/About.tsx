import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!imageLoaded) return;

    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.fromTo(
          imgRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center 60%",
              scrub: 1,
            },
          }
        );
      } else {
        // Image sliding from left
        gsap.fromTo(
          imgRef.current,
          { x: "-100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "center center",
              scrub: 1,
            },
          }
        );

        // Image expanding animation
        gsap.to(imgRef.current, {
          scale: 1.2, // Reduce scale for better performance
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "bottom center",
            scrub: 1,
            onEnter: () => console.log("image started expanding"),
            onLeave: () => console.log("image animation complete"),
          },
          transformOrigin: "center center",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [imageLoaded, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-screen bg-[#DFDFF2] overflow-hidden relative"
    >
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center mt-4 sm:mt-8 mb-2">
          {/* Header */}
          <h2 className="text-sm sm:text-base lg:text-lg uppercase font-general tracking-wide">
            welcome to prodigy
          </h2>
          
          {/* Main title */}
          <div className="uppercase mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-12 lg:mb-20 font-general font-bold text-center tracking-tight">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Embark on the world's
              <br />
              greatest gaming adventure
            </h1>
          </div>

          {/* Image container  */}
          <div className="flex justify-center items-center relative overflow-hidden z-50 mb-4 sm:mb-6 lg:mb-8">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Loading */}
              {!imageLoaded && (
                <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600 text-sm">Loading...</p>
                  </div>
                </div>
              )}
              
              {/* main images*/}
              <img
                ref={imgRef}
                src="/img/about.webp"
                alt="about-image"
                className={`w-full h-auto object-contain rounded-2xl transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  console.error('Failed to load about image');
                  setImageLoaded(true);
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Description */}
          <div className="uppercase text-center font-general tracking-tight max-w-4xl mx-auto px-4">
            <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl leading-tight">
              The Metagame is here—turn your life into an epic MMORPG.
            </h3>
            <h4 className="text-[#59595a] mb-2 tracking-tight text-sm sm:text-base lg:text-lg leading-relaxed">
              Prodigy seamlessly integrates player networks, AI-driven agents,
              and blockchain technology to create a unified play economy.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;