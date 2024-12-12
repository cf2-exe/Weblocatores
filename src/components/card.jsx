/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { distance } from "framer-motion";
import { Bookmark } from "lucide-react";
import {
  Building2,
  MapPin,
  Share,
  BriefcaseBusiness,
  Clock,
  DollarSign,
} from "lucide-react";
import { useState } from "react";


export default function AboutCard({text , title , styling}){
  return(
    <>
      <section className="flex flex-col items-center justify-center gap-[3rem]">
        <div className="flex flex-col gap-[1rem] items-center justify-center max-md:text-center max-md:p-[.5rem]">
          <h1 className={styling}>
            {title}
          </h1>
          <p className="text-[1.25rem] w-[70%] text-center max-md:w-full max-md:text-[1rem]">
            {text}
          </p>
        </div>

        <div className="w-[80vw] h-[60vh] bg-[#1e1e1e] rounded-[50px] max-md:w-full max-md:rounded-[15px]"></div>
      </section>
    </>
  )
}
