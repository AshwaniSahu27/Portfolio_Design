import React, { useEffect, useState } from "react";
import ChangeColor from "./ChangeColor.jsx";
import { useTheme } from "../context/themeContext.jsx";
import myPic from "../../public/myPic.avif";

function Home() {
  const [animate, setAnimate] = useState(false);

  const contentArray = [
    "Web Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Software Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(contentArray[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
        setCurrentContent(
          contentArray[(currentIndex + 1) % contentArray.length],
        );
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const { themeData } = useTheme();
  console.log(themeData.color);
  return (
    <div
      className={`ml-[20%] h-screen w-[80%] ${themeData.isDark ? "bg-[#151515] text-white" : "bg-[#f2f2fc] text-black"} `}
    >
      <div className="flex h-full w-[60%] flex-col items-center justify-center">
        <div className="flex flex-col gap-5 pl-8">
          <h1 className="para text-4xl">
            Hello, My name is{" "}
            <span className={`name text-pink ${animate ? "fade-in" : ""}`}>
              Prachi Singh
            </span>
          </h1>

          <h2 className="para text-2xl">
            I am a{" "}
            <span
              className={`content ${
                isAnimating ? "fade" : ""
              } text-${themeData.color}`}
            >
              {currentContent}
            </span>
          </h2>

          <p className="para">
            A Frontend Developer builds and designs the user interface of
            websites and web apps using HTML, CSS, and JavaScript, ensuring a
            seamless and responsive user experience.
          </p>
        </div>

        <button
          className={`px-3 py-2 bg-${themeData.colorStatus ? themeData.color : "[#f021b2]"} mt-32 rounded-lg`}
        >
          Download Resume
        </button>
      </div>

      <div className="absolute right-0 top-0 h-full w-[30%] px-3 py-10">
        <div className="relative h-full w-full">
          <div
            className={`image relative h-full w-full px-5 py-5 before:border-[#f021b2] after:border-[#f021b2]`}
          >
            
            <img src={myPic} alt="" className="rounded-md w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>

      <ChangeColor />
    </div>
  );
}

export default Home;
