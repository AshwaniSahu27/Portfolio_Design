import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import ChangeColor from "./ChangeColor";
import spotify from "../assets/projects/spotify.png";
import modern from "../assets/projects/modern.png";
import docs from "../assets/projects/docs.png";

function Projects() {
  const { themeData } = useTheme();

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={`ml-[20%] min-h-screen w-[80%] px-6 py-16 ${themeData.isDark ? "bg-[#151515] text-white" : "bg-[#f2f2fc] text-black"} `}
    >
      <div className="">
        <h1 className="para text-4xl tracking-wide">Projects</h1>
        <div
          className={`border-pink mt-2 w-[5%] rounded-sm border-2 ${animate ? "expand-width" : ""} `}
          style={{ "--target-width": "5%" }}
        ></div>
        <div
          className={`border-pink mt-1 w-[2%] rounded-sm border-2 ${animate ? "expand-width" : ""}`}
          style={{ "--target-width": "2%" }}
        ></div>
      </div>
      <div className="mt-20 flex flex-col gap-5">
        <h2 className="para text-2xl">My last projects :</h2>

        <div className="flex flex-wrap gap-8">
          <div
            className={`h-[50vh] w-[22vw] rounded-lg border-2 border-${themeData.color} px-3 py-2`}
          >
            <div className="h-[60%] overflow-hidden rounded-md">
              <img src={spotify} alt="" className="h-full w-full" />
            </div>
            <h1 className="mt-3 text-white">Spotify</h1>

            <div className="mt-5">
              <a href="" className="">
                <button className="rounded-md bg-blue-500 px-5 py-1">
                  Go Live
                </button>
              </a>
              <a href="" className="ml-5">
                <button className="rounded-md bg-blue-500 px-5 py-1">
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <div
            className={`h-[50vh] w-[22vw] rounded-lg border-2 border-${themeData.color} px-3 py-2`}
          >
            <div className="h-[60%] overflow-hidden rounded-md">
              <img src={docs} alt="" className="h-full w-full" />
            </div>
            <h1 className="mt-3 text-white">Docs</h1>

            <div className="mt-5">
              <a href="" className="">
                <button className="rounded-md bg-blue-500 px-5 py-1">
                  Go Live
                </button>
              </a>
              <a href="" className="ml-5">
                <button className="rounded-md bg-blue-500 px-5 py-1">
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <div
            className={`h-[50vh] w-[22vw] rounded-lg border-2 border-${themeData.color} px-3 py-2`}
          >
            <div className="h-[60%] overflow-hidden rounded-md">
              <img src={modern} alt="" className="h-full w-full" />
            </div>
            <h1 className="mt-3 text-white">Modern web</h1>

            <div className="mt-5">
              <a href="" className="">
                <button className="rounded-md bg-blue-500 px-5 py-1">
                  Go Live
                </button>
              </a>
              <a href="" className="ml-5">
                <button className="rounded-md bg-blue-500 px-5 py-1">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ChangeColor />
    </div>
  );
}

export default Projects;
