import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Ensure you import the CSS for styling
import Navbar from "@/components/navbar";
import { Button1 } from "@/components/button";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[10rem] max-md:gap-[3rem]">
        <Navbar></Navbar>

        <section className="flex flex-col h-[150vh] gap-[5rem]">
          <div className="h-[40vh] grid [grid-template-columns:_repeat(18,_minmax(0,_1fr));] [grid-template-rows:_repeat(1,_minmax(0,_1fr));]">
            <div className="col-start-7 col-span-11 self-end pb-8 text-6xl whitespace-pre-wrap">
              <h1 className="text-[4rem]">Build your first website</h1>
              <h1 className="text-[4rem]">today with Weblocatores</h1>
            </div>
          </div>

          <div className="h-[60vh] grid [grid-template-columns:_repeat(18,_minmax(0,_1fr));] [grid-template-rows:_repeat(1,_minmax(0,_1fr));]">
            <div className="h-full col-span-6 border-[#ebebeb] border-t-[1px] flex flex-col">
              <div className="h-[70%] p-8 flex flex-col justify-between">
                <h1 className="text-[2rem] uppercase">
                  Step up your <br /> businesses with Weblocatores
                </h1>
                <h1>
                  We specialize in creating user-focused websites that combine
                  aesthetics with functionality. With years of experience and a
                  passion for innovation, we empower businesses to thrive
                  online.
                </h1>
              </div>

              <div className="h-[30%] border-[#ebebeb] border-[1px] flex items-center p-4">
                <li>
                  <Button1 text="Start your journey today"></Button1>
                </li>
              </div>
            </div>

            <div className="h-full col-span-12 bg-center bg-cover bg-no-repeat"></div>
          </div>
        </section>
      </div>
    </>
  );
}
