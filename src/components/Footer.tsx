import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const links = {
    href: "https://github.com/Muhammad-Ahmed94",
    icon: <BsGithub />,
  };

  return (
    <footer className="bg-voilet-300 w-screen py-4 text-black ">
      <div className="flex justify-between items-center uppercase w-full px-4">
        <div className="flex items-center gap-2">
          <img src="/prodigy.ico" alt="logo" className="h-8 w-8" />
          <p className="">&copy; prodigy 2024. all rights reserved</p>
          <a className="hover:text-white text-2xl" href={links.href}>
            {links.icon}
          </a>
        </div>
        <div>
          <a href="#" rel="noopener noreferrer" className="hover:underline">
            {" "}
            privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
