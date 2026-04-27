import React from "react";
import "../App.css";
import { Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">Event Manager</h3>
          <p className="footer-tagline">Create, manage, and explore events.</p>
        </div>

        <div className="footer-center">
          <a href="/" className="footer-link">
            Home
          </a>
          <a href="/create-event" className="footer-link">
            Explore
          </a>
        </div>

        <div className="footer-right">
          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href="https://www.youtube.com/@millennialverses6653"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Youtube size={20} />
            </a>

            <a
              href="https://www.instagram.com/millennial_verses/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram size={20} />
            </a>
          </div>

          <p className="footer-credit">
            © {new Date().getFullYear()} millennial_verses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
