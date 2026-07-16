// Edit this file to customize your portfolio content.
// You generally should not need to touch anything in /components or /app
// unless you want to change the design or layout.

export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
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
}

const profile: Profile = {
  name: "Jane Apprentice",
  photo: "/profile-placeholder.svg",
  role: "Full-Stack Engineering Track",
  apprenticeId: "ZPN-NAG-001",
  shortBio:
    "I'm a FORGE apprentice building real-world software skills through hands-on projects. " +
    "This is my portfolio — replace this bio with a few sentences about who you are, " +
    "what you're learning, and what you're excited to build next.",
  forgeCohort: "April 2026",
  skills: ["TypeScript", "React", "Next.js", "Node.js", "Git"],
  contact: {
    email: "jane@example.com",
    phone: "",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
  },
};

export default profile;
