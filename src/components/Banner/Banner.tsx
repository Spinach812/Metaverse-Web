import BannerImg from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";
import type { PopupPlayerProps } from "../PopupPlayer/PopupPlayer";

const Banner = ({ tooglePlay }: Omit<PopupPlayerProps, "isPlay">) => {
  return (
    <>
      <div className="py-12 sm:py-0 relative">
        <div className="container min-h-155 flex-items-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8
            place-items-center"
          >
            {/* image section */}
            <div data-aos="fade-up" data-aos-once="false">
              <img
                src={BannerImg}
                alt="Banner1"
                className="relative w-full max-w-100"
              />
            </div>
            {/* context section */}
            <div className="space-y-5 lg:pr-20 relative">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                  MOVIES WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dicta est enim dolorem nulla. Illum laboriosam quasi eius enim
                deserunt distinctio porro minus mollitia iure maiores,
                necessitatibus voluptate suscipit aliquid.
              </p>
              <div className="flex gap-10">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={tooglePlay}
                  className="flex items-center gap-2"
                >
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            <div className="h-75 w-75 bg-linear-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper opacity-50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
