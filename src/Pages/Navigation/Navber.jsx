import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [section, setSection] = useState("home");

  const SOCIALS = [
    {
      name: "GitHub",
      href: "https://github.com/your-username",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/your-username",
      icon: <FaLinkedin />,
    },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const navigate = (to) => {
    setSection(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between fixed top-0 left-0 z-50 backdrop-blur bg-black/40">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-semibold text-white ">
          Alve<span className="text-indigo-400">.</span>
        </div>
        <div className="hidden md:flex gap-6 ml-8 text-sm opacity-90">
          {["home", "about", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => navigate(item)}
              className={`hover:text-indigo-300 ${
                section === item
                  ? "text-indigo-400 font-semibold"
                  : "text-white "
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-white flex gap-2 items-center dark:text-gray-300 text-sm opacity-90 hover:opacity-100"
            >
              {s.icon}
              {s.name}
            </a>
          ))}
        </div>
        <button className="items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg ">
          Resume
        </button>
      </div>
    </nav>
  );
}
