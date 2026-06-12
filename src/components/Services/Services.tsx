import laundryImage from '../../assets/images/laundry.png';
import curtainImage from '../../assets/images/curtain.png';
import shoeImage from '../../assets/images/shoe_cleaning.png';
import carpetImage from '../../assets/images/carpet.png';
import './Services.css';

const services = [
  {
    title: 'Laundry',
    image: laundryImage,
    description: 'Fast wash and fold service with pickup and delivery.',
  },
  {
    title: 'Carpet cleaning',
    image: carpetImage,
    description: 'Expert carpet cleaning for delicate and premium garments.',
  },
  {
    title: 'Curtain Cleaning',
    image: curtainImage,
    description: 'Deep curtain cleaning to refresh your home decor.',
  },
  {
    title: 'Shoe Cleaning',
    image: shoeImage,
    description: 'Professional shoe care for sneakers, leather, and more.',
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-title-overlay">
                <span>{service.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

