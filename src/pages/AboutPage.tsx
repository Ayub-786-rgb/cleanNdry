import "./AboutPage.css";
import aboutImage from "../assets/images/Abouts.jpeg";
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <section className="about-page">
        {/* HERO SECTION */}
        <div className="about-hero">
          <div className="about-hero-content">
            <h1>
              Delivering Premium Laundry &
              <br />
              Dry Cleaning Services
            </h1>
            <p>
              Clean N Dry is committed to making laundry effortless through
              professional fabric care, advanced cleaning technology and
              convenient doorstep pickup & delivery. We provide reliable,
              hygienic and premium garment care solutions that save time
              while maintaining the highest standards of quality.
            </p>
          </div>
          <div className="about-hero-image">
            <img src={aboutImage} alt="About Clean N Dry" />
          </div>
        </div>

        {/* ... all your other about-block sections ... */}

        <section className="about-block achievements-section">
          <h2>Growth Milestones & Achievements</h2>
          <div className="achievement-grid">
            <div className="achievement-card">
              <h3>15+</h3>
              <span>Service Locations</span>
            </div>
            <div className="achievement-card">
              <h3>25K+</h3>
              <span>Garments Processed</span>
            </div>
            <div className="achievement-card">
              <h3>5K+</h3>
              <span>Happy Customers</span>
            </div>
            <div className="achievement-card">
              <h3>100%</h3>
              <span>Quality Focused</span>
            </div>
          </div>
        </section>
      </section>

      {/* ✅ Footer placed outside the about-page section */}
      <Footer />
    </>
  );
}
