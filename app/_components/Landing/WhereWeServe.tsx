"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const WhereWeServe = () => {
  return (
    <section className="py-16 bg-[#444444]">
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container"
      >
        <div className="flex md:flex-row flex-col items-center gap-8 justify-between">
          <h1 className="md:text-5xl text-4xl font-bold md:leading-normal leading-snug">
            WHERE WE <br className="md:inline-block hidden" /> SERVE
          </h1>
          <p className="md:text-3xl text-2xl md:w-1/2 w-full md:leading-snug md:text-start text-center">
            We combine global reach with local expertise, serving communities
            and organizations worldwide
          </p>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="md:h-[70vh] h-[50vh] w-full mt-14 relative"
        >
          <Image
            src="/images/map.png"
            alt="map"
            width={800}
            height={800}
            className="w-full h-full object-cover rounded"
          />

         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhereWeServe;
