Good — I understand what you want.

You **do NOT want over-engineering** and you **do NOT want blind coding**.
You want a **real engineer style design → then implementation**.

We will follow **your exact prompt structure**.

Project from your roadmap:

> **Project #3 — GitHub User Activity CLI** (External API Integration)

This is a **Phase 1 Fundamentals project**, designed to teach:

- API consumption
- CLI tools
- HTTP requests
- Data formatting
- Error handling

---

# PROJECT

Project Number: **3**
Project Name: **GitHub User Activity CLI**

---

# STEP 1 — PROJECT UNDERSTANDING

## 1.1 Understand the Project

### Simple Explanation

We will build a **Command Line Tool** that shows **recent activity of any GitHub user**.

Example:

```
$ github-activity tanishkumar
```

Output:

```
Recent activity for tanishkumar

• Pushed 3 commits to repo "node-backend"
• Opened issue #12 in "react-dashboard"
• Starred repository "vercel/next.js"
• Forked repository "facebook/react"
```

---

### What Problem Does This Solve?

When developers want to **quickly check someone's GitHub activity**, they usually:

1. Open browser
2. Go to GitHub
3. Search username
4. Navigate to activity feed

This is slow.

A CLI tool allows:

```
1 command → instant activity
```

Useful for:

- Developers
- Recruiters
- Open source contributors
- DevOps engineers

---

### Who Are The Users?

Primary users:

1. **Developers**
2. **Open source maintainers**
3. **Recruiters**
4. **DevOps engineers**

---

### Real-World Use Cases

Example situations:

**Use case 1 — Developer**

```
Check contributor activity quickly
```

Example:

```
github-activity torvalds
```

---

**Use case 2 — Recruiter**

```
Check candidate GitHub activity
```

---

**Use case 3 — Open Source Maintainer**

```
Track contributor commits
```

---

## 1.2 Define the Problem Clearly

### Core Problem Statement

Build a **CLI tool** that:

- Accepts a GitHub username
- Fetches recent public events
- Displays activity in readable format

---

### Current Pain Points

Without CLI tool:

| Problem                  | Why it hurts |
| ------------------------ | ------------ |
| Manual GitHub navigation | Slow         |
| Too many UI clicks       | Inefficient  |
| Hard to automate         | No scripting |

---

### What Success Looks Like

A simple command:

```
github-activity username
```

Produces:

```
Recent Activity for username

• Pushed 2 commits to repo X
• Opened issue in repo Y
• Starred repo Z
```

---

## 1.3 Possible Approaches

We must think like engineers.

There are **multiple ways to fetch GitHub data**.

---

### Approach 1 — Web Scraping GitHub Pages

How it works:

```
CLI → scrape github.com/user page → parse HTML
```

Tools:

- axios
- cheerio

---

Advantages:

- No API limits

Disadvantages:

- Fragile
- Breaks when GitHub UI changes
- Slow

---

Conclusion:

**Bad approach**

---

### Approach 2 — GitHub REST API

GitHub provides official API:

```
https://api.github.com/users/{username}/events
```

Example response:

```
PushEvent
WatchEvent
IssuesEvent
ForkEvent
```

---

Advantages:

- Official
- Structured JSON
- Reliable
- Easy to parse

---

Disadvantages:

- Rate limits (60/hr without auth)

---

Conclusion:

**Best approach**

---

### Approach 3 — GitHub GraphQL API

More advanced API.

Advantages:

- Flexible queries
- Efficient

Disadvantages:

- More complex
- Overkill for CLI tool

---

### Final Decision

We choose:

> **GitHub REST API**

Reason:

- Simple
- Perfect for CLI
- Industry standard

---

## 1.4 Define the Scope

Very important.

We must **not overbuild**.

---

### What We WILL Build

Core features:

1. CLI command

```
github-activity <username>
```

2. Fetch GitHub events

3. Parse event types

Examples:

```
PushEvent
WatchEvent
IssuesEvent
ForkEvent
```

4. Format output

5. Handle errors

Examples:

```
User not found
API rate limit
Network failure
```

---

### What We WILL NOT Build

Out of scope:

- GitHub authentication
- Private repo access
- Pagination
- Caching
- GUI interface
- Complex analytics

Keep it **simple but production clean**.

---

# STEP 2 — SYSTEM DESIGN

## 2.1 Requirements Gathering

