"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import React from "react";
import Image from "next/image";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  index: number;
  handleClick: (index: number) => void;
  active: number;
}
const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  index,
  handleClick,
  active,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === index + 1
          ? "lg:flex-[3.5] flex-[10]"
          : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(index + 1)}
    >
      <Image
        src={image}
        alt={name}
        width={800}
        height={800}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== index + 1 ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {name}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="text-lg font-bold ">{name}</h2>
          <p className="">{role}</p>
        </div>
      )}
    </motion.div>
  );
};

export default TeamCard;
