import React from "react";
import Project from "./Project";

function Projects() {
 const projects=[
    {projectName:"DocPlus",description:"DocPlus is a web-based healthcare platform. It is designed to assist patients with Healthcare-related inquiries, Appointment booking support, General health and wellness information,",techStack:"Node.js/Express.js, MongoDB, React.js,Tailwind-CSS, JWT", link:"https://docplus-frontend.vercel.app/"},
    {projectName:"Tunist",description:"Tunist is an AI-powered music recommendation platform that suggests songs based on user emotions, delivering a personalized and dynamic audio experience.",techStack:"Node.js/Express.js, PostgreSQL, MongoDB, React.js, Redis, Cloudinary, Tailwind-CSS", link:"https://tunist-frontend.vercel.app/"},
    {projectName:"Learn-React",description:"It is website to learn react.js in a simpler way by giving examples on each topic seggregated into 2 levels.",techStack:"React, React-Docs, Tailwind-CSS", link:"https://learn-react-six-rose.vercel.app/"},
    {projectName:"OTT Platform",description:"It is an OTT platform with an unique feature of sharing queue for subscriptoin partern match-up (yet to be implemented).",techStack:"React, Tailwind-CSS", link:"https://streaming-website-zeta.vercel.app/"},
    {projectName:"Pokedex",description:"It is a pokedex with the infinite scroll of more than 10,000 pokemons and has a mini game for batteling pokemon with random allotment with the computer.",techStack:"React, Tailwind-CSS", link:"https://my-pokemons-pearl.vercel.app/"},
    {projectName:"My Drawer",description:"It is a simple website builder with predefined template giving user to drag and drop assets such as buttons,textareas,input and photos",techStack:"React, react-dnd, Tailwind-CSS", link:"https://my-drawer.vercel.app/"},
    {projectName:"Fragrance Yard Perfumes",description:"It is a simple landing pages website to showcase a local brand their perfumes",techStack:"HTML, CSS, JS", link:"https://fragrance-yard-perfume-website.vercel.app/"},
 ]
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col items-center text-white pr-4">
      <h1 className="relative text-4xl md:text-5xl lg:text-5xl font-bold text-white text-center animate-pulse">
        <span className="bg-gradient-to-r from-red-400 via-yellow-500 to-red-700 bg-clip-text text-transparent animate-text">
          MY PROJECTS
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl text-gray-700 opacity-30">
          MY PROJECTS
        </span>
      </h1>
      <div className="p-5 gap-x-4 gap-y-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{
        projects.map((p)=><Project title={p.projectName} description={p.description} techStack={p.techStack} link={p.link}/>)
    }</div>
    </div>
  );
}

export default Projects;
