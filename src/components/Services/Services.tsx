import laundryImage from '../../assets/images/laundry.png';
import curtainImage from '../../assets/images/curtain.png';
import shoeImage from '../../assets/images/shoe_cleaning.png';
import carpetImage from '../../assets/images/carpet.png';
import dryCleaningImage from '../../assets/images/drycleaning.png';
import homeCleaningImage from '../../assets/images/homecleaning.jpg';
import corporateCleaningImage from '../../assets/images/office.jpg';
import sofaCleaningImage from '../../assets/images/sofacleaning.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Services.css";

const services = [
  {
    title: "Laundry",
    icon: "🧺",
    image: laundryImage,
    description: "Fast wash and fold service with pickup and delivery."
  },
  {
    title: "Carpet Cleaning",
    icon: "🧹",
    image: carpetImage,
    description: "Deep carpet cleaning for fresh interiors."
  },
  {
    title: "Curtain Cleaning",
    icon: "🏠",
    image: curtainImage,
    description: "Professional curtain cleaning service."
  },
  {
    title: "Shoe Cleaning",
    icon: "👟",
    image: shoeImage,
    description: "Premium shoe cleaning and care."
  },
  {
    title: "Dry Cleaning",
    icon: "👔",
    image: dryCleaningImage,
    description: "Safe dry cleaning for your clothes."
  },
  {
    title: "Home Cleaning",
    icon: "✨",
    image: homeCleaningImage,
    description: "Complete home cleaning solution."
  },
  {
    title: "Corporate Cleaning",
    icon: "🏢",
    image: corporateCleaningImage,
    description: "Office and commercial cleaning."
  },
  {
    title: "Sofa Cleaning",
    icon: "🛋️",
    image: sofaCleaningImage,
    description: "Deep sofa cleaning service."
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="services-section">

      <h2>Our Services</h2>

      <Swiper
        className="services-swiper"
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        spaceBetween={25}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.title}>
            <div className="service-card">

              <div className="image-box">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="service-content">

                <h3>
                  <span className="service-icon">
                    {service.icon}
                  </span>
                  {service.title}
                </h3>

                <p>{service.description}</p>

                <button
                onClick={() =>
          window.open(
            "https://app.fabklean.com/",
            "_blank"
          )
        }>
                  Book Now
                </button>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="services-action">
        <button
          className="view-all-btn"
          onClick={() => navigate("/services")}
        >
          View All Services →
        </button>
      </div>

    </section>
  );
}