import React from "react";
import "./Footer.css";
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="b-f-footer">
      <div className="b-f-container">

        {/* ==============================
            TOP SECTION
        ============================== */}
        <div className="b-f-top">

          {/* BRAND */}
          <div className="b-f-col">
            <div className="b-f-logo-block">
              <div className="b-f-logo-mark">
                <img
                  src={logoImg}
                  alt="BYSEN Fitness"
                  className="b-f-logo-image"
                />
              </div>

              <div className="b-f-logo-text">
                <span className="b-f-logo-name">
                  BYSEN
                </span>

                <span className="b-f-logo-tagline">
                  The Fitness Garage
                </span>
              </div>
            </div>

            <p className="b-f-tagline">
              Puducherry's premier unisex fitness destination.
              7,000 sq.ft of elite training, powerful coaching,
              and a dedicated Protein HUB.
            </p>
          </div>

          {/* ==============================
              QUICK LINKS
          ============================== */}
          <div className="b-f-col">
            <h4 className="b-f-title">
              Quick Links
            </h4>

            <ul className="b-f-links">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#yus">Programs</a>
              </li>

              <li>
                <a href="#membership">Membership</a>
              </li>

              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* ==============================
              CONTACT INFO
          ============================== */}
          <div className="b-f-col b-f-contact-col">
            <h4 className="b-f-title">
              Contact Info
            </h4>

            <div className="b-f-contact-list">

              {/* PHONE */}
              <div className="b-f-contact-item">
                <span className="b-f-label">
                  Phone:
                </span>

                <div className="b-f-contact-values">
                  <a href="tel:+918667309414">
                    +91 8667309414
                  </a>

                  <a href="tel:+919655221117">
                    +91 9655221117
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="b-f-contact-item">
                <span className="b-f-label">
                  Email:
                </span>

                <div className="b-f-contact-values">
                  <a href="mailto:info@bysenfitness.com">
                    info@bysenfitness.com
                  </a>

                  <a href="mailto:bysen.fitness@gmail.com">
                    bysen.fitness@gmail.com
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="b-f-contact-item">
                <span className="b-f-label">
                  Location:
                </span>

                <div className="b-f-contact-values">
                  <span>
                    5, 1st Cross St, Vanathu Nagar,
                    Reddiarpalayam, Puducherry, 605010
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ==============================
              WORKING HOURS
          ============================== */}
          <div className="b-f-col b-f-hours-col">
            <h4 className="b-f-title">
              Working Hours
            </h4>

            <div className="b-f-hours-list">

              <div className="b-f-hours-item">
                <span className="b-f-hours-day">
                  Mon - Sat
                </span>

                <span className="b-f-hours-time">
                  5:30 AM - 10:30 PM
                </span>
              </div>

              <div className="b-f-hours-item">
                <span className="b-f-hours-day">
                  Sun
                </span>

                <span className="b-f-hours-time">
                  6 AM - 12 PM
                </span>
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="b-f-socials">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/_bysenfitness_/"
                target="_blank"
                rel="noopener noreferrer"
                className="b-f-social-icon"
                aria-label="Instagram"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/Bysenfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="b-f-social-icon"
                aria-label="Facebook"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* ==============================
            BOTTOM SECTION
        ============================== */}
        <div className="b-f-bottom">

          <p className="b-f-copyright">
            &copy; 2026 BYSEN Fitness. All rights reserved.
          </p>

          <p className="b-f-copyright">
            Crafted by ASPL Tech Solution Pvt Ltd.
          </p>

          <div className="b-f-legal-links">
            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;