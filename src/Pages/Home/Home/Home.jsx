import React, { useState } from "react";
import Banner from "../Banner";
import About from "../About";
import Skills from "../Skills/Skills";
import Projects from "../Project/Projects";
import ProjectModal from "../Project/ProjectModal";
import Contact from "../Contact";

export default function Home() {
  const [openProject, setOpenProject] = useState(null);
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects onOpen={(p) => setOpenProject(p)} />
      <Contact />
      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
      <footer className="py-8 mt-8 text-center text-sm opacity-80">
        <div>
          © {new Date().getFullYear()} Iftekher Hossain Alve — Built with ❤️ &
          React
        </div>
      </footer>
    </div>
  );
}
