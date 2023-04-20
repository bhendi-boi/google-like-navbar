import { useState, useEffect } from "react";

const NavBar = () => {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY !== 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <nav
      className={`bg-white border-b-[1.5px] border-navbar-border font-Poppins h-16 fixed top-0 w-full px-8 flex items-center ${
        showShadow && "shadow-md"
      }`}
    >
      <h1 className="text-3xl font-semibold flex-1">Bhendi's</h1>
      <ul className="flex gap-8 font-medium text-lg items-center">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <li className="bg-neutral-900 text-white px-5 py-2 hover:bg-transparent hover:text-neutral-900 transition font-semibold cursor-pointer ring-neutral-900 ring-1">
          Signup
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
