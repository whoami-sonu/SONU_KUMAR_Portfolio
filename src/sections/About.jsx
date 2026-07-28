import "../assets/styles/about.css";
import {
  FaUserSecret,
  FaGraduationCap,
  FaShieldAlt,
  FaBug,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <div className="section-title">
          <span>ABOUT ME</span>
          <h2>Who Am I?</h2>
        </div>

        <div className="about-grid">

          {/* LEFT */}

          <div className="about-left">

            <div className="about-card">

              <FaUserSecret className="about-icon" />

              <h3>Offensive Security Engineer</h3>

              <p>
                I'm <strong>Sonu Kumar</strong>, an Ethical Hacker and
                Offensive Security Engineer passionate about discovering
                security vulnerabilities before attackers do.

                I specialize in
                <strong> Web Application Penetration Testing</strong>,
                <strong> API Security</strong>,
                <strong> Bug Bounty Research</strong>,
                <strong> Active Directory</strong>,
                and
                <strong> Network Security</strong>.

                I continuously improve my skills through
                TryHackMe,
                Hack The Box,
                PortSwigger Labs,
                CTFs,
                and real-world security research.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="about-right">

            <div className="info-card">

              <FaGraduationCap />

              <div>

                <h4>Education</h4>

                <p>B.Tech – Computer Science & Engineering</p>

              </div>

            </div>

            <div className="info-card">

              <FaShieldAlt />

              <div>

                <h4>Specialization</h4>

                <p>Web Application Penetration Testing & API Security</p>

              </div>

            </div>

            <div className="info-card">

              <FaBug />

              <div>

                <h4>Research</h4>

                <p>Bug Bounty Hunting & Vulnerability Assessment</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;