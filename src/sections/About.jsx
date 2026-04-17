import { useEffect, useRef, useState } from "react";
import allImage from "../assets/products/all.png";

function useInView(ref, threshold = 0.15) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return vis;
}

export default function About() {
  const sectionRef = useRef();
  const isVisible = useInView(sectionRef, 0.08);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');

        :root {
          --dark-green: #1f3d2b;
          --soft-green: #6bbf59;
          --accent-bg: #f8faf9;
          --white: #ffffff;
          --text-main: #2c3e33;
          --text-muted: #5c6d62;
          --transition-about: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-about {
          font-family: 'Nunito Sans', sans-serif;
          background-color: var(--white);
          color: var(--text-main);
          padding: 56px 0;
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .premium-about { padding: 100px 0; }
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        @media (min-width: 768px) {
          .about-container { padding: 0 32px; }
        }

        /* Mobile-first: stack vertically */
        .about-wrapper {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: stretch;
        }

        /* Desktop: side by side */
        @media (min-width: 1024px) {
          .about-wrapper {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 80px;
            align-items: center;
          }
        }

        /* Image Column */
        .image-side {
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: var(--transition-about);
        }

        @media (min-width: 1024px) {
          .image-side {
            transform: translateX(-30px);
          }
        }

        .image-side.visible {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .main-img-container {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: visible;
        }

        .main-img-container img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          max-height: 380px;
          object-fit: cover;
        }

        @media (min-width: 1024px) {
          .main-img-container img {
            max-height: none;
          }
        }

        .years-badge {
          position: absolute;
          bottom: 24px;
          right: -10px;
          width: 76px;
          height: 76px;
          background: var(--white);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          z-index: 10;
          animation: float-badge 4s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .years-badge { right: -14px; width: 86px; height: 86px; }
        }

        .years-n { font-size: 1.3rem; font-weight: 800; color: var(--dark-green); line-height: 1; }
        .years-t { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; color: var(--soft-green); letter-spacing: 1px; }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* Content Column */
        .content-side {
          display: flex;
          flex-direction: column;
          gap: 22px;
          opacity: 0;
          transform: translateY(20px);
          transition: var(--transition-about);
          transition-delay: 0.15s;
        }

        @media (min-width: 1024px) {
          .content-side {
            transform: translateX(30px);
          }
        }

        .content-side.visible {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .content-header {
          border-left: 3px solid var(--soft-green);
          padding-left: 16px;
        }

        .content-header h2 {
          font-size: clamp(1.3rem, 4vw, 1.8rem);
          font-weight: 400;
          color: var(--dark-green);
          line-height: 1.4;
          font-style: italic;
        }

        .main-text {
          font-size: 0.92rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .main-text strong { color: var(--dark-green); font-weight: 700; }

        /* Feature Cards */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (max-width: 400px) {
          .feature-grid { grid-template-columns: 1fr; gap: 10px; }
        }

        .f-card {
          background: var(--accent-bg);
          padding: 18px 12px;
          border-radius: 10px;
          text-align: center;
          transition: var(--transition-about);
          border: 1px solid transparent;
        }

        .f-card:hover {
          background: var(--white);
          border-color: var(--soft-green);
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(31, 61, 43, 0.06);
        }

        .f-icon { font-size: 1.3rem; margin-bottom: 10px; display: block; }
        .f-title {
          font-size: 0.7rem; font-weight: 800;
          text-transform: uppercase; color: var(--dark-green);
          letter-spacing: 1.5px; margin-bottom: 6px; display: block;
        }
        .f-desc { font-size: 0.75rem; color: var(--text-muted); line-height: 1.5; }
      `}</style>

      <section className="premium-about" ref={sectionRef}>
        <div className="about-container">
          <div className="about-wrapper">

            {/* Image Section */}
            <div className={`image-side ${isVisible ? "visible" : ""}`}>
              <div className="main-img-container">
                <img src={allImage} alt="Nithya Ayurveda Heritage" />
                <div className="years-badge">
                  <span className="years-n">6+</span>
                  <span className="years-t">Years</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`content-side ${isVisible ? "visible" : ""}`}>
              <div className="content-header">
                <h2>Where the science of life meets the art of living well</h2>
              </div>

              <div className="main-text">
                <p>
                  At <strong>Nithya Ayurveda</strong>, we carry forward a lineage of healing that stretches back thousands of years. Founded on the sacred principles of Ayurveda — the world's oldest living wellness system — we bring authentic, personalised care to each soul who walks through our doors.
                </p>
                <br />
                <p>
                  Our physicians are trained in <strong>classical Kerala traditions</strong>, blending time-honoured treatments with a deep understanding of modern health challenges. Every herb we use is ethically sourced.
                </p>
              </div>

              <div className="feature-grid">
                <div className="f-card">
                  <span className="f-icon">🌿</span>
                  <span className="f-title">Authentic</span>
                  <p className="f-desc">Classical Kerala Panchakarma traditions</p>
                </div>
                <div className="f-card">
                  <span className="f-icon">🌱</span>
                  <span className="f-title">Natural</span>
                  <p className="f-desc">Pure herbs, ethically sourced</p>
                </div>
                <div className="f-card">
                  <span className="f-icon">🌸</span>
                  <span className="f-title">Holistic</span>
                  <p className="f-desc">Mind, body & spirit as one</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}