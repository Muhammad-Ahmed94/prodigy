import { useEffect, useRef, useState } from "react";
import { GiClick, GiHamburgerMenu } from "react-icons/gi";
import { MdMusicNote, MdMusicOff, MdClose } from "react-icons/md";
import Button from "./Button";

const Navbar = () => {
  const [playAudio, setPlayAudio] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastScrollY = useRef(0);
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

  const toggleAudio = () => {
    if (audioRef.current && audioLoaded) {
      if (!playAudio) {
        audioRef.current.play().catch(console.error);
        setPlayAudio(true);
      } else {
        audioRef.current.pause();
        setPlayAudio(false);
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide navbar on mobile when scrolling down
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 100) {
          setIsVisible(false);
          setIsMobileMenuOpen(false); // Close mobile menu when hiding
        } else if (currentScrollY < lastScrollY.current - 10) {
          setIsVisible(true);
        }
      } else {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`inset-x-0 top-0 border-none rounded-none sm:rounded-full transition-all duration-500 h-12 sm:h-14 fixed z-50 sm:inset-x-6 sm:top-4 text-white ${
          isVisible ? "translate-y-0 bg-[#2C2C2C]/95 backdrop-blur-sm" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-between items-center h-full px-4 sm:px-6">
          {/* Logo and Products */}
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <img
              src="/img/logo.png"
              alt="avatar_logo"
              height={32}
              width={32}
              className="rounded-full object-contain sm:h-10 sm:w-10"
              loading="lazy"
            />
            <div className="hidden sm:block">
              <Button title="Products" styles="bg-slate-500 text-xs sm:text-sm" icon={GiClick} />
            </div>
          </div>

          <div className="hidden md:flex justify-between items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:bg-[#64748b] hover:text-white text-sm lg:text-base hover:underline rounded-3xl transition-all ease-in-out duration-300 px-2 py-1"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Audio control and mobile menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Audio */}
            <button
              title={audioLoaded ? (playAudio ? "Pause audio" : "Play audio") : "Loading audio..."}
              onClick={toggleAudio}
              className="flex items-center p-2 hover:bg-white/10 rounded-full transition-colors"
              disabled={!audioLoaded}
            >
              <audio
                ref={audioRef}
                src="/audio/loop.mp3"
                loop
                className="hidden"
                onLoadedData={() => setAudioLoaded(true)}
                onError={() => console.error('Failed to load audio')}
              />
              {!audioLoaded ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : playAudio ? (
                <MdMusicNote className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <MdMusicOff className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>

            {/* Mobile men */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Content */}
          <div className="absolute top-16 left-4 right-4 bg-[#2C2C2C] rounded-lg p-4 shadow-xl">
            <div className="flex flex-col gap-4">
              {/* Products button for mobile */}
              <div className="pb-2 border-b border-white/10">
                <Button title="Products" styles="bg-slate-500 w-full text-sm" icon={GiClick} />
              </div>
              
              {/* Navigation items */}
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-center"
                  onClick={closeMobileMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;