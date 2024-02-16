import React from "react";
import Aabout from "../../assets/Aabout.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="section" id="About">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <motion.div className="border-[3px] border-solid border-Teal rounded-lg" whileInView={{y:0,opacity:1}}
    initial={{y:-300,opacity:0}}
    transition={{duration:2}}>
          <img src={Aabout} alt="" className="p-4" />
        </motion.div>
        <div>
          <motion.div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-white" whileInView={{x:0,opacity:1}}
    initial={{x:-300,opacity:0}}
    transition={{duration:2}}>
            We provide the <br /> best{" "}
            <span className="text-Teal">online Assistance</span>
          </motion.div>
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold bg-white hover:bg-purple-500">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

