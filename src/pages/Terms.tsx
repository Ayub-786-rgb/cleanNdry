import React from "react";
import "./Terms.css";
import logo from "../assets/images/logo.png";
import Footer from "../components/Footer/Footer";

const Terms: React.FC = () => {
  return (
    <>
      <section className="terms-section">
        {/* Header */}
        <div className="terms-header">
          <img src={logo} alt="Clean & Dry Logo" className="terms-logo" />
          <h1>Terms & Conditions</h1>
          <p className="terms-subtitle">
            Please read these terms carefully before using our services.
          </p>
        </div>

        {/* Content */}
        <div className="terms-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Clean & Dry services, you agree to be bound by
            these Terms & Conditions.
          </p>

          <h2>2. Services</h2>
          <p>
            We provide premium laundry and dry-cleaning services. All services
            are subject to availability and operational guidelines.
          </p>

          <h2>3. Customer Responsibilities</h2>
          <ul>
            <li>Provide accurate information when placing orders.</li>
            <li>Ensure garments are suitable for washing/dry-cleaning.</li>
            <li>Collect garments within the stipulated time frame.</li>
          </ul>

          <h2>4. Liability</h2>
          <p>
            While we take utmost care, Clean & Dry is not liable for damages
            caused by inherent garment defects, color bleeding, or wear & tear.
          </p>

          <h2>5. Payments</h2>
          <p>
            All services must be paid for at the time of delivery. Prices may
            vary depending on garment type and service category.
          </p>

          <h2>6. Privacy</h2>
          <p>
            Customer data is handled securely and used only for service
            fulfillment. For details, refer to our Privacy Policy.
          </p>

          <h2>7. Amendments</h2>
          <p>
            Clean & Dry reserves the right to update these Terms & Conditions at
            any time. Continued use of services implies acceptance of changes.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Terms;
