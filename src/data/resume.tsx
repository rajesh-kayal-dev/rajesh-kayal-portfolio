import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, Code2Icon } from "lucide-react";

export const DATA = {
  name: "Rajesh",
  initials: "RK",
  url: "https://www.linkedin.com/in/rajesh110/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Full Stack Developer with 1+ years of experience building backend services, responsive React applications, and AI-powered products using Node.js, Express.js, and modern web technologies.",
  summary:
    "Over the last 1+ years, I've been building modern web applications across internships and industry roles. I've worked on [backend services](/#work) with Node.js and Express.js, built responsive applications with React.js, and integrated AI capabilities into real-world products. After completing my [Master's in Computer Applications](/#education), I've focused on writing reliable software and continuously learning modern technologies.",
  avatarUrl: "/me.png",
  skills: [
    // Frontend
    { name: "React.js", icon: Icons.react },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },

    // Backend
    { name: "JavaScript", icon: Code2Icon },
    { name: "TypeScript", icon: Icons.typescript },
    { name: "Node.js", icon: Icons.nodejs },
    { name: "Express.js", icon: Icons.express },

    // Databases
    { name: "PostgreSQL", icon: Icons.postgresql },
    { name: "MongoDB", icon: Icons.mongodb },
    { name: "Redis", icon: Icons.redis },

    // AI Integration
    { name: "LangChain", icon: Icons.langchain },
    { name: "LangGraph", icon: Icons.langgraph },
    { name: "RAG", icon: Icons.ai },
    { name: "MCP", icon: Icons.mcp },
    { name: "Qdrant", icon: Icons.mongodb },
    { name: "PGVector", icon: Icons.postgresql },

    // Cloud & DevOps
    { name: "Docker", icon: Icons.docker },
    { name: "GitHub Actions", icon: Icons.github },
    { name: "AWS S3", icon: Icons.aws },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rajeshkayal8001@gmail.com",
    tel: "+916289943975",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajesh-kayal-dev",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajesh110/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/RajeshKayal_",
        icon: Icons.x,

        navbar: true,
      },
      Avely: {
        name: "Avely",
        url: "https://avely.me/rajesh",
        icon: Icons.avely,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rajeshkayal8001@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Zeetron Networks Pvt. Ltd.",
      href: "https://zeetronnetworks.com",
      badges: ["Node.js", "Express.js", "REST API", "Microservices", "AI Integration"],
      location: "Jaipur, Rajasthan",
      title: "Full Stack Developer Intern",
      logoUrl: "/zetron.jpg",
      start: "January 2026",
      end: "June 2026",
      description:
        "- **Client Projects:** Contributed to multiple client projects, including a multi-vendor eCommerce platform, a CRM system, and AI-powered applications.\n- **Feature Development:** Built backend features, developed REST APIs, fixed production issues, and collaborated with senior developers to deliver new functionality.\n- **Microservices & AI:** Worked on a microservices-based fitness platform, gaining hands-on experience with modern backend architecture and AI integration.",
    },
    {
      company: "PowerMyCode Solutions Pvt. Ltd.",
      href: "",
      badges: ["Node.js", "REST API", "Payment Gateways", "AWS S3"],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/powermycode.jpg",
      start: "July 2023",
      end: "June 2024",
      description:
        "- **Backend Development:** Developed backend modules and REST APIs for production web applications, contributing to feature development and ongoing maintenance.\n- **Integrations:** Integrated payment gateways and cloud storage to support secure transactions and file management.\n- **Client Collaboration:** Worked directly with clients to gather requirements, resolve production issues, and improve application performance by **30%**.",
    },
  ],
  education: [
    {
      school: "Dev Bhoomi Uttarakhand University (DBUU)",
      href: "https://www.dbuu.ac.in/",
      degree: "Master of Computer Applications (MCA) | CGPA: 8.0",
      logoUrl: "/dbuu.jpg",
      start: "July 2024",
      end: "July 2026",
    },
  ],
  projects: [
    {
      title: "Sentio CLI",
      href: "https://cli-sentio.duckdns.org/",
      dates: "March 2026 - Present",
      active: true,
      description:
        "An agentic terminal assistant that helps developers automate everyday development tasks through natural language commands. Connects AI with GitHub and other developer tools via MCP to perform real development workflows securely, with OAuth 2.0 Device Flow authentication and automated cross-platform releases for Windows, macOS, and Linux.",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "MCP",
        "OAuth 2.0",
      ],
      links: [
        {
          type: "Website",
          href: "http://cli-sentio.duckdns.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal-dev/sentio-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Sentio-cli.gif",
      video: "",
    },
    {
      title: "DataPilot AI",
      href: "https://datapilotai-delta.vercel.app/",
      dates: "May 2026 - Present",
      active: true,
      description:
        "An AI-powered document intelligence platform that lets users upload documents and ask questions in natural language, with answers grounded in their own content using Retrieval-Augmented Generation (RAG). Retrieves relevant document context before generating responses, improving answer quality across 1000+ processed documents, and processes uploads asynchronously with BullMQ and AWS S3 to keep the application responsive.",
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "LangChain",
        "Qdrant",
        "RAG",
        "BullMQ",
        "AWS S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://datapilotai-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal-dev/DataPilotAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/DataPilot.gif",
      video: "",
    },
    {
      title: "Repolyx",
      href: "https://repolyx-client.vercel.app/",
      dates: "April 2026 - May 2026",
      active: true,
      description:
        "An AI-native engineering workspace and developer intelligence platform designed for repository analysis, workflow metrics, AI-driven chat, and security log tracking. Features dynamic dashboard analytics and GitHub OAuth integration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Neon",
        "Framer Motion",
        "Tailwind CSS",
        "Passport.js",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://repolyx-client.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal-dev/Repolyx",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Repolyx.gif",
      video: "",
    },
    {
      title: "LaunchScore",
      href: "https://launchscore.vercel.app/",
      dates: "March 2026 - April 2026",
      active: true,
      description:
        "A full-stack SaaS platform designed for startup validation and scoring. Includes secure JWT-based authentication, user-based website management, and a robust Express API connected to a Neon PostgreSQL database using Prisma ORM.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Neon",
        "Tailwind CSS",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://launchscore.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal-dev/launchscore-saas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/LaunchScore.gif",
      video: "",
    },
    {
      title: "FitCircle Pro",
      href: "https://fit-circle-pro.vercel.app",
      dates: "February 2026 - March 2026",
      active: true,
      description:
        "An AI-powered fitness platform that combines workouts, diet planning, AI chat, and fitness content into a single experience. Built with a microservices architecture separating authentication, workouts, diet, and chat into independent services connected through an API Gateway, with deployment automated via Docker and GitHub Actions.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Microservices",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://fit-circle-pro.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal-dev/FitCircle-Pro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/FitCirclePro.gif",
      video: "",
    },
    {
      title: "Jubili",
      href: "https://www.jubili.in/",
      dates: "June 2025 - August 2025",
      active: true,
      description:
        "A high-scale e-commerce platform designed to optimize seller-to-customer retail experiences. Implemented advanced virtual try-on integrations, personalized store pages, and an automated real-time order tracking pipeline.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Tailwind CSS",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.jubili.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jubili-in/jubili-web-public",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/Jubili.gif",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Lakshagriha Hackathon 2026",
      dates: "February 27th - 28th, 2026",
      location: "Dehradun, UK, India",
      description:
        "A massive inter-university global hackathon that gathered 110+ teams from 20 universities to tackle UN Sustainable Development Goals (SDGs) and Viksit Bharat themes.",
      image: "/hackathon.png",
      links: [] as Array<{ type: string; href: string; icon: React.ReactNode }>,
    },
    {
      title: "Padmavyuh Hackathon 4.0",
      dates: "November 20th - 22nd, 2025",
      location: "Dehradun, UK, India",
      description:
        "A high-stakes annual national-level technical prototype challenge focused on engineering and innovation.",
      image: "/hackathon.png",
      links: [] as Array<{ type: string; href: string; icon: React.ReactNode }>,
    },
    {
      title: "Surreal World Global Hackathon",
      dates: "June 2nd, 2025",
      location: "International (Virtual)",
      description:
        "An international development sprint focused on virtual ecosystem designs and immersive digital experiences.",
      image: "/hackathon.png",
      links: [] as Array<{ type: string; href: string; icon: React.ReactNode }>,
    },
    {
      title: "Lakshagriha Hackathon 4.0",
      dates: "April 17th - 18th, 2025",
      location: "Dehradun, UK, India",
      description:
        "A university-wide innovation layout challenge for hardware and software tracking systems.",
      image: "/hackathon.png",
      links: [] as Array<{ type: string; href: string; icon: React.ReactNode }>,
    },
    {
      title: "Padmavyuh Hackathon 3.0",
      dates: "October 11th - 12th, 2024",
      location: "Dehradun, UK, India",
      description:
        "A major coding and structural model-making competition hosted by the Department of Computer Science and Engineering.",
      image: "/hackathon.png",
      links: [],
    },
  ],
} as const;