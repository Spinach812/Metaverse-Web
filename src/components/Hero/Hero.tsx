import HeroLogo from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";
import { type PopupPlayerProps } from "../PopupPlayer/PopupPlayer";

const Hero = ({ tooglePlay }: Omit<PopupPlayerProps, "isPlay">) => {
  return (
    <>
      <div
        className="py-12 sm:py-0 dark:bg-black
      dark:text-white duration-300 overflow-hidden"
      >
        <div className="container min-h-175 flex relative">
          <div
            className="grid grid-cols-1 
            sm:grid-cols-2 gap-6 place-items-center relative z-10"
          >
            <div className=" order-2 sm:order-1 space-y-5 lg:pr-20">
              <h1 data-aos="fade-up" className="text-4xl font-semibold">
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                  GAME WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dicta est enim dolorem nulla. Illum laboriosam quasi eius enim
                deserunt distinctio porro minus mollitia iure maiores,
                necessitatibus voluptate suscipit aliquid.
              </p>
              <div className="flex gap-10">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="flex items-center gap-2"
                  onClick={tooglePlay}
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroLogo} alt="HeroPng" className="max-h-150" />
            </div>
          </div>
          {/* Animated Blob */}
          <div className="h-75 w-75 bg-linear-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
