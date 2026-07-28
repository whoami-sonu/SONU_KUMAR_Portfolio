import "../assets/styles/projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaBug,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      icon: <FaShieldAlt />,
      title: "Web Application Penetration Testing",
      desc: "Performed security assessments on web applications by identifying SQL Injection, XSS, Authentication flaws, SSRF, File Upload vulnerabilities and Business Logic Issues.",
      tech: ["Burp Suite", "OWASP", "Nmap", "ffuf", "sqlmap"],
      github: "https://github.com/whoami-sonu",
    },

    {
      icon: <FaNetworkWired />,
      title: "Active Directory Lab",
      desc: "Hands-on Active Directory enumeration, privilege escalation, Kerberoasting and lateral movement in lab environments.",
      tech: ["BloodHound", "Impacket", "NetExec", "Evil-WinRM"],
      github: "https://github.com/whoami-sonu",
    },

    {
      icon: <FaBug />,
      title: "Bug Bounty Automation",
      desc: "Python automation toolkit for reconnaissance, subdomain enumeration, HTTP probing and nuclei scanning.",
      tech: ["Python", "Subfinder", "httpx", "Nuclei", "ffuf"],
      github: "https://github.com/whoami-sonu",
    },

    {
      icon: <FaServer />,
      title: "API Security Testing",
      desc: "REST API security assessment including JWT attacks, IDOR, Broken Authentication and Authorization flaws.",
      tech: ["Burp Suite", "Postman", "JWT", "OWASP API"],
      github: "https://github.com/whoami-sonu",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">

        <div className="section-title">
          <span>FEATURED WORK</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-icon">
                {project.icon}
              </div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="project-tech">
                {project.tech.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a href="#">
                  <FaExternalLinkAlt />
                  Details
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;