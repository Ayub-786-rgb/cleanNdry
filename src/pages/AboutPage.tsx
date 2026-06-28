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

       {/* OUR STORY */}

<section className="about-block">
  <h2>Our Story</h2>

  <p>
    Founded with a passion for creating cleaner, healthier, and more
    comfortable living environments, <strong>Clean N Dry</strong> was
    established to redefine the way people experience cleaning services.
    We recognized the growing need for reliable, professional, and
    convenient solutions for laundry care, home cleaning, and vehicle
    cleaning.
  </p>

  <p>
    By combining skilled professionals, modern cleaning techniques,
    eco-friendly practices, and a customer-first approach, Clean N Dry
    delivers exceptional cleaning services that save time, enhance
    hygiene, and provide peace of mind. Whether it's caring for your
    favorite garments, maintaining a spotless home, or keeping your
    vehicle looking its best, we are committed to delivering quality,
    convenience, and trust in every service we provide.
  </p>
</section>

{/* OUR VISION */}

<section className="about-block">
  <h2>Our Vision</h2>

  <p>
    To become the most trusted and preferred cleaning services brand,
    delivering world-class Laundry, Dry Cleaning, Home Cleaning, and Car
    Cleaning solutions that enhance the quality of life for our
    customers.
  </p>

  <p>
    We strive to set new standards in cleanliness, convenience, and
    customer satisfaction by embracing innovation, sustainable
    practices, and service excellence. Our goal is to build long-lasting
    relationships with our customers and expand our presence across
    communities while remaining committed to reliability, transparency,
    and outstanding results.
  </p>
</section>

{/* OUR MISSION */}

<section className="about-block">
  <h2>Our Mission</h2>

  <ul>
    <li>
      Deliver exceptional cleaning services with consistent quality and
      care.
    </li>

    <li>
      Provide convenient, hassle-free solutions that save customers
      time and effort.
    </li>

    <li>
      Maintain the highest standards of hygiene, safety, and
      professionalism.
    </li>

    <li>
      Use environmentally responsible products and practices whenever
      possible.
    </li>

    <li>
      Put customer satisfaction at the heart of everything we do.
    </li>
  </ul>
</section>

{/* COMPANY TAGLINE */}

<section className="about-tag">
  <h3>Clean N Dry</h3>

  <p>Your Cleaning Partner</p>
</section>

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
