import "../assets/styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import {
  SiTryhackme,
  SiHackthebox,
} from "react-icons/si";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="footer">

      <div className="container">

        <h2>Sonu Kumar</h2>

        <p>
          Offensive Security Engineer • Ethical Hacker • Bug Bounty Researcher
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/whoami-sonu"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sonu-kumar-ab7119377/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://tryhackme.com/p/WH0AMI"
            target="_blank"
            rel="noreferrer"
          >
            <SiTryhackme />
          </a>

          <a
            href="https://profile.hackthebox.com/profile/019db0cb-4584-726d-a3a7-4b16bbcc4afe"
            target="_blank"
            rel="noreferrer"
          >
            <SiHackthebox />
          </a>

          <a href="mailto:sonucs0298@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <button
          className="scroll-top"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

        <div className="copyright">

          © {new Date().getFullYear()} Sonu Kumar

          <br />

          All Rights Reserved.

        </div>

      </div>

    </footer>

  );
}

export default Footer;