import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [section, setSection] = useState("home");
  const [user] = useState(null);
  const navigate = useNavigate();

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

  const NAV_ITEMS =
    user?.role === "admin"
      ? [{ label: "Dashboard", id: "dashboard" }]
      : [
          { label: "Home", id: "home" },
          { label: "About", id: "about" },
          { label: "Skills", id: "skills" },
          { label: "Projects", id: "projects" },
          { label: "Contact", id: "contact" },
        ];

  const handleNavClick = (id) => {
    if (id === "dashboard") {
      navigate("/dashboard");
    } else {
      setSection(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = section;
      NAV_ITEMS.forEach((item) => {
        if (item.id !== "dashboard") {
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              current = item.id;
            }
          }
        }
      });
      setSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [NAV_ITEMS]);

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex items-center justify-between fixed top-0 left-0 z-50 backdrop-blur bg-black/40">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-semibold text-white">
          Alve<span className="text-indigo-400">.</span>
        </div>
        <div className="hidden md:flex gap-6 ml-8 text-sm opacity-90">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`hover:text-indigo-300 ${
                section === item.id
                  ? "text-indigo-400 font-semibold"
                  : "text-white"
              }`}
            >
              {item.label}
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
              className="text-white flex gap-2 items-center text-sm opacity-90 hover:opacity-100"
            >
              {s.icon}
              {s.name}
            </a>
          ))}
        </div>
        {!user && (
          <button className="items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg">
            Resume
          </button>
        )}
      </div>
    </nav>
  );
}
