import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDotCircle } from "@fortawesome/free-solid-svg-icons";

function About() {
  const categorizedSkills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React.js"],
    Backend: ["Node.js", "Express.js", "Docker"],
    Databases: ["MongoDB", "PostgreSQL", "Redis"],
    "ML/AI Tools": ["Python", "NumPy", "Pandas", "scikit-learn"],
    Others: ["n8n", "Canva"],
  };

  const experiences = [
    {
      org: "Panache Digilife",
      desc: "Worked on time series analysis and modeling to build a SARIMAX model to predict AQI for the upcoming week.",
      color: "text-blue-400",
    },
    {
      org: "Suvidha Foundation",
      desc: "Built a text summarization tool for the foundation and actively participated in fundraising campaigns for underprivileged girls.",
      color: "text-yellow-400",
    },
    {
      org: "AI-CoLegion (VESIT)",
      desc: "Managed events through social media and graphic design, co-hosted a Machine Learning Bootcamp at Winter School 2025, and contributed to the club website.",
      color: "text-green-400",
    },
  ];

  return (
    <div className="flex flex-col w-screen min-h-screen bg-black px-4 md:px-12 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-wide mb-12">
        ABOUT ME
      </h1>

      <div className="flex flex-col md:flex-row gap-8 text-white">
        {/* Left Column */}
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          {/* Skills Section */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white/90">Skills</h2>
            <div className="flex flex-col gap-6">
              {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-pink-400 font-medium text-lg mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full border border-white/30 text-sm text-white/80 hover:bg-white/10 hover:text-white transition duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-center mb-4 text-white/90">Location</h2>
            <div className="flex justify-center items-center gap-3 text-white/80 text-lg hover:scale-105 transition duration-300">
              <FontAwesomeIcon icon={faLocationDot} className="text-red-400 text-2xl" />
              Mumbai, Maharashtra, India
            </div>
          </div>
        </div>

        {/* Right Column - Education + Experience */}
        <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl w-full md:w-1/2 p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col gap-8">
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-semibold text-center text-white/90 mb-6">Education</h2>
            <div className="flex flex-col gap-6 border border-dashed border-gray-500 p-4 rounded-md">
              <div className="flex gap-4 items-start">
                <FontAwesomeIcon icon={faDotCircle} className="text-green-400 mt-1 text-lg" />
                <div>
                  <p className="font-semibold text-lg text-white/90">School Secondary Certificate (SSC)</p>
                  <p className="text-white/50">St. Pius X High School, Mulund, Mumbai</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FontAwesomeIcon icon={faDotCircle} className="text-yellow-400 mt-1 text-lg" />
                <div>
                  <p className="font-semibold text-lg text-white/90">Higher Secondary Certificate (HSC)</p>
                  <p className="text-white/50">K.J. Somaiya College of Science & Commerce, Vidyavihar</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FontAwesomeIcon icon={faDotCircle} className="text-pink-400 mt-1 text-lg" />
                <div>
                  <p className="font-semibold text-lg text-white/90">
                    B.E. in Artificial Intelligence & Data Science
                  </p>
                  <p className="text-white/50">
                    Vivekanand Education Society's Institute of Technology, Chembur, Mumbai
                  </p>
                  <p className="text-sm text-white/40 mt-1">CGPA: 8.78 (Till Sem-6)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-semibold text-center text-white/90 mb-6">Experience</h2>
            <div className="flex flex-col gap-6 border border-dashed border-gray-500 p-4 rounded-md">
              {experiences.map((exp, idx) => (
                <div className="flex gap-4 items-start" key={idx}>
                  <FontAwesomeIcon icon={faDotCircle} className={`${exp.color} mt-1 text-lg`} />
                  <div>
                    <p className={`font-semibold text-lg ${exp.color}`}>{exp.org}</p>
                    <p className="text-white/60">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
