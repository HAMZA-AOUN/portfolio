import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="sm:w-[300px] w-full green-pink-gradient p-[1px] rounded-full shadow-card"
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-full py-5 px-12  
        flex justify-between  items-center "
    >
      <img
        src={icon}
        alt="web-development"
        className="w-16 h-16   object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <h2
        className={`${styles.sectionHeadText} flex flex-row items-center justify-center w-full mb-20 `}
      >
        My Skills
      </h2>

      <div className="flex lg:hidden flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <ServiceCard
            key={technology.name}
            index={technology.index}
            title={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>

      <div className="hidden lg:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
