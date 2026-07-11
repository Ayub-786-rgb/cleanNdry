import React from "react";
import "./Careers.css";
import logo from "../assets/images/logo.png";
import Footer from '../components/Footer/Footer';


const Careers: React.FC = () => {
  return (<>
    <section className="careers-section">
      {/* Header */}
      <div className="careers-header">
        <img src={logo} alt="Clean & Dry Logo" className="careers-logo" />
        <h1>Careers at Clean & Dry</h1>
        <p className="careers-subtitle">
          Be part of India’s fastest-growing premium laundry brand.
        </p>
      </div>

      {/* Job Listing */}
      <div className="job-card">
        <h2>Premium Laundry Specialist (Washer Cum Ironer)</h2>
        <p className="job-location">📍 Angul, Odisha</p>
        <p className="job-experience">Experience: 5–7 Years (Premium Brand or 5-Star Hotel)</p>

        <h3>Key Responsibilities</h3>
        <ul>
          <li>Operate commercial washing machines for all fabric types.</li>
          <li>Deliver flawless steam ironing and pressing for premium wear.</li>
          <li>Perform dry-cleaning including safe chemical handling.</li>
          <li>Identify fabrics and treat tough stains safely.</li>
        </ul>

        <h3>Requirements</h3>
        <ul>
          <li>5–7 years of experience in premium laundry or luxury hotels.</li>
          <li>Hands-on expertise with washers, dry-cleaning machines, and steam irons.</li>
          <li>Deep knowledge of delicate fabrics (silk, wool, designer wear).</li>
        </ul>

        <h3>Salary & Benefits</h3>
        <ul>
          <li>Best in Industry (negotiable based on experience).</li>
          <li>Free bachelor accommodation.</li>
          <li>Performance incentives (monthly/quarterly bonuses).</li>
        </ul>

        <div className="job-cta">
          <p className="job-contact-text">
            For more details, contact our HR team:
          </p>
          <p>
            📧 <a href="mailto:pritammallik665@gmail.com">pritammallik665@gmail.com</a><br />
            📞 <a href="tel:+916372767607">+91 6372767607</a>
          </p>
        </div>
      </div>
    </section>
    <Footer/>
  </>);
};

export default Careers;
