import { type ReactNode } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

type FeaturesDataType = {
  name: string;
  icon: ReactNode;
  link: string;
  description: string;
  aosDelay: string;
};

const FeaturesData: FeaturesDataType[] = [
  {
    name: "Captivating Videos",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Safe Transactions",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Reality",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "700",
  },
];

const Features = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-150">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Why Choose Us
          </h1>
          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="text-center group space-y-3
                sm:space-y-6 sm:py-10 bg-white dark:bg-dark
                hover:bg-linear-to-r from-primary to-secondary
                hover:shadow-[0_0_40px_#007cfff0]"
              >
                <div className="grid place-items-center">{item.icon}</div>
                <h1 className="text-2xl">{item.name}</h1>
                <p>{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block text-lg font-semibold py-3
                text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
