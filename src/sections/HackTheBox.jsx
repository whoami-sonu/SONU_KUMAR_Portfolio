import "../assets/styles/hackthebox.css";

import { SiHackthebox } from "react-icons/si";
import {
  FaExternalLinkAlt,
  FaServer,
} from "react-icons/fa";

function HackTheBox() {
  return (
    <section id="hackthebox" className="hackthebox">

      <div className="container">

        <div className="section-title">
          <span>OFFENSIVE SECURITY LAB</span>
          <h2>Hack The Box</h2>
        </div>

        <div className="htb-card">

          <div className="htb-logo">
            <SiHackthebox />
          </div>

          <div className="htb-content">

            <h3>whoamisonu</h3>

            <p>
              Hands-on penetration testing through Hack The Box,
              focusing on Windows & Linux privilege escalation,
              Active Directory attacks, web application security,
              network exploitation, and realistic Red Team labs.
            </p>

            <div className="htb-tags">

              <span>Linux</span>

              <span>Windows</span>

              <span>Active Directory</span>

              <span>Web Security</span>

              <span>Privilege Escalation</span>

              <span>Red Team</span>

            </div>

            <a
              href="https://profile.hackthebox.com/profile/019db0cb-4584-726d-a3a7-4b16bbcc4afe"
              target="_blank"
              rel="noreferrer"
              className="htb-btn"
            >
              <FaServer />

              <span>Visit My HTB Profile</span>

              <FaExternalLinkAlt />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HackTheBox;