import React from "react";
// import teacher1 from "../../assets/teacher1.png";
import teacher3 from "../../assets/teacher3.png";
import { motion } from "framer-motion";

const Teest = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-white">
            Handson<span className="text-Teal">Project Completion</span> <br /> 
          
          </div>
          <p className="text-sm leading-7 text-white mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-purple text-white rounded-lg text-sm font-bold ">
             Get Started
          </button>
        </div>
        <motion.div className="p-4 md:w-3/4 sm:row-start-1" initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }} >
          <img className="rounded-2xl" src={teacher3} alt="" />
        </motion.div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-white">
            Handson <span className="text-Teal">Project Completion</span> <br /> of
           
          </div>
          <p className="text-sm leading-7 text-white mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-purple text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <motion.div className=" p-4 md:w-3/4" initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}>
          <img className="rounded-2xl" src={teacher3} alt="" />
        </motion.div>
      </div>
    
      {/* <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div> */}
    </div>
  );
};

export default Teest;
