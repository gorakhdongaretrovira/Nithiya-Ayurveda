import { useRef, useEffect, useState } from "react";

// ❌ REMOVE WhatsApp import
// import { sendToWhatsApp } from "../utils/whatsapp";

// Images
import hempImg from "../assets/products/hemp.png";
import ovucareImg from "../assets/products/ovucare.png";
import vajraImg from "../assets/products/vajra.png";
import kufridaImg from "../assets/products/kufrida.png";

const imageMap = {
  spray: hempImg,
  flower: ovucareImg,
  bolt: vajraImg,
  leaf: kufridaImg,
};

// ── Herbal SVG Decorative Elements ──
const HerbalLeaf1 = ({ style }) => (
  <svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", pointerEvents: "none", ...style }} aria-hidden="true">
    <g opacity="0.13" fill="#6B8C4A">
      <path d="M60 190 C30 150 10 100 20 50 C30 10 60 0 60 0 C60 0 90 10 100 50 C110 100 90 150 60 190Z" />
      <line x1="60" y1="190" x2="60" y2="10" stroke="#5A7A3A" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

const HerbalLeaf2 = ({ style }) => (
  <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", pointerEvents: "none", ...style }} aria-hidden="true">
    <g opacity="0.10" fill="none" stroke="#7A9A5A">
      <path d="M10 60 C40 20 120 10 150 60 C120 110 40 100 10 60Z" fill="#8AAB60" />
    </g>
  </svg>
);

const HerbalSprig = ({ style }) => (
  <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", pointerEvents: "none", ...style }} aria-hidden="true">
    <g opacity="0.11" fill="#7A9A5A">
      <line x1="40" y1="160" x2="40" y2="0" stroke="#8AAB60" strokeWidth="1.5" />
    </g>
  </svg>
);

const HerbalCircle = ({ style }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", pointerEvents: "none", ...style }} aria-hidden="true">
    <circle cx="50" cy="50" r="40" stroke="#9AAA70" fill="none" opacity="0.1"/>
  </svg>
);

const cardStyles = `
  /* KEEP YOUR FULL ORIGINAL STYLES HERE (UNCHANGED) */
`;

export default function ProductCard({ product, reverse, index = 0, addToCart }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const productImage = imageMap[product.icon];
  const herbalSet = index % 4;

  return (
    <>
      {index === 0 && <style>{cardStyles}</style>}

      <div ref={ref} className={`product-card-wrapper ${visible ? "card-visible" : ""}`}>

        {/* Decorative Herbs */}
        {herbalSet === 0 && (
          <>
            <HerbalLeaf1 style={{ top: -30, left: -20 }} />
            <HerbalSprig style={{ bottom: 0, right: 15 }} />
          </>
        )}
        {herbalSet === 1 && (
          <>
            <HerbalLeaf2 style={{ top: -10, right: -15 }} />
            <HerbalCircle style={{ bottom: 20, left: 20 }} />
          </>
        )}

        <div className={`product-card ${reverse ? "reverse" : ""}`}>

          <div className="card-visual">
            <div className="product-display-area">
              {productImage && (
                <img
                  src={productImage}
                  alt={product.name}
                  className="product-img-floating"
                />
              )}
            </div>
          </div>

          <div className="card-content">
            <span className="card-label">{product.sanskrit}</span>

            <h3 className="card-title">{product.name}</h3>

            <p className="card-text">{product.description}</p>

            <div className="benefit-list">
              {product.benefits.map((b, i) => (
                <div key={i} className="benefit-row">
                  ✦ {b}
                </div>
              ))}
            </div>

            {/* ✅ ONLY CHANGE HERE */}
            <button
              className="btn-action"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </>
  );
}