import { useRef, useState } from 'react';
import { GiClick } from 'react-icons/gi';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';

import Button from './Button';

const Navbar = () => {
  const [playAudio, setPlayAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  return (
    <div className="fixed inset-x-0 top-4 border-none rounded-full transition-all duration-700 h-9 z-50 sm:inset-x-6 bg-[#2C2C2C] text-white">
      <header className=" ">
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
    </div>
  );
};

export default Navbar;
