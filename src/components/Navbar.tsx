import { useEffect, useRef, useState } from "react";
import { GiClick } from "react-icons/gi";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

import Button from "./Button";

const Navbar = () => {
  const [playAudio, setPlayAudio] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const lastScrollY = useRef(0);
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  const toggleAudio = () => {
    if (audioRef.current) {
      if (!playAudio) {
        audioRef.current.play();
        setPlayAudio(true);
      } else {
        audioRef.current.pause();
        setPlayAudio(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [])

  return (
    <header
      className={`inset-x-0 top-0 border-none rounded-full transition-all duration-500 h-12 fixed z-50 sm:inset-x-6 text-white ${
        isVisible ? "translate-y-0 bg-[#2C2C2C]" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-4">
          <img
            src="/img/logo.png"
            alt="avatar_logo"
            height={40}
            width={40}
            className="rounded-full object-contain"
          />
          <Button title="Click me" styles="bg-slate-500" icon={GiClick} />
        </div>
        <div className="flex justify-between items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:bg-[#64748b] hover:text-white text-md hover:underline rounded-3xl transition-all ease-in-out duration-300 px-2 py-1"
            >
              {item}
            </a>
          ))}
          <button
            title="Play audio"
            onClick={toggleAudio}
            className="flex items-center"
          >
            <audio
              ref={audioRef}
              src="/audio/loop.mp3"
              loop
              className="hidden"
            />
            {playAudio ? (
              <MdMusicOff className="h-6 w-6" />
            ) : (
              <MdMusicNote className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
