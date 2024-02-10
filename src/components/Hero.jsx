import { motion } from "framer-motion";

import { styles } from "../styles";
import HeroTypeWriter from "./HeroTypeWriter";
//import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className="w-full  h-screen flex-col items-center justify-center
        "
    >
      <div className="flex flex-col items-center justify-center w-full">
        <p
          className="mt-40 text-white tracking-widest 
        text-[18px] sm:text-[25px] lg:text-[30px] font-bold  cursor-pointer "
        >
          Hello it's me . .
        </p>
        <p
          className={`text-white font-extrabold leading-[90px] 
         tracking-[6px] xs:tracking-[10px] sm:tracking-[20px] lg:tracking-[30px]
         text-[30px] xs:text-[50px] sm:text-[60px] lg:text-[70px]
         
         `}
        >
          Hamza Aoun
        </p>

        <div className="flex flex-row items-center justify-center w-full flex-wrap">
          <p
            className=" text-white tracking-widest 
        text-[18px] sm:text-[25px] lg:text-[30px] font-bold  cursor-pointer "
          >
            and I am a
          </p>
        </div>
        <HeroTypeWriter
          speed={200}
          words={["Web Developer..", "UI/UX Designer..", "Freelancer.."]}
        />
      </div>

      <div
        className=" absolute top-[420px] sm:top-[480px]
 w-full flex justify-center
       items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] 
          rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full
               bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div
className={`  ${styles.paddingX} flex 
 flex-row  justify-center items-center`}
>
<div
  className="flex flex-col justify-center 
items-center mt-5"
>
  <div
    className="w-5 h-5 rounded-full 
  bg-[#915EFF]"
  />
  <div
    className="w-1 sm:h-80 h-40
   violet-gradient"
  />
</div>

</div> */
}
