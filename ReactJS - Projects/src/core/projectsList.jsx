export const projects = [
  // =============================
  // LEVEL 1 — REACT FOUNDATIONS
  // =============================

  {
    id: "counter",
    name: "Counter App",
    tags: ["useState", "Basics"],
    description:
      "Understand how React state updates values and re-renders the UI.",
  },
  {
    id: "ScreenBgColor",
    name: "Screen Background Color",
    tags: ["useState", "Events", "UI Control"],
    description:
      "Control the entire screen appearance using React state instead of DOM manipulation.",
  },
  {
    id: "TextMirror",
    name: "Live Text Mirror",
    tags: ["useState", "Forms"],
    description:
      "Sync user input with UI in real time using controlled components.",
  },
  {
    id: "CharCounter",
    name: "Character Counter",
    tags: ["useState", "Validation"],
    description:
      "Track text length and enforce character limits with state-driven logic.",
  },
  {
    id: "ToggleSwitch",
    name: "Toggle Switch",
    tags: ["Boolean State", "Events"],
    description: "Model binary UI behavior like on/off using boolean state.",
  },
  {
    id: "ThemePreview",
    name: "Theme Preview Box",
    tags: ["State", "Styling"],
    description:
      "Preview UI themes dynamically by switching style values from state.",
  },
  {
    id: "ClickTracker",
    name: "Click Tracker",
    tags: ["State", "Events"],
    description:
      "Count and display user interactions to understand event handling.",
  },
  {
    id: "GreetingByTime",
    name: "Greeting by Time",
    tags: ["Conditional Rendering"],
    description: "Render different UI based on time-driven conditions.",
  },
  {
    id: "ShowHideText",
    name: "Show / Hide Content",
    tags: ["Conditional Rendering"],
    description: "Control component visibility using state-based conditions.",
  },
  {
    id: "SimpleTabs",
    name: "Basic Tabs",
    tags: ["Lists", "State"],
    description: "Switch between content sections using indexed state.",
  },

  // =============================
  // LEVEL 2 — LISTS, FORMS, EFFECTS
  // =============================

  {
    id: "TodoLite",
    name: "Todo Lite",
    tags: ["Lists", "Forms", "State"],
    description:
      "Add and remove items from a list using immutable state updates.",
  },
  {
    id: "ExpenseInput",
    name: "Expense Input",
    tags: ["Forms", "Validation"],
    description: "Capture structured data using controlled form inputs.",
  },
  {
    id: "SearchFilter",
    name: "Search Filter",
    tags: ["Lists", "Derived State"],
    description:
      "Filter visible data based on user input without mutating original data.",
  },
  {
    id: "Accordion",
    name: "Accordion",
    tags: ["Conditional Rendering"],
    description: "Expand and collapse content sections using controlled state.",
  },
  {
    id: "CountdownTimer",
    name: "Countdown Timer",
    tags: ["useEffect", "Timers"],
    description: "Update UI over time using side effects and cleanup logic.",
  },
  {
    id: "Stopwatch",
    name: "Stopwatch",
    tags: ["useEffect", "Timers"],
    description: "Manage intervals correctly with React lifecycle awareness.",
  },
  {
    id: "APIStatusViewer",
    name: "API Status Viewer",
    tags: ["useEffect", "Data Fetching"],
    description: "Fetch remote data and handle loading and error states.",
  },
  {
    id: "ImageGallery",
    name: "Image Gallery",
    tags: ["Lists", "Props"],
    description: "Render reusable UI by passing structured data through props.",
  },
  {
    id: "ModalPopup",
    name: "Modal Popup",
    tags: ["Portals", "State"],
    description: "Control overlay UI elements using conditional rendering.",
  },
  {
    id: "FormValidator",
    name: "Form Validator",
    tags: ["Forms", "Validation"],
    description:
      "Validate user input before submission using state-driven rules.",
  },

  // =============================
  // LEVEL 3 — ARCHITECTURE & HOOKS
  // =============================

  {
    id: "ThemeContext",
    name: "Theme with Context API",
    tags: ["useContext", "Global State"],
    description: "Share theme state across the app without prop drilling.",
  },
  {
    id: "AuthContext",
    name: "Auth State Manager",
    tags: ["Context API", "Architecture"],
    description: "Manage authentication state globally in a React app.",
  },
  {
    id: "CartReducer",
    name: "Cart with useReducer",
    tags: ["useReducer", "State Logic"],
    description: "Handle complex state transitions using reducer patterns.",
  },
  {
    id: "MultiStepForm",
    name: "Multi-Step Form",
    tags: ["Forms", "State Machines"],
    description: "Guide users through sequential form steps with validation.",
  },
  {
    id: "NotificationSystem",
    name: "Notification System",
    tags: ["State", "UI Patterns"],
    description: "Display temporary messages triggered by app events.",
  },
  {
    id: "CustomUseFetch",
    name: "Custom useFetch Hook",
    tags: ["Custom Hooks"],
    description: "Extract reusable data-fetching logic into a custom hook.",
  },
  {
    id: "WindowResize",
    name: "Window Resize Tracker",
    tags: ["Custom Hooks", "Browser APIs"],
    description: "Respond to browser events using reusable hooks.",
  },
  {
    id: "DebouncedSearch",
    name: "Debounced Search",
    tags: ["Performance", "useEffect"],
    description: "Optimize input-heavy UI using debouncing techniques.",
  },
  {
    id: "ThemePersistence",
    name: "Persistent Theme",
    tags: ["LocalStorage", "Side Effects"],
    description: "Persist UI preferences across reloads using browser storage.",
  },
  {
    id: "KeyboardShortcuts",
    name: "Keyboard Shortcuts",
    tags: ["Accessibility", "Events"],
    description: "Enhance UX by handling global keyboard interactions.",
  },

  // =============================
  // LEVEL 4 — ROUTING & REAL APPS
  // =============================

  {
    id: "RouterBasics",
    name: "Router Basics",
    tags: ["React Router"],
    description: "Navigate between pages using declarative routing.",
  },
  {
    id: "DynamicRoutes",
    name: "Dynamic Route Pages",
    tags: ["Routing", "Params"],
    description: "Render dynamic content using route parameters.",
  },
  {
    id: "ProtectedRoutes",
    name: "Protected Routes",
    tags: ["Auth", "Routing"],
    description: "Restrict access to routes based on authentication state.",
  },
  {
    id: "DashboardLayout",
    name: "Dashboard Layout",
    tags: ["Layouts", "Outlet"],
    description: "Create reusable page layouts with nested routes.",
  },
  {
    id: "ProductSearch",
    name: "Product Search",
    tags: ["Search", "UX"],
    description:
      "Build responsive search experiences with filtering and sorting.",
  },
  {
    id: "ShoppingCart",
    name: "Shopping Cart",
    tags: ["State", "Reducers"],
    description: "Model real-world cart logic with quantities and totals.",
  },
  {
    id: "AuthSystem",
    name: "Authentication System",
    tags: ["Auth", "Security"],
    description: "Handle login, logout, and session management.",
  },
  {
    id: "RoleBasedAccess",
    name: "Role-Based Access",
    tags: ["Authorization"],
    description: "Control UI and routes based on user roles.",
  },
  {
    id: "RealtimeChatUI",
    name: "Chat UI",
    tags: ["Realtime UI"],
    description: "Design a responsive messaging interface.",
  },
  {
    id: "TaskManager",
    name: "Task Management App",
    tags: ["Architecture", "CRUD"],
    description:
      "Build a full task system with create, update, and delete flows.",
  },

  // =============================
  // LEVEL 5 — PRODUCTION THINKING
  // =============================

  {
    id: "PerformanceAudit",
    name: "Performance Optimization",
    tags: ["useMemo", "useCallback"],
    description: "Prevent unnecessary re-renders in complex component trees.",
  },
  {
    id: "ErrorBoundary",
    name: "Error Boundary",
    tags: ["Reliability"],
    description: "Gracefully handle runtime errors in React applications.",
  },
  {
    id: "DesignSystem",
    name: "Design System",
    tags: ["Scalability", "Components"],
    description: "Create reusable, consistent UI components for large apps.",
  },
  {
    id: "AdminPanel",
    name: "Admin Dashboard",
    tags: ["Architecture"],
    description: "Build data-heavy admin interfaces with reusable patterns.",
  },
  {
    id: "MERNTaskApp",
    name: "MERN Task Manager",
    tags: ["Full Stack"],
    description:
      "Integrate React with backend APIs to build a production-grade app.",
  },
];
