/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";

export default function Accordion({ text, title }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div
        className="border-b-[#eee] border-b-[1px] p-4 cursor-pointer max-md:p-[.5rem]"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-gray-700 text-[1.5rem] max-md:text-[1rem] w-[80%]">{title}</h1>
          <span className="text-white  px-[1rem] py-[.5rem] rounded-[5px] bg-[#1e1e1e]">{accordionOpen ? "-" : "+"}</span>
        </div>
        <div
          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${accordionOpen ? "grid-rows-[1fr] p-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="text-gray-400 overflow-hidden max-md:text-[1rem]">{text}</div>
        </div>
      </div>
    </>
  );
}