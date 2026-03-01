import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const links = {
    href: "https://github.com/Muhammad-Ahmed94",
    icon: <BsGithub />,
  };

  return (
    <footer className="bg-voilet-300 w-screen py-4 sm:py-4 text-black">
      <div className="flex flex-col items-center gap-3 sm:gap-0 sm:flex-row sm:justify-between sm:items-center uppercase w-full px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <img
            src="/prodigy.ico"
            alt="logo"
            className="h-6 w-6 sm:h-8 sm:w-8"
          />
          <p className="text-xs sm:text-sm text-center">
            &copy; prodigy 2024. all rights reserved
          </p>
          <a className="hover:text-white text-xl sm:text-2xl" href={links.href}>
            {links.icon}
          </a>
        </div>
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-xs sm:text-sm"
          >
            privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
