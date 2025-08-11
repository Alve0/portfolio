import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      >
        <motion.div
          initial={{ y: 20, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 20, scale: 0.98 }}
          className="w-full max-w-3xl bg-gradient-to-tr from-white/10 to-white/12 p-4 md:p-6 rounded-2xl border border-white/5 
                     max-h-screen overflow-y-auto"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold">{project.name}</h3>
              <div className="text-sm opacity-80 mt-1">
                {project.tech.join(" • ")}
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-sm rounded-md bg-indigo-600 text-white"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-sm rounded-md border border-white/10"
              >
                GitHub
              </a>
              <button
                onClick={onClose}
                className="px-3 py-1 text-sm rounded-md border border-white/10"
              >
                Close
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto max-h-[300px] object-cover rounded-md"
            />
            <div>
              <h4 className="font-semibold">Description</h4>
              <p className="mt-2 text-gray-300">{project.description}</p>

              <h4 className="font-semibold mt-4">Challenges</h4>
              <p className="mt-2 text-gray-300">{project.challenges}</p>

              <h4 className="font-semibold mt-4">Potential improvements</h4>
              <p className="mt-2 text-gray-300">{project.improvements}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