### Functional Requirements

System must:

1. Accept GitHub username
2. Call GitHub API
3. Parse events
4. Print formatted output
5. Handle errors

---

### Non-Functional Requirements

Important for real systems.

| Requirement     | Explanation          |
| --------------- | -------------------- |
| Performance     | Response < 1 second  |
| Reliability     | Handle API errors    |
| Maintainability | Clean modular code   |
| Usability       | Simple CLI interface |

---

# 2.2 High Level Architecture

Architecture:

```
User
 ↓
CLI Command
 ↓
HTTP Client
 ↓
GitHub API
 ↓
Response Parser
 ↓
Formatter
 ↓
Terminal Output
```

---

### Component Responsibilities

#### CLI Interface

Responsible for:

```
reading command line arguments
```

Example:

```
github-activity tanish
```

---

#### API Client

Responsible for:

```
making HTTP request
```

---

#### Parser

Responsible for:

```
convert raw JSON → meaningful events
```

---

#### Formatter

Responsible for:

```
convert events → readable messages
```

---

#### Output

Responsible for:

```
display results in terminal
```

---

# 2.3 Architecture Diagrams

### System Architecture

```
+-------------+
|   User CLI  |
+-------------+
        |
        v
+----------------+
| CLI Processor  |
+----------------+
        |
        v
+----------------+
| GitHub API     |
| HTTP Request   |
+----------------+
        |
        v
+----------------+
| Event Parser   |
+----------------+
        |
        v
+----------------+
| Formatter      |
+----------------+
        |
        v
+----------------+
| Terminal       |
+----------------+
```

---

### Request Flow Diagram

```
User runs command
       ↓
CLI reads username
       ↓
HTTP request to GitHub API
       ↓
API returns JSON events
       ↓
Parser identifies event types
       ↓
Formatter builds readable lines
       ↓
Terminal prints output
```

---

### API Flow

```
GET https://api.github.com/users/{username}/events
```

Example response:

```
[
  {
    "type": "PushEvent",
    "repo": { "name": "user/repo" }
  }
]
```

---

# 2.4 Request Lifecycle

Step-by-step:

### Step 1

User runs:

```
github-activity torvalds
```

---

### Step 2

CLI reads argument:

```
process.argv
```

---

### Step 3

Program calls:

```
GitHub API
```

---

### Step 4

API returns events JSON.

---

### Step 5

Parser extracts:

```
PushEvent
ForkEvent
WatchEvent
IssuesEvent
```

---

### Step 6

Formatter converts to readable text.

Example:

```
Pushed commits to repo X
```

---

### Step 7

CLI prints result.

---

# 2.5 Technology Decisions

### Language

Node.js

Why:

- Perfect for CLI
- Built-in HTTP
- Fast development

---

### HTTP Library

axios

Why:

- Simple API
- Handles JSON easily

---

### CLI Argument Handling

Native:

```
process.argv
```

Why:

- No extra dependency needed

---

### Output Formatting

Plain terminal output.

---

### Final Tech Stack

```
Node.js
Axios
GitHub REST API
```

---

# NEXT STEP

Now the **design phase is finished**.

Next we will move to:

# STEP 3 — IMPLEMENTATION

We will build:

```
production-grade CLI tool
```

Including:

- proper folder structure
- modular files
- error handling
- API client
- parser
- formatter

---

If you want, I can continue with:

# STEP 3 — IMPLEMENTATION

### 3.1 Production Folder Structure

### 3.2 Complete Step-by-Step Implementation

This will include **full code + explanations + comments like a senior engineer reviewing the project**.

We now move to **STEP 3 — IMPLEMENTATION** for

**Project #3 — GitHub User Activity CLI** (External API integration)

Important rule we follow:

- Design already completed
- Now implementation **step-by-step**
- **No over-engineering**
- But still **clean production style**

---

# STEP 3 — IMPLEMENTATION

We will implement the project in this order:

1. Project setup
2. Server / CLI setup
3. Configuration
4. HTTP client
5. API service
6. Event parser
7. Output formatter
8. Error handling
9. CLI entry point

---

# 3.1 Production Folder Structure

Even for a CLI tool we keep a **clean layered structure**.

