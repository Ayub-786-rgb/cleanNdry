import { FaPhone } from 'react-icons/fa';
import './CallButton.css';

export default function CallButton() {
  const phone = '6372767607';
  const href = `tel:${phone}`;

  return (
    <a
      className="call-floating"
      href={href}
      aria-label="Call"
      title="Call us"
    >
      <FaPhone size={24} color="#ffffff" />
    </a>
  );
}
