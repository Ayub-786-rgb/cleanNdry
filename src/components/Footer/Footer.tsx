import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  // WhatsApp setup
  const phone = "917609851051";
  const prefilledMessage = encodeURIComponent(
    "Hello Clean N Dry, I'd like to schedule a pickup for my laundry."
  );
  const whatsappLink = `https://wa.me/${phone}?text=${prefilledMessage}`;

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Near Me", path: "/locations" },
    { name: "Blog", path: "/blogs" },
    { name: "Franchise", path: "/franchise" },
    { name: "Deep Cleaning", path: "/services/deep-cleaning" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const cities = [
    "Angul","Bengaluru","Pune","Delhi","Indore","Cochin","Kolkata","Patna","Jamshedpur",
    "Hyderabad","Rajamundary","Durgapur","Ujjain","Udaipur","Ranchi",
  ];

  return (
    <footer className="footer">
      {/* ================= TOP NAVIGATION ================= */}
      <div className="footer-nav">
        {quickLinks.map((item) => (
          <NavLink key={item.name} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* ================= TAGLINE ================= */}
      <div className="footer-tagline">
        <h2>
          SMARTER <span>•</span> CLEANER <span>•</span> GREENER
        </h2>
      </div>

      {/* ================= CITY GRID ================= */}
      <div className="footer-cities">
        <h3>
          Clean N Dry: India’s Trusted Laundry & Dry Cleaning Network
        </h3>
        <div className="cities-grid">
          {cities.map((city) => (
            <NavLink key={city} to={`/locations/${city.toLowerCase()}`}>
              {city}
            </NavLink>
          ))}
        </div>
      </div>

      {/* ================= BRANDING & SOCIAL ================= */}
      <div className="footer-bottom">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Clean N Dry Logo"
              className="footer-logo-img"
            />
          </div>

          <p>
            Professional laundry and dry‑cleaning services with free pickup and
            doorstep delivery — quality, convenience, and care.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="tel:+917609851051" aria-label="Phone"><FaPhoneAlt /></a>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-copyright">
        <p>© {year} Clean N Dry — All Rights Reserved</p>
      </div>
    </footer>
  );
}
