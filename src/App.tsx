import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Quotes from "./components/Quotes/Quotes";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Features from "./components/Features/Features";
import AppStore from "./components/AppStore/AppStore";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
        <Navbar />
        <Hero />
        <Quotes />
        <Banner />
        <Banner2 />
        <Features />
        <AppStore />
      </main>
    </>
  );
};

export default App;
