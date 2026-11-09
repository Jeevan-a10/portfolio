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
  Zap,
} from "lucide-react";

import ParticleCanvas from "../components/ParticleCanvas";
import ScrollProgressBar from "../components/ScrollProgressBar";
import SpotlightCard from "../components/SpotlightCard";
import TypewriterText from "../components/TypewriterText";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import TiltCard from "../components/TiltCard";
import LiveTerminalPreview from "../components/LiveTerminalPreview";
import ConfettiEffect from "../components/ConfettiEffect";
import BackToTop from "../components/BackToTop";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const [projectFilter, setProjectFilter] = useState("all");

  const copyEmail = () => {
    navigator.clipboard.writeText("jeevankishorea@gmail.com");
    setCopied(true);
    setTriggerConfetti(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const roles = [
    "Full Stack Developer",
    "React.js & Next.js Architect",
    "Node.js & Express Engineer",
    "AWS Cloud & DevOps Practitioner",
    "Real-Time WebSocket Specialist",
  ];

  const projects = [
    {
      title: "SyncSpace",
      subtitle: "Real-Time Collaborative Workspace & Document Engine",
      description:
        "Engineered a real-time collaborative workspace featuring conflict-free WebSocket synchronization, monotonic revisions, 20fps live SVG cursor canvas, rich Markdown formatting toolbar, templates, export hub, and dual-mode persistence (57 automated tests).",
      tags: ["Open Source", "Next.js 16", "React 19", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
      liveUrl: "https://syncspace-dashboard.vercel.app",
      githubUrl: "https://github.com/Jeevan-a10/syncspace-dashboard",
      projectType: "Personal / Open Source",
      category: "Real-Time Engine",
      metric: "57 Tests • Live in Production",
      image: "/images/projects/syncspace.png",
    },
    {
      title: "DevPulse",
      subtitle: "Developer Workspace & Milestone Tracker",
      description:
        "Engineered a production-ready developer workspace with real-time analytics, RBAC JWT auth, 57 automated tests, in-memory MongoDB fallback, and live event audit streaming.",
      tags: ["Open Source", "Next.js 16", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth", "Docker"],
      liveUrl: "https://devpulse-dashboard-pi.vercel.app/login",
      githubUrl: "https://github.com/Jeevan-a10/devpulse-dashboard",
      projectType: "Personal / Open Source",
      category: "Developer SaaS",
      metric: "57 Tests • Live in Production",
      image: "/images/projects/devpulse.png",
    },
    {
      title: "Khata Tracker",
      subtitle: "Enterprise Business Finance & Ledger Platform",
      description:
        "Engineered financial accounting dashboards and analytics modules. Integrated dynamic client workflows with robust microservices REST APIs for high-throughput business reporting.",
      tags: ["Company Work", "React.js", "Spring Boot", "Microservices", "REST APIs", "PostgreSQL"],
      liveUrl: "https://khatatracker.com/",
      projectType: "Company Work",
      category: "FinTech Platform",
      metric: "Commercial Production",
    },
    {
      title: "EKAM Network",
      subtitle: "B2B Enterprise Business Network",
      description:
        "Built responsive web interfaces with state management, dynamic form validation, and secure authentication flows. Integrated multi-role access control for enterprise clients.",
      tags: ["Company Work", "React.js", "Node.js", "REST APIs", "State Management", "Tailwind CSS"],
      liveUrl: "https://www.ekamnetwork.com/login",
      projectType: "Company Work",
      category: "Enterprise Suite",
      metric: "Active Enterprise Users",
    },
    {
      title: "Hotel Srisaila's Nest",
      subtitle: "Hospitality & Room Booking Platform",
      description:
        "Developed a mobile-optimized hotel website featuring interactive room galleries, real-time enquiry workflows, and streamlined reservation inquiries.",
      tags: ["Client Project", "React.js", "JavaScript (ES6+)", "Responsive UI", "Booking APIs"],
      liveUrl: "https://www.hotelsrisailasnest.com/",
      projectType: "Company Work",
      category: "Hospitality Web",
      metric: "Client Production",
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
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 overflow-x-hidden selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgressBar />

      {/* Interactive Constellation Particle Canvas Background */}
      <ParticleCanvas />

      {/* Confetti Burst Particle Canvas */}
      <ConfettiEffect trigger={triggerConfetti} onComplete={() => setTriggerConfetti(false)} />

      {/* Ambient Floating Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-8%] left-[15%] w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute top-[38%] right-[8%] w-[620px] h-[620px] bg-indigo-600/12 rounded-full blur-[160px] animate-float-reverse animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[8%] w-[520px] h-[520px] bg-emerald-600/12 rounded-full blur-[150px] animate-pulse-glow" />
        {/* Subtle Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Sticky Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#080c14]/80 border-b border-white/[0.06] transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#0b1120] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:text-cyan-300">
                JK
              </div>
            </div>
            <span className="font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors">
              Jeevan<span className="text-cyan-400 animate-pulse">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {[
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-300 relative py-1 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Jeevan-a10"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all hover:scale-110"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeevankishorea"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/[0.06] rounded-lg transition-all hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 hover:bg-cyan-900/50 hover:border-cyan-500/50 rounded-full shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b1120]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-4 flex flex-col gap-3 animate-fade-in-up">
            {["about", "experience", "projects", "skills", "education"].map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 py-1 hover:text-cyan-400 capitalize transition-colors"
              >
                {sec}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-cyan-400 py-1 font-semibold hover:text-cyan-300 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="home" className="pt-8 sm:pt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            <ScrollReveal direction="up" duration={700} className="flex-1 space-y-6 text-center lg:text-left">
              {/* Status Badge with Live Ping Wave */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm hover:border-cyan-500/30 transition-all">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Full Stack Developer @ Anju Siima Technologies</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Engineering Scalable{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent inline-block hover:scale-[1.01] transition-transform">
                  Web Applications
                </span>{" "}
                &amp; Cloud Architectures.
              </h1>

              {/* Animated Dynamic Typewriter Role */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-mono text-cyan-400">
                <span className="text-slate-400">&gt;</span>
                <span className="text-slate-400">Specializing in:</span>
                <TypewriterText phrases={roles} className="font-semibold text-cyan-300" />
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Hi, I'm <strong className="text-slate-200">Jeevan Kishore Arigela</strong>. I specialize
                in the modern JavaScript &amp; TypeScript ecosystem, architecting responsive frontends with{" "}
                <span className="text-cyan-300 font-medium">React.js &amp; Next.js</span>, resilient backend APIs with{" "}
                <span className="text-emerald-300 font-medium">Node.js &amp; Express</span>, and automated deployments on{" "}
                <span className="text-amber-300 font-medium">AWS</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Explore Featured Work</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  {/* Subtle shine sweep */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </a>

                <a
                  href="https://www.linkedin.com/in/jeevankishorea"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] hover:border-cyan-500/40 text-slate-200 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Jeevan-a10"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] hover:border-slate-400/40 text-slate-200 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Highlights Pill Matrix with Animated Numbers */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/[0.06] text-left">
                <SpotlightCard className="p-3.5">
                  <div className="text-xl font-bold text-white">
                    <AnimatedCounter value={1.5} decimals={1} suffix="+ Years" />
                  </div>
                  <div className="text-xs text-slate-400">Industry Experience</div>
                </SpotlightCard>

                <SpotlightCard className="p-3.5">
                  <div className="text-xl font-bold text-cyan-400">
                    <AnimatedCounter value={5} suffix="+ Systems" />
                  </div>
                  <div className="text-xs text-slate-400">Shipped to Production</div>
                </SpotlightCard>

                <SpotlightCard className="p-3.5 col-span-2 sm:col-span-1">
                  <div className="text-xl font-bold text-emerald-400">
                    <AnimatedCounter value={57} suffix=" Tests" />
                  </div>
                  <div className="text-xs text-slate-400">CI/CD Automated Pass</div>
                </SpotlightCard>
              </div>
            </ScrollReveal>

            {/* Profile Avatar Card with Interactive 3D Tilt & Floating Badges */}
            <ScrollReveal direction="scale" duration={800} className="relative group">
              <TiltCard maxTilt={14} className="relative z-10">
                {/* Rotating Ambient Aura */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 opacity-30 blur-xl group-hover:opacity-70 transition duration-700 animate-spin-slow" />

                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0b1120] shadow-2xl">
                  <img
                    src="/images/avatar.jpg"
                    alt="Jeevan Kishore Arigela"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-65" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl backdrop-blur-md bg-black/50 border border-white/[0.12] text-center shadow-lg">
                    <span className="text-xs font-semibold text-white tracking-wide block">
                      Jeevan Kishore Arigela
                    </span>
                    <p className="text-[10px] text-cyan-300 font-mono mt-0.5">Software Engineer</p>
                  </div>
                </div>
              </TiltCard>

              {/* Floating Tech Badges with oscillation */}
              <div className="hidden sm:flex absolute -top-4 -right-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1120]/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next.js 14 / React 18</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0b1120]/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float-reverse">
                <Cloud className="w-3.5 h-3.5 text-emerald-400" />
                <span>AWS EC2 &amp; S3 Native</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                About &amp; Architectural Approach
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={100} className="md:col-span-2">
              <SpotlightCard className="p-8 space-y-4 text-slate-300 leading-relaxed h-full">
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
                  I hold a Bachelor of Technology in <strong>Artificial Intelligence &amp; Data Science</strong> from{" "}
                  <strong>Vasireddy Venkatadri Institute of Technology (VVIT)</strong>, combining algorithmic
                  fundamentals with modern enterprise engineering practices.
                </p>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} className="md:col-span-1">
              <SpotlightCard className="p-8 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    Engineering Principles
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {[
                      "Clean, modular, self-documenting code",
                      "API performance & database query tuning",
                      "Automated CI/CD zero-downtime releases",
                      "Pixel-perfect responsive design systems",
                    ].map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 group">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-slate-100 transition-colors">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200 shadow-sm">
                  💡 <span className="font-semibold">Goal:</span> Always deliver software that solves tangible
                  business problems and delights users.
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Interactive Live Terminal Simulator Widget */}
          <ScrollReveal direction="up" delay={250}>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Verification &amp; Engineering Stream
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Simulated local test harness &amp; deployment pipelines
                </span>
              </div>
              <LiveTerminalPreview />
            </div>
          </ScrollReveal>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Layers className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Work Experience
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-8">
            <ScrollReveal direction="left" delay={150}>
              <div className="relative group">
                {/* Glowing Animated Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#080c14] shadow-lg shadow-cyan-500/70 group-hover:scale-125 transition-transform" />

                <SpotlightCard className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Full Stack Developer
                      </h3>
                      <div className="text-cyan-400 font-medium">Anju Siima Technologies Pvt Ltd</div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
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
                          className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-cyan-950/20 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </SpotlightCard>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <ScrollReveal direction="up">
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>View all on GitHub</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Project Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={() => setProjectFilter("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  projectFilter === "all"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20 scale-105"
                    : "text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06]"
                }`}
              >
                All Work ({projects.length})
              </button>
              <button
                onClick={() => setProjectFilter("personal")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  projectFilter === "personal"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-sm shadow-purple-500/20 scale-105"
                    : "text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06]"
                }`}
              >
                Personal / Open-Source Systems ({projects.filter((p) => p.projectType === "Personal / Open Source").length})
              </button>
              <button
                onClick={() => setProjectFilter("company")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  projectFilter === "company"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm shadow-emerald-500/20 scale-105"
                    : "text-slate-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06]"
                }`}
              >
                Commercial &amp; Client Work ({projects.filter((p) => p.projectType === "Company Work").length})
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((proj) => {
                if (projectFilter === "personal") return proj.projectType === "Personal / Open Source";
                if (projectFilter === "company") return proj.projectType === "Company Work";
                return true;
              })
              .map((proj, idx) => (
                <ScrollReveal key={proj.title} direction="up" delay={idx * 100}>
                  <SpotlightCard className="group flex flex-col justify-between p-6 sm:p-7 h-full">
                    <div className="space-y-4">
                      {/* Project Image Preview if available */}
                      {proj.image && (
                        <div className="relative w-full h-44 rounded-xl overflow-hidden border border-white/[0.08] bg-black/40 mb-3 group-hover:border-cyan-500/40 transition-all duration-500">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/90 via-transparent to-transparent opacity-60" />
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-300">
                            Live Demo Ready
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span
                            className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase border ${
                              proj.projectType === "Personal / Open Source"
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
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
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
                          className="inline-flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all duration-300 hover:scale-[1.02] shadow-sm"
                        >
                          <span>Explore Live Application</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white border border-white/[0.08] text-xs font-semibold transition-all duration-300 hover:scale-[1.02]"
                            title="View Source on GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Source</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
          </div>
        </section>

        {/* Skills & Technologies Matrix */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <ScrollReveal direction="up">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Technical Stack &amp; Skills
                </h2>
              </div>
              <p className="text-sm text-slate-400">
                Languages, libraries, cloud infrastructure, and toolchains I work with daily.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <ScrollReveal key={cat.title} direction="up" delay={idx * 100}>
                <SpotlightCard className="p-6 space-y-4 h-full">
                  <div className="flex items-center gap-2.5 border-b border-white/[0.06] pb-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-sm text-white">{cat.title}</h3>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 hover:text-cyan-300 hover:translate-x-1 transition-all cursor-default"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-24 space-y-8">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Education &amp; Background
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <SpotlightCard className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-cyan-400 text-sm font-medium">
                  Artificial Intelligence &amp; Data Science
                </p>
                <p className="text-xs text-slate-400">
                  Vasireddy Venkatadri Institute of Technology, Guntur
                </p>
              </div>

              <div className="text-left sm:text-right space-y-1">
                <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 w-fit sm:ml-auto">
                  2020 – 2024
                </div>
                <p className="text-xs text-emerald-400 font-medium">
                  Graduated with <AnimatedCounter value={7.5} decimals={1} suffix=" CGPA" />
                </p>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <SpotlightCard className="p-8 sm:p-12 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl space-y-6 relative z-10">
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
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] hover:border-cyan-500/40 text-sm text-slate-200 transition-all duration-300 hover:scale-[1.02]"
                    title="Click to copy email and trigger confetti"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-xs sm:text-sm">jeevankishorea@gmail.com</span>
                    <Copy className="w-3.5 h-3.5 text-slate-400 ml-1 group-hover:text-cyan-300" />
                    {copied && (
                      <span className="text-xs text-emerald-400 font-semibold ml-1 animate-pulse">
                        Copied! 🎉
                      </span>
                    )}
                  </button>

                  <a
                    href="tel:+918309600199"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] hover:border-emerald-500/40 text-sm text-slate-200 transition-all duration-300 hover:scale-[1.02]"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/50 hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/Jeevan-a10"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-slate-200 font-semibold text-xs border border-white/[0.1] hover:border-slate-300 transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>Follow on GitHub</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Arigela Jeevan Kishore. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS. Animated with pure 60fps canvas &amp; CSS.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
