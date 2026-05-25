import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <>
      <div className="container py-10 sm:min-h-100 sm:grid sm:place-items-center">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            data-aos="fade-up"
            className="text-2xl text-center sm:text-4xl font-semibold"
          >
            Get Started with our app
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center sm:px-20"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            saepe quas quos necessitatibus id sunt nam omnis delectus voluptas,
            repellat provident? Perspiciatis itaque eveniet provident minus ut
            sed ea magni!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#">
              <img
                data-aos="fade-up"
                data-aos-delay="700"
                src={AppStoreImg}
                alt="AppStoreImg"
                className="max-w-40 sm:max-w-30 md:max-w-50"
              />
            </a>
            <a href="#">
              <img
                data-aos="fade-up"
                data-aos-delay="700"
                src={PlayStoreImg}
                alt="PlayStoreImg"
                className="max-w-40 sm:max-w-30 md:max-w-50"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
