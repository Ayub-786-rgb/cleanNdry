import React from "react";
import "./Blog.css";
import Footer from "../components/Footer/Footer";

// ✅ Import images properly
import blogFabrics from "../assets/images/blog-fabrics.jpg";
import blogDryclean from "../assets/images/blog-dryclean.jpg";
import blogSofa from "../assets/images/blog-sofa.jpg";

const blogPosts = [
  {
    title: "How to Care for Delicate Fabrics",
    image: blogFabrics,
    excerpt: "Learn the best practices for washing and storing delicate fabrics to keep them lasting longer.",
    link: "/blog/fabrics-care"
  },
  {
    title: "Dry Cleaning vs. Laundry: What's the Difference?",
    image: blogDryclean,
    excerpt: "Understand when to choose dry cleaning and when regular laundry is enough.",
    link: "/blog/dry-vs-laundry"
  },
  {
    title: "Top 5 Sofa Cleaning Tips",
    image: blogSofa,
    excerpt: "Simple hacks to keep your sofa fresh between professional cleanings.",
    link: "/blog/sofa-tips"
  }
];

export default function Blog() {
  return (
    <>
      <section className="blog-section">
        <div className="blog-header">
          <h1>Our Blog</h1>
          <p>Tips, guides, and insights for better cleaning and care.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.title} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
