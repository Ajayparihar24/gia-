"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/lib/motion";

const Banner = () => {
  const router = useRouter();
  return (
    <motion.div
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative lg:h-[80vh] md:h-[70vh] h-[60vh] -mt-20"
    >
      <motion.div
        variants={textVariant(1.2)}
        className="container flex items-center h-full absolute z-10 "
      >
        <div className="w-full py-2 relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[2px] after:bg-white after:rounded pl-8">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-[26px] font-poppins font-semibold lg:!leading-[60px] md:!leading-[50px] tracking-wide">
            We leverage the power of spatial{" "}
            <br className="lg:inline-block hidden" /> data and cutting-edge
            technologies
          </h1>
          <p className="md:text-xl sm:text-lg leading-normal my-2 mb-6">
            Streamline impact and outcome assessments for organizations,
            enabling rapid, cost- <br className="lg:inline-block hidden" />
            effective reporting and regulatory approval
          </p>

          <div>
            <button
              onClick={() => router.push("/services/impact-assessment")}
              className="bg-primary text-white h-11 px-6 text-sm rounded font-poppins cursor-pointer border-2 border-white"
            >
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
      <motion.video
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full h-full absolute inset-0 object-cover"
        autoPlay
        muted
        loop
        poster="/images/banner.png"
        width={400}
        height={400}
        preload="none"
      >
        <source
          // src="/api/video"
          src="/videos/iStock-1490250606.mp4"
          type="video/mp4"
          className="w-full h-full"
        />
      </motion.video>

      <div className="absolute inset-0 bg-black/10"></div>
    </motion.div>
  );
};

export default Banner;
