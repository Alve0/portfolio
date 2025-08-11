import React from "react";
import Skillbar from "./Skillbar";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Skills() {
  const SKILL_CATEGORIES = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 90,
          icon: <FaReact className="text-sky-400" />,
        },
        {
          name: "JavaScript (ES6+)",
          level: 88,
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "HTML/CSS",
          level: 92,
          icon: <FaHtml5 className="text-orange-500" />,
        },
        {
          name: "Tailwind CSS",
          level: 85,
          icon: <SiTailwindcss className="text-teal-400" />,
        },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        {
          name: "Node.js",
          level: 70,
          icon: <FaNodeJs className="text-green-500" />,
        },
        {
          name: "Express",
          level: 68,
          icon: <SiExpress className="text-gray-300" />,
        },
        {
          name: "MongoDB",
          level: 66,
          icon: <SiMongodb className="text-green-400" />,
        },
        {
          name: "Git & GitHub",
          level: 86,
          icon: <FaGitAlt className="text-orange-400" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills <span className="text-indigo-400">.</span>
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-indigo-500/20 transition duration-300"
            >
              <h3 className="font-semibold mb-5 text-lg border-b border-white/10 pb-2">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="text-xl">{s.icon}</div>
                    <div className="flex-1">
                      <Skillbar name={s.name} level={s.level} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
