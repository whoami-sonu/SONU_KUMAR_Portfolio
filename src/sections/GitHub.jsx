import "../assets/styles/github.css";

import {
  FaGithub,
  FaCode,
  FaBug,
  FaExternalLinkAlt,
} from "react-icons/fa";

function GitHub() {
  return (
    <section id="github" className="github">

      <div className="container">

        <div className="section-title">
          <span>OPEN SOURCE</span>
          <h2>GitHub</h2>
        </div>

        <div className="github-card">

          <div className="github-logo">
            <FaGithub />
          </div>

          <div className="github-content">

            <h3>whoami-sonu</h3>

            <p>
              Open-source cybersecurity projects focused on
              Web Application Penetration Testing,
              Bug Bounty Automation,
              Python Security Tools,
              Active Directory Labs,
              API Security,
              and Offensive Security Research.
            </p>

            <div className="github-tags">

              <span>Python</span>
              <span>Bash</span>
              <span>JavaScript</span>
              <span>Automation</span>
              <span>Bug Bounty</span>
              <span>API Security</span>

            </div>

            <div className="github-stats">

              <div className="stat-box">
                <FaCode />
                <h4>Projects</h4>
                <span>20+</span>
              </div>

              <div className="stat-box">
                <FaBug />
                <h4>Security Labs</h4>
                <span>50+</span>
              </div>

            </div>

            <a
              href="https://github.com/whoami-sonu"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub />
              <span>Visit GitHub</span>
              <FaExternalLinkAlt />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GitHub;