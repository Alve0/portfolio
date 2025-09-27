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
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
  SiPython,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiUnity,
} from "react-icons/si";

export default function Skills() {
  const SKILL_CATEGORIES = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 92,
          icon: <FaReact className="text-sky-400" />,
        },
        {
          name: "Next.js",
          level: 88,
          icon: <SiNextdotjs className="text-white" />,
        },
        {
          name: "JavaScript (ES6+)",
          level: 90,
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          level: 72,
          icon: <SiTypescript className="text-blue-500" />,
        },
        {
          name: "HTML5",
          level: 92,
          icon: <FaHtml5 className="text-orange-500" />,
        },
        {
          name: "CSS3",
          level: 90,
          icon: <FaCss3Alt className="text-blue-400" />,
        },
        {
          name: "Tailwind CSS",
          level: 88,
          icon: <SiTailwindcss className="text-teal-400" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          level: 78,
          icon: <FaNodeJs className="text-green-500" />,
        },
        {
          name: "Express.js",
          level: 76,
          icon: <SiExpress className="text-gray-300" />,
        },
        {
          name: "MongoDB",
          level: 74,
          icon: <SiMongodb className="text-green-400" />,
        },
        {
          name: "Prisma",
          level: 68,
          icon: <SiPrisma className="text-indigo-400" />,
        },
        {
          name: "Python",
          level: 60,
          icon: <SiPython className="text-yellow-600" />,
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git & GitHub",
          level: 88,
          icon: <FaGitAlt className="text-orange-400" />,
        },
        {
          name: "Firebase (Auth & Firestore)",
          level: 82,
          icon: <SiFirebase className="text-yellow-400" />,
        },
        {
          name: "Vercel",
          level: 80,
          icon: <SiVercel className="text-white" />,
        },
        {
          name: "Netlify",
          level: 76,
          icon: <SiNetlify className="text-cyan-400" />,
        },
        {
          name: "Unity",
          level: 52,
          icon: <SiUnity className="text-gray-300" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills <span className="text-indigo-400">.</span>
        </h2>

        {/* 3-column layout for Frontend / Backend / Tools */}
        <div className="mt-6 grid md:grid-cols-3 gap-8">
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
                    <div className="text-xl w-8">{s.icon}</div>
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
