import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";
import { MdWifiCalling3 } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

function Contact() {
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
        <h1 className="para text-4xl tracking-wide">Contact me</h1>
        <div className={`border-pink mt-2 w-[5%] rounded-sm border-2 ${animate ? "expand-width" : ""}  `}
           style={{ "--target-width": "5%" }}
        >
        </div>
        <div className={`border-pink mt-1 w-[2%] rounded-sm border-2 ${animate ? "expand-width" : ""}`}     style={{ "--target-width": "2%" }} ></div>
      </div>

      <div className="mt-10 flex w-full flex-col justify-center gap-10">
        <h1 className="text-pink w-full text-center text-3xl">Get in touch </h1>
        <div className="flex justify-around text-blue-500">

          <a href="" className="">
            <MdWifiCalling3 size="2.5vw" />
          </a>
          <a href="https://github.com/AshwaniSahu27">
            <FaGithub size="2.5vw" />
          </a>
          <a href="https://www.linkedin.com/in/ashwani-sahu27/">
            <BsLinkedin size="2.5vw" />
          </a>
        
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col justify-center gap-10">
        <h1 className="text-pink w-full text-center text-3xl">
          Send me Email{" "}
        </h1>

        <form action="" className="w-full flex flex-col gap-6">
          <div className="flex w-full gap-3">
            <input
              type="text"
              name=""
              className="w-1/2 rounded-[30px] bg-[#222222] px-5 py-3"
              placeholder="Fullname"
            />
            <input
              type="email"
              name=""
              className="w-1/2 rounded-[30px] bg-[#222222] px-5 py-3"
              id=""
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="w-full rounded-[30px] bg-[#222222] px-5 py-3"
            name=""
            placeholder="Subject"
          />

          <div>
            <textarea
              name=""
              id=""
              className="w-full rounded-[30px] bg-[#222222] px-5 py-3"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="bg-pink rounded-[30px] py-1 px-8 w-fit text-xl">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
