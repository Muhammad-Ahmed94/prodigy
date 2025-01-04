import { BsDiscord, BsGithub, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  const links = [
    { href: "https://discord.com", icon: <BsDiscord /> },
    { href: "https://x.com", icon: <BsTwitterX /> },
    { href: "https://github.com", icon: <BsGithub /> },
  ];

  return (
    <footer className="bg-voilet-300 w-screen flex py-4 text-black ">
      <div className="flex flex-col justify-between w-full px-4">
        <div className="flex items-center justify-center gap-12 mb-4">
          <img src="/prodigy.ico" alt="logo" className="h-8 w-8" />
          <div className="flex justify-center items-center gap-8">
            {links.map((item) => (
              <a href={item.href} className="hover:text-white text-2xl">
                {" "}
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center uppercase">
          <p className="">&copy; prodigy 2024. all rights reserved</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {" "}
            privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
