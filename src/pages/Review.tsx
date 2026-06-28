import React from "react";
import "./Review.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ketan Agrawal",
    text: "Excellent Laundry and one of the best laundry I have ever seen. I regularly give my clothes over there and I almost book all the time from app and Website.",
    rating: 5,
  },
  {
    name: "Rohit Varma",
    text: "My sister’s family and I were visiting Kochi for a week. She has young kids which meant a lot of clothes to launder. We were in a 5* hotel, with quite ridiculous prices for laundry.",
    rating: 5,
  },
  {
    name: "Nidhi Kumari Rajput",
    text: "Exceptional service, highly professional staff and prompt response. The dedicated mobile app improves ease of business too. Overall, an excellent rating for them.",
    rating: 4,
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What our Customer have to say...</h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="review-text">{review.text}</p>

            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>

            <h4 className="review-name">{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
