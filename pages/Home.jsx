/* eslint-disable no-unused-vars */
import Navbar from "../src/components/Navbar";
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import Accordion from "@/components/accordion";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/Features";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Pricing from "@/components/Pricing";
import { easeIn, easeInOut, motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Coolshape } from "coolshapes-react";
import { Misc_3 } from "@/components/Shapes";
import { Flower_2 } from "@/components/Shapes";

export default function Home() {
  const [Current, SetCurrent] = useState(0);
  const { scrollYProgress } = useScroll();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVarient, setCursorVariant] = useState("default");
  const [scrollingUp, setScrollingUp] = useState(true);

  const containRef = useRef(null);
  const { scrollYProgress: horizontalScrollProgress } = useScroll({
    target: containRef,
    offset: ['start start', 'end start'],
  });

  const childrenTranslate = useTransform(horizontalScrollProgress, [0, 1], ['0%', '-100%']);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      lenisOptions: 0.01,
      class: "is-reveal"
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0, 25]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => setCursorVariant("hover");
  const handleMouseLeave = () => setCursorVariant("default");

  const variants = {
    hover: {
      scale: 1.5,
      backgroundColor: "#e91aa3",
      x: position.x,
      y: position.y
    },
    default: {
      x: position.x - 12,
      y: position.y - 12,
      scale: 1,
      backgroundColor: "#eee"
    },
    textHover: {
      height: "3rem",
      width: "4px",
      backgroundColor: "#7db8f2",
      x: position.x - 5,
      y: position.y - 5
    }
  };

  const prev = () =>
    SetCurrent((Current) => (Current === 0 ? slides.length - 1 : Current - 1));
  const next = () =>
    SetCurrent((Current) => (Current === slides.length - 1 ? 0 : Current + 1));

  const slides = ["SafeGuard Horizon"];

  //

  return (
    <>
      {/* <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-50 max-md:w-0"
        variants={variants}
        animate={cursorVarient}
        transition={{ type: "ease" }}
      /> */}
      <section
        data-scroll-container
        ref={containerRef}
        className="flex flex-col"
      >
        <section className="flex flex-col gap-[10rem] max-md:gap-[5rem] relative">
          <h1
            className={`text-[2.5rem] text-white fixed right-[2%] max-md:right-[5%] top-[3%] z-[50] font-[500] transition-all duration-200 tracking-tight max-md:text-[1.5rem] ${
              !scrollingUp ? "opacity-0" : "" // Hide navbar when scrolling down
            } `}
          >
            Webloactores
          </h1>

          <div className="w-full h-auto flex items-center gap-[5rem] text-center flex-col justify-center relative ">
            <div className="flex flex-col gap-8 max-md:h-[70vh] items-center justify-center max-xl:text-center h-[100vh] w-full max-xl:w-full bg-center bg-cover bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url('/public/close-up-of-glossy-purple-roundy-shape-4.png')]">
              {/* <Misc_3 /> 
              <Flower_2 /> */}

              <h1
                onMouseEnter={() => {
                  setCursorVariant("textHover");
                }}
                onMouseLeave={handleMouseLeave}
                className="text-[5rem] text-center font-[600] text-white tracking-tight leading-[4.5rem] max-md:text-[2.5rem] max-md:leading-8"
              >
                Give a new start to <br /> your buisness
              </h1>
              <p className="text-[2rem] text-[#fff] w-[55%] max-xl:w-[90%] max-md:text-[1rem]">
                An AI-native workspace that gives you an unfair advantage
              </p>

              <button className="bg-[#062357] text-[#94c2ff] py-3 w-fit px-8 rounded-[5px] cursor-pointer">
                Get started now
              </button>
            </div>

            {/* <motion.div className="h-[80%] w-[80%] bg-center bg-cover rounded-[20px] max-lg:w-full">
              <video
                width="1920"
                height="1080"
                type="video/mp4"
                className="rounded-[20px]"
                autoPlay
                muted
                loop
                src="public/Video_dInformations_evenementielles_Start-up_avec_Illustrations_en_Bleu_fonce_et_Vert_3.mp4"
              ></video>
            </motion.div> */}
          </div>

          <section ref={containRef} className="h-[100vh] bg-[#eee] overflow-hidden">
      {/* Horizontal Scroll Container */}
      <motion.div className="h-full w-full flex items-center justify-center overflow-hidden">
        {/* Children that Scroll Horizontally */}
        <motion.div
          style={{ x: childrenTranslate }}
          className="inline-flex h-full gap-4 items-center justify-start ml-[20%]"
        >
          <div className="w-[20rem] h-[10rem] bg-black"></div>
          <div className="w-[20rem] h-[10rem] bg-black"></div>
          <div className="w-[20rem] h-[10rem] bg-black"></div>
          <div className="w-[20rem] h-[10rem] bg-black"></div>
          <div className="w-[20rem] h-[10rem] bg-black"></div>
        </motion.div>
      </motion.div>
    </section>

          <section className="w-[100%] max-md:h-[60vh] h-[80vh] flex items-center justify-center">
            <div className="w-[90%] h-full bg-[#000] relative overflow-hidden rounded-[20px] p-4">
              <motion.div
                initial={{ scale: 0 }}
                style={{ scale }}
                transition={{ ease: "linear", duration: 0.2 }} // Reduced duration for faster scaling
                viewport={{ amount: 0 }}
                className="absolute max-md:w-[14rem] max-md:h-[14rem] w-[7rem] h-[7rem] bottom-[0rem] left-1/2 -translate-x-1/2 [background:_radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] rounded-full"
              ></motion.div>

              <motion.h1
                onMouseEnter={() => {
                  setCursorVariant("textHover");
                }}
                onMouseLeave={handleMouseLeave}
                className="font-bold text-[3rem] max-md:w-[90%] max-md:text-[1.5rem] text-[#fff] w-[50%] tracking-tighter max-xl:text-[2rem] absolute top-[10%] left-[5%]"
                initial={{ opacity: 0, translateY: 25 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ amount: 0.9 }}
                transition={{ ease: easeInOut, duration: 0.5 }}
              >
                Crafting high-performing websites that drive success whenever
                and however you need them.
              </motion.h1>

              <p className="absolute bottom-[10%] right-[5%] w-[40%] font-[500] text-[#fff] text-[1.25rem] max-md:text-[.75rem] max-md:w-[90%]">
                Let’s not create just for the sake of it. Let’s craft something
                that’s as meaningful as it is memorable. At Studio by Miyagami,
                we don’t just design; we build legacies—bold and unforgettable.
              </p>
            </div>
          </section>

          {/* <div className="h-full p-8 flex flex-col items-center gap-[3rem] max-md:p-0">
            <h1 className="text-[5rem] font-[600] tracking-tight leading-18 max-md:text-[2.5rem] max-md:leading-10 max-md:pl-2 max-md:text-center">
              Check our previous projects
            </h1>
            <div className="w-full flex flex-col gap-[1rem]">
              <div className="overflow-hidden relative w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${Current * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 h-[50vh] [background:_radial-gradient(circle_at_12.3%_19.3%,_rgb(85,_88,_218)_0%,_rgb(95,_209,_249)_100.2%);] text-white flex items-center justify-center text-4xl"
                    >
                      {slide}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4 pl-2">
                <button
                  className="bg-[#1e1e1e] text-white px-4 py-2 rounded-[5px] cursor-pointer"
                  onClick={prev}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="bg-[#1e1e1e] text-white px-4 py-2 rounded-[5px] cursor-pointer"
                  onClick={next}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div> */}

          <Pricing></Pricing>

          <section className="flex flex-col items-center justify-center gap-[3rem] max-md:p-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-[4rem] tracking-tighter max-md:text-[2rem] max-md:text-center font-[600] max-md:leading-10">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-400 max-md:text-center">
                Here are some answers for some questions that are frequently
                asked by you
              </p>
            </div>

            <div className="flex flex-col gap-[1rem] w-[60%] max-md:w-full">
              <Accordion
                title="What services does your agency offer?"
                text="We offer a full range of web development services, including custom website design, front-end and back-end development, e-commerce solutions, SEO optimization, website maintenance, and hosting support. We also specialize in integrating third-party tools, APIs, and security solutions."
              />
              <Accordion
                title="Do you specialize in any type of website"
                text="While we have experience working with all types of websites, Our team understands the specific needs of websites and ensures that your websites align with best practices and user expectations."
              />
              <Accordion
                title="Can you show examples of websites you've built?"
                text="Absolutely! You can check out our portfolio to see some of the projects we've worked on. We can also provide case studies that highlight how we've helped businesses achieve their online goals.

"
              />
              <Accordion
                title="What makes your agency different from others?"
                text="We prioritize custom solutions tailored to each client’s needs rather than a one-size-fits-all approach. Our team ensures scalability, performance, and SEO best practices while maintaining open communication throughout the project. Plus, we provide post-launch support to keep your website running smoothly."
              />
            </div>
          </section>

          <section
            className="relative h-[100vh]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <Footer></Footer>
          </section>
        </section>
      </section>
    </>
  );
}
