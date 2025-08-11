import { motion } from "motion/react";
import React from "react";
import profile from "../../Assets/IMG_20250807_205654.jpg";
function Banner() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center text-white">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center py-24">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-indigo-300">
              Frontend Developer
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 ">
              Hi, I'm Iftekher Hossain Alve — a builder of delightful web
              experiences.
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              I design and build accessible, performant single-page
              applications. I love turning ideas into code and polishing UI
              micro-interactions.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg"
              >
                Download Resume
              </a>
              <a href="#projects">
                {" "}
                <button
                  onClick={() => onNavigate("projects")}
                  className="px-4 py-2 rounded-md border border-white/10"
                >
                  View Projects
                </button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <img
                src={profile}
                alt="profile"
                className="w-16 h-16 rounded-full border-2 border-indigo-400 object-cover"
              />
              <div>
                <div className="text-sm">
                  Available for freelance & full-time roles
                </div>
                <div className="text-xs opacity-80">
                  Based in Chattogram, Bangladesh
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-tr from-white/3 to-white/2 border border-white/5 backdrop-blur-md">
              <h3 className="text-lg font-semibold">Quick Info</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>Open to remote work</li>
                <li>Primary stack: React, Tailwind, Node</li>
                <li>3+ projects shipped</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Banner;
