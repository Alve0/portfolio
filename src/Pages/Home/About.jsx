import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto ">
        <div className="border-1 border-gray-100 bg-white/5 p-6 rounded-lg ">
          {" "}
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300">
            I started my programming journey tinkering with HTML and CSS in high
            school. Over time I fell in love with JavaScript and React — the way
            small components compose into useful products fascinated me. These
            days I enjoy building frontend-heavy apps with clear UX: realtime
            feedback, accessible markup, and reliable performance.
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6 ">
          <div className="border-1 border-gray-100 p-6 bg-white/5 rounded-lg ">
            <h3 className="font-semibold">What I enjoy</h3>
            <p className="mt-2 text-gray-300">
              Polishing micro-interactions, improving accessibility, and
              optimizing performance. I enjoy mentoring juniors and contributing
              to open-source tools.
            </p>
          </div>
          <div className="border-1 border-gray-100 p-6 rounded-lg bg-white/5  ">
            <h3 className="font-semibold">Outside programming</h3>
            <p className="mt-2 text-gray-300">
              I like football, sketching UI ideas on paper, and playing with
              small electronics projects. I also love a strong cup of tea while
              listening to lo-fi beats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
