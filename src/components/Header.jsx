import React from "react";
import { HiMiniHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/themeContext";

function Header() {
  const { themeData } = useTheme();

  return (
    <div
      className={` fixed h-screen w-[20%] px-5 py-16 ${themeData.isDark ? "bg-[#222222] text-white" : "bg-[#fdf9ff] text-black"} `}
    >
      <div className="absolute">
        <a
          href="/"
          className={`head-name relative h-24 w-full px-3 py-2 text-3xl ${themeData.isDark ? "text-white" : "text-black"} before:border-[#f021b2] after:border-[#f021b2] }`}
        >
          <span className="mb-2 ml-2 text-4xl">P</span>
          <span>rachi Singh</span>
        </a>
      </div>

      <div className="mt-40 flex w-full flex-col items-center justify-center gap-2">
        <NavLink
          to="/"
          className="flex items-center justify-center gap-3 border-b-[1px] border-slate-700 px-5 py-1"
        >
          <HiMiniHome size="1.5vw" />
          <h1 className="para text-[1.4vw]">Home</h1>
        </NavLink>
        <NavLink
          to="/about"
          className="flex items-center justify-center gap-3 border-b-[1px] border-slate-700 px-5 py-1"
        >
          <FaUser size="1.5vw" />
          <h1 className="para text-[1.4vw]">About</h1>
        </NavLink>
        <NavLink
          to="/projects"
          className="flex items-center justify-center gap-3 border-b-[1px] border-slate-700 px-2 py-1 pl-5"
        >
          <MdOutlineWork size="1.5vw" />
          <h1 className="para text-[1.4vw]">Projects</h1>
        </NavLink>
        <NavLink
          to="/contact"
          className="flex items-center justify-center gap-3 border-b-[1px] border-slate-700 px-2 py-1 pl-5"
        >
          <RiContactsFill size="1.5vw" />
          <h1 className="para text-[1.4vw]">Contact</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
