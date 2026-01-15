// React hooks for state management and side-effects
import { useEffect, useState } from "react";

// Layout component → wraps the entire app UI (header, padding, theme, etc.)
import Layout from "./core/Layout";

// ProjectHub → displays the list of all projects (cards, filters, search)
import ProjectHub from "./core/ProjectHub";

// Static roadmap data → list of all planned projects (implemented + coming soon)
import { projects } from "./core/projectsList";

// Fallback UI shown when a project exists in roadmap but is not implemented yet
import ComingSoon from "./core/ComingSoon";

// Implemented project components
import Counter from "./projects/Project1_Counter/Counter";
import ScreenBgColor from "./projects/Project2_ScreenBgColor/ScreenBgColor";
import TextMirror from "./projects/Project3_TextMirror/TextMirror";
import CharCounter from "./projects/Project4_CharCounter/CharCounter";
import ToggleSwitch from "./projects/Project5_ToggleSwitch/ToggleSwitch";

function App() {
  /**
   * activeProject holds the ID of the currently selected project.
   *
   * - Stored in sessionStorage so page refresh does NOT reset selection
   * - Initialized lazily using a function to avoid extra reads on re-render
   */
  const [activeProject, setActiveProject] = useState(() => {
    return sessionStorage.getItem("activeProject");
  });

  /**
   * Registry of implemented projects.
   *
   * Key   → project ID (must match projectsList.js)
   * Value → actual React component
   *
   * This decouples:
   * - Project roadmap (projectsList)
   * - Project implementation (components)
   *
   * Only projects listed here are actually renderable.
   */
  const projectComponents = {
    counter: Counter,
    ScreenBgColor: ScreenBgColor,
    TextMirror: TextMirror,
    CharCounter: CharCounter,
    ToggleSwitch: ToggleSwitch,
  };

  /**
   * Resolve which project component should be rendered.
   *
   * - If project ID exists in registry → return component
   * - If not implemented → undefined / null
   *
   * This enables a graceful fallback instead of crashing the app.
   */
  const ActiveProjectComponent = activeProject
    ? projectComponents[activeProject]
    : null;

  /**
   * Persist active project selection in sessionStorage.
   *
   * Why sessionStorage?
   * - Survives page refresh
   * - Resets when tab is closed
   * - Perfect for learning dashboards
   */
  useEffect(() => {
    if (activeProject) {
      sessionStorage.setItem("activeProject", activeProject);
    } else {
      sessionStorage.removeItem("activeProject");
    }
  }, [activeProject]);

  return (
    <Layout>
      {/* 
        When NO project is selected:
        - Show the ProjectHub (project cards, search, filters)
      */}
      {!activeProject && (
        <ProjectHub projects={projects} openProject={setActiveProject} />
      )}

      {/* 
        When a project IS selected:
        - Show back button
        - Render project or fallback
      */}
      {activeProject && (
        <div>
          {/* Back button → resets activeProject and returns to hub */}
          <button
            onClick={() => setActiveProject(null)}
            className="mb-6 px-4 py-2 bg-indigo-600 rounded"
          >
            ← Back
          </button>

          {/* 
            Core rendering logic:
            - If project is implemented → render component
            - Else → show ComingSoon UI
          */}
          {ActiveProjectComponent ? (
            <ActiveProjectComponent />
          ) : (
            <ComingSoon projectId={activeProject} />
          )}
        </div>
      )}
    </Layout>
  );
}

export default App;
