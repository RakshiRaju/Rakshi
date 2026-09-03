export interface ContactInfo {
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
}

export interface Project {
  title: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface EducationEntry {
  institute: string;
  period: string;
  degree: string;
  detail?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
}

export interface Profile {
  name: string;
  photo: string;
  role: string;
  location: string;
  shortBio: string;
  resumeUrl: string;
  skills: string[];
  domains: string[];
  contact: ContactInfo;
  projects: Project[];
  education: EducationEntry[];
  certifications: Certification[];
}

const profile: Profile = {
  name: "RAKSHITHA PM",
  photo: "/profile-placeholder.svg",
  role: "Aspiring AI & Cloud Enthusiast",
  location: "Bengaluru, India",
  shortBio:
    "Results-driven fresher with strong communication and presentation skills, a quick grasp of new concepts, and a keen interest in Artificial Intelligence and emerging technologies. I enjoy collaborating in teams, adapting to new environments, and contributing through continuous learning and initiative.",
  resumeUrl: "/resume.html",
  skills: [
    "C",
    "Python",
    "HTML/CSS",
    "JavaScript",
    "Git",
    "Git Bash",
    "Visual Studio Code",
    "Power BI",
  ],
  domains: [
    "Cloud Computing",
    "Machine Learning",
    "Generative AI",
    "AWS",
    "AI in Public Safety",
    "IoT & Automation",
  ],
  contact: {
    email: "rakshithapm.2005@gmail.com",
    phone: "+91 8147105917",
    location: "Bengaluru, India",
    linkedin: "https://www.linkedin.com/in/rakshitha-pm-a10733293",
    github: "https://github.com/RakshiRaju",
  },
  projects: [
    {
      title: "Civic Shield: AI-Driven Citizen Safety and Smart Grievance Management Platform",
      summary:
        "A conceptual AI-led public safety platform designed to improve grievance management, classification, and location-based citizen reporting.",
      achievements: [
        "Co-authored a system design proposal covering requirements gathering, gap analysis, and architecture.",
        "Researched AI, NLP, and GIS use cases for public safety and defined complaint classification and tracking workflows.",
        "Outlined module-level specifications for citizen complaint handling and incident monitoring.",
      ],
      stack: ["AI", "NLP", "GIS", "System Design", "Public Safety"],
    },
    {
      title: "Plant Disease Detection Using AI",
      summary:
        "A CNN-based plant disease classifying system using transfer learning to detect crop diseases from leaf images.",
      achievements: [
        "Built a VGG-16 based classifier using transfer learning on leaf image datasets.",
        "Developed an OpenCV pipeline for resizing, HSV conversion, and Gaussian blurring.",
        "Implemented disease and pesticide-residue detection using color masking and morphological operations.",
        "Validated the model with Grad-CAM visualizations and six functional/evaluation test cases.",
      ],
      stack: ["Python", "TensorFlow", "OpenCV", "CNN", "Grad-CAM"],
    },
    {
      title: "Design and Development of IoT-Enabled Multi-Species Food Dispensing Device",
      summary:
        "A conceptual smart livestock feeding solution integrating IoT and AI-driven logic for dynamic, health-aware feeding.",
      achievements: [
        "Authored architecture and process-flow documentation for an AI-enabled livestock feeding system.",
        "Designed RFID-based animal identification with dynamic feeding logic based on health conditions.",
        "Reviewed literature on precision agriculture, automation, and smart livestock management.",
      ],
      stack: ["IoT", "RFID", "Automation", "Agriculture Tech", "System Design"],
    },
  ],
  education: [
    {
      institute: "Nagarjuna College of Engineering and Technology",
      period: "2023 – 2027",
      degree: "Bachelor of Engineering in Information Science and Engineering",
      detail: "CGPA: 7.2",
    },
    {
      institute: "St Joseph’s Convent Pre-University College",
      period: "2021 – 2023",
      degree: "Class XII",
      detail: "82.67",
    },
  ],
  certifications: [
    {
      name: "Google Cloud Career Launchpad - Cloud Engineer Track",
      issuer: "Google",
      period: "Oct 2025",
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
      period: "Apr 2026",
    },
  ],
};

export default profile;
