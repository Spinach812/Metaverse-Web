import { useState } from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

type NavLinkType = {
  id: number;
  name: string;
  link: string;
};

const NavLinks: NavLinkType[] = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <div className=" text-black dark:text-white duration-300">
        <div className="container py-2 md:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="h-8" />
              <p className="text-3xl">
                VR <span className="font-bold">Word</span>
              </p>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8">
                {NavLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id}>
                      <a
                        href={link}
                        className="text-xl font-semibold 
                          hover:text-primary py-2 
                          hover:border-secondary
                          transition-colors duration-500"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                {/* DarkMode Feature */}
                <DarkMode />
              </ul>
            </nav>

            {/* {Mobile View SideBar} */}
            <div className="md:hidden block">
              <div className="flex items-center gap-4"></div>
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
