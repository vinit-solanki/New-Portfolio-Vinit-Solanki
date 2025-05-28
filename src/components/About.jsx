import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import HTML5 from "../assets/html.png";
import CSS3 from "../assets/css.png";
import JavaScript from "../assets/js.png";
// import ReactImg from "../assets/react.png";
import CPP from "../assets/cpp.png";
import Python from "../assets/python.png";

function About() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-black">
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mt-7 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg shadow-white tracking-wide rounded-md">
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          ABOUT ME
        </span>
      </h1>

      <div className=" w-full h-full flex flex-col justify-center items-center text-white md:lg:flex-row pr-6">
        <div className="w-full h-full flex flex-col gap-y-2 p-10 md:lg:w-1/2 h-full">
          <div className="flex flex-col justify-center items-center gap-y-2 h-full border-2 border-gray-600 w-full p-3 rounded-md shadow-sm shadow-gray-300 hover:translate-y-[-2px] duration-500 hover:shadow-md shadow-gray-100">
            <div className="underline-animation text-2xl font-bold w-full text-center p-2">
              Skills
            </div>
            <div className="w-full p-4 m-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-0 gap-y-7 justify-items-center">
              <img
                width={60}
                height={50}
                className="bg-red-300 rounded-md m-1 hover:scale-110 transition duration-400 shadow-lg shadow-red-300"
                src={HTML5}
                alt="HTML"
              />
              <img
                width={60}
                height={50}
                className="bg-violet-300 rounded-md m-1 hover:scale-110 transition duration-400 shadow-lg shadow-violet-300"
                src={CSS3}
                alt="CSS"
              />
              <img
                width={60}
                height={50}
                className="bg-yellow-700 rounded-md m-1 hover:scale-110 transition duration-400 shadow-lg shadow-yellow-700"
                src={JavaScript}
                alt="JS"
              />
              <img
                width={60}
                height={50}
                className="rounded-md m-1 hover:scale-110 transition duration-400 shadow-lg shadow-blue-300"
                // src={ReactImg}
                alt="React.js"
              />
              <img
                width={60}
                height={50}
                className="bg-white bg-opacity-50 rounded-md m-1 hover:scale-110 transition duration-400 shadow-lg shadow-white"
                src={CPP}
                alt="C/C++"
              />
              <img
                width={60}
                height={50}
                className="bg-yellow-950 rounded-md m-1 hover:scale-110 transition duration-400 shadow-lg shadow-yellow-300"
                src={Python}
                alt="Python"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3 h-full border-2 border-gray-600 w-full p-4 rounded-md shadow-sm shadow-gray-300 hover:translate-y-[-2px] duration-500 hover:shadow-md shadow-gray-100">
            <div className="underline-animation text-2xl font-bold w-full text-center p-2">
              Location
            </div>
            <div className="w-full flex gap-x-4 justify-center items-center p-1 hover:scale-110 transition duration-400">
              <FontAwesomeIcon icon={faLocationDot} className="text-3xl" />
              <p className="text-xl">Mumbai, Maharashtra, India.</p>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg m-2 flex flex-col justify-center items-center p-3 md:lg:w-1/2 h-full">
          <div className="glow text-3xl font-bold w-full p-2">Education</div>
          <div className="flex flex-col gap-y-3 border-2 border-dotted border-gray-500 w-full h-full p-5 rounded-lg hover:shadow-white shadow-sm duration-500 translate-y-[-3px] mt-2">
            <div className="p-2 flex gap-x-4 text-justify items-start">
              <FontAwesomeIcon
                icon={faDotCircle}
                className="text-green-500 text-lg"
              />
              <div className="flex flex-col font-semibold">
                <p className="text-lg">School Secondary Certificate (SSC)</p>
                <p className="text-gray-400 text-md">
                  St. Pius X High School, Mulund, Mumbai
                </p>
              </div>
            </div>

            {/* HSC */}
            <div className="p-2 flex gap-x-4 text-justify items-start">
              <FontAwesomeIcon
                icon={faDotCircle}
                className="text-yellow-500 text-lg"
              />
              <div className="flex flex-col font-semibold">
                <p className="text-lg">Higher Secondary Certificate (HSC)</p>
                <p className="text-gray-400 text-md">
                  K.J. Somaiya College of Science & Commerce, Vidyavihar
                </p>
              </div>
            </div>

            {/* Bachelor's */}
            <div className="p-2 flex gap-x-4 text-justify items-start">
              <FontAwesomeIcon
                icon={faDotCircle}
                className="text-red-500 text-lg"
              />
              <div className="flex flex-col font-semibold">
                <p className="text-lg">
                  Bachelor of Engineering in A.I. & Data Science
                </p>
                <p className="text-gray-400 text-md">
                  Vivekanand Education Society's Institute of Technology,
                  Chembur, Mumbai
                </p>
                <p className="text-sm text-gray-300">CGPA: 8.78 (Till Sem-5)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