```
github-user-activity-cli
│
├── src
│   ├── cli
│   │   └── index.js
│   │
│   ├── services
│   │   └── githubService.js
│   │
│   ├── utils
│   │   ├── formatter.js
│   │   └── eventParser.js
│   │
│   ├── config
│   │   └── config.js
│   │
│   └── app.js
│
├── package.json
└── README.md
```

---

## Folder Explanation

### src/cli

Responsible for:

```
reading CLI command arguments
```

Example:

```
github-activity tanish
```

---

### src/services

Responsible for:

```
calling external APIs
```

Example:

```
GitHub REST API
```

---

### src/utils

Contains helper utilities:

```
event parsing
output formatting
```

---

### src/config

Stores configuration:

```
API base URLs
constants
```

---

### src/app.js

Main **application orchestrator**.

Responsible for connecting:

```
CLI
API
Parser
Formatter
```

---

# 3.2 Step-by-Step Implementation

We will now build the project **file by file**.

---

# Step 1 — Project Setup

Create project folder.

```
mkdir github-user-activity-cli
cd github-user-activity-cli
```

Initialize Node project.

```
npm init -y
```

Install dependency.

```
npm install axios
```

---

# Step 2 — package.json

Add CLI command mapping.

```json
{
  "name": "github-user-activity-cli",
  "version": "1.0.0",
  "description": "CLI tool to fetch GitHub user activity",
  "main": "src/app.js",
  "bin": {
    "github-activity": "./src/cli/index.js"
  },
  "type": "module",
  "dependencies": {
    "axios": "^1.6.0"
  }
}
```

### Why "bin"?

This allows us to run:

```
github-activity username
```

as a CLI command.

---

# Step 3 — Config File

File:

```
src/config/config.js
```

Purpose:

Central place for configuration.

```javascript
// Base URL for GitHub REST API
export const GITHUB_API_BASE = "https://api.github.com";
```

---

# Step 4 — GitHub API Service

File:

```
src/services/githubService.js
```

Purpose:

Responsible for:

```
calling GitHub API
```

---

```javascript
import axios from "axios";
import { GITHUB_API_BASE } from "../config/config.js";

/*
  Function: fetchUserEvents
  --------------------------------
  Fetches recent public events of a GitHub user.
*/
export async function fetchUserEvents(username) {
  try {
    // Construct GitHub API URL
    const url = `${GITHUB_API_BASE}/users/${username}/events`;

    // Send HTTP GET request
    const response = await axios.get(url);

    // Return API response data
    return response.data;
  } catch (error) {
    // Handle GitHub API errors
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error("User not found");
      }

      if (error.response.status === 403) {
        throw new Error("API rate limit exceeded");
      }
    }

    throw new Error("Failed to fetch GitHub events");
  }
}
```

---

# Step 5 — Event Parser

File:

```
src/utils/eventParser.js
```

Purpose:

Convert raw GitHub event JSON → meaningful text.

---

```javascript
/*
  Function: parseEvents
  --------------------------------
  Converts raw GitHub events into readable messages.
*/

export function parseEvents(events) {
  const activities = [];

  for (const event of events) {
    switch (event.type) {
      case "PushEvent":
        activities.push(
          `Pushed ${event.payload.commits.length} commit(s) to ${event.repo.name}`,
        );
        break;

      case "WatchEvent":
        activities.push(`Starred repository ${event.repo.name}`);
        break;

      case "ForkEvent":
        activities.push(`Forked repository ${event.repo.name}`);
        break;

      case "IssuesEvent":
        activities.push(`Opened issue in ${event.repo.name}`);
        break;

      default:
        // Ignore less relevant events
        break;
    }
  }

  return activities;
}
```

---

# Step 6 — Formatter

File:

```
src/utils/formatter.js
```

Purpose:

Format CLI output nicely.

---

```javascript
/*
  Function: formatActivities
  --------------------------------
  Formats activities for CLI display.
*/

export function formatActivities(username, activities) {
  console.log(`\nRecent activity for ${username}\n`);

  if (activities.length === 0) {
    console.log("No recent activity found.");
    return;
  }

  for (const activity of activities) {
    console.log(`• ${activity}`);
  }
}
```

---

# Step 7 — Main Application

File:

```
src/app.js
```

Purpose:

Connects:

```
API
Parser
Formatter
```

---

