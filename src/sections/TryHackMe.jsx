import "../assets/styles/tryhackme.css";
import { SiTryhackme } from "react-icons/si";
import { FaShieldAlt, FaExternalLinkAlt } from "react-icons/fa";

function TryHackMe() {
  return (
    <section id="tryhackme" className="tryhackme">
      <div className="container">

        <div className="section-title">
          <span>CYBER SECURITY PLATFORM</span>
          <h2>TryHackMe</h2>
        </div>

        <div className="thm-card">

          <div className="thm-logo">
            <SiTryhackme />
          </div>

          <div className="thm-content">

            <h3>WH0AMI</h3>

            <p>
              Continuously improving offensive security skills through
              Web Security,
              Active Directory,
              Linux,
              Windows,
              Privilege Escalation,
              Red Team Labs,
              and Capture The Flag challenges.
            </p>

            <div className="thm-tags">
              <span>Web</span>
              <span>Linux</span>
              <span>Windows</span>
              <span>AD</span>
              <span>CTF</span>
              <span>Red Team</span>
            </div>

            <a
              href="https://tryhackme.com/p/WH0AMI"
              target="_blank"
              rel="noreferrer"
              className="thm-btn"
            >
              <FaShieldAlt />
              <span>Visit Profile</span>
              <FaExternalLinkAlt />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TryHackMe;