import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rajesh",
  initials: "RK",
  url: "https://www.linkedin.com/in/rajesh110/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Backend-Focused Full Stack Developer building scalable applications and AI-powered tools with Node.js, React, Next.js, and modern developer technologies.",
  summary:
    "Over the last 1+ years, I've been building backend systems, REST APIs, and full-stack applications. Currently pursuing a [Master's in Computer Applications](/#education), I've gained hands-on experience across [multiple software development roles](/#work), working with Node.js, databases, cloud services, and scalable applications. I enjoy building practical software, exploring AI integrations, and have also participated in [5+ hackathons](/#hackathons), securing podium finishes twice.",
  avatarUrl: "/me.png",
  skills: [
  // Backend
  { name: "Node.js", icon: Icons.nodejs },
  { name: "Express.js", icon: Icons.express },
  { name: "TypeScript", icon: Icons.typescript },
  { name: "WebSockets", icon: Icons.globe },

  // Frontend
  { name: "React.js", icon: Icons.react },
  { name: "Next.js", icon: Icons.nextjs },
  { name: "Redux", icon: Icons.redux },
  { name: "Tailwind CSS", icon: Icons.tailwindcss },
  { name: "Shadcn/UI", icon: Icons.shadcn },

  // Databases
  { name: "MongoDB", icon: Icons.mongodb },
  { name: "PostgreSQL", icon: Icons.postgresql },
  { name: "Redis", icon: Icons.redis },
  { name: "Pinecone", icon: Icons.mongodb },
  { name: "Qdrant", icon: Icons.mongodb },

  // Cloud & DevOps
  { name: "Docker", icon: Icons.docker },
  { name: "AWS", icon: Icons.aws },
  { name: "Git/GitHub", icon: Icons.github },
  { name: "Google Cloud", icon: Icons.gcp },
  { name: "Firebase", icon: Icons.firebase },

  // AI & Integrations
  { name: "OpenAI API", icon: Icons.openai },
  { name: "LLMs", icon: Icons.openai },
  { name: "LangChain", icon: Icons.langchain },
  { name: "LangGraph", icon: Icons.langgraph },
  { name: "RAG", icon: Icons.ai },
  { name: "Vector Databases", icon: Icons.mongodb },
  { name: "AI Agents", icon: Icons.ai },
  { name: "n8n", icon: Icons.n8n },
  { name: "Hugging Face", icon: Icons.huggingface },
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
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Zeetron Networks Pvt Ltd",
      href: "https://zeetronnetworks.com",
      badges: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AWS S3", "Gemini AI", "RAG"],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/zetron.jpg",
      start: "Jan 2026",
      end: "Present",
      description:
        "- **Full-Stack Development:** Engineered scalable web applications using `React.js` and `Node.js`, implementing robust `Express.js` backends and `MongoDB` schemas.\n- **Automated Pipelines:** Designed RESTful APIs for email and resume generation using `AWS S3`, cutting manual processing time by **70%**.\n- **AI Innovation:** Built an AI-driven invoice OCR pipeline with `Gemini API`, reducing procurement entry effort by **~70%** and AI costs by **~50%**.\n- **Optimization:** Developed cron-based workflows for personalized recommendations, boosting user engagement by **30%**.",
    },
    {
      company: "Jubili.in",
      href: "https://jubili.in",
      badges: ["Next.js", "MongoDB", "E-commerce", "AI Shopping", "Full Stack", "AWS"],
      location: "Kolkata, IN",
      title: "Full Stack Developer Intern",
      logoUrl: "/jubili.jpg",
      start: "Jun 2025",
      end: "Aug 2025",
      description:
        "- **E-commerce Ecosystem:** Contributed to a high-scale e-commerce platform, focusing on seamless seller-to-customer experiences.\n- **AI Features:** Assisted in building AI-enhanced tools like **personalized store pages** and real-time order tracking.\n- **User Engagement:** Collaborated on innovative features such as **virtual try-ons**, enhancing the future of digital retail.",
    },
    {
      company: "Powermycode Solutions",
      href: "",
      badges: ["Node.js", "Laravel", "MySQL", "REST API", "Microservices", "Docker"],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/powermycode.jpg",
      start: "Feb 2024",
      end: "Aug 2024",
      description:
        "- **Backend Systems:** Developed high-reliability systems using `Node.js` and `Laravel` for complex, real-world applications.\n- **Security Engineering:** Built secure REST APIs with advanced **Authentication** and **Role-Based Access Control (RBAC)**.\n- **Optimization:** Optimized database structures and engineered scalable architecture patterns to handle concurrent traffic.\n- **Modern Design:** Implemented microservices-based structuring to enhance system modularity and maintainability.",
    },
    {
      company: "IVDisplays",
      href: "",
      badges: ["Laravel", "Node.js", "MySQL", "E-commerce", "Payment Gateways"],
      location: "Remote",
      title: "Junior Backend Developer",
      logoUrl: "/IvDisplays.jpg",
      start: "Sept 2023",
      end: "Jan 2024",
      description:
        "- **Custom Web Solutions:** Engineered bespoke web applications using `Laravel` and `Node.js`, delivering tailored functionality for client-specific requirements.\n- **E-commerce & Payments:** Developed robust e-commerce platforms and successfully integrated secure **Payment Gateway** systems to facilitate seamless transactions.\n- **Performance Tuning:** Specialized in identifying and resolving backend bottlenecks, significantly improving application speed and stability.\n- **Legacy System Maintenance:** Debugged and refactored existing codebases to fix critical issues and enhance overall project maintainability.",
    },
    {
      company: "EjobIndia",
      href: "https://ejobindia.com",
      badges: ["Java", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      location: "Kolkata, IN",
      title: "Software Developer Trainee",
      logoUrl: "/ejob_india.jpg",
      start: "Jan 2023",
      end: "Aug 2023",
      description:
        "- **Full-Stack Foundations:** Gained comprehensive hands-on experience in the complete software development lifecycle, from requirement analysis to deployment.\n- **Core Web Technologies:** Developed proficiency in building responsive front-end interfaces and robust backend logic using industry-standard frameworks.\n- **Collaborative Development:** Actively participated in team-based projects, leveraging **version control systems** and Agile methodologies to deliver quality code.\n- **Technical Problem Solving:** Focused on writing clean, maintainable code and solving complex algorithmic challenges to optimize application performance.",
    },
  ],
  education: [
    {
      school: "Dev Bhoomi Uttarakhand University",
      href: "https://www.dbuu.ac.in/",
      degree: "Master of Computer Applications  | CGPA: 8.5 / 10",
      logoUrl: "/dbuu.jpg",
      start: "2024",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Sentio CLI",
      href: "https://cli-sentio.duckdns.org/",
      dates: "March 2026 - Present",
      active: true,
      description:
        "A high-performance, agentic AI command-line interface designed to streamline developer workflows. It provides a standalone, zero-dependency environment for interacting with advanced AI models directly from your terminal with secure OAuth2 authentication.",
      technologies: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "Prisma",
        "Shadcn UI",
        "Magic UI",
        "Google AI Studio",
        "Vector Databases",
        "Better Auth",
        "Vercel",
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
        "An AI-powered document intelligence platform that enables users to upload, analyze, and chat with their documents using Retrieval-Augmented Generation (RAG) and multi-agent orchestration. Features semantic search with Qdrant vector store and fast responses powered by Redis caching.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Qdrant",
        "Gemini AI",
        "Tailwind CSS",
        "JWT",
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
        "A comprehensive fitness platform combining a social creator feed, e-commerce store, diet/workout logging trackers, and live chat. Architected using a modular microservices backend with an API Gateway routing to independent auth, user, diet, workout, feed, and chat services.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Framer Motion",
        "Context API",
        "JWT",
        "Microservices",
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
        "E-commerce",
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
