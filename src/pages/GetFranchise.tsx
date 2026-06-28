import React from "react";
import "./GetFranchise.css";
import logo from "../assets/images/logo.png";
import Footer from '../components/Footer/Footer';
import { useNavigate } from "react-router-dom";

const Franchise: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="franchise-section">
        {/* Header */}
        <div className="franchise-header">
          <img src={logo} alt="Clean & Dry Logo" className="franchise-logo" />
          <h1>Become a Franchise Partner</h1>
          <p className="franchise-subtitle">
            Join one of India’s fastest-growing professional cleaning brands.
          </p>
        </div>

        {/* Benefits */}
        <div className="franchise-grid">
          <div className="franchise-card">
            <h3>💡 Why Franchise?</h3>
            <p>
              Get complete guidance, technology, and branding support. No need for
              your own R&D or marketing investments.
            </p>
          </div>
          <div className="franchise-card">
            <h3>📈 High ROI</h3>
            <p>
              90% of stores achieve breakeven within 3 months. ROI up to 80% per
              annum.
            </p>
          </div>
          <div className="franchise-card">
            <h3>🏙️ Investment Options</h3>
            <ul>
              <li>Metro & Tier 1: ₹18 Lakhs</li>
              <li>Tier 2 Cities: ₹14 Lakhs</li>
              <li>Tier 3 Towns: ₹12 Lakhs</li>
              <li>Tier 4 Towns: Starting ₹4 Lakhs</li>
            </ul>
          </div>
          <div className="franchise-card">
            <h3>🤝 Support</h3>
            <p>
              Assistance with bank loans, project reports, and documentation to
              help you start smoothly.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="franchise-cta">
          <p className="franchise-contact-text">
            For more details, contact our franchise team.
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Franchise;
