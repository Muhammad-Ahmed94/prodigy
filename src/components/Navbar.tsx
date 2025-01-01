import { useState } from 'react';
import { GiClick } from 'react-icons/gi';

import Button from './Button';

const Navbar = () => {
  const [playMusic, setPlayMusic] = useState(false);

  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  const musicOn = () => {
    if (!playMusic) {
      setPlayMusic(true);
      alert("music play");
    } else if (playMusic) {
      setPlayMusic(false);
      alert("music stop");
    }
  };

  return (
    <div className="fixed inset-x-0 top-4 border-none transition-all duration-700 h-8 z-50 sm:inset-x-6 bg-[#2C2C2C] bg-transparent text-white">
      <header className=" ">
        <nav className="flex justify-between gap-4">
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
                href="#"
                className="hover:bg-[#64748b] hover:text-white text-md hover:underline rounded-3xl transition-all ease-in-out duration-300 px-2 py-1"
                key={item}
              >
                {item}
              </a>
            ))}
            <button onClick={musicOn}>
              <img src="/img/play.svg" alt="music_button" className="text-white"/>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
