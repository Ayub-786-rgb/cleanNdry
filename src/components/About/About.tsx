import "./About.css";
import aboutImage from "../../assets/images/Abouts.jpeg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <h2 className="about-heading">About Us</h2>

      <div className="about-container">
        <div className="about-content">
          <p>
            Clean N Dry is a trusted laundry and dry cleaning brand
            delivering premium fabric care through advanced cleaning
            technology and doorstep convenience. With
            <strong> 15+ Service Points</strong>,
            <strong> 25,000+ Garments Processed</strong>, and a growing
            community of satisfied customers, we are committed to
            providing reliable, hygienic, and high-quality cleaning
            solutions every day.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>15+</h3>
              <span>Service Points</span>
            </div>

            <div className="stat">
              <h3>25K+</h3>
              <span>Garments Cleaned</span>
            </div>

            <div className="stat">
              <h3>5K+</h3>
              <span>Happy Customers</span>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <span>Quality Focus</span>
            </div>
          </div>

          <button
            className="about-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="Clean N Dry" />
        </div>
      </div>
    </section>
  );
}
