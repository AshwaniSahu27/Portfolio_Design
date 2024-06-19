import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RiSettings2Fill } from "react-icons/ri";
import { useTheme } from "../context/themeContext";

function ChangeColor() {
  const { themeData, setThemeData } = useTheme();

  return (
    <div className="fixed right-[0px] top-[0px] flex h-28 w-40 items-center gap-2 overflow-hidden">
      <div
        className={`my-2 flex flex-col gap-3 ${themeData.isOpen ? "" : "animate"} anim`}
      >
        <p
          className={`setting z-30 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl ${themeData.isDark ? "bg-slate-700 text-white" : "bg-slate-300"} `}
          onClick={() => {
            setThemeData((prev) => ({ ...prev, isOpen: !prev.isOpen }));
          }}
        >
          <RiSettings2Fill />
        </p>
        <p
          className={`z-30 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-xl ${themeData.isDark ? "bg-slate-700 text-white" : "bg-slate-300"} `}
          onClick={() => {
            setThemeData((prev) => ({ ...prev, isDark: !prev.isDark }));
          }}
        >
          {themeData.isDark ? <MdLightMode /> : <MdDarkMode />}
          {/* &nbsp;{isDark ? "Light Mode" : "Dark Mode"} */}
        </p>
      </div>

      <div
        className={`anim flex h-[70px] w-28 flex-col items-center justify-around rounded-sm bg-slate-700 ${themeData.isOpen ? "" : "animate"}`}
      >
        <h1 className="text-white">Change Color</h1>
        <ul className="flex gap-1">
          <li
            className="h-[22px] w-[22px] cursor-pointer rounded-full"
            style={{ backgroundColor: "#ec1839" }}
            onClick={() => {
              setThemeData((prev) => ({
                ...prev,
                color: "red",
              }));
            }}
          ></li>
          <li
            className="h-[22px] w-[22px] cursor-pointer rounded-full bg-[#fa5b0f]"
            onClick={() =>
              setThemeData((prev) => ({ ...prev, color: "orange" }))
            }
          ></li>
          <li
            className="h-[22px] w-[22px] cursor-pointer rounded-full bg-[#30b985]"
            onClick={() =>
              setThemeData((prev) => ({ ...prev, color: "green" }))
            }
          ></li>

          <li
            className="h-[22px] w-[22px] cursor-pointer rounded-full bg-[#f021b2]"
            onClick={() =>
              setThemeData((prev) => ({ ...prev, color: "pink" }))
            }
          ></li>
        </ul>
      </div>
    </div>
  );
}

export default ChangeColor;
