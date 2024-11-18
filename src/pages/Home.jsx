/* eslint-disable no-unused-vars */
import Navbar from "@/components/navbar";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import EmblaCarousel from "@/components/ui/carousel";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enable smooth scrolling
      lerp: 0.05, // Adjust smoothness of the scroll
    });

    // Cleanup scroll instance on unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  const Cursor = () => {
    const cursorRef = useRef();
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const requestRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        mouseX.current = e.clientX;
        mouseY.current = e.clientY;
      };

      window.addEventListener("mousemove", handleMouseMove);

      const animate = () => {
        currentX.current += (mouseX.current - currentX.current) * 0.1;
        currentY.current += (mouseY.current - currentY.current) * 0.1;

        if (cursorRef.current) {
          cursorRef.current.style.left = `${currentX.current}px`;
          cursorRef.current.style.top = `${currentY.current}px`;
        }

        requestRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(requestRef.current);
      };
    }, []);

    return (
      <div
        ref={cursorRef}
        className="cursor fixed w-[50px] h-[50px] bg-[#ffffff] rounded-full pointer-events-none z-[9999] mix-blend-difference max-[1400px]:hidden"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    );
  };

  const slides = [
    { id: 1, content: 'Slide 1 Content' },
    { id: 2, content: 'Slide 2 Content' },
    { id: 3, content: 'Slide 3 Content' },
  ];

  const options = {
    loop: true,
  };

  return (
    <>
      <div ref={scrollRef} data-scroll>
        <Navbar></Navbar>
        <section className="h-[90vh] p-8 flex items-center justify-center max-md:p-[.5rem]">
          <div className="grid grid-cols-[repeat(4,_1fr)] grid-rows-[repeat(5,_1fr)] gap-2 h-full w-[100%] max-md:flex max-md:flex-col max-md:gap-[1rem]">
            <div className="col-span-2 row-span-3 bg-[#1e1e1e] rounded-[15px] px-4 py-[2rem] relative flex items-center">
              <h1 className="text-white text-[5rem] leading-[7rem] max-[1000px]:text-[3rem] max-lg:leading-none">
                Check out <br />
                <span className="text-[10rem] text-bold tracking-tighter max-2xl:text-[7rem] max-lg:text-[5rem] max-md:text-[3rem] text-[#5A7BFF]">
                  MULTiPLY
                </span>
              </h1>
              <ArrowUpRight className="text-black bg-[white] w-[90px] h-[90px] rounded-[9999px] absolute top-[1rem] right-[2rem] transform cursor-pointer hover:rotate-45 transition-transform duration-300 max-lg:w-[64px] max-lg:h-[64px] max-lg:px-[1rem] max-md:hidden" />
            </div>
            <div className="row-span-2 col-start-1 row-start-4 bg-fuchsia-300 rounded-[15px]"></div>
            <div className="row-span-2 col-start-2 row-start-4 bg-lime-300 rounded-[15px]"></div>
            <div className="col-span-2 row-span-5 col-start-3 row-start-1 bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('src/images/landing-page-first-image.jpg')] bg-center bg-no-repeat bg-cover rounded-[15px] max-md:h-[20vh]"></div>
          </div>
        </section>

        <section className="h-[80vh] px-4 flex flex-col gap-[5rem] items-center overflow-clip">
            <EmblaCarousel slides={slides} options={options} ></EmblaCarousel>
        </section>
      </div>

      <Cursor />
    </>
  );
}
