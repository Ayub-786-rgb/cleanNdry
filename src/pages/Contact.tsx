import React from "react";
import "./Contact.css";
import logo from "../assets/images/logo.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from '../components/Footer/Footer';


const ContactUs: React.FC = () => {
  return (<>
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <img src={logo} alt="Clean & Dry Logo" className="contact-logo" />
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          We’d love to hear from you. Reach out for any queries or support.
        </p>
      </div>

      {/* Contact Info */}
      <div className="contact-grid">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Office Address</h3>
          <p>
            BAC House, Lane 5C, Shree Vhair,<br />
            Chandrasekharpur, Patia,<br />
            Bhubaneswar – 751024
          </p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:mail-info@thecleandry.com">
              mail-info@thecleandry.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>
            <a href="tel:+917609851051">+91 7609851051</a>
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactUs;
