import {
  faCode,
  faSearch,
  faFilter,
  faSort,
  faTags,
  faCodeBranch,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useMemo, useRef, useEffect } from "react";

function ProjectHub({ projects, openProject }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [showAllTags, setShowAllTags] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);
  const resultsRef = useRef(null);

  // Focus search input when typing anywhere (except in input/textarea)
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Don't focus if user is already typing in an input/textarea
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        return;
      }

      // Only focus on letters and numbers
      if (
        e.key.length === 1 &&
        /[a-zA-Z0-9]/.test(e.key) &&
        searchInputRef.current
      ) {
        e.preventDefault();
        searchInputRef.current.focus();
        setSearch((prev) => prev + e.key);
        setIsSearching(true);
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = ["all"];
    projects.forEach((p) =>
      p.tags.forEach((tag) => tags.includes(tag) || tags.push(tag)),
    );
    return tags.sort();
  }, [projects]);

  // Get visible tags (first 15 by default, all when expanded)
  const visibleTags = showAllTags ? allTags : allTags.slice(0, 15);

  // Difficulty mapping
  const getDifficulty = (tags) => {
    if (
      tags.some((t) =>
        ["Advanced", "Production", "Full Stack", "Security"].includes(t),
      )
    )
      return "advanced";
    if (
      tags.some((t) =>
        [
          "Routing",
          "API Integration",
          "Architecture",
          "State Machines",
        ].includes(t),
      )
    )
      return "intermediate";
    return "beginner";
  };

  // Sort and filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((p) => {
      const matchSearch =
        search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchTag = activeTag === "all" || p.tags.includes(activeTag);
      const matchDifficulty =
        difficultyFilter === "all" ||
        getDifficulty(p.tags) === difficultyFilter;
      return matchSearch && matchTag && matchDifficulty;
    });

    // Apply sorting
    switch (sortBy) {
      case "name-asc":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      case "difficulty-asc":
        return filtered.sort((a, b) => {
          const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 };
          return (
            diffOrder[getDifficulty(a.tags)] - diffOrder[getDifficulty(b.tags)]
          );
        });
      case "difficulty-desc":
        return filtered.sort((a, b) => {
          const diffOrder = { beginner: 2, intermediate: 1, advanced: 0 };
          return (
            diffOrder[getDifficulty(a.tags)] - diffOrder[getDifficulty(b.tags)]
          );
        });
      default:
        return filtered;
    }
  }, [projects, search, activeTag, sortBy, difficultyFilter]);

  // Statistics
  const stats = useMemo(
    () => ({
      total: projects.length,
      beginner: projects.filter((p) => getDifficulty(p.tags) === "beginner")
        .length,
      intermediate: projects.filter(
        (p) => getDifficulty(p.tags) === "intermediate",
      ).length,
      advanced: projects.filter((p) => getDifficulty(p.tags) === "advanced")
        .length,
      uniqueTags: allTags.length - 1,
    }),
    [projects, allTags],
  );

  // Difficulty icons
  const getDifficultyIcon = (difficulty) => {
    const icons = {
      beginner: "🟢",
      intermediate: "🟡",
      advanced: "🔴",
    };
    return icons[difficulty] || "⚪";
  };

  // Clear search when clicking outside if empty
  useEffect(() => {
    if (search === "") {
      setIsSearching(false);
    }
  }, [search]);

  // Scroll to results when searching
  useEffect(() => {
    if (isSearching && filteredProjects.length > 0 && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [isSearching, filteredProjects.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-slate-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 md:p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="text-xl md:text-2xl"
                    />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    React Practice Hub
                  </h1>
                </div>
                <p className="text-base md:text-lg text-slate-300">
                  Type anywhere to start searching! Master React through{" "}
                  {projects.length} curated projects.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full lg:w-auto">
                <div className="text-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400">
                    {stats.total}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">
                    Projects
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-green-400">
                    {stats.beginner}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">
                    Beginner
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400">
                    {stats.intermediate}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">
                    Intermediate
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400">
                    {stats.advanced}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">
                    Advanced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section - Always visible at top */}
        <div className="sticky top-4 z-10 mb-6">
          <div className="relative group">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors"
            />
            <input
              ref={searchInputRef}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsSearching(e.target.value.length > 0);
              }}
              placeholder="Type anywhere to search! Search by name, description, or tags..."
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 text-slate-200 placeholder-gray-500 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all text-sm md:text-base"
              onFocus={() => setIsSearching(true)}
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setIsSearching(false);
                  searchInputRef.current?.focus();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Search hint */}
          {!isSearching && (
            <div className="text-center text-sm text-gray-500 mt-3 animate-pulse">
              💡 Start typing anywhere on the page to search instantly!
            </div>
          )}
        </div>

        {/* Filters Section - Appears only when searching or always visible? Let's make it always visible but compact */}
        <div
          className={`transition-all duration-300 ${isSearching ? "mb-8" : "mb-6"}`}
        >
          {/* Quick Filters Row */}
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setDifficultyFilter("all")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                difficultyFilter === "all"
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-gray-800/60 text-slate-300 hover:bg-gray-700/60"
              }`}
            >
              <FontAwesomeIcon icon={faFilter} className="text-xs" />
              All Levels
            </button>
            <button
              onClick={() => setDifficultyFilter("beginner")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                difficultyFilter === "beginner"
                  ? "bg-green-600/80 text-white"
                  : "bg-gray-800/60 text-slate-300 hover:bg-gray-700/60"
              }`}
            >
              {getDifficultyIcon("beginner")}
              Beginner
            </button>
            <button
              onClick={() => setDifficultyFilter("intermediate")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                difficultyFilter === "intermediate"
                  ? "bg-yellow-600/80 text-white"
                  : "bg-gray-800/60 text-slate-300 hover:bg-gray-700/60"
              }`}
            >
              {getDifficultyIcon("intermediate")}
              Intermediate
            </button>
            <button
              onClick={() => setDifficultyFilter("advanced")}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                difficultyFilter === "advanced"
                  ? "bg-red-600/80 text-white"
                  : "bg-gray-800/60 text-slate-300 hover:bg-gray-700/60"
              }`}
            >
              {getDifficultyIcon("advanced")}
              Advanced
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-slate-200 text-sm appearance-none outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
              >
                <option value="default">Sort: Default</option>
                <option value="name-asc">Sort: A → Z</option>
                <option value="name-desc">Sort: Z → A</option>
                <option value="difficulty-asc">Sort: Easy → Hard</option>
                <option value="difficulty-desc">Sort: Hard → Easy</option>
              </select>
              <FontAwesomeIcon
                icon={faSort}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"
              />
            </div>
          </div>

          {/* Tags Filter - Collapsible */}
          <div
            className={`transition-all duration-300 ${isSearching ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faTags}
                  className="text-gray-500 text-sm"
                />
                <h3 className="text-sm md:text-base font-semibold text-slate-200">
                  Filter by Concept
                </h3>
              </div>
              <button
                onClick={() => setShowAllTags(!showAllTags)}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {showAllTags ? "Show Less" : `Show All (${allTags.length})`}
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {visibleTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm transition-all whitespace-nowrap ${
                    activeTag === tag
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                      : "bg-gray-800/60 text-slate-400 hover:bg-gray-700/60 hover:text-slate-300"
                  }`}
                >
                  {tag === "all" ? "All" : tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section with ref for scrolling */}
        <div ref={resultsRef} className="min-h-[300px]">
          {isSearching && filteredProjects.length === 0 ? (
            <div className="text-center py-16 md:py-24">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-300 mb-3">
                No projects found for "{search}"
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                Try different keywords or clear filters
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveTag("all");
                  setDifficultyFilter("all");
                  setIsSearching(false);
                }}
                className="mt-6 px-6 py-2 rounded-lg bg-gray-800/60 text-slate-300 hover:bg-gray-700/60 transition-all"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : filteredProjects.length > 0 ? (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-slate-200">
                  {isSearching ? `Results for "${search}"` : "All Projects"}
                  <span className="text-cyan-400 ml-2">
                    ({filteredProjects.length})
                  </span>
                </h2>
                {isSearching && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setIsSearching(false);
                    }}
                    className="text-sm text-gray-500 hover:text-slate-300 transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProjects.map((p, i) => (
                  <div
                    key={p.id}
                    onClick={() => openProject(p.id)}
                    className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 active:scale-[0.99]"
                  >
                    {/* Project Number & Difficulty */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs font-mono text-gray-500">
                        #{String(i + 1).padStart(3, "0")}
                      </div>
                      <div className="text-lg" title={getDifficulty(p.tags)}>
                        {getDifficultyIcon(getDifficulty(p.tags))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-3 line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-lg bg-gray-800/60 text-slate-300 border border-gray-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {p.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-lg bg-gray-900/60 text-gray-500">
                          +{p.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-800/50">
                      <span className="text-sm text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                        Start Building →
                      </span>
                      <div className="text-xs text-gray-500">Click to open</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Initial state - no search, show message
            <div className="text-center py-16 md:py-24">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-300 mb-3">
                Ready to Master React?
              </h3>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                Start typing anywhere on the page to search {projects.length}{" "}
                curated projects!
              </p>

              {/* Quick Start Suggestions */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                  onClick={() => {
                    setSearch("counter");
                    setIsSearching(true);
                    searchInputRef.current?.focus();
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-800/60 text-slate-300 hover:bg-gray-700/60 transition-all text-sm"
                >
                  Search: "counter"
                </button>
                <button
                  onClick={() => {
                    setSearch("todo");
                    setIsSearching(true);
                    searchInputRef.current?.focus();
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-800/60 text-slate-300 hover:bg-gray-700/60 transition-all text-sm"
                >
                  Search: "todo"
                </button>
                <button
                  onClick={() => {
                    setSearch("api");
                    setIsSearching(true);
                    searchInputRef.current?.focus();
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-800/60 text-slate-300 hover:bg-gray-700/60 transition-all text-sm"
                >
                  Search: "api"
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-400">
                Built for React developers by{" "}
                <a
                  href="https://github.com/tanishxdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 hover:underline transition-all"
                >
                  tanishxdev
                </a>
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Practice makes perfect • {projects.length} projects •{" "}
                {stats.uniqueTags} concepts
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/tanishxdev/web-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-slate-300 hover:bg-gray-700/60 hover:border-cyan-500/30 transition-all flex items-center gap-2 text-sm"
              >
                <FontAwesomeIcon icon={faCodeBranch} />
                Source Code
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center gap-2 text-sm"
              >
                <FontAwesomeIcon icon={faArrowUp} />
                Top
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ProjectHub;
