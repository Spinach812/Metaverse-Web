import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Quotes from "./components/Quotes/Quotes";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Features from "./components/Features/Features";
import AppStore from "./components/AppStore/AppStore";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import PopupPlayer from "./components/PopupPlayer/PopupPlayer";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const tooglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
        <Navbar />
        <Hero tooglePlay={tooglePlay} />
        <Quotes />
        <Banner tooglePlay={tooglePlay} />
        <Banner2 tooglePlay={tooglePlay} />
        <Features />
        <AppStore />
        <Footer />

        {/* Video Player */}
        <PopupPlayer isPlay={isPlay} tooglePlay={tooglePlay} />
      </main>
    </>
  );
};

export default App;
