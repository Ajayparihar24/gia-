"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { menuItemsData } from "@/constants/data";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

interface DrawerProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<DrawerProps> = ({ show, setShow }) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const variants: Variants = {
    closed: {
      left: "-50%",
      opacity: 0,
      position: "fixed",
      width: "100%",
      zIndex: "500",
      top: 0,
      height: "100vh",
      background: "black"
    },
    open: {
      left: 0,
      opacity: 1,
      position: "fixed",
      width: "100%",
      zIndex: "500",
      top: 0,
      height: "100vh",
      background: "#00000040"
    },
  };

  const handleClose = () => {
    setTimeout(() => {
      setShow(false);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setShow(false);
        });
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, setShow]);

  return (
    <motion.div
      animate={show ? "open" : "closed"}
      variants={variants}
      className=" bg-[#333333]  lg:hidden block"
    >
      <div ref={drawerRef} className="w-72 h-screen bg-[#333333]">
        <div className="py-4 px-4">
          <Logo />
        </div>

        <ul className="flex flex-col px-4 mt-8 gap-4 relative">
          {menuItemsData.map((menu, index) => {
            return (
              <li key={index} className="">
                {menu.submenu ? (
                  <>
                    <button
                      onClick={() => setDropdown((prev) => !prev)}
                      type="button"
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      {menu.title} <IoChevronDown />
                    </button>

                    {dropdown && (
                      <ul
                        onClick={(e) => e.stopPropagation()}
                        className={`space-y-4 mt-4 transition duration-300 overflow-hidden pl-4`}
                      >
                        {menu.submenu.map((submenu, index) => (
                          <li
                            key={index}
                            className="menu-items overflow-hidden"
                          >
                            <Link
                              className={`hover-underline-animation  ${
                                pathname === submenu.url ? "active" : ""
                              }`}
                              onClick={handleClose}
                              href={submenu.url}
                            >
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    className={`hover-underline-animation  ${
                      pathname === menu.url ? "active" : ""
                    }`}
                    onClick={handleClose}
                    href={menu.url}
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Drawer;
