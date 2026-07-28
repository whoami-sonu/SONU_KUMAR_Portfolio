import { useState } from "react";
import "../assets/styles/certificates.css";
import certificates from "../data/certificates";

import {
  FaSearch,
  FaExternalLinkAlt,
  FaImage,
  FaCertificate,
} from "react-icons/fa";

function Certificates() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "TryHackMe",
    "PI Sigma",
    "Cisco",
    "RTL",
    "Vibe",
  ];

  const filteredCertificates = certificates.filter((cert) => {
    const matchesCategory =
      category === "All" || cert.category === category;

    const matchesSearch =
      cert.title.toLowerCase().includes(search.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="certificates">
      <div className="container">

        <div className="section-title">
          <span>ACHIEVEMENTS</span>

          <h2>Certificates</h2>

          <p>
            Professional certifications, learning paths,
            and cybersecurity achievements.
          </p>
        </div>

        <div className="certificate-stats">
          <div className="stat-card">
            <h3>{certificates.length}+</h3>
            <p>Certificates</p>
          </div>

          <div className="stat-card">
            <h3>5</h3>
            <p>Platforms</p>
          </div>

          <div className="stat-card">
            <h3>2025–2026</h3>
            <p>Issued</p>
          </div>

          <div className="stat-card">
            <h3>300+</h3>
            <p>Learning Hours</p>
          </div>
        </div>

        <div className="certificate-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="certificate-filter">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="certificate-count">
          Showing
          <strong> {filteredCertificates.length} </strong>
          of
          <strong> {certificates.length} </strong>
          Certificates
        </div>

        <div className="certificate-grid">
          {filteredCertificates.length === 0 ? (
            <div className="no-certificates">
              <FaCertificate />
              <h3>No Certificates Found</h3>
              <p>Try another search term or category.</p>
            </div>
          ) : (
            filteredCertificates.map((cert, index) => (
              <div className="certificate-card" key={index}>

                <div className="certificate-preview">
                  <img
                    src={cert.file}
                    alt={cert.title}
                    loading="lazy"
                  />
                </div>

                <div className="certificate-content">
                  <span className="badge">
                    {cert.category}
                  </span>

                  <h3>{cert.title}</h3>

                  <p>{cert.issuer}</p>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaImage />
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}

export default Certificates;