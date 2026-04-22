import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";

const featuredProducts = [
  {
    id: 1,
    img: product1,
    tag: "RESPIRATORY CARE",
    name: "Kufrida Cough Syrup",
    subtitle: "NATURAL SUPPORT FOR CLEAR BREATHING",
    desc: "Yasthimadhu, Tulsi & Vasaka — for dry cough, throat irritation, chest congestion & lung wellness.",
    mrp: 89,
    discount: 12,
    badge: "BESTSELLER",
    rating: 4.4,
    reviewCount: 97,
    category: "Respiratory Care",
  },
  {
    id: 2,
    img: product2,
    tag: "PAIN & MOBILITY",
    name: "HEMP Pain Spray",
    subtitle: "AYURVEDIC RAPID RELIEF FOR MUSCULAR & JOINT PAIN",
    desc: "Powered by Cannabis Sativa Seed Oil — fast relief for body ache, back pain, sports injuries & post-physiotherapy recovery.",
    mrp: 299,
    discount: 12,
    badge: "NEW",
    rating: 4.5,
    reviewCount: 128,
    category: "Pain & Mobility",
  },
  {
    id: 3,
    img: product3,
    tag: "WOMEN'S WELLNESS",
    name: "OVUCARE Tablets",
    subtitle: "AYURVEDIC SUPPORT FOR WOMEN'S REPRODUCTIVE HEALTH",
    desc: "Sootikabharan Rasa & Latakaranja — supportive management of PCOD/PCOS, hormonal balance & regular cycles.",
    mrp: 340,
    discount: 12,
    badge: null,
    rating: 4.7,
    reviewCount: 214,
    pack: "30 Tablets",
    category: "Women's Wellness",
  },
  {
    id: 4,
    img: product4,
    tag: "MEN'S VITALITY",
    name: "Vajra-X Capsules",
    subtitle: "STRENGTH, STAMINA & CONFIDENCE",
    desc: "L-Arginine, Mucana Pruriens & Ashwagandha — for stamina, performance, erectile dysfunction & overall male vitality.",
    mrp: 212,
    discount: 12,
    badge: "HOT",
    rating: 4.6,
    reviewCount: 189,
    pack: "Pack of 3 Recommended",
    category: "Men's Vitality",
  },
];

function getDiscountedPrice(mrp, discount) {
  return Math.round(mrp * (1 - discount / 100));
}

