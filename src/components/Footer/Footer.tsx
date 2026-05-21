import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

type FooterLinksType = {
  id: number;
  title: string;
  link: string;
};

const FooterLinks: FooterLinksType[] = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div className="container">
          <div className="grid md:grid-cols-3 py-4">
            {/* company Details */}
            <div className="py-8 px-4">
              <h1
                className="sm:text-3xl text-xl font-bold
              sm:text-left text-justify mb-3 flex items-center gap-3 font-serif"
              >
                Metaverse
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                consequuntur consectetur dolor officia, nisi excepturi suscipit
                illum at, ullam id sunt deleniti illo ex a fugit. Nihil corporis
                reprehenderit sint.
              </p>
              <br />
              {/* contact section */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
              {/* social section */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
              {/* Footer Links section */}
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
