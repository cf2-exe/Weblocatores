import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-tight relative">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <h1 className="font-bold text-[1.5rem]">JWS</h1>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >

          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a className="hover:text-[#007bff] text-[#007bff] block text-base">
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="javascript:void(0)" className="hover:text-[#007bff]">
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="javascript:void(0)" className="hover:text-[#007bff]">
                Feature
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="javascript:void(0)" className="hover:text-[#007bff]">
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="javascript:void(0)" className="hover:text-[#007bff]">
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a href="javascript:void(0)" className="hover:text-[#007bff]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center max-lg:ml-auto space-x-5">
          <User className="cursor-pointer font-bold" />
          <ShoppingCart className="cursor-pointer font-bold" />
        </div>
      </div>
    </header>
  );
}
