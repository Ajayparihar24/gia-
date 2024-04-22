"use client";

import { textContainer, textVariant2 } from "@/lib/motion";
import { motion } from "framer-motion";

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles?: string;
}) => (
  <motion.p
    variants={textContainer}
    className={`md:text-5xl text-4xl font-bold ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: any;
  textStyles?: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
