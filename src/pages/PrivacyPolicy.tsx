import React from "react";
import "./PrivacyPolicy.css";
import logo from "../assets/images/logo.png";
import Footer from "../components/Footer/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <section className="privacy-section">
        {/* Header */}
        <div className="privacy-header">
          <img src={logo} alt="Clean & Dry Logo" className="privacy-logo" />
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">
            Your privacy is important to us. Please read how we handle your data.
          </p>
        </div>

        {/* Content */}
        <div className="privacy-content">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal details such as your name, contact number,
            email address, and service preferences when you use our services.
          </p>

          <h2>2. How We Use Information</h2>
          <p>
            Your information is used to provide laundry and dry-cleaning
            services, improve customer experience, and communicate updates or
            offers.
          </p>

          <h2>3. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal data against unauthorized access, misuse, or disclosure.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            Clean & Dry does not sell or rent your personal information. Data
            may be shared only with trusted partners for service fulfillment.
          </p>

          <h2>5. Cookies & Tracking</h2>
          <p>
            Our website may use cookies to enhance user experience and analyze
            site traffic. You can disable cookies in your browser settings.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal data. Contact us at{" "}
            <a href="mailto:mail-info@thecleandry.com">mail-info@thecleandry.com</a>.
          </p>

          <h2>7. Updates to Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with a revised “Last Updated” date.
          </p>

          <p className="last-updated">Last Updated: June 2026</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
