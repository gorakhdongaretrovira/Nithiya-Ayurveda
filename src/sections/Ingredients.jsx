import { useEffect, useRef } from "react";
import ingredientsImg from "../assets/images/ingredients.jpg";

const ingredients = [
  {
    id: 1,
    name: "Ashwagandha",
    latin: "Withania somnifera",
    benefit: "A revered Ayurvedic adaptogen that helps relieve muscle fatigue, reduce cortisol, and restore physical & mental endurance.",
    products: "HEMP Pain Spray · Vajra-X",
  },
  {
    id: 2,
    name: "Yasthimadhu",
    latin: "Glycyrrhiza glabra",
    benefit: "The 'sweet root' of Ayurveda — soothes throat irritation and supports healthy respiratory mucosa.",
    products: "Kufrida Cough Syrup",
  },
  {
    id: 3,
    name: "Latakaranja",
    latin: "Caesalpinia bonduc",
    benefit: "Traditionally used to support hormonal balance and healthy ovarian function in the management of PCOD/PCOS.",
    products: "OVUCARE Tablets",
  },
  {
    id: 4,
    name: "Gokshura",
    latin: "Tribulus terrestris",
    benefit: "Supports sexual vigour, reproductive strength, and healthy testosterone levels for male vitality.",
    products: "Vajra-X Capsules",
  },
  {
    id: 5,
    name: "Tulsi",
    latin: "Ocimum sanctum",
    benefit: "An immune enhancer that supports respiratory immunity and helps the body adapt to seasonal changes.",
    products: "Kufrida Cough Syrup",
  },
  {
    id: 6,
    name: "Mucana Pruriens",
    latin: "Kapikacchu",
    benefit: "Known for supporting healthy libido and testosterone balance—a natural aphrodisiac rooted in classical texts.",
    products: "Vajra-X Capsules",
  },
];

export default function Ingredients() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ing-animate");
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@300;400;500;600&display=swap');

        .ing-section {
          padding: 100px 0;
          background: #FDFCFB;
          font-family: 'Jost', sans-serif;
          color: #1E3A2F;
          overflow: hidden;
        }

        .ing-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .ing-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .ing-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C8873A;
          font-weight: 600;
          display: block;
          margin-bottom: 12px;
        }

        .ing-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5vw, 48px);
          font-weight: 600;
          color: #1E3A2F;
        }

        /* ── THE GRID ── */
        .ing-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: stretch; /* FIX: Makes both columns equal height */
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }
        .ing-animate .ing-layout { opacity: 1; transform: translateY(0); }

        /* ── IMAGE SIDE ── */
        .ing-image-side {
          height: 100%; /* FIX: Ensures container fills grid height */
        }

        .ing-img-wrapper {
          position: sticky;
          top: 120px;
          height: 100%; /* FIX: Stretches to match the right side list */
          min-height: 600px; /* Ensures a good presence on smaller vertical screens */
          width: 100%;
          border-radius: 12px; /* Added slightly rounded border */
          overflow: hidden;
          box-shadow: 30px 30px 0px -5px rgba(30, 58, 47, 0.04);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ing-animate .ing-img-wrapper:hover {
          transform: scale(1.02); /* Subtle hover animation */
        }

        .ing-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures image fills the now-taller container properly */
          filter: brightness(0.95) contrast(1.05);
        }

        .ing-img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1E3A2F;
          padding: 20px 30px;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ing-img-caption strong {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          color: #C8873A;
        }

        .ing-img-caption span {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.8;
        }

        /* ── LIST SIDE ── */
        .ing-list-side {
          display: flex;
          flex-direction: column;
          justify-content: center; /* Centers list vertically if image is slightly taller */
          gap: 15px;
        }

        .ing-herb-item {
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(30, 58, 47, 0.08);
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.6s ease-out;
        }

        /* Staggered entry animation for items */
        .ing-animate .ing-herb-item { opacity: 1; transform: translateX(0); }
        .ing-animate .ing-herb-item:nth-child(1) { transition-delay: 0.2s; }
        .ing-animate .ing-herb-item:nth-child(2) { transition-delay: 0.3s; }
        .ing-animate .ing-herb-item:nth-child(3) { transition-delay: 0.4s; }
        .ing-animate .ing-herb-item:nth-child(4) { transition-delay: 0.5s; }
        .ing-animate .ing-herb-item:nth-child(5) { transition-delay: 0.6s; }
        .ing-animate .ing-herb-item:nth-child(6) { transition-delay: 0.7s; }

        .ing-herb-item:last-child {
          border-bottom: none;
        }

        .ing-herb-header {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 6px;
        }

        .ing-herb-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 700;
          color: #1E3A2F;
        }

        .ing-herb-latin {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-style: italic;
          color: #C8873A;
        }

        .ing-herb-benefit {
          font-size: 14px;
          line-height: 1.6;
          color: #556B5F;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .ing-herb-tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          color: #C8873A;
          letter-spacing: 0.08em;
          background: rgba(200, 135, 58, 0.08);
          padding: 4px 12px;
          border-radius: 4px; /* Slightly rounded tag */
          display: inline-block;
        }

        @media (max-width: 1024px) {
          .ing-layout { grid-template-columns: 1fr; gap: 50px; }
          .ing-img-wrapper { height: 500px; min-height: auto; position: relative; top: 0; }
        }
      `}</style>

      <section className="ing-section" ref={sectionRef}>
        <div className="ing-container">
          <header className="ing-header">
            <span className="ing-eyebrow">The Botanical Source</span>
            <h2 className="ing-title">Sacred Herbs, Exceptional Results</h2>
          </header>

          <div className="ing-layout">
            {/* Equal Height Image Section */}
            <div className="ing-image-side">
              <div className="ing-img-wrapper">
                <img src={ingredientsImg} alt="Sacred Ayurvedic Herbs" />
                <div className="ing-img-caption">
                  <strong>100%</strong>
                  <span>Pure Botanical Extracts</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="ing-list-side">
              {ingredients.map((herb) => (
                <div key={herb.id} className="ing-herb-item">
                  <div className="ing-herb-header">
                    <span className="ing-herb-name">{herb.name}</span>
                    <span className="ing-herb-latin">{herb.latin}</span>
                  </div>
                  <p className="ing-herb-benefit">{herb.benefit}</p>
                  <div className="ing-herb-tag">Formulated In: {herb.products}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}