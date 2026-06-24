import "./Footer.css";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h3 className="footer-title">Clean N Dry</h3>

        <p>
          Professional laundry and dry cleaning services with free pickup
          and doorstep delivery. Experience quality, convenience and care
          at competitive prices.
        </p>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Quick Links</h4>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Service Areas</h4>

        <ul>
          <li>Cuttack</li>
          <li>Bhubaneswar</li>
          <li>Nearby Locations</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Contact</h4>

        <div className="footer-contact">

          <span>📍 Cuttack, Odisha</span>

          <span>
            📞{" "}
            <a href="tel:+917609851051">
              +91 7609851051
            </a>
          </span>

          <span>
            <a
              href="https://wa.me/917609851051"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp-link"
            >
              <span className="whatsapp-icon-wrapper">
                <FaWhatsapp />
              </span>
              Chat on WhatsApp
            </a>
          </span>

        </div>

        {/* SOCIAL ICONS */}

        <div className="footer-social">

          <button
            type="button"
            className="social-btn"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </button>

          <button
            type="button"
            className="social-btn"
            aria-label="Twitter"
          >
            <FaTwitter />
          </button>

          <button
            type="button"
            className="social-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </button>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 Clean N Dry — All Rights Reserved
        </span>

        <div className="footer-bottom-links">
          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/terms">
            Terms & Conditions
          </a>
        </div>

      </div>

    </footer>
  );
}