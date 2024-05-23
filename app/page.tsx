"use client";

import Home from "@/components/Home";
import { DesktopNavbar } from "@/components/navbar/DesktopNavbar";
import NewsTicker from "@/components/NewsTicker";
import Logo from "@/components/navbar/Logo";
import React, { useEffect, useState } from "react";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Activities from "@/components/Activities";
import Footer from "@/components/footer/Footer";
import Bottom from "@/components/footer/Bottom";

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div className="max-md:hidden">
        <div className="h-20  w-full bg-[#151515] flex items-center">
          <div className="h-fit my-auto  w-fit lg:mx-20 md:mx-6">
            <Logo />
          </div>
          <div className="w-1/2 ml-28">
            <DesktopNavbar />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <div className="bg-black">
        <NewsTicker />
        <Home />
        {/* <About />
        <Contact />
        <Activities />
        <div className="flex flex-col">
          <Footer />
          <Bottom />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
