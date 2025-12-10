/* =========================
   PROJECT DATA
   ========================= */
const PROJECTS = [
  { title: "Quiz Game", slug: "quiz-game", desc: "Timed multiple-choice quiz with scoring and progress.", tags: ["DOM", "timers", "state"] },
  { title: "Color Palette Generator", slug: "color-palette-generator", desc: "Generate and copy HEX palettes.", tags: ["DOM", "CSS"] },
  { title: "Drag & Drop Board", slug: "drag-drop-board", desc: "Kanban board with drag & drop.", tags: ["drag-drop", "ui"] },
  { title: "Expense Tracker", slug: "expense-tracker", desc: "Track expenses, balance, and totals.", tags: ["CRUD", "localStorage"] },
  { title: "Bookmark Saver", slug: "bookmark-saver", desc: "Store website bookmarks with tags.", tags: ["CRUD", "storage"] },
  { title: "Form Validator", slug: "form-validator", desc: "Reusable validation logic and UI.", tags: ["forms", "regex"] },
  { title: "Password Generator", slug: "password-generator", desc: "Create custom strong passwords.", tags: ["security", "random"] },
  { title: "Todo App", slug: "todo-app", desc: "Filterable, persistent todo list.", tags: ["state", "localStorage"] },
  { title: "Contact Form", slug: "contact-form", desc: "Async form with mock submit flow.", tags: ["forms", "async"] },
  { title: "Pricing Cards", slug: "pricing-cards", desc: "Pricing UI with billing toggle.", tags: ["ui", "responsive"] },
  { title: "Team Showcase", slug: "team-showcase", desc: "Team grid with profile modals.", tags: ["modal", "filter"] },
  { title: "Recipe Finder", slug: "recipe-finder", desc: "Search recipes in JSON dataset.", tags: ["search", "templates"] },
  { title: "Currency Converter", slug: "currency-converter", desc: "Convert currencies with precision.", tags: ["math"] },
  { title: "GitHub Finder", slug: "github-finder", desc: "Search GitHub profiles via API.", tags: ["fetch", "api"] },
  { title: "Custom 404 Page", slug: "custom-404", desc: "Creative error page with animation.", tags: ["design"] },
  { title: "Newsletter Signup", slug: "newsletter-signup", desc: "Signup with validation and UI states.", tags: ["forms", "ui"] },
  { title: "Image Slider", slug: "image-slider", desc: "Carousel with keyboard support.", tags: ["ui", "timers"] },
  { title: "Star Rating", slug: "star-rating", desc: "Interactive star rating component.", tags: ["component"] },
  { title: "API Caller", slug: "api-caller", desc: "Test any endpoint and view JSON.", tags: ["dev", "fetch"] },
  { title: "Random Quote", slug: "random-quote", desc: "Display random quotes.", tags: ["fetch"] },
  { title: "Markdown Previewer", slug: "markdown-previewer", desc: "Live Markdown → HTML preview.", tags: ["parser"] },
  { title: "Weather Widget", slug: "weather-widget", desc: "Weather UI with mock data.", tags: ["api", "ui"] },
  { title: "Audio Player", slug: "audio-player", desc: "Custom player UI + controls.", tags: ["media"] },
  { title: "Countdown Timer", slug: "countdown-timer", desc: "Timer + stopwatch logic.", tags: ["timers"] },
  { title: "File Uploader", slug: "file-uploader", desc: "Preview & validate files.", tags: ["file", "drag-drop"] },
  { title: "Canvas Drawing", slug: "canvas-drawing", desc: "Draw with the Canvas API.", tags: ["canvas"] },
  { title: "Flex/Grid Playground", slug: "flex-grid-playground", desc: "Experiment with CSS layouts.", tags: ["css"] },
  { title: "Tic Tac Toe", slug: "tic-tac-toe", desc: "Classic game with logic.", tags: ["game"] },
  { title: "Search Ranking Engine", slug: "search-ranking", desc: "Fuzzy search with scoring.", tags: ["algorithm"] },
  { title: "Accessible Modal", slug: "accessible-modal", desc: "Modal with focus trap.", tags: ["accessibility"] }
];

/* =========================
   DOM References
   ========================= */
const projectsContainer = document.getElementById("projects");
const searchInput = document.getElementById("project-search");
const sortToggle = document.getElementById("sort-toggle");

/* =========================
   Render Project Cards
   ========================= */
function renderList(list) {
  projectsContainer.innerHTML = "";

  list.forEach((p, idx) => {
    const number = String(idx + 1).padStart(2, "0");

    const link = document.createElement("a");
    link.className = "card";
    link.href = `projects/${p.slug}/index.html`;
    link.target = "_blank";

    const header = document.createElement("div");
    header.className = "card-header";

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = `${number}. ${p.title}`;

    const meta = document.createElement("div");
    meta.className = "card-meta";
    meta.textContent = p.tags.join(" • ");

    header.appendChild(title);
    header.appendChild(meta);

    const desc = document.createElement("div");
    desc.className = "card-desc";
    desc.textContent = p.desc;

    const tagsLine = document.createElement("div");
    tagsLine.className = "card-tags";

    p.tags.forEach(t => {
      const chip = document.createElement("span");
      chip.className = "tag";
      chip.textContent = t;
      tagsLine.appendChild(chip);
    });

    link.appendChild(header);
    link.appendChild(desc);
    link.appendChild(tagsLine);

    projectsContainer.appendChild(link);
  });
}

/* =========================
   Search
   ========================= */
let timer = null;
searchInput.addEventListener("input", e => {
  clearTimeout(timer);

  const query = e.target.value.trim().toLowerCase();

  timer = setTimeout(() => {
    if (!query) return renderList(PROJECTS);

    const filtered = PROJECTS.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query))
    );

    renderList(filtered);
  }, 150);
});

/* =========================
   Sort Toggle
   ========================= */
let isSortedAlpha = false;
sortToggle.addEventListener("click", () => {
  isSortedAlpha = !isSortedAlpha;

  sortToggle.textContent = isSortedAlpha ? "Sort: A → Z" : "Sort: Default";

  const sorted = isSortedAlpha
    ? [...PROJECTS].sort((a, b) => a.title.localeCompare(b.title))
    : PROJECTS;

  renderList(sorted);
});

/* =========================
   Start
   ========================= */
renderList(PROJECTS);

/* Press '/' to focus search */
window.addEventListener("keydown", e => {
  if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    searchInput.focus();
  }
});