```javascript
import { fetchUserEvents } from "./services/githubService.js";
import { parseEvents } from "./utils/eventParser.js";
import { formatActivities } from "./utils/formatter.js";

/*
  Function: runApp
  --------------------------------
  Main application workflow
*/

export async function runApp(username) {
  try {
    // Step 1: Fetch raw events from GitHub
    const events = await fetchUserEvents(username);

    // Step 2: Convert raw events to readable activities
    const activities = parseEvents(events);

    // Step 3: Print formatted output
    formatActivities(username, activities);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
```

---

# Step 8 — CLI Entry Point

File:

```
src/cli/index.js
```

Purpose:

Reads CLI arguments.

---

```javascript
#!/usr/bin/env node

import { runApp } from "../app.js";

/*
  process.argv structure

  node index.js username

  argv[0] = node
  argv[1] = script path
  argv[2] = username
*/

const username = process.argv[2];

// Validate input
if (!username) {
  console.log("Usage: github-activity <github-username>");
  process.exit(1);
}

// Run application
runApp(username);
```

---

# Step 9 — Make CLI Executable

Run:

```
chmod +x src/cli/index.js
```

Then link the CLI locally:

```
npm link
```

---

# Run the CLI Tool

Now you can run:

```
github-activity torvalds
```

Example output:

```
Recent activity for torvalds

• Pushed 2 commit(s) to torvalds/linux
• Starred repository nodejs/node
• Forked repository facebook/react
```

---

# Implementation Flow (Mental Model)

Full flow:

```
User CLI Command
        ↓
CLI index.js
        ↓
app.js
        ↓
githubService.js
        ↓
GitHub API
        ↓
eventParser.js
        ↓
formatter.js
        ↓
Terminal Output
```

---

# Next Step

We finished **Step 3 — Implementation**.

Next we move to:

# STEP 4 — PROJECT EXPLANATION (Interview Style)

This will include:

- How to explain this project in interviews
- System design explanation
- Scaling discussion
- 15 backend interview questions

If you want, I can continue with **STEP 4 now.**

Now we move to

# STEP 4 — PROJECT EXPLANATION (INTERVIEW STYLE)

Project: **GitHub User Activity CLI**
Type: **External API Integration + CLI Tool**

This section is important because in interviews they ask:

> “Explain one backend project you built.”

You must explain it **clearly, structured, and with engineering reasoning**.

---

# 4.1 Project Overview (How to Start Explaining)

A clean explanation you can give in interviews:

> I built a **CLI tool in Node.js** that fetches and displays recent GitHub activity for any user.
>
> The tool integrates with the **GitHub REST API**, retrieves the user's public events, parses important activity types like pushes, stars, forks, and issues, and displays them in a readable terminal format.
>
> The goal of the project was to understand **external API integration, CLI development, and modular backend architecture**.

---

# 4.2 Architecture Explanation

### High Level Architecture

```
User
 ↓
CLI Command
 ↓
Argument Parser
 ↓
Application Controller
 ↓
GitHub API Service
 ↓
Event Parser
 ↓
Formatter
 ↓
Terminal Output
```

---

## Component Responsibilities

### 1. CLI Interface

Responsible for:

- Reading command arguments
- Validating input

Example:

```
github-activity tanish
```

Code concept used:

```
process.argv
```

---

### 2. Application Layer

Acts as the **orchestrator**.

Responsibilities:

- Connect all modules
- Control request flow

Flow:

```
fetch events
↓
parse events
↓
format output
```

---

### 3. GitHub API Service

Responsible for:

- Making HTTP requests
- Handling API errors

Example API endpoint:

```
GET https://api.github.com/users/{username}/events
```

Response example:

```
[
 {
  "type": "PushEvent",
  "repo": { "name": "user/repo" }
 }
]
```

---

### 4. Event Parser

Purpose:

Convert raw GitHub event JSON into **human-readable actions**.

Example:

Raw API event:

```
PushEvent
```

Converted to:

```
Pushed 2 commits to repo X
```

---

### 5. Formatter

Responsible for displaying clean CLI output.

Example output:

```
Recent activity for torvalds

• Pushed commits to linux repo
• Starred repository nodejs/node
• Forked repository facebook/react
```

---

# 4.3 Request Flow (Step-by-Step)

When a user runs:

```
github-activity torvalds
```

The system works like this:

### Step 1 — CLI receives command

```
process.argv[2] → username
```

---

### Step 2 — Application starts

```
runApp(username)
```

---

### Step 3 — GitHub API request

