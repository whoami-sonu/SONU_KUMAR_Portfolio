function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#home" className="logo">
          OFF<span>SEC</span>
        </a>

        <nav className="nav-menu">

          <a href="#home" className="nav-home">
            HOME
          </a>

          <a href="#about" className="nav-about">
            ABOUT
          </a>

          <a href="#skills" className="nav-skills">
            SKILLS
          </a>

          <a href="#tools" className="nav-tools">
            TOOLS
          </a>

          <a href="#projects" className="nav-projects">
            PROJECTS
          </a>

          <a
            href="https://tryhackme.com/p/WH0AMI"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-thm"
          >
            TRYHACKME
          </a>

          <a
            href="https://github.com/whoami-sonu"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
          >
            GITHUB
          </a>

          <a
            href="https://ctf.hackthebox.com/user/profile/997501"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-htb"
          >
            HACK THE BOX
          </a>

          <a href="#certificates" className="nav-cert">
            CERTIFICATES
          </a>

          <a href="#contact" className="nav-contact">
            CONTACT
          </a>

        </nav>

        <a
          href="https://www.linkedin.com/in/sonu-kumar-ab7119377/"
          target="_blank"
          rel="noopener noreferrer"
          className="hire-btn"
        >
          Hire Me
        </a>

      </div>
    </header>
  );
}

export default Navbar;