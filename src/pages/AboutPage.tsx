import "./AboutPage.css";
import aboutImage from "../assets/images/About.png";

export default function AboutPage() {
  return (
    <section className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">

        <div className="about-hero-content">

          <h1>
            Delivering Premium Laundry &
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
          <img
            src={aboutImage}
            alt="About Clean N Dry"
          />
        </div>

      </div>

      {/* COMPANY STORY */}

      <section className="about-block">

        <h2>Company Story & Vision</h2>

        <p>
          Founded with a vision to redefine fabric care, Clean N Dry
          combines technology, convenience and professional expertise
          to deliver a world-class laundry experience. Our goal is to
          become the most trusted laundry and dry cleaning brand by
          consistently providing exceptional service and customer satisfaction.
        </p>

      </section>

      {/* MISSION */}

      <section className="about-block">

        <h2>Mission & Values</h2>

        <ul>
          <li>Customer First Approach</li>
          <li>Quality & Reliability</li>
          <li>Transparency & Trust</li>
          <li>Innovation & Technology</li>
          <li>Sustainability & Responsibility</li>
        </ul>

      </section>

      {/* TEAM */}

      <section className="about-block">

        <h2>Management & Team</h2>

        <p>
          Our dedicated professionals are passionate about delivering
          exceptional customer experiences. Every garment is handled
          with care and inspected thoroughly to ensure superior results.
        </p>

      </section>

      {/* QUALITY */}

      <section className="about-block">

        <h2>Service Standards & Quality Commitment</h2>

        <ul>
          <li>Fabric-safe cleaning processes</li>
          <li>Multiple quality inspections</li>
          <li>Advanced cleaning technology</li>
          <li>On-time pickup & delivery</li>
          <li>Customer satisfaction focused service</li>
        </ul>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="about-block">

        <h2>Growth Milestones & Achievements</h2>

        <div className="achievement-grid">

          <div className="achievement-card">
            <h3>15+</h3>
            <span>Service Points</span>
          </div>

          <div className="achievement-card">
            <h3>10K+</h3>
            <span>Garments Processed</span>
          </div>

          <div className="achievement-card">
            <h3>100%</h3>
            <span>Quality Focus</span>
          </div>

        </div>

      </section>

    </section>
  );
}