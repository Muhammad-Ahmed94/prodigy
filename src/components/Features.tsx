import React from "react";

interface BentoCardProps {
  source: string;
  title: string;
  details: string;
  isComingSoon?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ source, title, details, isComingSoon}) => {
  return (
    <div className="relative size-full text-feature-primary">
      <video
        src={source}
        muted
        loop={false}
        autoPlay
        className="absolute top-0 left-0 size-full object-center object-cover"
      />
      <div className="p-5 relative z-10 flex flex-col size-full">
        <div>
          <h2 className="font-bold text-3xl uppercase">{title}</h2> {/* give font style */}
          <p className="mt-3 max-w-96 text-sm md:text-base">{details}</p>
        </div>
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <section className="min-h-screen w-screen bg-black py-8">
      <div className="pl-16 mt-2 pb-20 text-left font-robert_regular">
        <h3 className="text-2xl text-feature-primary font-semibold tracking-wide">
          Step into the Prodigy Gaming Universe
        </h3>
        <p className="font-semibold text-feature-secondary">
          Immerse yourself in a dynamic and ever-evolving <br /> ecosystem where
          a diverse range of products <br /> seamlessly unite within an
          interconnected world.
        </p>
      </div>

      <div className="container mx-auto border-light relative w-full overflow-hidden rounded-md flex flex-col gap-4">
        <div className="h-96 md:h-[55vh]">
          <BentoCard
            source="/videos/feature-1.webm"
            title="Radiant"
            details="Immerse yourself in a dynamic and ever-evolving ecosystem where a diverse range of products seamlessly unite within an interconnected world."
            isComingSoon
          />
        </div>

        <div className="grid h-[125vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="relative h-[70vh] border-light overflow-hidden transition-transform duration-300 row-span-1 col-span-1 md:row-span-2 rounded-md">
            <BentoCard
              source="/videos/feature-2.webm"
              title="Zigma"
              details="an anime and gaming inspired nft collection __ prime D valorant"
            />
          </div>

          <div className="relative border-light col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ms-8 md:col-span-1">
            <BentoCard
              source="/videos/feature-3.webm"
              title="Nexus"
              details="A gamified social hub, adding a new dimension of play to your identity. Web-3 engagement "
            />
          </div>

          <div className="relative border-light col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 me-10 md:col-span-1">
            <BentoCard
              source="/videos/feature-4.webm"
              title="azule"
              details="A cross-world AI agent elevating your gameplay to be more fun and interactive"
            />
          </div>

          <div className="relative col-span-2 flex justify-center items-center gap-6 row-span-1 overflow-hidden rounded-d transition-transform duration-300 ">
            <div className="h-64 w-64 bg-voilet-300 uppercase text-white text-4xl font-bold font-robert_regular rounded-md flex justify-center items-center text-center">
              {" "}
              <h2>more coming soon</h2>
            </div>

            <div className="h-64 w-64 flex justify-center">
              <video
                src="/videos/feature-5.webm"
                className="object-contain object-center origin-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features