import Image from "next/image";
import profile from "@/data/profile";

export default function Header() {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="avatar-wrap">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={72}
            height={72}
            className="avatar"
          />
        </div>
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>
        </div>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="meta-row">
        <span>{profile.location}</span>
        <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
      </div>
    </header>
  );
}
