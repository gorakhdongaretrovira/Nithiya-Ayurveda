import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts"; // adjust path if needed

const PRODUCTS = [
  {
    id: 0,
    name: "Hemp Pain Spray",
    tagline: "Fast-acting relief for back, joints & muscles",
    desc: "Cold-pressed hemp extract blended with Ashwagandha and Shallaki — a time-tested Ayurvedic formula for deep, lasting comfort.",
    img: "/src/assets/products/hemp.png",
    badge: "Best Seller",
    category: "Pain Relief",
    herbs: ["Ashwagandha", "Shallaki", "Hemp"],
    accent: "#355E3B",
  },
  {
    id: 1,
    name: "OvuCare",
    tagline: "Hormonal balance & PCOS / PCOD support",
    desc: "A gentle Ayurvedic blend of Shatavari, Lodhra and Ashoka that helps support a healthy hormonal rhythm — naturally and holistically.",
    img: "/src/assets/products/ovucare.png",
    badge: "For Her",
    category: "Women's Wellness",
    herbs: ["Shatavari", "Lodhra", "Ashoka"],
    accent: "#7A5C8A",
  },
  {
    id: 2,
    name: "Vajra-X",
    tagline: "Stamina, vitality & performance support",
    desc: "Rooted in classical Vajikarana therapy, Vajra-X harnesses Shilajit, Safed Musli and Ashwagandha to help support energy and vitality.",
    img: "/src/assets/products/vajra.png",
    badge: "For Him",
    category: "Men's Vitality",
    herbs: ["Shilajit", "Safed Musli", "Ashwagandha"],
    accent: "#8B5E3C",
  },
  {
    id: 3,
    name: "Kufrida",
    tagline: "Respiratory health & cough & cold support",
    desc: "A classical respiratory formulation with Tulsi, Vasa and Kantakari — helping the airways stay clear and the breath stay deep.",
    img: "/src/assets/products/kufrida.png",
    badge: "Respiratory",
    category: "Respiratory Care",
    herbs: ["Tulsi", "Vasa", "Kantakari"],
    accent: "#2A6B8A",
  },
];

const WHY = [
  { icon: "🌿", title: "100% Ayurvedic", body: "Every ingredient sourced from nature's finest — no synthetic fillers, no shortcuts." },
  { icon: "🧪", title: "Lab Certified", body: "Each batch independently tested for purity, potency and safety." },
  { icon: "❄️", title: "Cold-Pressed", body: "Minimal processing preserves the full spectrum of botanical actives." },
  { icon: "👨‍⚕️", title: "Doctor Trusted", body: "Formulations developed with certified Ayurvedic physicians." },
];

const AUTO_INTERVAL = 5000;

