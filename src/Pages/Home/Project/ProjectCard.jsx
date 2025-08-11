import { motion } from "framer-motion";

export default function ProjectCard({ p, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white/3 p-4 rounded-xl border border-white/5"
    >
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h4 className="font-semibold line-clamp-1">{p.name}</h4>
      <p className="text-sm mt-2 text-gray-300 line-clamp-2">{p.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs opacity-80">{p.tech.join(" • ")}</div>
        <button
          onClick={() => onOpen(p)}
          className="px-3 py-1 text-sm rounded-md border border-white/10"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
