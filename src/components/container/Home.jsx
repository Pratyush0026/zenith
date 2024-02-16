import React from "react";
import logo5 from "../../assets/logo5.png";
import { logos } from "../../Data";

import { motion } from "framer-motion";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4 hover:text-white">
            {""}
            ZENITH
          </div>
          <motion.div className="sm:text-[2.5rem] text-[1.825rem] font-bold text-white hover:text-purple" whileInView={{x:0,opacity:1}}
    initial={{x:-300,opacity:0}}
    transition={{duration:2}}>
            Introducing Newtech, <br /> A Cutting-Edge <br /> Technology. 
          </motion.div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          People worldwide love how easy it is to design, simple & fast join us for designing your new technology.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm bg-white text-black hover:bg-purple">
              Discover
            </button>
          </div>
        </div>
        <motion.div className="md:w-[80%]" initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}>
          <img src={logo5} alt="" />
        </motion.div>
      </div>
      <div>
        <p className="text-center text-xl text-white">
          We collaborate with{" "}
          <br />
          <br />
          <span className="text-Teal">
            100+ leading projects running till now
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

