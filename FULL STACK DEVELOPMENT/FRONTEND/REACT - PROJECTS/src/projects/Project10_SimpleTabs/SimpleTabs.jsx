import { useState } from "react";
import "./SimpleTabs.css";

function SimpleTabs() {
  // Step 1: Define tab data
  const tabs = [
    { title: "Home", content: "Welcome to Home Page" },
    { title: "About", content: "This is About section" },
    { title: "Contact", content: "Contact us at example@mail.com" },
  ];

  // Step 2: Track active tab index
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <h2>Simple Tabs</h2>

      {/* Step 3: Render tab buttons */}
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            // Step 4: Update active tab
            onClick={() => setActiveTab(index)}
            // Step 6: Highlight active tab
            className={activeTab === index ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Step 5: Show active content */}
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}

export default SimpleTabs;
