import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
