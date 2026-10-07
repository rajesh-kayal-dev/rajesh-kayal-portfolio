import React from "react";
import { Icons } from "@/components/icons";
import {
  HomeIcon,
  Code2Icon,
  Database,
  Server,
  Layers,
  Network,
  GitBranch,
} from "lucide-react";

export const DATA = {
  name: "Rajesh Kayal",
  initials: "RK",
  url: "https://www.linkedin.com/in/rajesh110",
  location: "Kolkata, WB",
  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
  description:
    "Full Stack Developer and 2026 MCA graduate with 1+ year of experience building fast, secure and scalable products with React, Node.js, TypeScript, PostgreSQL, Kafka, Docker and AWS. Specialization in Cloud & DevOps with hands-on experience in Microservices System Architecture.",

  summary:
    "Most users only see a button. I love building what happens after they click it. That curiosity turned me into a Full Stack Developer with 1+ year of experience. I build fast, secure and scalable products that actually go live and handle real users. My main stack is React, Node.js, TypeScript, PostgreSQL, Kafka, Docker and AWS. Specialization in Cloud & DevOps with hands-on experience in Microservices System Architecture. I enjoy turning complex problems into simple and clean systems that can grow with the product. Always open to connect and build impactful products.",
  avatarUrl: "/me.png",
  skills: [
    // Frontend
    { name: "JavaScript", icon: Code2Icon },
    { name: "TypeScript", icon: Icons.typescript },
    { name: "React.js", icon: Icons.react },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },

    // Backend
    { name: "Node.js", icon: Icons.nodejs },
    { name: "Express.js", icon: Icons.express },
    { name: "REST APIs", icon: Server },
    { name: "Microservices", icon: Layers },

    // Databases
    { name: "PostgreSQL", icon: Icons.postgresql },
    { name: "MongoDB", icon: Icons.mongodb },
    { name: "MySQL", icon: Database },
    { name: "Redis", icon: Icons.redis },
    { name: "pgvector", icon: Icons.postgresql },

    // AI Integration
    { name: "LLM APIs", icon: Icons.ai },
    { name: "LangChain", icon: Icons.langchain },
    { name: "RAG", icon: Icons.ai },
    { name: "Vector Databases", icon: Database },

    // Cloud & DevOps
    { name: "AWS", icon: Icons.aws },
    { name: "EC2", icon: Icons.aws },
    { name: "S3", icon: Icons.aws },
    { name: "RDS", icon: Icons.aws },
    { name: "Docker", icon: Icons.docker },
    { name: "GitHub Actions", icon: Icons.github },
    { name: "CI/CD", icon: GitBranch },
    { name: "Apache Kafka", icon: Network },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rajeshkayal8001@gmail.com",
    tel: "+91-6289943975",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajesh-kayal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajesh110",
        icon: Icons.linkedin,
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/RajeshKayal_",
        icon: Icons.x,
        navbar: false,
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
      badges: ["MERN", "LangChain", "pgvector", "OpenAI APIs", "Microservices", "Kafka"],
      location: "Jaipur, Rajasthan",
      title: "MERN Stack Developer – Academic Internship",
      logoUrl: "/zetron.jpg",
      start: "Jan 2026",
      end: "Jun 2026",
      description:
        "- Built AI agents and RAG pipelines using LangChain, pgvector and OpenAI APIs in production MERN app.\n- Designed microservices with API Gateway, auth and Kafka using Node.js and TypeScript.",
    },
    {
      company: "PowerMyCode Solutions Pvt. Ltd.",
      href: "",
      badges: ["React.js", "Node.js", "MySQL", "MongoDB", "REST APIs", "AWS"],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/powermycode.jpg",
      start: "Jul 2023",
      end: "Jul 2024",
      description:
        "- Built 3 production web apps using React.js, Node.js, MySQL and MongoDB with clean UI/UX and REST APIs.\n- Managed AWS deployments and client delivery to ensure on-time releases with stable production.",
    },
  ],
  education: [
    {
      school: "Dev Bhoomi Uttarakhand University, Dehradun",
      href: "https://www.dbuu.ac.in/",
      degree: "Master of Computer Applications - CGPA: 8.0",
      logoUrl: "/dbuu.jpg",
      start: "2024",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Orderly – Food Delivery Platform",
      href: "https://orderly-puce-rho.vercel.app/",
      dates: "Mar 2026 – May 2026",
      active: true,
      description:
        "- Built a full-stack food-delivery platform with a Monorepo setup connecting customers, restaurants and drivers for real-time tracking.\n- Designed 6 microservices with API Gateway, Kafka event backbone, JWT auth and Socket.IO real-time updates.\n- Deployed distributed services with isolated PostgreSQL databases to ensure domain decoupling and high availability.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Microservices",
        "PostgreSQL",
        "Kafka",
        "Monorepo",
      ],
      links: [
        {
          type: "Website",
          href: "https://orderly-puce-rho.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/orderly.png",
      video: "",
    },
    {
      title: "Can I Clone – Product Research to Build Platform",
      href: "https://caniclone.vercel.app/",
      dates: "Jun 2026 – Jul 2026",
      active: true,
      description:
        "- Built a platform to analyze products like Notion or ChatGPT and check how they can be built from scratch.\n- Provides report on features, difficulty, budget and build plan with questions to customize requirements and MVP blueprint.\n- Engineered semantic search across 996 apps using PostgreSQL, pgvector and deployed on AWS EC2.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Gemini",
      ],
      links: [
        {
          type: "Website",
          href: "https://caniclone.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/caniclone.png",
      video: "",
    },
    {
      title: "Calby – Voice-First Desktop Assistant",
      href: "https://calby-mu.vercel.app/",
      dates: "Aug 2026 – Sep 2026",
      active: true,
      description:
        "- Built a voice-first desktop assistant for reminders, scheduling and personal memory using Electron and Gemini.\n- Engineered a secure Electron architecture using React, SQLite and typed IPC to translate Gemini requests into desktop actions.\n- Released v1.0.0 with Windows, macOS and Linux installers via GitHub Actions for cross-platform distribution.",
      technologies: [
        "Electron",
        "React",
        "TypeScript",
        "SQLite",
        "Gemini",
      ],
      links: [
        {
          type: "Website",
          href: "https://calby-mu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajesh-kayal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/calby.png",
      video: "",
    },
    {
      title: "DataPilot AI – Document Intelligence Platform",
      href: "https://datapilotai-delta.vercel.app/",
      dates: "May 2026 - Present",
      active: true,
      description:
        "- Built an AI-powered document intelligence platform for chatting with uploaded documents using RAG.\n- Engineered retrieval pipelines with semantic search, vector stores, and custom prompt orchestration.\n- Handled document processing asynchronously using queues and AWS S3 to maintain high throughput.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "LangChain",
        "RAG",
        "pgvector",
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
          href: "https://github.com/rajesh-kayal/DataPilotAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/DataPilot.gif",
      video: "",
    },
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
  leadership: [
    {
      title: "Technical Mentorship",
      description:
        "Mentored college juniors for several months and helped them learn web technologies and system architecture.",
    },
    {
      title: "Hackathons & Community",
      description:
        "Achieved podium finishes in multiple college hackathons and organized a hackathon at my college.",
    },
  ],
} as const;