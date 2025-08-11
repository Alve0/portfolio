import React from "react";

export default function Skillbar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-white/6 rounded-full h-3">
        <div
          className="rounded-full h-3"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
          }}
        />
      </div>
    </div>
  );
}
