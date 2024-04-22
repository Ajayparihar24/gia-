"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiHomeOfficeFill } from "react-icons/ri";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-16 bg-[#333333] w-full">
      <div className="container grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-8 gap-y-10">
        <div className="space-y-4">
          <Link href="/">
            <Image
              src="/images/Logo/GIA-Logo-dark-theme.png"
              alt="logo"
              width={250}
              height={250}
            />
          </Link>
          <p>
            GIA is a global technology an consulting firm that provides
            streamlined environment, social, human rights, and health impacts
            and outcomes assessment services.
          </p>

          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href=""
              className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#666666] rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/gia_impacts"
              className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#666666] rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/global-impact-assessment"
              className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#666666] rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/globalimpactassessment"
              className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#666666] rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/globalimpactassessment"
              className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#666666] rounded-full"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        
          <div className="">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="list-none space-y-2 mt-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services/impact-assessment">Services</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/insights">Insights</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="list-none space-y-2 mt-2">
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/referrals">Referrals</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">ontact Us</h4>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+1-786-977-9908" className="flex-1">
                  +1-786-977-9908
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-blue-400" />
                <a
                  href="mailto:inquiry@globalimpactassessment.com"
                  className="flex-1 break-all"
                >
                  inquiry@globalimpactassessment.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <RiHomeOfficeFill className="text-blue-400" />
                <p>Cambridge, Massachusetts. 02138</p>
              </div>
            </div>
          </div>
   
      </div>
    </footer>
  );
};

export default Footer;
