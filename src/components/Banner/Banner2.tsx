import BannerImg from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = () => {
  return (
    <>
      <div className="py-12 sm:py-0 relative">
        <div className="container min-h-155 flex-items-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8
          place-items-center"
          >
            {/* context section */}
            <div className="order-1 sm:order-1 space-y-5 lg:pr-20 relative">
              <h1 className="text-4xl font-semibold">
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                  MOVIES WITH OUR PLATFORM
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dicta est enim dolorem nulla. Illum laboriosam quasi eius enim
                deserunt distinctio porro minus mollitia iure maiores,
                necessitatibus voluptate suscipit aliquid.
              </p>
              <div className="flex gap-10">
                <button className="primary-btn">Get Started</button>
                <button className="flex items-center gap-2">
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
              <div className="h-75 w-75 bg-linear-to-r from-primary to-secondary rounded-full absolute bottom-12.5 left-75 blur-3xl opacity-50"></div>
            </div>
            {/* image section */}
            <div className="order-2 sm:order-2 w-full flex justify-center items-center">
              <img
                src={BannerImg}
                alt="Banner1"
                className="relative w-full max-w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
