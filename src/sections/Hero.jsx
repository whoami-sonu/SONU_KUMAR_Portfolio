import "../assets/styles/hero.css";

import {
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";

import {
  SiTryhackme,
  SiHackthebox,
} from "react-icons/si";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <span className="hero-tag">
            <FaShieldAlt />
            <span>OFFENSIVE SECURITY</span>
          </span>

          <h1>
            Sonu <span>Kumar</span>
          </h1>

          <h2>Ethical Hacker</h2>

          <div className="hero-role">
            Offensive Security Engineer
          </div>

          <p className="hero-desc">
            Specialized in <strong>Web Application Penetration Testing</strong>,
            <strong> Bug Bounty Research</strong>,
            <strong> API Security</strong>,
            <strong> Active Directory</strong>,
            <strong> Network Security</strong>, and{" "}
            <strong>Vulnerability Assessment</strong>.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-red">
              <FaRocket />
              <span>View Projects</span>
            </a>

            <a href="#contact" className="btn-outline">
              <FaEnvelope />
              <span>Contact Me</span>
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/whoami-sonu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://tryhackme.com/p/WH0AMI"
              target="_blank"
              rel="noreferrer"
            >
              <SiTryhackme />
              <span>TryHackMe</span>
            </a>

            <a
              href="https://ctf.hackthebox.com/user/profile/997501"
              target="_blank"
              rel="noreferrer"
            >
              <SiHackthebox />
              <span>Hack The Box</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sonu-kumar-ab7119377/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">

          <div className="profile-card">

            <img
              src="/sonu2.jpeg"
              alt="Sonu Kumar"
              className="profile-img"
            />

            <div className="photo-overlay">
              Sonu Kumar
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;