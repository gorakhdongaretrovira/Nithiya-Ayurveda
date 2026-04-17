import { useEffect, useRef } from "react";
import aboutImg from "../assets/images/about.jpg";

export default function AboutHome() {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("ah-visible");
        });
      },
      { threshold: 0.12 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');

        :root {
          --white: #ffffff;
          --off-white: #fcfdfc;
          --dark-green: #1f3d2b;
          --soft-green: #6bbf59;
          --accent-pale: #f2f7f3;
          --text-main: #2c3e33;
          --text-muted: #5c6d62;
          --transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ah-section {
          padding: clamp(60px, 10vw, 120px) 0;
          background: var(--white);
          font-family: 'Nunito Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: var(--text-main);
        }

        .ah-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 24px);
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          align-items: center;
          gap: clamp(40px, 7vw, 80px);
        }

        /* Decorative Leaf */
        .leaf-svg {
          position: absolute;
          width: 120px;
          height: auto;
          opacity: 0.08;
          pointer-events: none;
          fill: var(--soft-green);
        }
        .leaf-tl { top: 40px; left: -30px; transform: rotate(-15deg); }
        .leaf-br { bottom: 40px; right: -30px; transform: rotate(165deg); }

        /* Image Column */
        .ah-img-column {
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: var(--transition);
        }
        .ah-img-column.ah-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ah-img-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
          z-index: 2;
        }

        .ah-main-img {
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1.1;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 30px 60px -20px rgba(31, 61, 43, 0.15);
          display: block;
        }

        .ah-img-blob {
          position: absolute;
          top: -15%;
          left: -15%;
          width: 130%;
          height: 130%;
          background: var(--accent-pale);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          z-index: -1;
          animation: morph 12s ease-in-out infinite;
        }

        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 50% 60% 30% 70% / 50% 30% 70% 40%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }

        .ah-experience-badge {
          position: absolute;
          bottom: 30px;
          right: -16px;
          background: var(--dark-green);
          color: var(--white);
          padding: clamp(16px, 2.5vw, 24px);
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 15px 30px rgba(31, 61, 43, 0.2);
          z-index: 3;
        }
        .ah-exp-val { display: block; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; line-height: 1; }
        .ah-exp-lab { display: block; font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; opacity: 0.8; margin-top: 4px; white-space: nowrap; }

        /* Content Column */
        .ah-content-column {
          opacity: 0;
          transform: translateY(40px);
          transition: var(--transition);
          transition-delay: 0.2s;
        }
        .ah-content-column.ah-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ah-eyebrow {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--soft-green);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          display: block;
          margin-bottom: 18px;
        }

        .ah-title {
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--dark-green);
          margin-bottom: 20px;
        }
        .ah-title span { color: var(--soft-green); }

        .ah-description {
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 28px;
        }

        .ah-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(12px, 2vw, 20px);
          margin-bottom: 36px;
        }

        .ah-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: clamp(0.82rem, 1.3vw, 0.9rem);
          font-weight: 600;
          color: var(--text-main);
        }

        .ah-feature-icon {
          width: 18px; height: 18px;
          color: var(--soft-green);
          flex-shrink: 0;
        }

        .ah-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--dark-green);
          color: var(--white);
          padding: clamp(12px, 2vw, 16px) clamp(24px, 3vw, 36px);
          border-radius: 100px;
          font-weight: 700;
          font-size: clamp(0.8rem, 1.3vw, 0.9rem);
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(31, 61, 43, 0.3);
        }

        .ah-primary-btn:hover {
          background: var(--soft-green);
          transform: translateY(-3px);
          box-shadow: 0 15px 25px -5px rgba(107, 191, 89, 0.4);
        }

        /* ═══════════════════════════════════════
           TABLET (≤ 992px)
        ═══════════════════════════════════════ */
        @media (max-width: 992px) {
          .ah-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .ah-eyebrow { display: flex; justify-content: center; }
          .ah-features { justify-items: center; }
          .ah-img-container { max-width: 380px; }
          .ah-experience-badge { right: 0; bottom: 10px; }
          .ah-primary-btn { margin: 0 auto; }
          .ah-img-column { transform: translateY(30px); }
          .ah-content-column { transform: translateY(30px); }
          .leaf-tl, .leaf-br { display: none; }
        }

        /* ═══════════════════════════════════════
           MOBILE (≤ 600px)
        ═══════════════════════════════════════ */
        @media (max-width: 600px) {
          .ah-section { padding: clamp(48px, 8vw, 72px) 0; }
          .ah-img-container { max-width: 300px; }
          .ah-img-blob { display: none; } /* hide blob on small screens for perf */
          .ah-experience-badge {
            position: relative;
            right: auto; bottom: auto;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            border-radius: 50px;
            margin-top: 16px;
          }
          .ah-exp-val { font-size: 1.2rem; }
          .ah-exp-lab { margin-top: 0; font-size: 0.6rem; }
          .ah-features { grid-template-columns: 1fr 1fr; gap: 10px; }
          .ah-feature-item { font-size: 0.8rem; gap: 8px; }
          .ah-title { font-size: 1.75rem; }
        }

        /* ═══════════════════════════════════════
           SMALL PHONES (≤ 380px)
        ═══════════════════════════════════════ */
        @media (max-width: 380px) {
          .ah-features { grid-template-columns: 1fr; justify-items: start; }
          .ah-container { text-align: left; }
          .ah-eyebrow { justify-content: flex-start; }
          .ah-primary-btn { margin: 0; }
        }
      `}</style>

      <section className="ah-section">
        <svg className="leaf-svg leaf-tl" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C8,6.47 7,6.67 6.06,6.88C7.12,5.82 7.33,4.05 7.33,4.05C7.33,4.05 5.33,4.33 3.33,6.33L5,8L21,13C21,13 19,13 17,8Z" />
        </svg>
        <svg className="leaf-svg leaf-br" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C8,6.47 7,6.67 6.06,6.88C7.12,5.82 7.33,4.05 7.33,4.05C7.33,4.05 5.33,4.33 3.33,6.33L5,8L21,13C21,13 19,13 17,8Z" />
        </svg>

        <div className="ah-container">
          <div className="ah-img-column" ref={imgRef}>
            <div className="ah-img-container">
              <div className="ah-img-blob"></div>
              <img src={aboutImg} alt="Ayurvedic Wellness" className="ah-main-img" />
              <div className="ah-experience-badge">
                <span className="ah-exp-val">25+</span>
                <span className="ah-exp-lab">Years of Healing</span>
              </div>
            </div>
          </div>

          <div className="ah-content-column" ref={textRef}>
            <span className="ah-eyebrow">Pure • Authentic • Potent</span>
            <h2 className="ah-title">
              Ancient Wisdom for <br />
              <span>Modern Wellbeing</span>
            </h2>

            <p className="ah-description">
              At Nithya Ayurveda, we carry forward a legacy of healing that spans generations.
              By blending classical Kerala traditions with modern scientific precision,
              we craft treatments that don't just mask symptoms, but restore your
              body's natural rhythm.
            </p>

            <div className="ah-features">
              {[
                "100% Ethical Sourcing",
                "Handcrafted Formulations",
                "Classical Kerala Lineage",
                "Personalized Care",
              ].map((feat) => (
                <div key={feat} className="ah-feature-item">
                  <svg className="ah-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feat}
                </div>
              ))}
            </div>

            <a href="/about" className="ah-primary-btn">
              Explore Our Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}