export default function NithyaHome() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const whyRef = useRef(null);
  const [whyVisible, setWhyVisible] = useState(false);

  // ── CART STATE ──
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const handleAddToCart = useCallback((item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setToast(item.name);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const goTo = useCallback((index, dir = "next") => {
    if (isTransitioning || index === active) return;
    setDirection(dir);
    setPrevActive(active);
    setIsTransitioning(true);
    setActive(index);
    setProgress(0);
    startTimeRef.current = performance.now();
    setTimeout(() => {
      setPrevActive(null);
      setIsTransitioning(false);
    }, 1000);
  }, [active, isTransitioning]);

  const nextSlide = useCallback(() => {
    goTo((active + 1) % PRODUCTS.length, "next");
  }, [active, goTo]);

  const prevSlide = useCallback(() => {
    goTo((active - 1 + PRODUCTS.length) % PRODUCTS.length, "prev");
  }, [active, goTo]);

  useEffect(() => {
    startTimeRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min((elapsed / AUTO_INTERVAL) * 100, 100);
      setProgress(pct);
      if (elapsed >= AUTO_INTERVAL) {
        nextSlide();
      } else {
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [active, nextSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWhyVisible(true); },
      { threshold: 0.15 }
    );
    if (whyRef.current) observer.observe(whyRef.current);
    return () => observer.disconnect();
  }, []);

  const p = PRODUCTS[active];
  const prev = prevActive !== null ? PRODUCTS[prevActive] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&family=Cormorant+Garamond:ital,wght@0,300;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background: #FAF7F1; }

        :root {
          --cream: #FAF7F1;
          --green: #2D5344;
          --green-light: #4A7360;
          --gold: #B88E2F;
          --text: #1A2E28;
          --text-muted: #5A5346;
          --nav-h: 80px;
        }

        /* ─── HERO ─── */
        .hero-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          min-height: 500px;
          overflow: hidden;
          background: #111;
        }

        .hero-main {
          position: relative; width: 100%; height: 100%;
        }

        .hero-img-layer {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          overflow: hidden;
        }

        .hero-product-image {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
          will-change: transform;
        }

        @keyframes zoomOut { from { transform: scale(1.06); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes zoomIn  { from { transform: scale(1);    opacity: 1; } to { transform: scale(1.04); opacity: 0; } }

        .hero-img-layer.active  { animation: zoomOut 1.0s cubic-bezier(0.2,1,0.3,1) forwards; z-index: 2; }
        .hero-img-layer.exiting { animation: zoomIn  1.0s cubic-bezier(0.2,1,0.3,1) forwards; z-index: 1; }

        /* ── Subtle bottom gradient only — keeps text readable, image stays clear ── */
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0,0,0,0.55) 100%
          );
          z-index: 3;
          pointer-events: none;
        }

        /* ── CONTENT ── */
        .hero-content {
          position: absolute; z-index: 10;
          left: 5%; bottom: 120px;
          width: 50%;
        }

        @media (max-width: 1024px) { .hero-content { width: 70%; } }
        @media (max-width: 768px)  { .hero-content { width: 90%; left: 5%; bottom: 100px; } }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content > * { animation: fadeInUp 0.9s cubic-bezier(0.2,1,0.3,1) both; }

        .hero-badge {
          animation-delay: 0.1s;
          display: inline-block;
          padding: 5px 12px;
          background: rgba(255,255,255,0.18);
          color: #fff;
          border-radius: 30px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 14px;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(4px);
        }

        .hero-title {
          animation-delay: 0.2s;
          font-family: 'Playfair Display', serif;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 12px;
          font-size: clamp(2rem, 5vw, 4rem);
          text-shadow: 0 2px 16px rgba(0,0,0,0.4);
        }
        .hero-title strong { color: #f0d080; font-style: italic; }

        .hero-desc {
          animation-delay: 0.3s;
          font-family: 'Cormorant Garamond', serif;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          margin-bottom: 22px;
          font-size: clamp(1rem, 2vw, 1.25rem);
        }

        .hero-btns {
          animation-delay: 0.4s;
          display: flex; gap: 14px; flex-wrap: wrap;
        }

        .btn-premium {
          padding: 13px 28px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        @media (max-width: 480px) { .btn-premium { padding: 11px 20px; font-size: 0.7rem; } }

        .btn-p { background: var(--green); color: white; }
        .btn-p:hover { background: var(--green-light); }
        .btn-s { background: rgba(255,255,255,0.15); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.5); color: #fff; }
        .btn-s:hover { background: rgba(255,255,255,0.25); }

        /* ── CONTROLS ── */
        .hero-controls {
          position: absolute; bottom: 36px; left: 5%;
          display: flex; align-items: center; gap: 30px; z-index: 20;
        }
        @media (max-width: 768px) { .hero-controls { bottom: 20px; gap: 20px; } }

        .progress-container { display: flex; gap: 8px; }
        .progress-bar {
          width: 44px; height: 2px;
          background: rgba(255,255,255,0.25);
          position: relative; cursor: pointer; overflow: hidden; border-radius: 2px;
        }
        @media (max-width: 768px) { .progress-bar { width: 32px; } }
        .progress-fill { position: absolute; height: 100%; background: #f0d080; width: 0; transition: width 0.1s linear; }

        .nav-arrows { display: flex; gap: 10px; }
        .nav-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.1); backdrop-filter: blur(4px);
          cursor: pointer; transition: 0.3s;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 16px;
        }
        @media (max-width: 768px) { .nav-arrow { width: 34px; height: 34px; font-size: 14px; } }
        .nav-arrow:hover { background: var(--green); border-color: var(--green); }

        /* ── CART TOAST ── */
        .cart-toast {
          position: fixed; bottom: 30px; right: 24px; z-index: 9999;
          background: #2D5344; color: #fff;
          padding: 12px 20px; border-radius: 8px;
          font-family: 'Lato', sans-serif; font-size: 13px; font-weight: 600;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          animation: toastIn 0.3s ease forwards;
        }
        @keyframes toastIn { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: translateY(0); } }

        /* ── WHY SECTION ── */
        .why { padding: 80px 0; background: #FAF7F1; }
        @media (max-width: 768px) { .why { padding: 56px 0; } }

        .why-header {
          text-align: center; margin-bottom: 50px; padding: 0 5%;
          opacity: 0; transform: translateY(30px);
          transition: 1s cubic-bezier(0.2,1,0.3,1);
        }
        .why-visible .why-header { opacity: 1; transform: translateY(0); }

        .why-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          color: #1A2E28;
        }

        .why-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 24px;
          max-width: 1400px; margin: 0 auto; padding: 0 5%;
        }
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 480px)  { .why-grid { grid-template-columns: 1fr; gap: 14px; } }

        .why-card {
          padding: 32px 24px; background: white; border-radius: 12px; text-align: center;
          opacity: 0; transform: translateY(40px); transition: 0.8s cubic-bezier(0.2,1,0.3,1);
          box-shadow: 0 8px 30px rgba(0,0,0,0.03);
        }
        .why-visible .why-card { opacity: 1; transform: translateY(0); }
        .why-card:nth-child(2) { transition-delay: 0.15s; }
        .why-card:nth-child(3) { transition-delay: 0.3s; }
        .why-card:nth-child(4) { transition-delay: 0.45s; }
        .why-icon  { font-size: 2rem; margin-bottom: 16px; display: block; }
        .why-title { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: #2D5344; margin-bottom: 12px; }
        .why-body  { font-family: 'Lato', sans-serif; color: #5A5346; line-height: 1.6; font-size: 0.9rem; }
      `}</style>

      {/* ── HERO SLIDER ── */}
      <section className="hero-section">
        <div className="hero-main">
          {prev && (
            <div className="hero-img-layer exiting">
              <img src={prev.img} alt="" className="hero-product-image" loading="eager" />
            </div>
          )}
          <div className="hero-img-layer active" key={active}>
            <img src={p.img} alt={p.name} className="hero-product-image" loading="eager" />
          </div>

          {/* subtle bottom fade only — no green tint */}
          <div className="hero-overlay" />

          <div className="hero-content" key={`content-${active}`}>
            <span className="hero-badge">{p.badge}</span>
            <h1 className="hero-title">
              {p.name.split(" ").slice(0, -1).join(" ")}{" "}
              <strong>{p.name.split(" ").slice(-1)}</strong>
            </h1>
            <p className="hero-desc">{p.tagline}. {p.desc}</p>
            <div className="hero-btns">
              <button className="btn-premium btn-p" onClick={() => navigate("/products")}>
                Shop The Blend
              </button>
              <button className="btn-premium btn-s" onClick={() => navigate("/about")}>
                Our Science
              </button>
            </div>
          </div>

          <div className="hero-controls">
            <div className="progress-container">
              {PRODUCTS.map((_, i) => (
                <div key={i} className="progress-bar" onClick={() => goTo(i, i > active ? "next" : "prev")}>
                  <div
                    className="progress-fill"
                    style={{ width: active === i ? `${progress}%` : active > i ? "100%" : "0%" }}
                  />
                </div>
              ))}
            </div>
            <div className="nav-arrows">
              <button className="nav-arrow" onClick={prevSlide}>←</button>
              <button className="nav-arrow" onClick={nextSlide}>→</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ── */}
      <section id="about" className={`why ${whyVisible ? "why-visible" : ""}`} ref={whyRef}>
        <div className="why-header">
          <h2 className="why-heading">
            Rooted in <span style={{ color: "#2D5344", fontStyle: "italic" }}>Nature</span>, Backed by Science
          </h2>
        </div>
        <div className="why-grid">
          {WHY.map((w, i) => (
            <div key={i} className="why-card">
              <span className="why-icon">{w.icon}</span>
              <h3 className="why-title">{w.title}</h3>
              <p className="why-body">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <FeaturedProducts onAddToCart={handleAddToCart} />

      <footer style={{ background: "#2D5344", color: "#FAF7F1", padding: "32px 0", textAlign: "center", fontFamily: "Lato, sans-serif" }}>
        <p style={{ opacity: 0.8, fontSize: "0.85rem", letterSpacing: "0.1em" }}>© 2026 NITHYA AYURVEDA — NASHIK, MH</p>
      </footer>

      {/* ── ADD TO CART TOAST ── */}
      {toast && (
        <div className="cart-toast">
          🛒 {toast} added to cart!
        </div>
      )}
    </>
  );
}