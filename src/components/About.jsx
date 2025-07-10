import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Varun Aaditya, Detail-oriented Computer Science graduate with a strong foundation in web development, AI-assisted 
        coding, and database management. Skilled in designing and optimizing interactive, user-friendly 
        digital experiences to enhance efficiency and innovation. Eager to apply technical expertise, problem
        solving abilities, and creativity in a dynamic work environment. A proactive learner committed to 
        continuous skill development and meaningful contributions across industries.
      </motion.p>

     <button
  style={{ boxShadow: "0 4px 16px rgba(255,255,255,0.4)"
}}
  className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md border-2 border-white/80 font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/1-aczPjC_iRDf1u5DwkWUrJ_WYL8-GH8s/view?usp=drivesdk ",
      "_blank"
    )
  }
>
  <span className="font-bold">RESUME</span>
</button>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
