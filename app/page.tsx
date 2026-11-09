"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Server,
  Cloud,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  ArrowUpRight,
  Menu,
  X,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [projectFilter, setProjectFilter] = useState("all");

  const copyEmail = () => {
    navigator.clipboard.writeText("jeevankishorea@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "SyncSpace",
      subtitle: "Real-Time Collaborative Workspace & Document Engine",
      description:
        "Engineered a real-time collaborative workspace featuring conflict-free WebSocket synchronization, monotonic revisions, 20fps live SVG cursor canvas, rich Markdown formatting toolbar, templates, export hub, and dual-mode persistence (57 automated tests).",
      tags: ["Personal Project", "Next.js 16", "React 19", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
      liveUrl: "https://syncspace-dashboard.vercel.app",
      githubUrl: "https://github.com/Jeevan-a10/syncspace-dashboard",
      projectType: "Personal Project",
      category: "Real-Time Collaboration",
      metric: "Live in Production",
    },
    {
      title: "DevPulse",
      subtitle: "Developer Workspace & Milestone Tracker",
      description:
        "Engineered a production-ready developer workspace with real-time analytics, RBAC JWT auth, 47 automated tests, in-memory MongoDB fallback, and live event audit streaming.",
      tags: ["Personal Project", "Next.js 16", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth", "Docker"],
      liveUrl: "https://devpulse-dashboard-pi.vercel.app/login",
      githubUrl: "https://github.com/Jeevan-a10/devpulse-dashboard",
      projectType: "Personal Project",
      category: "Full-Stack SaaS",
      metric: "Live in Production",
    },
    {
      title: "Khata Tracker",
      subtitle: "Enterprise Business Finance & Ledger Platform",
      description:
        "Engineered financial accounting dashboards and analytics modules. Integrated dynamic client workflows with robust microservices REST APIs for high-throughput business reporting.",
      tags: ["Company Project", "React.js", "Spring Boot", "Microservices", "REST APIs", "PostgreSQL"],
      liveUrl: "https://khatatracker.com/",
      projectType: "Company Project",
      category: "FinTech Platform",
      metric: "Enterprise Production",
    },
    {
      title: "EKAM Network",
      subtitle: "B2B Enterprise Business Network",
      description:
        "Built responsive web interfaces with state management, dynamic form validation, and secure authentication flows. Integrated multi-role access control for enterprise clients.",
      tags: ["Company Project", "React.js", "Node.js", "REST APIs", "State Management", "Tailwind CSS"],
      liveUrl: "https://www.ekamnetwork.com/login",
      projectType: "Company Project",
      category: "Enterprise Suite",
      metric: "Active Users",
    },
    {
      title: "Hotel Srisaila's Nest",
      subtitle: "Hospitality & Room Booking Platform",
      description:
        "Developed a mobile-optimized hotel website featuring interactive room galleries, real-time enquiry workflows, and streamlined reservation inquiries.",
      tags: ["Company Project", "React.js", "JavaScript (ES6+)", "Responsive UI", "Booking APIs"],
      liveUrl: "https://www.hotelsrisailasnest.com/",
      projectType: "Company Project",
      category: "Hospitality Web",
      metric: "Live & Responsive",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      skills: [
        "React.js",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Redux Toolkit",
        "HTML5 / Modern CSS",
        "SSR / SSG Optimization",
      ],
    },
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "Microservices Architecture",
        "JWT Authentication",
        "Role-Based Access (RBAC)",
        "API Performance Tuning",
        "WebSockets",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-amber-400" />,
      skills: [
        "AWS (EC2, S3, IAM)",
        "Docker Containerization",
        "GitHub Actions (CI/CD)",
        "Vercel Deployments",
        "Nginx Reverse Proxy",
        "DNS & SSL Management",
        "Linux Server Administration",
        "Zero-Downtime Releases",
      ],
    },
    {
      title: "Databases & Tooling",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "SQL Query Optimization",
        "Git & GitHub Workflow",
        "Postman / Swagger",
        "Jest Unit Testing",
        "Agile / Scrum Sprints",
        "VS Code Power Tools",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#080c14]/80 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0b1120] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-cyan-400">
                JK
              </div>
            </div>
            <span className="font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors">
              Jeevan<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Jeevan-a10"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeevankishorea"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 hover:bg-cyan-900/40 rounded-full transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b1120] border-b border-white/[0.08] px-6 py-4 flex flex-col gap-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 py-1"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 py-1"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 py-1"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 py-1"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 py-1"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-cyan-400 py-1 font-semibold"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="home" className="pt-8 sm:pt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Full Stack Developer @ Anju Siima Technologies</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Engineering Scalable{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Web Applications
                </span>{" "}
                & Cloud Architectures.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Hi, I'm <strong className="text-slate-200">Jeevan Kishore Arigela</strong>. I specialize
                in the modern JavaScript & TypeScript ecosystem, architecting responsive frontends with{" "}
                <span className="text-cyan-300 font-medium">React.js & Next.js</span>, resilient backend APIs with{" "}
                <span className="text-emerald-300 font-medium">Node.js & Express</span>, and automated deployments on{" "}
                <span className="text-amber-300 font-medium">AWS</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 transition-all duration-300"
                >
                  <span>Explore Featured Work</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jeevankishorea"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 font-medium text-sm transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Jeevan-a10"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 font-medium text-sm transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Highlights Pill Matrix */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/[0.06] text-left">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-xl font-bold text-white">1.5+ Years</div>
                  <div className="text-xs text-slate-400">Industry Experience</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="text-xl font-bold text-cyan-400">Next.js & React</div>
                  <div className="text-xs text-slate-400">Full-Stack Core</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] col-span-2 sm:col-span-1">
                  <div className="text-xl font-bold text-emerald-400">AWS Native</div>
                  <div className="text-xs text-slate-400">Cloud Deployments</div>
                </div>
              </div>
            </div>

            {/* Profile Avatar Card */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 opacity-40 blur-xl group-hover:opacity-60 transition duration-500" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0b1120] shadow-2xl">
                <img
                  src="/images/avatar.jpg"
                  alt="Jeevan Kishore Arigela"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl backdrop-blur-md bg-black/40 border border-white/[0.1] text-center">
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Jeevan Kishore Arigela
                  </span>
                  <p className="text-[10px] text-cyan-300">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              About & Architectural Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a dedicated <strong>Full Stack Developer</strong> currently engineering scalable web
                platforms at <strong>Anju Siima Technologies</strong>. My work focuses on building clean,
                maintainable code across the entire development lifecycle—from responsive, accessible frontends to
                robust, high-throughput cloud backends.
              </p>
              <p>
                I believe great software is where performance, architecture, and user experience converge. Whether
                optimizing Server-Side Rendering (SSR) pipelines in <strong>Next.js</strong>, designing decoupled
                microservices in <strong>Node.js/Express</strong>, or orchestrating cloud infrastructure with{" "}
                <strong>AWS (EC2, S3)</strong>, I focus on building reliable systems that scale gracefully.
              </p>
              <p>
                I hold a Bachelor of Technology in <strong>Artificial Intelligence & Data Science</strong> from{" "}
                <strong>Vasireddy Venkatadri Institute of Technology (VVIT)</strong>, combining algorithmic
                fundamentals with modern enterprise engineering practices.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  Engineering Principles
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Clean, modular, self-documenting code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>API performance and database query tuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Automated CI/CD zero-downtime releases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Pixel-perfect responsive design systems</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200">
                💡 <span className="font-semibold">Goal:</span> Always deliver software that solves tangible
                business problems and delights users.
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-8">
            <div className="relative group">
              {/* Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#080c14] shadow-lg shadow-cyan-500/50" />

              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                    <div className="text-cyan-400 font-medium">Anju Siima Technologies Pvt Ltd</div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 w-fit">
                    Jan 2025 – Present • Full-time
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-300 leading-relaxed list-disc list-inside">
                  <li>
                    Architect, develop, and deploy responsive web interfaces using{" "}
                    <strong className="text-white">React.js, Next.js, and TypeScript</strong>, optimizing Core Web
                    Vitals and client-side rendering speed.
                  </li>
                  <li>
                    Design and integrate robust RESTful APIs in{" "}
                    <strong className="text-white">Node.js and Express</strong>, cutting server response latency
                    through efficient database queries and structured caching.
                  </li>
                  <li>
                    Provision and manage scalable cloud workloads on{" "}
                    <strong className="text-white">AWS (EC2, S3, IAM)</strong>, configuring automated deployment
                    workflows via GitHub Actions for seamless releases.
                  </li>
                  <li>
                    Collaborate closely in agile sprints with cross-functional designers, backend engineers, and
                    product leads to translate complex client requirements into maintainable software.
                  </li>
                  <li>
                    Implement secure JWT authentication, role-based authorization safeguards, and robust payload
                    sanitization protocols.
                  </li>
                </ul>

                <div className="pt-2 flex flex-wrap gap-2">
                  {["Next.js", "React.js", "TypeScript", "Node.js", "Express", "AWS", "REST APIs", "Git"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Featured Projects
                </h2>
              </div>
              <p className="text-sm text-slate-400">
                Production platforms and web systems engineered for performance and reliability.
              </p>
            </div>

            <a
              href="https://github.com/Jeevan-a10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View all on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Project Type Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setProjectFilter("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                projectFilter === "all"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                  : "text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setProjectFilter("personal")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                projectFilter === "personal"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/10"
                  : "text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"
              }`}
            >
              Personal Builds ({projects.filter((p) => p.projectType === "Personal Project").length})
            </button>
            <button
              onClick={() => setProjectFilter("company")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                projectFilter === "company"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10"
                  : "text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06]"
              }`}
            >
              Company Work ({projects.filter((p) => p.projectType === "Company Project").length})
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((proj) => {
                if (projectFilter === "personal") return proj.projectType === "Personal Project";
                if (projectFilter === "company") return proj.projectType === "Company Project";
                return true;
              })
              .map((proj, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${
                            proj.projectType === "Personal Project"
                              ? "bg-purple-950/60 text-purple-300 border-purple-800/50"
                              : "bg-emerald-950/60 text-emerald-300 border-emerald-800/50"
                          }`}
                        >
                          {proj.projectType}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-cyan-950/40 text-cyan-400 border border-cyan-800/40">
                          {proj.category}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {proj.metric}
                      </span>
                    </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">{proj.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-6 space-y-4 border-t border-white/[0.06] mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1 flex items-center gap-2">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 text-xs font-semibold transition-all duration-300"
                    >
                      <span>Explore Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-semibold transition-all duration-300"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Technologies Matrix */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Technical Stack & Skills
              </h2>
            </div>
            <p className="text-sm text-slate-400">
              Languages, libraries, cloud infrastructure, and toolchains I work with daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all space-y-4"
              >
                <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                  <div className="p-2 rounded-lg bg-white/[0.04]">{cat.icon}</div>
                  <h3 className="font-bold text-sm text-white">{cat.title}</h3>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Education & Background
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-cyan-400 text-sm font-medium">
                Artificial Intelligence & Data Science
              </p>
              <p className="text-xs text-slate-400">
                Vasireddy Venkatadri Institute of Technology, Guntur
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 w-fit sm:ml-auto">
                2020 – 2024
              </div>
              <p className="text-xs text-emerald-400 font-medium">Graduated with 7.5 CGPA</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
                📬 Let's Connect
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Have an idea, project, or opportunity? Let's build together.
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you want to collaborate on a full-stack platform, talk cloud architecture on AWS,
                or exchange ideas—my inbox is always open.
              </p>

              {/* Direct Info Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-sm text-slate-200 transition-all"
                  title="Click to copy email"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs sm:text-sm">jeevankishorea@gmail.com</span>
                  <Copy className="w-3.5 h-3.5 text-slate-400 ml-1" />
                  {copied && (
                    <span className="text-xs text-emerald-400 font-semibold ml-1">Copied!</span>
                  )}
                </button>

                <a
                  href="tel:+918309600199"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-sm text-slate-200 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs sm:text-sm">+91 8309600199</span>
                </a>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/jeevankishorea"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-600/25"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Jeevan-a10"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-slate-200 font-semibold text-xs border border-white/[0.1] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Follow on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Arigela Jeevan Kishore. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js, TypeScript & Tailwind CSS. Hosted on Vercel.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
