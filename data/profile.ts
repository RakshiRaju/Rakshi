// Edit this file to customize your portfolio content.
// You generally should not need to touch anything in /components or /app
// unless you want to change the design or layout.

export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface Certificate {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  photo: string;
  role: string;
  apprenticeId: string;
  shortBio: string;
  forgeCohort: string;
  skills: string[];
  contact: ContactInfo;
  resumeUrl: string;   
  certificates: Certificate[]; 
}

const profile: Profile = {
  name: "Rakshitha PM",
  photo: "/photo1.jpeg",
  role: "Product Management Intern",
  apprenticeId: "ZPN-NAG-001",
  shortBio:
    "I'm a FORGE apprentice building real-world software skills through hands-on projects. " +
    "This is my portfolio — Rakshitha PM, Aspiring Product Manager Inetern Role." +
    "I care more about structure, clarity, and execution than syntax" +
  "— and I'm learning to build things that prove it.",
  forgeCohort: "Gradute in 2027",
  skills: ["TypeScript", "React", "Python", "Node.js", "Git", "Execution & Ownership", "HTML", "CSS", "DS", "AI-ML", "Next.js"],
  contact: {
    email: "rakshithapm.2005@gmail.com",
    phone: "8147105917",
    linkedin: "https://linkedin.com/in/rakshitha-pm-a10733293",
    github: "https://github.com/RakshiRaju",
    resumeUrl: "/Resume(1).pdf",
  certificates: [
    { name: "FORGE Apprenticeship Certificate", url: "/certificates/forge-cert.pdf" },
    { name: "Some Other Cert", url: "/certificates/other-cert.pdf" },
  ],
  },
};

export default profile;
