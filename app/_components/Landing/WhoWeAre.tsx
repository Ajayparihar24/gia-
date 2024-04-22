"use client";

import React from "react";
import { motion } from "framer-motion";
import { directionVariants, fadeIn, staggerContainer } from "@/lib/motion";
import { TypingText } from "../CustomTexts";

const WhoWeAre = () => {
  return (
    <motion.section
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container py-8 flex md:items-center gap-8 md:flex-row flex-col"
    >
      <motion.img
        src="/images/whoweare.png"
        alt="whoweare"
        width={400}
        height={400}
        variants={directionVariants('left')}
        className="md:w-1/2 w-full"
      />
      <motion.div  variants={directionVariants('right')} className="md:w-1/2 w-full">
      <TypingText title="WHO WE ARE" />
        <p className="mt-4">
          Global Impact Assessment (GIA) is a global technology and consulting
          firm that provides streamlined environmental, social, human rights,
          and health impacts and outcomes assessment services. GIA&#39;s unique
          impacts and outcomes assessment approach combines a variety of data
          collection and analysis methods, including satellite technology,
          machine learning, surveys, and interviews, to provide a holistic
          assessment of the impact of projects, programs, and initiatives.
          GIA&#39;s use of technology, expertise, and global reach can save time
          and cost substantially compared to traditional impact assessment
          methods. GIA is relied on by nonprofits, governments, private
          organizations, and corporations worldwide to measure and improve the
          impact of their operations.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default WhoWeAre;
