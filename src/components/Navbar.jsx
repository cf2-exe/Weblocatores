/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [secondLayerExpanded, setSecondLayerExpanded] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setSecondLayerExpanded(true), 200);
    } else {
      setSecondLayerExpanded(false);
      setTimeout(() => setIsMenuOpen(false), 200);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`w-[98%] fixed z-[10] top-0 left-0 transition-transform duration-300 px-2 mb-[2rem] bg-transparent`}>
      <div className="z-[20] flex items-center px-4 py-[1rem] w-full justify-between">
        <Menu
          className="text-[#000] z-[30] cursor-pointer w-0"
          onClick={handleMenuClick}
          size={34}
        />
        <h1 className={`text-[2.5rem] z-[0] font-[700] transition-all duration-200 tracking-tight max-md:text-[1.5rem] ${
        !scrollingUp ? "opacity-0" : "" // Hide navbar when scrolling down
      } `}>
          Webloactores
        </h1>
      </div>

      <div
        className={`absolute top-0 left-0 h-screen overflow-auto scrollbar-none z-[5] bg-[#2563EB] transition-all duration-1000 ${
          isMenuOpen ? "w-screen h-screen" : "w-0"
        }`}
      ></div>

      <div
        className={`absolute top-0 left-0 h-screen overflow-auto scrollbar-none z-[5] bg-[#ffffff] transition-all duration-1000 ${
          secondLayerExpanded ? "w-screen h-screen" : "w-0"
        }`}
      ></div>
    </section>
  );
};

export default Navbar;
