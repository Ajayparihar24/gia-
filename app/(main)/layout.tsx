import React from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar/Navbar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
