import { useState } from "react";
import { motion } from "motion/react";
import {
  Code,
  Database,
  Cpu,
  Briefcase,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  ChevronRight,
  Download,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("projects");

  const skills = [
    {
      category: "Frontend",
      icon: <Code size={20} />,
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn",
        "Framer Motion",
        "Zustand",
      ],
    },
    {
      category: "Backend",
      icon: <Cpu size={20} />,
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "JWT",
        "Background Jobs",
      ],
    },
    {
      category: "Databases",
      icon: <Database size={20} />,
      items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "Convex"],
    },
    {
      category: "Tools & Cloud",
      icon: <Briefcase size={20} />,
      items: ["Docker", "AWS", "CI/CD", "Git", "Vercel", "Netlify"],
    },
  ];

  const projects = [
    {
      title: "DevFreebies",
      description:
        "Community-curated platform for discovering verified free developer tools and resources.",
      tech: ["MERN", "JWT", "Tailwind", "REST APIs"],
      links: { live: "#", github: "#" },
      features: [
        "JWT Authentication",
        "Role-based Authorization",
        "Real-time Updates",
        "Production Deployed",
      ],
    },
    {
      title: "calmind",
      description:
        "AI-powered mental health platform with therapy workflows and sentiment analysis.",
      tech: ["Next.js 14", "Node.js", "MongoDB", "Gemini AI", "Inngest"],
      links: { live: "#", github: "#" },
      features: [
        "AI Integration",
        "Background Jobs",
        "Real-time Chat",
        "Secure Authentication",
      ],
    },
    {
      title: "interviewme.dev",
      description:
        "Full-stack interview platform with real-time video calls and code execution.",
      tech: ["Next.js 15", "Express.js", "PostgreSQL", "Stream Video", "Clerk"],
      links: { live: "#", github: "#" },
      features: [
        "Video Calls",
        "Code Execution",
        "AI Scoring",
        "Live Sessions",
      ],
    },
    {
      title: "quizflow-ai",
      description:
        "AI-generated quiz platform with scoring logic and performance analytics.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "OpenAI"],
      links: { live: "#", github: "#" },
      features: [
        "AI Generation",
        "Performance Analytics",
        "Caching",
        "Relational Database",
      ],
    },
  ];

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Mahindra Foundation",
      period: "Feb 2022 - May 2022",
      points: [
        "Built responsive, accessible UI with React.js and Tailwind",
        "Improved Lighthouse scores by 30%",
        "Created 15+ reusable components",
        "Integrated backend APIs and debugged production issues",
      ],
    },
  ];

  const certifications = [
    "JavaScript - HackerRank",
    "C++ - Naukri.com",
    "Cisco OS (Ongoing)",
    "Beta Tester - Pedtrotech (2024)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-dark text-light">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-dark/80 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
            >
              Tanish Kumar
            </motion.div>

            <div className="flex space-x-8">
              {["about", "skills", "projects", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    document
                      .getElementById(tab)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeTab === tab
                      ? "text-primary font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <a
                href="/TANISH_KUMAR___BACKEND_ENGINEER_RESUME.pdf"
                download
                className="flex items-center space-x-2 bg-primary hover:bg-secondary px-4 py-2 rounded-lg transition-colors"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Full-Stack Developer &{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Building scalable backend systems and intuitive frontend
              experiences with modern technologies. Currently pursuing B.Tech at
              Delhi Technological University.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="mailto:tanish.kumar.works@gmail.com"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="tel:+917428463263"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Phone size={20} />
                <span>+91 7428463263</span>
              </a>
              <a
                href="https://linkedin.com/in/tanish29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/TanishxDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-primary/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              Featured Projects
            </h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.links.live}
                        className="flex items-center space-x-2 bg-primary hover:bg-secondary px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.links.github}
                        className="flex items-center space-x-2 border border-gray-600 hover:border-primary px-4 py-2 rounded-lg transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <ChevronRight size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience & Certifications */}
        <section id="experience" className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-primary">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Certifications & Education */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <Award size={20} className="text-primary" />
                        </div>
                        <span>{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-bold mb-2">
                    Delhi Technological University (DTU)
                  </h3>
                  <p className="text-gray-300 mb-4">
                    B.Tech in Mechanical Engineering (2023-2027)
                  </p>
                  <p className="text-primary">
                    Completed core CS subjects: DSA, OS, DBMS, CN, OOP
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl p-12 border border-primary/30"
          >
            <h2 className="text-3xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative
              projects, or potential collaborations.
            </p>
            <a
              href="mailto:tanish.kumar.works@gmail.com"
              className="inline-flex items-center space-x-3 bg-primary hover:bg-secondary px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Tanish Kumar. All rights reserved.
          </p>
          <p className="text-gray-500">
            Built with React, Tailwind CSS, and Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
