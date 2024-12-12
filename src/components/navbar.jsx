import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [secondLayerExpanded, setSecondLayerExpanded] = useState(false);

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setSecondLayerExpanded(true), 200);
    } else {
      setSecondLayerExpanded(false);
      setTimeout(() => setIsMenuOpen(false), 200);
    }
  };

  return (
    <section className="w-[100vw] fixed z-[9999]">
      <Menu
        className="text-[#000] z-[9999] cursor-pointer absolute top-4 left-4"
        onClick={handleMenuClick}
      />

      <div
        className={`absolute top-0 left-0 h-[100vh] [background-image:linear-gradient(49deg,_#050C9C_0,_#3572EF_30%,_#3ABEF9_58%,_#A7E6FF_95%)] [transition:_all_1s_cubic-bezier(.77,_0,_.175,_1)] ${
          isMenuOpen ? "w-full" : "w-0"
        }`}
      ></div>

      <div
        className={`absolute top-0 left-0 h-[100vh] bg-[#ffffff] [transition:_all_1s_cubic-bezier(.77,_0,_.175,_1)] ${
          secondLayerExpanded ? "w-full" : "w-0"
        }`}
      ></div>
    </section>
  );
};

export default Navbar;
