import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({ onOpen }) {
  const PROJECTS = [
    {
      id: 1,
      name: "Quanticoinz – Micro Tasking & Earning Platform",
      image:
        "https://raw.githubusercontent.com/Alve0/api/refs/heads/main/Screenshot%202025-08-08%20160727.png",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Auth",
      ],
      description:
        "A platform where users can complete small tasks and earn money. Features user authentication, task management, payment tracking, and a responsive design.",
      live: "https://quanticoinz.web.app/",
      github: "https://github.com/Alve0/Quanticoinz.git",
      challenges:
        "Ensuring secure transactions, preventing duplicate task submissions, and designing a scalable backend for multiple task categories.",
      improvements:
        "Integrate instant withdrawal APIs, add referral bonuses, and implement mobile app version.",
    },
    {
      id: 2,
      name: "Glowing Artifact",
      image:
        "https://raw.githubusercontent.com/Alve0/api/refs/heads/main/Screenshot%202025-08-08%20161737.png",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express",
        "React Router",
      ],
      description:
        "A web app to explore and track historical artifacts like the Rosetta Stone. Users can browse, view details, like items, and contribute their own entries.",
      live: "https://glowing-artifact.web.app/",
      github: "https://github.com/Alve0/Glowing_Artifact.git",
      challenges:
        "Designing a user-friendly interface for historical data and managing image uploads efficiently.",
      improvements:
        "Add advanced search filters, implement artifact verification, and introduce curator role with moderation tools.",
    },
    {
      id: 3,
      name: "Recipe Raza – Recipe Book App",
      image:
        "https://raw.githubusercontent.com/Alve0/api/refs/heads/main/Screenshot%202025-08-08%20161759.png",
      tech: ["React", "Tailwind CSS", "Firebase", "React Router"],
      description:
        "A user-friendly recipe book app where users can manage their recipes, discover others’ recipes, like them, and add to a wishlist.",
      live: "https://recipe-raza.web.app/",
      github: "https://github.com/Alve0/Recipe_Raza.git",
      challenges:
        "Implementing wishlist and like system with Firebase while ensuring fast recipe search.",
      improvements:
        "Add video recipe uploads, implement category-based browsing, and enable offline support.",
    },
    {
      id: 4,
      name: "Portfolio Website",
      image:
        "https://raw.githubusercontent.com/Alve0/api/refs/heads/main/Screenshot%202025-08-11%20170118.png",
      tech: ["React", "Tailwind CSS", "Firebase", "React Router"],
      description:
        "An intuitive and responsive portfolio website showcasing projects and skills with dynamic content management, enabling users to explore, interact, and get inspired.",
      live: "https://your-live-link-recipe-raza.com",
      github: "https://github.com/Alve0/portfolio.git",
      challenges:
        "Seamlessly integrating Firebase for real-time data updates and user interactions, while maintaining optimal performance and smooth navigation across multiple project sections.",
      improvements:
        "Add Admin edit that can edit all the projects and add new projects, Admin can edit skills and add new skills, Admin can edit about section and add new about section.",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
