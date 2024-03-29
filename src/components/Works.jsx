import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, website } from "../assets";
import { video } from "../assets";
import SectionWrapper from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo,
  video_link,
}) => {
  return (
    <motion.div
      // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient h-fit p-[1px] rounded-2xl shadow-card"
    >
      <div
        className="bg-tertiary p-5 rounded-2xl 
        sm:w-[360px]  w-full"
      >
        <div className="relative  w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover
             rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3
            className="text-white font-bold 
          text-[24px]"
          >
            {name}
          </h3>
          <p
            className="mt-2 text-secondary 
          text-[14px]"
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="flex  flex-row items-center justify-between w-full m-4 ml-0">
          <div
            className="flex
           m-3 card-img_hover"
          >
            <div
              onClick={() =>
                video_link ? window.open(video_link, "_blank") : {}
              }
              className={`bg-white ${
                video_link ? "opacity-100 cursor-pointer" : "opacity-25"
              }
                w-10 h-10 rounded-full  flex
                justify-center items-center 
                `}
            >
              <img
                src={video}
                alt="video"
                className="w-6 h-6 
                object-contain"
              />
            </div>
          </div>
          <div
            className="flex
           m-3 card-img_hover"
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient 
              w-10 h-10 rounded-full flex 
              justify-center items-center 
              cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 
                object-contain"
              />
            </div>
          </div>
          <div
            className="flex
           m-3 card-img_hover"
          >
            <div
              onClick={() => window.open(demo, "_blank")}
              className="bg-white
              w-10 h-10 rounded-full flex 
              justify-center items-center 
              cursor-pointer"
            >
              <img
                src={website}
                alt="demo"
                className="  w-6 h-6
                object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
      // variants={textVariant(0.5)}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          // variants={fadeIn("right", "spring", 0.1, 1)}
          className="mt-3 text-secondary 
          text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