```
GET /users/torvalds/events
```

---

### Step 4 — GitHub API returns events

Example:

```
PushEvent
WatchEvent
ForkEvent
IssuesEvent
```

---

### Step 5 — Parser processes events

Transforms raw JSON → readable activity.

---

### Step 6 — Formatter prints results

Output printed to terminal.

---

# 4.4 Design Decisions

Interviewers love this section.

---

## Why Node.js?

Reasons:

1. Great for CLI tools
2. Large ecosystem
3. Easy HTTP integration
4. Asynchronous I/O

---

## Why GitHub REST API?

Advantages:

- Official API
- Stable
- Well documented
- Structured JSON responses

---

## Why Modular Architecture?

Instead of writing everything in one file, we separated:

```
API logic
Parsing logic
Formatting logic
CLI logic
```

Benefits:

- Maintainability
- Scalability
- Easier testing
- Cleaner code

---

# 4.5 Constraints

Every system has constraints.

### 1. GitHub API Rate Limits

Unauthenticated users:

```
60 requests per hour
```

Solution (future improvement):

```
use authentication token
```

---

### 2. Public Events Only

The API returns:

```
public GitHub activity
```

Private activity is not available.

---

# 4.6 Potential Bottlenecks

Even small systems can have bottlenecks.

### 1. API Rate Limit

If many users call the CLI:

```
rate limit reached
```

Possible solution:

```
add caching
```

---

### 2. Network Latency

API request depends on network speed.

Possible solution:

```
retry logic
timeout handling
```

---

# 4.7 Scaling Discussion

If this tool became popular:

### Scenario

Imagine:

```
100k CLI users
```

Then improvements could include:

---

## 1. Add Caching

Cache user events.

Example:

```
Redis
```

Benefits:

```
avoid repeated API calls
```

---

## 2. Authentication Support

Use:

```
GitHub Personal Access Token
```

Benefit:

```
increase rate limit
```

---

## 3. Pagination

GitHub API returns limited events.

Add support for:

```
multiple pages
```

---

## 4. Advanced Filtering

Example CLI:

```
github-activity tanish --type push
```

---

## 5. Output Formats

Support:

```
JSON
Table
Pretty CLI
```

---

# 4.8 Interview Questions & Answers

These are **real backend interview questions**.

---

## Question 1

**Why did you use a service layer for the API call?**

Answer:

> I separated API logic into a service layer to keep the application modular.
> This allows easier testing, maintainability, and future extension if we integrate additional APIs.

---

## Question 2

**How does your system handle errors?**

Answer:

The system handles:

- User not found (404)
- API rate limit (403)
- Network failures

Errors are caught in the service layer and propagated to the application layer where user-friendly messages are printed.

---

## Question 3

**How would you scale this system?**

Answer:

Possible improvements:

1. Add caching layer (Redis)
2. Add authentication tokens
3. Add request retries
4. Introduce logging and monitoring

---

## Question 4

**Why did you separate parsing logic from API logic?**

Answer:

Because:

```
API response format ≠ application output format
```

Separation ensures:

- cleaner code
- easier modification
- reusable components

---

## Question 5

**What happens if GitHub changes their API response?**

Answer:

Only the **parser module** needs updates, because API and parsing layers are decoupled.

---

## Question 6

**How would you test this project?**

Testing strategy:

```
unit tests
integration tests
```

Examples:

Test parser:

```
input → event JSON
output → readable message
```

---

## Question 7

**Why build this project instead of using existing tools?**

Answer:

The purpose was to understand:

- API integration
- CLI development
- modular backend architecture
- error handling

---

# 4.9 Key Learning Outcomes

This project teaches important backend skills.

### Technical Skills

- CLI development
- API integration
- modular architecture
- error handling
- data transformation

---

### Engineering Skills

- system design thinking
- separation of concerns
- maintainability
- scalability thinking

---

# Next Step

Final step:

# STEP 5 — Professional README

I will generate a **production-grade GitHub README** including:

- Project overview
- Architecture diagram
- Installation guide
- CLI usage
- API explanation
- Example outputs
- Future improvements

This README will make the project **portfolio-ready for recruiters**.

If you want, I will generate the **final README now.**

# STEP 5 — PROFESSIONAL README

Project: **GitHub User Activity CLI**
Category: **External API Integration + CLI Tool**

