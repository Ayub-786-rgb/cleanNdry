import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import {
  FaCalendarAlt,
  FaWhatsapp,
  FaCheckCircle
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import "./Hero.css";

import heroillustration from "../../assets/images/heroillustration.png";
import discountImg from "../../assets/images/discount.png";
import indiaMap from "../../assets/images/india.png";

function HeroButtons() {
  const phone = "917609851051";

  const prefilledMessage = encodeURIComponent(
    "Hello Clean N Dry, I'd like to schedule a pickup for my laundry."
  );

  const whatsappLink = `https://wa.me/${phone}?text=${prefilledMessage}`;

  return (
    <div className="hero-buttons">

      <button
        className="hero-btn hero-btn-primary"
        onClick={() =>
          window.open(
            "https://app.fabklean.com/",
            "_blank"
          )
        }
      >
        <FaCalendarAlt />
        Schedule Free Pickup
      </button>

      <button
        className="hero-btn hero-btn-secondary"
        onClick={() =>
          window.open(
            whatsappLink,
            "_blank"
          )
        }
      >
        <FaWhatsapp />
        Chat On WhatsApp
      </button>

    </div>
  );
}

function HeroFeatures() {
  return (
    <div className="hero-features">

      <span>
        <FaCheckCircle className="hero-feature-icon" />
        Schedule Collection Days
      </span>

      <span>
        <FaCheckCircle className="hero-feature-icon" />
        24-48 Hours Delivery
      </span>

      <span>
        <FaCheckCircle className="hero-feature-icon" />
        Easy Payment Options
      </span>

      <span>
        <FaCheckCircle className="hero-feature-icon" />
        Dedicated Customer Support
      </span>

    </div>
  );
}

export default function Hero() {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      className="hero-swiper"
    >

      {/* Slide 1 */}

      <SwiperSlide>
        <section className="hero-section">

          <div className="hero-copy">

            <h1 className="hero-title">
              Your Trusted
              <br />
              <span className="hero-subtitle">
                Cleaning Partner
              </span>
            </h1>

            <div className="brand-highlight">
              Clean N Dry
            </div>

            <p className="hero-tagline bold-tagline">
              We Pick Up. We Clean. We Deliver.
            </p>

            <HeroButtons />
            <HeroFeatures />

          </div>

          <div className="hero-image-wrapper">

            <img
              src={heroillustration}
              alt="Laundry Process"
              className="hero-process-image"
            />

          </div>

        </section>
      </SwiperSlide>

      {/* Slide 2 */}

      <SwiperSlide>
        <section className="hero-section hero-section-alt">

          <div className="hero-copy">

            <h1>
              Get <span className="theme-highlight">20% OFF</span>
              <br />
              On Your First Order
            </h1>

            <p className="bold-tagline">
              Premium laundry and dry cleaning with
              free pickup and doorstep delivery.
            </p>

            <HeroButtons />
            <HeroFeatures />

          </div>

          <div className="hero-image-wrapper">

            <img
              src={discountImg}
              alt="Discount Offer"
              className="hero-process-image"
            />

          </div>

        </section>
      </SwiperSlide>

      {/* Slide 3 */}

      <SwiperSlide>
        <section className="hero-section hero-section-alt">

          <div className="hero-copy">

            <h1>
              Welcome To
              <br />
              <span className="theme-highlight">
                Clean N Dry
              </span>
            </h1>

            <p className="coverage-text bold-tagline">
              Serving across <strong>15+ Cities</strong>
              with over <strong>30+ Outlets</strong>
              <br />
              across the nation.
            </p>

            <HeroButtons />
            <HeroFeatures />

          </div>

          <div className="hero-image-wrapper">

            <img
              src={indiaMap}
              alt="India Coverage"
              className="hero-process-image"
            />

          </div>

        </section>
      </SwiperSlide>

    </Swiper>
  );
}