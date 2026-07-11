import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/Services";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Services.css";



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
            "https://app.thecleandry.com/website/W12334",
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