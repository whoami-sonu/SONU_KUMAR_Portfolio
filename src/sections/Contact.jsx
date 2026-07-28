import "../assets/styles/contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiTryhackme,
  SiHackthebox,
} from "react-icons/si";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message feature will be connected soon.");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <span>GET IN TOUCH</span>

          <h2>Contact Me</h2>

          <p>
            Interested in Cybersecurity, Penetration Testing,
            Digital Forensics or Security Research? Feel free to
            contact me.
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT */}

          <div className="contact-info">

            <div className="contact-card">
              <FaEnvelope />

              <div>
                <h3>Email</h3>

                <a href="mailto:sonucs0298@gmail.com">
                  sonucs0298@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone />

              <div>
                <h3>Phone</h3>

                <a href="tel:+919835776072">
                  +91 9835776072
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt />

              <div>
                <h3>Location</h3>

                <p>Bhubaneswar, Odisha, India</p>
              </div>
            </div>

            <div className="contact-card">
              <FaGithub />

              <div>
                <h3>GitHub</h3>

                <a
                  href="https://github.com/whoami-sonu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/whoami-sonu
                </a>
              </div>
            </div>

            <div className="contact-card">
              <SiTryhackme />

              <div>
                <h3>TryHackMe</h3>

                <a
                  href="https://tryhackme.com/p/WH0AMI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tryhackme.com/p/WH0AMI
                </a>
              </div>
            </div>

            <div className="contact-card">
              <SiHackthebox />

              <div>
                <h3>Hack The Box</h3>

                <a
                  href="https://profile.hackthebox.com/profile/019db0cb-4584-726d-a3a7-4b16bbcc4afe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @whoamisonu
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaLinkedin />

              <div>
                <h3>LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/sonu-kumar-ab7119377/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sonu-kumar-ab7119377
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email Address"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              rows="7"
              placeholder="Write your message here..."
              required
            />

            <button type="submit">
              <FaPaperPlane />
              <span>Send Message</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;