This README is written so it can be **directly used in your GitHub repository**.

---

# GitHub User Activity CLI

A simple **Node.js Command Line Tool** that fetches and displays the **recent public activity of a GitHub user** directly from the terminal.

This tool integrates with the **GitHub REST API** and presents user activity in a clean and readable format.

---

# Project Overview

Developers often want to quickly inspect a GitHub user's recent activity without opening a browser and navigating through multiple pages.

This CLI tool solves that problem by allowing users to run a single command:

```
github-activity <username>
```

The tool retrieves recent public events such as:

- Push events
- Repository stars
- Forks
- Issue creation

And displays them in a **clean terminal format**.

---

# Tech Stack

| Technology              | Purpose                      |
| ----------------------- | ---------------------------- |
| Node.js                 | Runtime environment          |
| Axios                   | HTTP client for API requests |
| GitHub REST API         | Fetch user activity          |
| JavaScript (ES Modules) | Application logic            |

---

# System Architecture

The application follows a **modular architecture** where responsibilities are separated into different layers.

```
User CLI Command
       ↓
CLI Interface
       ↓
Application Controller
       ↓
GitHub API Service
       ↓
Event Parser
       ↓
Output Formatter
       ↓
Terminal Output
```

Each module is responsible for a specific part of the system, improving maintainability and readability.

---

# Project Folder Structure

```
github-user-activity-cli
│
├── src
│   ├── cli
│   │   └── index.js
│   │
│   ├── services
│   │   └── githubService.js
│   │
│   ├── utils
│   │   ├── eventParser.js
│   │   └── formatter.js
│   │
│   ├── config
│   │   └── config.js
│   │
│   └── app.js
│
├── package.json
└── README.md
```

### Folder Responsibilities

| Folder   | Purpose                        |
| -------- | ------------------------------ |
| cli      | Handles command line input     |
| services | External API calls             |
| utils    | Parsing and formatting helpers |
| config   | Application configuration      |
| app.js   | Main application workflow      |

---

# Installation Guide

### 1. Clone Repository

```
git clone https://github.com/your-username/github-user-activity-cli.git
cd github-user-activity-cli
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Link CLI Tool

```
npm link
```

This makes the CLI command available globally.

---

# Usage

Run the CLI tool:

```
github-activity <github-username>
```

Example:

```
github-activity torvalds
```

---

# Example Output

```
Recent activity for torvalds

• Pushed 2 commits to torvalds/linux
• Starred repository nodejs/node
• Forked repository facebook/react
• Opened issue in some-repo
```

---

# API Used

The application uses the GitHub REST API endpoint:

```
GET https://api.github.com/users/{username}/events
```

Documentation:

```
https://docs.github.com/en/rest
```

---

# Error Handling

The CLI tool handles common errors such as:

| Error          | Description                     |
| -------------- | ------------------------------- |
| User not found | Invalid GitHub username         |
| API rate limit | Too many requests to GitHub API |
| Network error  | Connection failure              |

Example message:

```
Error: User not found
```

---

# Key Features

- Simple CLI interface
- GitHub API integration
- Clean modular architecture
- Event parsing for readable output
- Error handling

---

# Possible Improvements

Future improvements that can be added:

### Authentication Support

Add GitHub personal access token to increase API rate limits.

---

### Caching

Use Redis or local caching to reduce repeated API calls.

---

### Filtering

Allow filtering specific activity types.

Example:

```
github-activity tanish --type push
```

---

### Pagination

Fetch more activity by supporting multiple pages of GitHub events.

---

### Output Formats

Add additional formats such as:

- JSON
- Table view
- CSV export

---

# Learning Outcomes

This project helps understand:

- CLI application development
- External API integration
- Modular backend architecture
- Error handling
- Data transformation

---

# Author

Tanish Kumar

Backend / Full Stack Developer
B.Tech — Delhi Technological University

---

# License

MIT License

---

# Summary

This project demonstrates how to build a **real-world CLI tool that integrates with external APIs**, structured with clean backend architecture principles.

It is an excellent **beginner backend project** that builds strong fundamentals for larger systems.

---

If you want, I can also show you something **very important most people miss**:

**How to make this project look like a "10x stronger portfolio project" for recruiters**, including:

- improvements that take it from **Beginner → Strong Backend Project**
- features recruiters love
- architecture upgrades
- how to present it on your resume.
