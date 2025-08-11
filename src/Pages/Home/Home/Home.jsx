import React, { useState } from "react";
import Banner from "../Banner";
import About from "../About";
import Skills from "../Skills/Skills";
import Projects from "../Project/Projects";
import ProjectModal from "../Project/ProjectModal";

export default function Home() {
  const [openProject, setOpenProject] = useState(null);
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects onOpen={(p) => setOpenProject(p)} />
      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </div>
  );
}
