// images
import bonxImg from "../assets/projects/01-BONX.webp";
import solarImg from "../assets/projects/04-SOLAR.webp";
import roofImg from "../assets/projects/05-ROOFUI.webp";
import portfolioImg from "../assets/projects/06-PORTFOLIO.webp";
import appstoreImg from "../assets/projects/02-APPSTORE.webp";
import crmImg from "../assets/projects/03-ONESRC.webp";
import { RemoteProject } from "../pages/Projects";

export const projects: RemoteProject[] = [
  {
    id: "bonx",
    name: "BONX",
    role: "Frontend Developer",
    description:
      "Developed a modern gaming platform delivering a fast and immersive browsing experience. Built reusable React components and optimized responsive layouts to support seamless interaction across devices.",
    category: "Web Platform",
    tech: ["React", "JavaScript", "Responsive UI", "Component Architecture"],
    imageUrl: bonxImg,
    thumbnailUrl: bonxImg,
    link: "",
  },

  {
    id: "solar",
    name: "SOLAR",
    role: "Frontend Developer",
    description:
      "Created a conversion-focused marketing website promoting solar solutions for blackout scenarios. Designed clear content structure and responsive layouts to improve user understanding and engagement.",
    category: "Marketing Website",
    tech: ["React", "HTML", "CSS", "Responsive Design", "UI Optimization"],
    imageUrl: solarImg,
    thumbnailUrl: solarImg,
    link: "",
  },

  {
    id: "roof-ui",
    name: "ROOF UI",
    role: "Frontend Developer",
    description:
      "Built an intuitive solar solutions platform enabling homeowners to explore sustainable energy options. Focused on accessibility, performance optimization, and modern UI/UX implementation.",
    category: "Web Application",
    tech: [
      "React",
      "UI/UX Engineering",
      "Responsive Design",
      "Performance Optimization",
    ],
    imageUrl: roofImg,
    thumbnailUrl: roofImg,
    link: "",
  },

  {
    id: "portfolio",
    name: "Portfolio Website",
    role: "Frontend / Full-Stack Developer",
    description:
      "Designed and developed a modern developer portfolio showcasing projects, technical expertise, and engineering capabilities. Implemented reusable components, optimized performance, and ensured accessibility across all devices.",
    category: "Web Application",
    tech: ["React", "TypeScript", "Component Architecture", "SEO"],
    imageUrl: portfolioImg,
    thumbnailUrl: portfolioImg,
    link: "",
  },

  {
    id: "appstore",
    name: "APPSTORE",
    role: "Frontend Developer",
    description:
      "Developed a secure application management dashboard enabling users to upload and manage Android apps using JWT authentication, protected routes, and role-based access control.",
    category: "Dashboard",
    tech: [
      "React",
      "Node.js",
      "JWT Authentication",
      "REST APIs",
      "Role-Based Access",
    ],
    imageUrl: appstoreImg,
    thumbnailUrl: appstoreImg,
    link: "",
  },

  {
    id: "onesrc-crm",
    name: "ONE SRC CRM",
    role: "Full-Stack Developer",
    description:
      "Engineered a scalable CRM dashboard supporting user management, role permissions, and activity tracking. Built secure REST APIs with JWT authentication and integrated MongoDB for reliable data handling.",
    category: "CRM System",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    imageUrl: crmImg,
    thumbnailUrl: crmImg,
    link: "",
  },
];
