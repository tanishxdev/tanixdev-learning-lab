import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ProjectHub({ projects, openProject }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const allTags = ["all", ...new Set(projects.flatMap((p) => p.tags))];

  const filtered = projects.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === "all" || p.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className="space-y-20">
      {/* ================= HEADER ================= */}
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4 flex justify-center items-center gap-3 tracking-tight">
          <FontAwesomeIcon icon={faCode} className="text-cyan-400" />
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            React Practice Hub
          </span>
        </h1>

        <p className="text-slate-400 text-lg">
          Learn React deeply by building focused, real-world projects
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
            {projects.length} Projects
          </div>
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
            {allTags.length - 1} Categories
          </div>
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
            Beginner → Advanced
          </div>
        </div>
      </header>

      {/* ================= CATEGORY FILTER ================= */}
      <div className="flex justify-center gap-3 flex-wrap">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-5 py-2 rounded-full text-sm transition-all
              ${
                activeTag === tag
                  ? "bg-cyan-500/10 text-cyan-300 border border-cyan-400/30"
                  : "bg-white/5 text-slate-400 border border-white/10 hover:border-cyan-400/30 hover:text-cyan-300"
              }
            `}
          >
            {tag === "all" ? "All Projects" : tag}
          </button>
        ))}
      </div>

      {/* ================= SEARCH ================= */}
      <div className="flex justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects..."
          className="w-full max-w-xl px-5 py-3 rounded-xl 
                     bg-white/5 border border-white/10 
                     text-slate-200 placeholder-slate-500
                     outline-none focus:border-cyan-400/40"
        />
      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-10">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            onClick={() => openProject(p.id)}
            className="
              relative
              bg-white/5 backdrop-blur
              border border-white/10
              rounded-2xl p-6 cursor-pointer
              transition-all duration-300
              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)]
            "
          >
            {/* Card header */}
            <div className="flex justify-between items-center mb-5">
              <span className="text-cyan-400 text-sm font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300">
                {p.tags[0]}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-slate-100">
              {p.name}
            </h3>

            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              {p.description}
            </p>

            {/* Footer tags */}
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="text-center pt-20 border-t border-white/10">
        <p className="text-slate-400">
          Built for deep React learning by{" "}
          <a
            href="https://github.com/tanishxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            tanishxdev
          </a>
        </p>

        <p className="text-sm text-slate-500 mt-2">
          Each project focuses on one core engineering concept
        </p>

        <p className="text-sm mt-4">
          View full source code on{" "}
          <a
            href="https://github.com/tanishxdev/web-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default ProjectHub;
