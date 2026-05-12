import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rajesh",
  initials: "RK",
  url: "https://www.linkedin.com/in/rajesh110/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "AI Software Engineer building AI-powered SaaS platforms, automation tools, and full stack applications using Next.js, React, Node.js, and modern AI technologies.",
  summary:
    "Over the past 1+ year, I've focused on building reliable software and AI tools that actually work. In the past, [I've been pursuing my Master's in Computer Applications](/#education), [learning the ropes across 5 different internships](/#work), and [competing in over 6 hackathons for fun—where I managed to end up on the podium 3 times](/#hackathons).",
  avatarUrl: "/me.png",
  skills: [
    { name: "React.js", icon: Icons.react },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "TypeScript", icon: Icons.typescript },
    { name: "Node.js", icon: Icons.nodejs },
    { name: "Postgres", icon: Icons.postgresql },
    { name: "Docker", icon: Icons.docker },
    { name: "LLMs", icon: Icons.openai },
    { name: "OpenAI API SDK", icon: Icons.openai },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Git/GitHub", icon: Icons.github },
    { name: "Express.js", icon: Icons.express },
    { name: "MongoDB", icon: Icons.mongodb },
    { name: "Redis", icon: Icons.redis },
    { name: "Shadcn/UI", icon: Icons.shadcn },
    { name: "Redux", icon: Icons.redux },
    { name: "LangChain", icon: Icons.langchain },
    { name: "LangGraph", icon: Icons.langgraph },
    { name: "RAG", icon: Icons.ai },
    { name: "Vector Databases", icon: Icons.mongodb },
    { name: "Pinecone", icon: Icons.mongodb },
    { name: "Qdrant", icon: Icons.mongodb },
    { name: "AI Agents Workflows", icon: Icons.ai },
    { name: "n8n", icon: Icons.n8n },
    { name: "Hugging Face", icon: Icons.huggingface },
    { name: "GPT-4", icon: Icons.openai },
    { name: "Gemini", icon: Icons.gemini },
    { name: "Claude", icon: Icons.anthropic },
    { name: "Firebase", icon: Icons.firebase },
    { name: "WebSockets", icon: Icons.globe },
    { name: "AWS EC2 S3", icon: Icons.aws },
    { name: "Google Cloud", icon: Icons.gcp },
    { name: "Figma", icon: Icons.figma },
    { name: "DSA", icon: Icons.dsa },
    { name: "Vibe Coding", icon: Icons.vibecoding },
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
      title: "Junior Backend Developer",
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
      start: "Oct 2023",
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
      start: "Feb 2023",
      end: "Aug 2024",
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
          href: "https://sentio-cli.vercel.app",
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
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
      links: [],
    },
    {
      title: "Padmavyuh Hackathon 4.0",
      dates: "November 20th - 22nd, 2025",
      location: "Dehradun, UK, India",
      description:
        "A high-stakes annual national-level technical prototype challenge focused on engineering and innovation.",
      image: "/hackathon.png",
      links: [],
    },
    {
      title: "Surreal World Global Hackathon",
      dates: "June 2nd, 2025",
      location: "International (Virtual)",
      description:
        "An international development sprint focused on virtual ecosystem designs and immersive digital experiences.",
      image: "/hackathon.png",
      links: [],
    },
    {
      title: "Lakshagriha Hackathon 4.0",
      dates: "April 17th - 18th, 2025",
      location: "Dehradun, UK, India",
      description:
        "A university-wide innovation layout challenge for hardware and software tracking systems.",
      image: "/hackathon.png",
      links: [],
    },
    {
      title: "promptX 2025",
      dates: "March 21st - 22nd, 2025",
      location: "National Level",
      description:
        "A national-level, 24-hour non-stop hackathon targeting advanced AI implementation and prompt engineering.",
      image: "/hackathon.png",
      links: [],
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
