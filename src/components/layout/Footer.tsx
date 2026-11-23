import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="brand" href="#hero">
          <span className="brand-mark" aria-hidden="true">BG<span>.</span></span>
          <span>{profile.name}</span>
        </a>
        <p>Full-stack engineering & digital growth · {profile.location}</p>
        <div className="footer-links">
          <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}
