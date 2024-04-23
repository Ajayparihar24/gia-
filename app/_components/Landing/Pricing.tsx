"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/lib/motion";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  return (
    <motion.section
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="grid md:grid-cols-2 grid-cols-1 overflow-x-hidden">
        <Image
          src="/gifs/mastercard-ticker.gif"
          alt="mastercard"
          width={300}
          height={300}
          unoptimized={true}
          className="md:w-full object-contain w-[300px] h-[300px]"
        />
        <div className="w-full bg-[#111111] lg:px-16 md:px-14 sm:px-8 px-4 py-8 flex flex-col justify-center">
          <p className="lg:text-2xl text-xl leading-normal my-2 mb-8">
            Mastercard is working with businesses and governments around the
            world in payments and beyond to improve the lives of the billions of
            people we serve.
          </p>

          <div>
            <Link
              href="/#"
              className="bg-primary text-white py-3 rounded-full px-6  cursor-pointer border text-sm border-white hover:drop-shadow-md hover:border-2 transition duration-300 inline-block text-center"
            >
              Read about what&#39;s possible
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Pricing;
