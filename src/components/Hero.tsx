import { /* useEffect, useRef, */ useState } from "react";
import { BiPlay } from "react-icons/bi";
import Button from "./Button";

const Hero = () => {
    const [ currentIndex, setCurrentIndex ] = useState(1);


    /* const [ playAudio, setPlayAudio ] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null> (null);
    const handleAudioPlay = () => {
        if(audioRef.current) {
            if (!playAudio) {
                audioRef.current.play()
                setPlayAudio(true)
            } else {
                audioRef.current.pause()
                setPlayAudio(false)
            }
        }
    } */


    const currentVideo = `/videos/hero-${currentIndex}.webm`;
    const changeMiniVideo = () => {
        setCurrentIndex((currentIndex % 3) + 1);
    }

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div className="z-10 relative">
        <video
          src={currentVideo}
          autoPlay
          loop
          muted
          className="object-cover w-ful h-full"
        />

        <div className="flex flex-col absolute top-0 left-0 w-full h-screen text-white p-5">
          {/* top header */}
          <div className="text-left mt-8 pl-2">
            <h1 className="text-9xl uppercase mb-2 font-zentry_regular font-bold tracking-wide">
              Prodigy
            </h1>
            <p className="mb-2 text-2xl font-semibold font-robert_regular">
              Let's get started <br />
              Immersive gaming
            </p>
            <div className="flex">
              <Button
                title="watch trailer"
                styles="bg-yellow-100"
                icon={BiPlay}
              />
            </div>
          </div>

          {/* Minivideo player */}
          <div className="flex justify-center items-center h-1/2 relative">
            <div className="h-full w-1/5 cursor-pointer" onClick={changeMiniVideo}>
              <video
                src={currentVideo}
                className="w-full object-cover scale-150 clip-hex"
                autoPlay
                loop
              />
            </div>
          </div>

          {/* header's footer part */}
          <div>
            <h1 className="text-right text-9xl uppercase font-zentry_regular font-bold tracking-wide">
              gaming
            </h1>
          </div>
          {/* <audio ref={audioRef} src="/auido/loop.mp3" loop /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
