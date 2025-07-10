import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`${
    styles.paddingX
  } w-full flex items-center py-5 fixed top-0 z-20 ${
    scrolled ? "bg-primary" : "bg-transparent"
  }`}
>
 <div className='w-full flex items-center'>
  <ul className='list-none hidden sm:flex flex-row gap-10 justify-center w-full'>
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`${
        active === nav.title ? "text-white" : "text-secondary"
      } hover:text-white text-[18px] font-medium cursor-pointer`}
      onClick={() => setActive(nav.title)}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>
  {/* ...mobile menu code... */}
</div>
</nav>
  );
};

export default Navbar;
