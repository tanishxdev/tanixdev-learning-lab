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
  {
    id: "ColorBoxApp",
    name: "Color Box Application",
    tags: ["useState", "Lists"],
    description:
      "Display multiple boxes with different colors assigned to each of them.",
  },
  {
    id: "GuessNumber",
    name: "Guess The Number",
    tags: ["useState", "Game Logic"],
    description:
      "Play a simple number guessing game against computer to test your luck.",
  },
  {
    id: "WordLetterCounter",
    name: "Word and Letter Counter",
    tags: ["useState", "String Manipulation"],
    description:
      "Count words and letters in text input to understand string operations.",
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
  {
    id: "FormFilling",
    name: "Form Filling",
    tags: ["Forms", "Validation"],
    description:
      "Implement form validation techniques as a template for websites.",
  },
  {
    id: "SurveyWebsite",
    name: "Survey Website",
    tags: ["Forms", "Data Collection"],
    description:
      "Build essential elements for a survey website with multi-step forms.",
  },
  {
    id: "PasswordValidator",
    name: "Password Validator",
    tags: ["Forms", "Security"],
    description:
      "Check password strength to ensure secure user authentication.",
  },
  {
    id: "CardNumberValidator",
    name: "Card Number Validator",
    tags: ["Forms", "Validation"],
    description:
      "Authenticate credit card numbers for payment processing systems.",
  },
  {
    id: "BMICalculator",
    name: "BMI Calculator",
    tags: ["Forms", "Calculations"],
    description: "Calculate Body Mass Index to determine fitness levels.",
  },
  {
    id: "NumberFormatConverter",
    name: "Number Format Converter",
    tags: ["useState", "Calculations"],
    description:
      "Convert numbers between different formats like binary, decimal, hex.",
  },
  {
    id: "VirtualKeyboard",
    name: "Virtual Keyboard",
    tags: ["UI Components", "Events"],
    description:
      "Create an on-screen keyboard for typing without physical keyboard.",
  },
  {
    id: "EmojiPicker",
    name: "Emoji Picker",
    tags: ["UI Components", "Lists"],
    description:
      "Build an emoji selector for messaging and emotion expression.",
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
  {
    id: "ProgressTracker",
    name: "Progress Tracker",
    tags: ["State Management", "Visualization"],
    description: "Track activity completion with progress bars and statistics.",
  },
  {
    id: "NutritionMeter",
    name: "Nutrition Meter (Calorie Tracker)",
    tags: ["useReducer", "Data Tracking"],
    description: "Track daily calorie intake and nutrition information.",
  },
  {
    id: "TaskScheduler",
    name: "Task Scheduler",
    tags: ["useReducer", "Priority Management"],
    description:
      "Manage tasks with priority levels and scheduling capabilities.",
  },
  {
    id: "ColorPaletteGenerator",
    name: "Color Palette Generator",
    tags: ["Custom Hooks", "UI Design"],
    description:
      "Generate random color palettes and copy color codes to clipboard.",
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
  {
    id: "BlogApp",
    name: "Blog App",
    tags: ["CRUD", "Content Management"],
    description:
      "Create, read, update, and delete blog posts with user authentication.",
  },
  {
    id: "PortfolioWebsite",
    name: "Portfolio Website",
    tags: ["Routing", "UI Design"],
    description:
      "Build a professional portfolio with project showcases and contact information.",
  },
  {
    id: "TravelBlog",
    name: "Travel Blog Website",
    tags: ["Routing", "Content Display"],
    description:
      "Create a blog for travel experiences with dynamic content rendering.",
  },
  {
    id: "PhotographyWebsite",
    name: "Photography Website",
    tags: ["UI Design", "Image Gallery"],
    description:
      "Build a photography portfolio with image galleries and modal displays.",
  },
  {
    id: "AppointmentSystem",
    name: "Appointment Management System",
    tags: ["Forms", "Scheduling"],
    description:
      "Schedule, manage, and view appointments with calendar integration.",
  },
  {
    id: "JobBoard",
    name: "Job Board",
    tags: ["API Integration", "Filtering"],
    description: "Search, filter and view job listings from multiple sources.",
  },
  {
    id: "CrowdfundingApp",
    name: "Crowdfunding App",
    tags: ["State Management", "Progress Tracking"],
    description:
      "Support multiple projects with fundraising goals and progress tracking.",
  },
  {
    id: "EventCalendar",
    name: "Event Calendar",
    tags: ["Calendar", "State Management"],
    description:
      "Create and manage events with date selection and calendar display.",
  },
  {
    id: "EventCountdownTimer",
    name: "Event Countdown Timer",
    tags: ["Timers", "UI Themes"],
    description:
      "Set countdown timers for events with different theme categories.",
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
  {
    id: "CalculatorApp",
    name: "Calculator App",
    tags: ["State Logic", "Calculations"],
    description:
      "Build a fully functional calculator with arithmetic operations.",
  },
  {
    id: "ExpenseTracker",
    name: "Expense Tracker",
    tags: ["State Management", "Data Visualization"],
    description:
      "Track and categorize expenses with visualization of spending patterns.",
  },
  {
    id: "PasswordManager",
    name: "Password Manager",
    tags: ["Security", "Local Storage"],
    description:
      "Securely store and manage user credentials with encryption awareness.",
  },
  {
    id: "MusicPlayer",
    name: "Music Player",
    tags: ["Audio API", "State Management"],
    description: "Play, pause, and manage music with playlist functionality.",
  },
  {
    id: "BillInvoiceGenerator",
    name: "Bill/Invoice Generator",
    tags: ["Forms", "PDF Generation"],
    description: "Create, customize, and print invoices with item management.",
  },
  {
    id: "MortgageCalculator",
    name: "Mortgage Calculator",
    tags: ["Forms", "Financial Calculations"],
    description:
      "Calculate monthly mortgage payments based on loan parameters.",
  },
  {
    id: "StorybookSetup",
    name: "Storybook Setup",
    tags: ["Component Documentation", "Development Tools"],
    description: "Set up Storybook for component documentation and testing.",
  },
  {
    id: "AspectRatioCalculator",
    name: "Aspect Ratio Calculator",
    tags: ["Image Processing", "Calculations"],
    description:
      "Calculate and preview image aspect ratios with live adjustments.",
  },
  {
    id: "ImageCompressor",
    name: "Image Compressor",
    tags: ["File Handling", "Performance"],
    description: "Compress image files with adjustable quality settings.",
  },
  {
    id: "TextConverterApp",
    name: "Text Converter",
    tags: ["String Manipulation", "Class Components"],
    description: "Convert text between different formats and cases.",
  },

  // =============================
  // LEVEL 6 — GAMES & ADVANCED PROJECTS
  // =============================

  {
    id: "RockPaperScissors",
    name: "Rock Paper Scissors",
    tags: ["Game Logic", "Random Generation"],
    description:
      "Play rock paper scissors against computer with score tracking.",
  },
  {
    id: "DiceRollingApp",
    name: "Dice Rolling",
    tags: ["Random Generation", "Animation"],
    description:
      "Roll virtual dice with animation and random number generation.",
  },
  {
    id: "CoinFlipping",
    name: "Coin Flipping",
    tags: ["Random Generation", "Animation"],
    description: "Flip a virtual coin and get random head or tail results.",
  },
  {
    id: "QuizApplication",
    name: "Quiz Application",
    tags: ["State Management", "Scoring"],
    description: "Take quizzes with multiple questions and score calculation.",
  },
  {
    id: "MemoryGame",
    name: "Memory Game",
    tags: ["Game Logic", "State Management"],
    description: "Test memory by matching pairs of cards in minimum moves.",
  },
  {
    id: "HangmanGame",
    name: "Hangman Game",
    tags: ["Word Game", "Game Logic"],
    description: "Guess words with limited attempts in classic hangman game.",
  },
  {
    id: "SnakeGame",
    name: "Snake Game",
    tags: ["Game Logic", "Keyboard Events"],
    description: "Classic snake game with score tracking and game over logic.",
  },
  {
    id: "PacManGame",
    name: "PacMan Game",
    tags: ["Game Development", "Animation"],
    description: "Build classic PacMan game with maze, pellets, and ghost AI.",
  },
  {
    id: "PingPongGame",
    name: "Ping Pong Game",
    tags: ["Game Physics", "Two Player"],
    description: "Two-player ping pong game with paddle controls and scoring.",
  },
  {
    id: "FlappyBirdGame",
    name: "Flappy Bird Game",
    tags: ["Game Physics", "Animation"],
    description:
      "Recreate Flappy Bird with gravity physics and obstacle generation.",
  },
  {
    id: "TenziesGame",
    name: "Tenzies Game",
    tags: ["Dice Game", "State Management"],
    description:
      "Fast-paced dice game where players race to roll specific combinations.",
  },
  {
    id: "WordGuessGame",
    name: "Word Guess Game",
    tags: ["Word Game", "Hints"],
    description: "Guess words with limited attempts using provided hints.",
  },
  {
    id: "15PuzzleGame",
    name: "15 Puzzle Game",
    tags: ["Puzzle", "Logic"],
    description: "Slide number tiles to solve the classic 15-puzzle game.",
  },
  {
    id: "TypingSpeedTester",
    name: "Typing Speed Tester",
    tags: ["Performance", "Timers"],
    description: "Test and improve typing speed with accuracy measurement.",
  },

  // =============================
  // LEVEL 7 — API INTEGRATION & DATA
  // =============================

  {
    id: "JokesGenerator",
    name: "Jokes Generator",
    tags: ["API Integration", "Random Data"],
    description:
      "Generate random jokes using external API with category filtering.",
  },
  {
    id: "IPAddressFinder",
    name: "IP Address Finder",
    tags: ["API Integration", "Geolocation"],
    description: "Find IP addresses and display approximate location on map.",
  },
  {
    id: "LocationFinder",
    name: "Location Finder",
    tags: ["Maps API", "Search"],
    description: "Search for locations and display them on interactive maps.",
  },
  {
    id: "DomainNameGenerator",
    name: "Domain Name Generator",
    tags: ["API Integration", "Suggestions"],
    description: "Generate domain name suggestions based on user keywords.",
  },
  {
    id: "LyricsFinder",
    name: "Lyrics Finder",
    tags: ["API Integration", "Music"],
    description: "Find song lyrics by searching for song and artist names.",
  },
  {
    id: "FoodRecipeApp",
    name: "Food Recipe App",
    tags: ["API Integration", "Search"],
    description: "Search and view recipes with ingredients and instructions.",
  },
  {
    id: "QRCodeGenerator",
    name: "QR Code Generator",
    tags: ["API Integration", "Utility"],
    description: "Generate QR codes for URLs, text, or contact information.",
  },
  {
    id: "MovieTrailerSearch",
    name: "Movie Trailer Search",
    tags: ["API Integration", "Video"],
    description: "Search for movie trailers and watch them embedded in app.",
  },
  {
    id: "AvatarGenerator",
    name: "Avatar Generator",
    tags: ["API Integration", "Random Images"],
    description: "Generate random avatars from different categories.",
  },
  {
    id: "DictionaryApplication",
    name: "Dictionary Application",
    tags: ["API Integration", "Education"],
    description: "Search for word definitions, synonyms, and pronunciation.",
  },
  {
    id: "CryptocurrencyApp",
    name: "Cryptocurrency App",
    tags: ["API Integration", "Finance"],
    description: "Track cryptocurrency prices and market data.",
  },
  {
    id: "CurrencyConverter",
    name: "Currency Converter",
    tags: ["API Integration", "Finance"],
    description:
      "Convert between different currencies with live exchange rates.",
  },
  {
    id: "MovieApp",
    name: "Movie App",
    tags: ["API Integration", "Entertainment"],
    description: "Browse movies with details, ratings, and recommendations.",
  },
  {
    id: "MemeGenerator",
    name: "Meme Generator",
    tags: ["API Integration", "Images"],
    description: "Create memes with custom text on random images.",
  },
  {
    id: "VideoToGIFConverter",
    name: "Video to GIF Converter",
    tags: ["WebAssembly", "Media Processing"],
    description: "Convert video files to GIF format using FFMPEG in browser.",
  },
  {
    id: "QuoteGenerator",
    name: "Quote Generator",
    tags: ["API Integration", "Inspiration"],
    description:
      "Generate random inspirational quotes with author information.",
  },
  {
    id: "MovieSearchEngine",
    name: "Movie Search Engine",
    tags: ["API Integration", "Search"],
    description: "Search for movies across different databases and sources.",
  },
  {
    id: "WeatherApplication",
    name: "Weather Application",
    tags: ["API Integration", "Geolocation"],
    description: "Get current weather and forecasts for any location.",
  },
  {
    id: "CountryInformation",
    name: "Country Information",
    tags: ["API Integration", "Geography"],
    description: "Get detailed information about countries around the world.",
  },
  {
    id: "NewsApp",
    name: "News App",
    tags: ["API Integration", "Content"],
    description: "Browse news articles from various categories and sources.",
  },
  {
    id: "RecipeFinder",
    name: "Recipe Finder",
    tags: ["API Integration", "Food"],
    description:
      "Find recipes based on ingredients, cuisine, or dietary restrictions.",
  },
  {
    id: "InspirationalQuoteGenerator",
    name: "Inspirational Quote Generator",
    tags: ["API Integration", "Motivation"],
    description: "Display uplifting quotes to inspire users.",
  },
  {
    id: "LanguageTranslator",
    name: "Language Translator",
    tags: ["API Integration", "Language"],
    description: "Translate text between multiple languages.",
  },

  // =============================
  // LEVEL 8 — UI/UX & CREATIVE PROJECTS
  // =============================

  {
    id: "ParallaxWebpage",
    name: "Webpage Using Parallax",
    tags: ["UI Effects", "Scroll Animations"],
    description:
      "Create immersive scrolling experiences with parallax effects.",
  },
  {
    id: "PaintApp",
    name: "Paint App",
    tags: ["Canvas API", "Drawing"],
    description:
      "Create digital drawings with color, brush size, and opacity controls.",
  },
  {
    id: "StopwatchLapMemory",
    name: "Stopwatch with Lap Memory",
    tags: ["Timers", "Data Tracking"],
    description: "Advanced stopwatch that records and displays lap times.",
  },
  {
    id: "TextConverter",
    name: "Text Converter App",
    tags: ["String Manipulation", "Formatting"],
    description: "Convert text between different formats and styles.",
  },
  {
    id: "IndiaTourismWebsite",
    name: "India Tourism Website",
    tags: ["UI Design", "Content Display"],
    description: "Showcase tourist destinations with images and information.",
  },
];
