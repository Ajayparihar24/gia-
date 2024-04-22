"use client";

import React, { useCallback, useEffect, useState } from "react";
import { menuItemsData } from "@/constants/data";
import MenuItems from "./MenuItems";
import { FiMenu } from "react-icons/fi";
import Drawer from "./Drawer";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/motion";
import Logo from "../Logo";

export type SubMenu = {
  title: string;
  url: string;
};
export type Menu = {
  title: string;
  url: string;
  submenu: SubMenu[];
};

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isDrawerShowing, setDrawerShowing] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleToggleDrawer = useCallback(() => {
    setDrawerShowing((prev) => !prev);
  }, []);

  return (
    <>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`sticky right-0 left-0 top-0  shadow-sm  z-50 ${scrolling ? "bg-black/40" :"bg-black/20"}`}
      >
        <div className="container py-4 flex items-center justify-between">
          <Logo />
          <button onClick={handleToggleDrawer} className="lg:hidden block">
            <FiMenu size={28} />
          </button>
          <nav className="lg:block hidden">
            <ul className="flex items-center gap-8 relative">
              {menuItemsData.map((menu, index) => {
                return <MenuItems items={menu as Menu} key={index} />;
              })}
            </ul>
          </nav>
        </div>
      </motion.div>
      <Drawer show={isDrawerShowing} setShow={setDrawerShowing} />
    </>
  );
};

export default Navbar;
