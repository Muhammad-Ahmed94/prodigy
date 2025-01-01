import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // image sliding from left
    gsap.fromTo(
        imgRef.current,
        { x: "-100%", opacity: 0},
        {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center', // When about section reaches the center.
                end: 'center center', // Animation completes when section is centered.
                scrub: true,
                markers: true,
            }
        }
    );

    // image expanding animation
    gsap.to(
        imgRef.current,
        {
            scale: 1.5,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'center center',
                end: 'bottom center',
                scrub: true,
                // pin: true, // locks the image during the animation.
                markers: true,
                onEnter: () => console.log('image started expanding'),
                onLeave: () => console.log('image image animation complete'),
            },
            transformOrigin: 'center center',
        }
    );

  }, [])


  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-screen bg-[#DFDFF2] overflow-hidden relative border border-red-500"
    >
      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-8 mb-2">
          <h2 className="text-lg uppercase font-general">
            welcome to prodigy
          </h2>
          <div className="uppercase mt-8 mb-20 font-general font-bold text-center text-7xl tracking-tight">
            Emabrk on the world's
            <br />
            greatest gaming adventure
          </div>

            <div className="flex justify-center items-center h-[50vh] w-full relative overflow-hidden z-50">
              <img
                ref={imgRef}
                src="/img/about.webp"
                alt="about-image"
                className="h-auto w-1/3 object-contain rounded-2xl transition-all border border-red-500 z-50"
              />
              {<p className="z-50 absolute">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quam commodi inventore incidunt minima magni.</p>}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
