/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import Navbar from "../src/components/Navbar";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Accordion from "@/components/accordion";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/Features";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Pricing from "@/components/Pricing";

export default function Home() {
  const [Current, SetCurrent] = useState(0);

  const prev = () =>
    SetCurrent((Current) => (Current === 0 ? slides.length - 1 : Current - 1));
  const next = () =>
    SetCurrent((Current) => (Current === slides.length - 1 ? 0 : Current + 1));

  const scroll = keyframes`
0% { transform: translateX(0%); }
100% { transform: translateX(-100%); }
`;

  const ScrollingWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    background: #000;
    padding: 1rem 0;
    white-space: nowrap;
    display: flex;
  `;

  const ScrollingContent = styled.div`
    display: flex;
    gap: 10rem;
    width: max-content;
    font-size: 2rem;
    font-weight: bold;
    color: #7db8f2;
    animation: ${scroll} 40s linear infinite;
  `;


  const techStack = [
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "Firebase",
    "Vite"
  ];

  const slides = ["SafeGuard Horizon"];

  return (
    <>
      <section className="flex flex-col">
        <Navbar></Navbar>
        <section className="flex flex-col gap-[10rem] max-md:gap-[5rem] pt-[7rem]">
          <div className="w-full h-auto flex items-center gap-[2rem] text-center flex-col px-4 max-lg:p-2 justify-center relative py-[2rem]">
            <div className="w-[80%] h-[50%] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"></div>

            <div className="flex flex-col gap-4 items-center max-xl:text-center w-full justify-center max-xl:w-full">
              <h1 className="text-[5rem] font-[600] tracking-tight leading-18 max-md:text-[2.5rem] max-md:leading-8">
                Give a new start to <br /> your buisness
              </h1>
              <p className="text-[2rem] text-[#000000] w-[85%] max-xl:w-[90%] max-md:text-[1rem]">
                An AI-native workspace that gives you an unfair advantage
              </p>
              <button className="bg-[#000] text-[#fff] py-3 w-fit px-8 rounded-[5px] cursor-pointer">
                Get started now
              </button>
            </div>

            <div className="h-[50vh] w-[70%] bg-[url('/landing.jpg')] bg-center bg-cover rounded-[20px] max-lg:w-full"></div>
          </div>

          {/* <div>
            <ScrollingWrapper>
              <ScrollingContent>
                {[...techStack, ...techStack].map((tech, index) => (
                  <div key={index} className="text-[#fff] font-bold px-6">
                    {tech}
                  </div>
                ))}
              </ScrollingContent>
            </ScrollingWrapper>
          </div> */}

          <div className="h-full p-8 flex flex-col items-center justify-center gap-[3rem] max-md:p-2">
            <div className="w-full h-fit">
              <FeaturesSection></FeaturesSection>
            </div>
          </div>

          <section className="flex flex-col items-end">
            <div className="w-[50%] p-[1rem] flex flex-col gap-[2rem] max-md:w-full">
              <h1 className="font-bold text-[3rem] tracking-tighter max-xl:text-[2rem]">
                <span className="text-[#2563EB]">
                Crafting high-performing websites
                </span>{" "}
                that drive success whenever and however you need them.
              </h1>
              <button className="bg-[#000] text-[#fff] py-3 w-fit px-8 rounded-[5px] cursor-pointer">
                Join Us
              </button>
            </div>
          </section>

          <div className="h-full p-8 flex flex-col items-center gap-[3rem] max-md:p-0">
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
          </div>

          
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
