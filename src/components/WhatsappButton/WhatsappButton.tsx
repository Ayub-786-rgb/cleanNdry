import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappButton.css';

export default function WhatsappButton() {
  const phone = '917605990906';
  const prefilledMessage = encodeURIComponent("Hello Clean N Dry, I'd like to schedule a pickup for my laundry. ");
  const href = `https://wa.me/${phone}?text=${prefilledMessage}`;

  return (
    <a
      className="whatsapp-floating"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} color="#ffffff" />
    </a>
  );
}