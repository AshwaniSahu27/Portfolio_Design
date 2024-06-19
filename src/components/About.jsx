import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext";

function About() {
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
        <h1 className="para text-4xl tracking-wide">About me</h1>
        <div
          className={`border-pink mt-2 w-[5%] rounded-sm border-2 ${animate ? "expand-width" : ""} `}
          style={{ "--target-width": "5%" }}
        ></div>
        <div
          className={`border-pink mt-1 w-[2%] rounded-sm border-2 ${animate ? "expand-width" : ""}`}
          style={{ "--target-width": "2%" }}
        ></div>
      </div>

      <div className="mt-10 flex w-full flex-col justify-center gap-10">
        <h1 className="para text-2xl">
          My name is <span className={`name text-pink`}>Prachi Singh</span>
        </h1>

        <div class="flex gap-2">
          <div class="w-[60%]">
            <div class="para flex gap-2">
              <div className="flex w-full flex-col gap-3">
                <div class="w-full border-b-2 border-slate-700 px-2 py-1 text-xl">
                  <p>
                    Birthday :{" "}
                    <span className="text-[1.5vw] text-slate-400">
                      23 April 2003
                    </span>
                  </p>
                </div>

                <div class="w-full border-b-2 border-slate-700 px-2 py-1 text-xl">
                  <p>
                    Age :{" "}
                    <span className="text-[1.5vw] text-slate-400">21</span>
                  </p>
                </div>
                <div class="w-full border-b-2 border-slate-700 px-2 py-1 text-xl">
                  <p>
                    Email :{" "}
                    <span className="text-[1.5vw] text-slate-400">
                      example@gmail.com
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3">
                <div class="w-full border-b-2 border-slate-700 px-2 py-1 text-xl">
                  <p>
                    Degree :{" "}
                    <span className="text-[1.5vw] text-slate-400">B.Tech</span>
                  </p>
                </div>
                <div class="w-full border-b-2 border-slate-700 px-2 py-1 text-xl">
                  <p>
                    Country:{" "}
                    <span className="text-[1.5vw] text-slate-400">USA</span>
                  </p>
                </div>

                <div class="mt-7 w-full border-b-2 border-slate-700 px-2 py-1 text-xl">
                  <p>
                    City :{" "}
                    <span className="text-[1.5vw] text-slate-400">
                      New York
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-16">
              <div class="buttons padd-15">
                <a
                  href="/contact"
                  data-section-index="1"
                  class="bg-pink para rounded-[30px] px-4 py-2 text-[1.3vw]"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          <div class="w-[40%]">
            <div class="row para flex flex-col gap-2">
              <div class="flex flex-col">
                <h5>HTML</h5>
                <div class="mt-0 flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[90%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 90%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">90%</div>
                </div>
              </div>

              <div class="flex flex-col">
                <h5>CSS</h5>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[75%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 75%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">75%</div>
                </div>
              </div>

              <div class="flex flex-col">
                <h5>JavaScript</h5>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[90%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 90%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">90%</div>
                </div>
              </div>

              <div class="flex flex-col">
                <h5>C</h5>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[70%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 70%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">60%</div>
                </div>
              </div>

              <div class="flex flex-col">
                <h5>C++</h5>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[65%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 70%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">70%</div>
                </div>
              </div>

              <div class="flex flex-col">
                <h5>React JS</h5>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[85%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 85%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">85%</div>
                </div>
              </div>

              <div class="flex flex-col">
                <h5>Tailwind CSS</h5>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[90%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 90%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">90%</div>
                </div>
              </div>

              <div class="flex flex-col">
                <h5>Git</h5>
                <div class="flex items-center gap-2">
                  <div class="h-2 w-full rounded-lg bg-slate-700">
                    <div
                      className={`bg-pink h-full w-[70%] rounded-lg ${animate ? "expand-width" : ""}`}
                      style={{ "--target-width": " 70%" }}
                    ></div>
                  </div>
                  <div class="skill-percent">70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
