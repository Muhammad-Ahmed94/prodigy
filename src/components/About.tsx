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
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center", // When about section reaches the center.
          end: "center center", // Animation completes when section is centered.
          scrub: true,
        //   markers: true,
        },
      }
    );

    // image expanding animation
    gsap.to(imgRef.current, {
      scale: 1.5,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true,
        // pin: true, // locks the image during the animation.
        // markers: true,
        onEnter: () => console.log("image started expanding"),
        onLeave: () => console.log("image image animation complete"),
      },
      transformOrigin: "center center",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-screen bg-[#DFDFF2] overflow-hidden relative"
    >
      <div className="relative">
        <div className="flex flex-col justify-center items-center mt-8 mb-2">
          <h2 className="text-lg uppercase font-general">welcome to prodigy</h2>
          <div className="uppercase mt-8 mb-20 font-general font-bold text-center text-7xl tracking-tight">
            Embark on the world's
            <br />
            greatest gaming adventure
          </div>

          <div className="flex justify-center items-center h-[50vh] w-full relative overflow-hidden z-50 mb-8">
            <img
              ref={imgRef}
              src="/img/about.webp"
              alt="about-image"
              className="h-auto w-1/3 object-contain rounded-2xl transition-all"
            />
          </div>

          <div className="uppercase text-center font-general tracking-tight">
            <h3 className="font-bold mb-2 text-xl">
              The Metagame is here—turn your life into an epic MMORPG.
            </h3>
            <h4 className="text-[#59595a] mb-2 tracking-tight">
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
