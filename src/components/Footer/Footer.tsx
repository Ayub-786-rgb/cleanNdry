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
import logo from "../../assets/images/logof.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const phone = "917605990906";
  const prefilledMessage = encodeURIComponent(
    "Hello Clean N Dry, I'd like to schedule a pickup for my laundry."
  );
  const whatsappLink = `https://wa.me/${phone}?text=${prefilledMessage}`;

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Near Me", path: "/store" },
    { name: "Blogs", path: "/blog" },
    { name: "Franchise", path: "/franchise" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Careers", path: "/careers" },
    { name: "FAQ", path: "/faq" },
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
        <h3>Clean N Dry: India’s Trusted Laundry & Dry Cleaning Network</h3>
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
            <img src={logo} alt="Clean N Dry Logo" className="footer-logo-img" />
          </div>

          <p>
            Professional laundry and dry‑cleaning services with free pickup and
            doorstep delivery — quality, convenience, and care.
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/share/19GN8ezobS/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/clea.ndry?igsh=MTd1cGVodHg4dnN2bw==" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="tel:+917609851051" aria-label="Phone"><FaPhoneAlt /></a>
          </div>

          {/* ✅ App Store & Play Store badges */}
          <div className="footer-apps">
            <a
              href="https://apps.apple.com/in/app/fabklean/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="app-badge"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.fabklean"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="app-badge"
              />
            </a>
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