function MiniStars({ rating }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} viewBox="0 0 24 24" width="12" height="12"
             style={{ color: "#C8873A", fill: i <= Math.floor(rating) ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2" }}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturedProducts() {
  const { addToCart } = useOutletContext();
  const [addedStates, setAddedStates] = useState({});

  const headRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fp-visible");
        });
      },
      { threshold: 0.1 }
    );
    if (headRef.current) observer.observe(headRef.current);
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAddToCart = (p) => {
    const discounted = getDiscountedPrice(p.mrp, p.discount);

    addToCart({
      id: p.id,
      name: p.name,
      price: discounted,
      image: p.img,
      category: p.category,
      quantity: 1,
    });

    setAddedStates(prev => ({ ...prev, [p.id]: true }));
    setTimeout(() => {
      setAddedStates(prev => ({ ...prev, [p.id]: false }));
    }, 1800);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --fp-bg: #F9F7F2;
          --fp-deep: #1E3A2F;
          --fp-gold: #C8873A;
          --fp-text: #2C2C2C;
          --fp-muted: #666666;
          --fp-white: #FFFFFF;
        }

        .fp-section {
          padding: 80px 5%;
          background: var(--fp-bg);
          font-family: 'Jost', sans-serif;
        }

        @media (max-width: 768px) {
          .fp-section { padding: 50px 4%; }
        }

        .fp-head {
          text-align: center;
          margin-bottom: 50px;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.8s ease-out forwards;
        }
        .fp-head.fp-visible { opacity: 1; transform: translateY(0); }

        .fp-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: var(--fp-gold);
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 10px;
          display: block;
        }

        .fp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 5vw, 48px);
          color: var(--fp-deep);
          font-weight: 700;
        }

        .fp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1100px) { .fp-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 540px) { .fp-grid { grid-template-columns: 1fr; gap: 14px; } }

        .fp-card {
          background: var(--fp-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.2, 0, 0.2, 1);
        }
        .fp-card.fp-visible { opacity: 1; transform: translateY(0); }

        .fp-img-container {
          position: relative;
          background: #fdfdfd;
          aspect-ratio: 1/1;
          padding: 16px;
          overflow: hidden;
        }

        .fp-img-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }
        .fp-card:hover .fp-img-container img { transform: scale(1.08); }

        .fp-tag-overlay {
          position: absolute; top: 12px; left: 12px;
          background: var(--fp-deep); color: white;
          font-size: 9px; font-weight: 600; padding: 3px 8px;
          border-radius: 4px; letter-spacing: 0.05em;
        }

        .fp-badge-overlay {
          position: absolute; top: 12px; right: 12px;
          background: white; color: var(--fp-text);
          font-size: 9px; font-weight: 700; padding: 3px 8px;
          border-radius: 4px; border: 1px solid #eee;
        }

        .fp-discount-tag {
          position: absolute; bottom: 12px; left: 12px;
          background: #D48E4D; color: white;
          font-size: 10px; font-weight: 700; padding: 2px 7px;
          border-radius: 4px;
        }

        .fp-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .fp-subtitle {
          font-size: 9px;
          color: #D48E4D;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 6px;
        }

        .fp-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          color: var(--fp-deep);
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .fp-name { font-size: 18px; }
        }

        .fp-desc {
          font-size: 12px;
          color: var(--fp-muted);
          line-height: 1.6;
          margin-bottom: 12px;
          flex: 1;
        }

        .fp-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .fp-rating-text { font-size: 11px; color: var(--fp-text); font-weight: 600; }
        .fp-reviews { font-size: 10px; color: #999; }

        .fp-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #f0f0f0;
          gap: 8px;
        }

        .price-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--fp-deep);
        }
        .price-main span { font-size: 13px; margin-right: 2px; }

        .mrp-line {
          font-size: 11px;
          color: #bbb;
          text-decoration: line-through;
          display: block;
        }

        .add-to-cart {
          background: var(--fp-deep);
          color: white;
          border: none;
          padding: 9px 14px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .add-to-cart:hover { background: #2d5a42; transform: translateY(-2px); }
        .add-to-cart.added { background: #4CAF50; transform: translateY(0); cursor: default; }
        .add-to-cart.added:hover { background: #4CAF50; transform: translateY(0); }

        .view-all-container {
           text-align: center;
           margin-top: 50px;
        }
        .view-all-btn {
          display: inline-block;
          background: transparent;
          border: 1px solid var(--fp-deep);
          color: var(--fp-deep);
          padding: 13px 36px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 13px;
          transition: 0.3s;
        }
        .view-all-btn:hover { background: var(--fp-deep); color: white; }
      `}</style>

      <section className="fp-section">
        <div className="fp-head" ref={headRef}>
          <span className="fp-eyebrow">NATURAL FORMULATIONS</span>
          <h2 className="fp-title">Signature Wellness Collection</h2>
        </div>

        <div className="fp-grid">
          {featuredProducts.map((p, i) => {
            const discounted = getDiscountedPrice(p.mrp, p.discount);
            return (
              <div key={p.id} className="fp-card" ref={(el) => (cardRefs.current[i] = el)}>
                <div className="fp-img-container">
                  <div className="fp-tag-overlay">{p.tag}</div>
                  {p.badge && <div className="fp-badge-overlay">{p.badge}</div>}
                  <img src={p.img} alt={p.name} />
                  <div className="fp-discount-tag">{p.discount}% OFF</div>
                </div>

                <div className="fp-content">
                  <span className="fp-subtitle">{p.subtitle}</span>
                  <h3 className="fp-name">{p.name}</h3>
                  <p className="fp-desc">{p.desc}</p>

                  <div className="fp-meta">
                    <MiniStars rating={p.rating} />
                    <span className="fp-rating-text">{p.rating}</span>
                    <span className="fp-reviews">({p.reviewCount} reviews)</span>
                  </div>

                  <div className="fp-price-row">
                    <div>
                      <span className="mrp-line">₹{p.mrp}</span>
                      <div className="price-main"><span>₹</span>{discounted}</div>
                    </div>
                    <button
                      className={`add-to-cart${addedStates[p.id] ? " added" : ""}`}
                      onClick={() => handleAddToCart(p)}
                      disabled={addedStates[p.id]}
                    >
                      {addedStates[p.id] ? "✓ Added" : "ADD TO CART"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="view-all-container">
          <Link to="/products" className="view-all-btn">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </section>
    </>
  );
}