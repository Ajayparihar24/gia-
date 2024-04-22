"use client";

import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import TeamCard from "./TeamCard";

const teams = [
  {
    image: "/images/teams/thiri.png",
    name: "THIRI SHWESIN AUNG",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/thomas.png",
    name: "THOMAS B. FISHER",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/robert.png",
    name: "ROBERT M. SANFORD",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/ben.png",
    name: "BEN CAVE",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/bonny.png",
    name: "BONNY P. MCCLAIN",
    role: "Geospatial Lead",
  },
];

const Team = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleActiveSlide = useCallback(
    (slide: number) => setActiveSlide(slide),
    []
  );
  return (
    <section className="py-8 bg-[#999999] container">
      <h1 className="text-black text-4xl font-semibold">
        Meet
        <br className="md:inline-block hidden" /> the leadership
        <br className="md:inline-block hidden" />
        team
      </h1>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {teams.map((team, index) => (
            <TeamCard
              key={index}
              index={index}
              handleClick={handleActiveSlide}
              active={activeSlide}
              image={team.image}
              name={team.name}
              role={team.role}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
