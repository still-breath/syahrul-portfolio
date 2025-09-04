import { FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

export const LANGUAGE = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "PHP",
    image: "php.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 95,
    height: 95,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "c++.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/syahrulfathoni.a?igsh=MWlmMnhzdDlmbjl0cQ==",  
  },
  {
    name: "Email",
    icon: RxEnvelopeClosed,
    link: "mailto:syahrulfa1106@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/628999109204",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 85,
    height: 85,
  },
  {
    skill_name: "Three.js",
    image: "threejs.png",
    width: 88,
    height: 88,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vite.js",
    image: "vitejs.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "flask.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
] as const;

export const DEVOPS = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Nginx",
    image: "nginx.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Vercel",
    image: "vercel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Azure",
    image: "azure.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Apache",
    image: "apache.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
] as const;

export const AI_ML = [
  {
    skill_name: "AI-ML",
    image: "ai-ml.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "YOLO",
    image: "yolo.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PyTorch",
    image: "pytorch.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TensorFlow",
    image: "tensorflow.png",
    width: 80,
    height: 80,
  },
] as const;
  

export const PROJECTS = [
  {
    title: "Retrux-Shelf-Eye (AI Inventory Management System)",
    description:
      "Developed a real-time shelf stock monitoring application using Python, with a user interface built in PyQt. This system implements an advanced RT-DETR object detection model with SAHI for sliced inference and includes key software utilities like multi-camera support and dynamic directory management to meet client needs.",
    image: "/projects/retrux_poster.png",
    link: "#", // Ganti dengan link proyek yang relevan
  },
  {
    title: "JAREE ITS (Academic Journal Platform)",
    description:
      "Orchestrated a seamless, live migration of the OJS platform from version 2 to 3, ensuring service continuity for over 30,000 users and upgrading a database with more than 597,000 records. I also engineered the complete academic peer-review workflow and developed a custom front-end theme to significantly enhance the user experience.",
    image: "/projects/jaree_poster.png",
    link: "#", // Ganti dengan link proyek yang relevan
  },
  {
    title: "Padel-Clipper (IoT Video Highlight System)",
    description:
      "Engineered a full IoT video highlight system, including a Flask dashboard and ESP32 hardware, which was deployed on a VPS for nearly 250 active customers. While the production system connects to a team-built Express.js backend, I independently re-engineered and built a new backend in Go (Golang) as a personal project to explore more efficient, concurrent solutions.",
    image: "/projects/padel_poster.png",
    link: "#", // Ganti dengan link proyek yang relevan
  },
  {
    title: "3D Container Loading Optimizer",
    description:
      "Developed a web-based logistics tool to solve the 3D Bin Packing Problem, achieving a container fill rate of 87-89%. I researched and implemented multiple packing algorithms in Python (Genetic Algorithm, BLF, CLPTAC) and built the full-stack application with React.js, Fast API, and a Three.js canvas for 3D visualization.",
    image: "/projects/project-4.png",
    link: "#", // Ganti dengan link proyek yang relevan
  },
  {
    title: "Vehicle Speed Estimation System with Drone & YOLOv8",
    description:
      "Developed a real-time vehicle speed estimation system that achieved a peak measurement accuracy of 99.55%. I trained a superior YOLOv8 model for night-time conditions (mAP50 of 0.93) and leveraged TensorRT to triple inference speed on the Jetson Nano, enabling real-time processing.",
    image: "/projects/ta_poster.png",
    link: "#", // Ganti dengan link proyek yang relevan
  },
  {
    title: "BengkelMate: Workshop Business Process Digitalization",
    description:
      "As part of a three-person team, I developed a full MERN stack web application to digitize workshop workflows. The app features a role-based system for Security, Service Advisors, and Spare Parts teams, and achieved excellent Lighthouse scores in Performance (96), Best Practices (96), and SEO (92).",
    image: "/projects/bengkel_poster.png",
    link: "#", // Ganti dengan link proyek yang relevan
  },
  {
    title: "ECG Exhibition Prototype",
    description:
      "Co-developed a functional ECG device for a technical exhibition, which validated its performance with 95-100% accuracy in real-time heart rate detection. I engineered the end-to-end system, from Arduino signal acquisition firmware to the design and fabrication of the physical, exhibition-ready casing.",
    image: "/projects/project-1.png",
    link: "#", // Ganti dengan link proyek yang relevan
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/syahrulahmad/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/still-breath",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/users/620160420266901504",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/syahrulfathoni.a?igsh=MWlmMnhzdDlmbjl0cQ==",
      },
      {
        name: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/628999109204",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "mailto:syahrulfa1106@gmail.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "/about-me/learn-more",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:syahrulfa1106@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/about-me/learn-more",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
  learnMore: "/about-me/learn-more",
};
