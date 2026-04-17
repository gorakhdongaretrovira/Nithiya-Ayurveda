import { useEffect, useRef } from "react";
import logo from "../assets/logo/logo.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --ft-dark:    #030a05;
    --ft-mid:     #071510;
    --ft-green:   #0c2018;
    --ft-gold:    #c9a84c;
    --ft-gold-l:  #e8c96a;
    --ft-gold-p:  #f5e8c0;
    --ft-cream:   rgba(245,235,221,0.78);
    --ft-muted:   rgba(245,235,221,0.38);
    --ft-faint:   rgba(245,235,221,0.18);
    --ft-border:  rgba(201,168,76,0.14);
    --ft-gold-b:  rgba(201,168,76,0.22);
  }

  @keyframes ftSpin {
    from { transform: translate(-50%,-50%) rotate(0deg); }
    to   { transform: translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes ftShimmer {
    0%,100% { opacity: 0.5; }
    50%      { opacity: 1; }
  }
  @keyframes ftLeafSway {
    0%,100% { transform: rotate(-18deg) translate(-28px,-22px) rotate(0deg); }
    50%      { transform: rotate(-18deg) translate(-28px,-22px) rotate(3deg); }
  }

  /* ── FOOTER WRAPPER — eliminates white gap on ALL pages ── */
  .ft-outer-wrap {
    display: block;
    margin: 0;
    padding: 0;
    line-height: 0;
    background: #030a05;
    /* Ensure no inherited margin/gap from parent */
    margin-top: 0;
  }

  /* ── ROOT ── */
  .ft-root {
    display: block;
    margin: 0;
    padding: 0;
    background: var(--ft-dark);
    font-family: 'Jost', sans-serif;
    position: relative; overflow: hidden;
    color: var(--ft-muted);
    border-top: none;
    outline: none;
    line-height: normal;
  }

  /* Top rule — gold shimmer line */
  .ft-top-rule {
    width: 100%; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(201,168,76,0.15) 15%,
      rgba(201,168,76,0.55) 35%,
      rgba(232,201,106,0.85) 50%,
      rgba(201,168,76,0.55) 65%,
      rgba(201,168,76,0.15) 85%,
      transparent 100%
    );
    display: block;
  }

  .ft-mandala {
    position: absolute; top: 50%; left: 50%;
    width: 800px; height: 800px;
    opacity: 0.035; pointer-events: none; z-index: 0;
    animation: ftSpin 260s linear infinite;
  }

  .ft-radial-glow {
    position: absolute; top: 40%; left: 50%;
    width: 600px; height: 400px;
    background: radial-gradient(ellipse, rgba(201,168,76,0.03) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    pointer-events: none; z-index: 0;
  }

  .ft-leaf { position: absolute; pointer-events: none; z-index: 0; }
  .ft-leaf.tl {
    top: 0; left: 0; width: 200px; opacity: 0.055;
    animation: ftLeafSway 12s ease-in-out infinite;
  }
  .ft-leaf.br {
    bottom: 60px; right: 0; width: 200px; opacity: 0.05;
    transform: rotate(162deg) translate(-28px,-22px);
  }
  .ft-leaf.bl {
    bottom: 80px; left: 80px; width: 120px; opacity: 0.04;
    transform: rotate(20deg);
  }

  /* ── CONTAINER ── */
  .ft-container {
    position: relative; z-index: 1;
    max-width: 1240px; margin: 0 auto;
    padding: 60px 52px 44px;
  }

  /* ── GRID ── */
  .ft-grid {
    display: grid;
    grid-template-columns: 1.7fr 1fr 1fr 1.3fr;
    gap: 56px; margin-bottom: 64px;
  }

  /* Scroll animation */
  .ft-anim {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
  }
  .ft-anim.ft-in { opacity: 1; transform: translateY(0); }
  .ft-anim-d1 { transition-delay: 0.05s; }
  .ft-anim-d2 { transition-delay: 0.12s; }
  .ft-anim-d3 { transition-delay: 0.2s; }
  .ft-anim-d4 { transition-delay: 0.28s; }

  /* ── BRAND ── */
  .ft-logo-row {
    display: flex; align-items: center;
    gap: 14px; margin-bottom: 20px;
  }
  .ft-logo-ring {
    position: relative; width: 52px; height: 52px; flex-shrink: 0;
  }
  .ft-logo-ring::before {
    content: '';
    position: absolute; inset: -5px; border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.28);
    transition: border-color 0.4s;
  }
  .ft-logo-ring::after {
    content: '';
    position: absolute; inset: -11px; border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.1);
    transition: border-color 0.4s, transform 0.5s;
  }
  .ft-logo-ring:hover::before { border-color: rgba(201,168,76,0.6); }
  .ft-logo-ring:hover::after  { border-color: rgba(201,168,76,0.2); transform: rotate(20deg); }

  .ft-logo-img {
    width: 52px; height: 52px; border-radius: 50%; object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(201,168,76,0.25)) brightness(1.05);
    transition: filter 0.4s;
  }
  .ft-logo-ring:hover .ft-logo-img {
    filter: drop-shadow(0 0 14px rgba(201,168,76,0.5)) brightness(1.15);
  }

  .ft-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem; font-weight: 600;
    color: rgba(245,235,221,0.92);
    letter-spacing: 0.04em; display: block; line-height: 1;
    text-shadow: 0 0 24px rgba(201,168,76,0.18);
  }
  .ft-brand-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.65rem; font-weight: 300;
    letter-spacing: 0.28em; text-transform: uppercase;
    color: rgba(201,168,76,0.48); font-style: italic;
    display: block; margin-top: 5px;
  }

  .ft-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-weight: 300; font-style: italic;
    color: rgba(245,235,221,0.38); line-height: 1.9;
    margin: 0 0 24px; max-width: 300px;
  }

  .ft-brand-divider {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 22px;
  }
  .ft-brand-div-line {
    flex: 1; height: 1px;
    background: linear-gradient(90deg, rgba(201,168,76,0.2), transparent);
  }
  .ft-brand-div-glyph {
    font-size: 10px; color: rgba(201,168,76,0.35);
  }

  .ft-socials { display: flex; gap: 10px; }
  .ft-social-btn {
    width: 40px; height: 40px;
    border: 1px solid var(--ft-gold-b);
    border-radius: 50%; background: transparent;
    display: flex; align-items: center; justify-content: center;
    color: var(--ft-muted);
    cursor: pointer; transition: all .35s;
    position: relative; overflow: hidden;
    text-decoration: none;
  }
  .ft-social-btn::before {
    content: '';
    position: absolute; inset: 0; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%);
    opacity: 0; transition: opacity .35s;
  }
  .ft-social-btn:hover {
    border-color: var(--ft-gold);
    color: rgba(245,235,221,0.88);
    transform: translateY(-3px) rotate(5deg);
    box-shadow: 0 6px 20px rgba(201,168,76,0.2);
  }
  .ft-social-btn:hover::before { opacity: 1; }
  .ft-social-btn svg { width: 15px; height: 15px; position: relative; z-index: 1; }

  /* ── COLUMNS ── */
  .ft-col-label {
    font-family: 'Jost', sans-serif;
    font-size: 0.58rem; font-weight: 600;
    letter-spacing: 0.3em; color: var(--ft-gold); text-transform: uppercase;
    margin: 0 0 22px; display: flex; align-items: center; gap: 10px;
  }
  .ft-col-label::after {
    content: '';
    height: 1px; flex: 1;
    background: linear-gradient(90deg, rgba(201,168,76,0.3), transparent);
  }

  .ft-link-list {
    list-style: none; padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: 12px;
  }

  .ft-link {
    color: var(--ft-muted); text-decoration: none;
    font-family: 'Jost', sans-serif; font-size: 0.82rem; font-weight: 300;
    letter-spacing: 0.03em; transition: all .3s;
    display: inline-flex; align-items: center; gap: 0;
    position: relative;
  }
  .ft-link::before {
    content: '·';
    font-size: 14px; color: rgba(201,168,76,0);
    transition: color 0.3s, margin-right 0.3s;
    margin-right: 0;
  }
  .ft-link:hover {
    color: rgba(245,235,221,0.92);
    transform: translateX(8px);
    text-shadow: 0 0 14px rgba(201,168,76,0.18);
  }
  .ft-link:hover::before {
    color: rgba(201,168,76,0.6);
    margin-right: 6px;
  }

  .ft-contact-block { margin-bottom: 18px; }
  .ft-contact-block strong {
    display: block; font-family: 'Jost', sans-serif;
    font-size: 0.75rem; font-weight: 500;
    color: rgba(245,235,221,0.65); letter-spacing: 0.04em; margin-bottom: 5px;
  }
  .ft-contact-block p {
    font-family: 'Jost', sans-serif; font-size: 0.78rem;
    color: var(--ft-muted); margin: 0; line-height: 1.8; font-weight: 300;
  }
  .ft-contact-block a {
    color: var(--ft-muted); text-decoration: none;
    transition: color 0.3s;
  }
  .ft-contact-block a:hover { color: var(--ft-gold-l); }

  .ft-whatsapp-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(37,211,102,0.08);
    border: 1px solid rgba(37,211,102,0.2);
    border-radius: 100px; padding: 5px 13px;
    font-size: 0.7rem; font-weight: 400; color: rgba(37,211,102,0.7);
    margin-top: 8px; transition: all 0.3s; cursor: pointer;
    text-decoration: none;
  }
  .ft-whatsapp-pill:hover {
    background: rgba(37,211,102,0.14);
    border-color: rgba(37,211,102,0.4);
    color: rgba(37,211,102,0.9);
    transform: translateY(-1px);
  }
  .ft-whatsapp-pill svg { width: 13px; height: 13px; }

  /* ── TRUST BAR ── */
  .ft-trust {
    border-top: 1px solid var(--ft-border);
    border-bottom: 1px solid var(--ft-border);
    padding: 20px 0; margin-bottom: 32px;
    display: flex; justify-content: center; align-items: center;
    gap: 0; flex-wrap: wrap;
    position: relative;
  }
  .ft-trust::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.02) 50%, transparent 100%);
  }

  .ft-trust-item {
    font-family: 'Jost', sans-serif; font-size: 0.58rem; font-weight: 500;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--ft-faint);
    display: flex; align-items: center; gap: 18px;
    padding: 0 24px;
    transition: color 0.3s;
    cursor: default;
  }
  .ft-trust-item:hover { color: rgba(201,168,76,0.5); }
  .ft-trust-sep {
    width: 1px; height: 18px;
    background: linear-gradient(180deg, transparent, rgba(201,168,76,0.25), transparent);
    flex-shrink: 0;
  }

  /* ── BOTTOM ── */
  .ft-bottom {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
    padding-top: 24px;
    border-top: 1px solid rgba(201,168,76,0.08);
  }
  .ft-copy {
    font-family: 'Jost', sans-serif; font-size: 0.72rem;
    color: rgba(245,235,221,0.22); font-weight: 300; margin: 0;
    letter-spacing: 0.03em;
  }
  .ft-legal { display: flex; gap: 20px; }
  .ft-legal a {
    font-family: 'Jost', sans-serif; font-size: 0.58rem; font-weight: 500;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(245,235,221,0.2); text-decoration: none; transition: color .3s;
  }
  .ft-legal a:hover { color: var(--ft-gold); }

  .ft-crafted {
    display: flex; align-items: center; gap: 6px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.75rem; font-style: italic;
    color: rgba(201,168,76,0.28);
  }
  .ft-crafted span { animation: ftShimmer 3s ease-in-out infinite; }

  .ft-scroll-top-wrap {
    position: absolute; right: 52px; bottom: 48px;
  }
  .ft-scroll-top-btn {
    width: 44px; height: 44px;
    border: 1px solid rgba(201,168,76,0.2); background: transparent;
    color: rgba(245,235,221,0.28);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; border-radius: 8px; overflow: hidden;
    transition: all .3s; position: relative;
  }
  .ft-scroll-top-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(201,168,76,0.1), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .ft-scroll-top-btn:hover {
    border-color: var(--ft-gold);
    color: var(--ft-gold-l);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(201,168,76,0.18);
  }
  .ft-scroll-top-btn:hover::before { opacity: 1; }
  .ft-scroll-top-btn svg { width: 16px; height: 16px; position: relative; z-index: 1; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
    .ft-container { padding: 56px 28px 44px; }
    .ft-scroll-top-wrap { right: 28px; }
  }
  @media (max-width: 720px) {
    .ft-grid { grid-template-columns: 1fr; gap: 28px; }
    .ft-container { padding: 44px 20px 72px; }
    .ft-trust { gap: 12px; flex-wrap: wrap; justify-content: flex-start; padding: 16px 20px; }
    .ft-trust-item { padding: 4px 12px; font-size: 0.52rem; }
    .ft-trust-sep { display: none; }
    .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
    .ft-scroll-top-wrap { right: 20px; bottom: 72px; }
    .ft-crafted { display: none; }
    .ft-tagline { max-width: 100%; }
  }
`;

const TRUST = ["AYUSH Certified", "100% Organic", "Pure Extracts", "GMP Compliant"];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerRef = useRef(null);
  const animRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ft-in");
          }
        });
      },
      { threshold: 0.08 }
    );
    animRefs.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !animRefs.current.includes(el)) animRefs.current.push(el);
  };

  return (
    <>
      <style>{styles}</style>
      {/*
        ft-outer-wrap uses background: #030a05 and margin-top:0
        This eliminates the white gap on ALL pages (not just home).
        The page background bleeds through without this wrapper
        because some page sections have white/light backgrounds.
      */}
      <div className="ft-outer-wrap">
        <footer className="ft-root" ref={footerRef}>
          <div className="ft-top-rule" />

          {/* Mandala background */}
          <svg className="ft-mandala" viewBox="0 0 600 600" aria-hidden="true">
            {[...Array(20)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 18} 300 300)`}>
                <ellipse cx="300" cy="110" rx="6" ry="32" fill="#B8964E" opacity="0.25" />
                <circle cx="300" cy="82" r="2.5" fill="#B8964E" opacity="0.35" />
              </g>
            ))}
            {[140, 200, 255, 300].map((r, i) => (
              <circle key={i} cx="300" cy="300" r={r} fill="none" stroke="#B8964E" strokeWidth="0.4" opacity="0.6" />
            ))}
            {[...Array(8)].map((_, i) => (
              <path key={i}
                d={`M300,300 L${300 + 295 * Math.cos(i * Math.PI / 4)},${300 + 295 * Math.sin(i * Math.PI / 4)}`}
                stroke="#B8964E" strokeWidth="0.3" opacity="0.3"
              />
            ))}
          </svg>

          <div className="ft-radial-glow" />

          {/* Leaf corners */}
          <svg className="ft-leaf tl" viewBox="0 0 200 220" fill="none" aria-hidden="true">
            <path d="M40 180 C30 120, 60 60, 120 20 C140 50, 130 100, 100 140 C80 165, 60 175, 40 180Z" fill="#fff" opacity="0.9"/>
            <path d="M40 180 C80 155, 110 120, 120 20" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4"/>
            <path d="M40 180 C75 140, 95 100, 120 20" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3"/>
            <path d="M68 150 C90 135, 103 115, 120 80" stroke="#c9a84c" strokeWidth="0.6" opacity="0.25"/>
            <path d="M55 165 C75 148, 88 128, 120 20" stroke="#fff" strokeWidth="0.4" opacity="0.2"/>
          </svg>
          <svg className="ft-leaf br" viewBox="0 0 200 220" fill="none" aria-hidden="true">
            <path d="M40 180 C30 120, 60 60, 120 20 C140 50, 130 100, 100 140 C80 165, 60 175, 40 180Z" fill="#fff" opacity="0.9"/>
          </svg>
          <svg className="ft-leaf bl" viewBox="0 0 120 160" fill="none" aria-hidden="true">
            <path d="M30 130 C20 85, 45 40, 90 15 C105 35, 95 70, 72 100 C56 120, 42 128, 30 130Z" fill="#fff" opacity="0.9"/>
          </svg>

          <div className="ft-container">

            {/* GRID */}
            <div className="ft-grid">
              {/* BRAND */}
              <div ref={addRef} className="ft-anim ft-anim-d1">
                <div className="ft-logo-row">
                  <div className="ft-logo-ring">
                    <img src={logo} alt="Nithya Ayurveda" className="ft-logo-img" />
                  </div>
                  <div>
                    <span className="ft-brand-name">Nithya Ayurveda</span>
                    <span className="ft-brand-sub">Rooted in Nature · Trusted in Science</span>
                  </div>
                </div>
                <p className="ft-tagline">
                  Nurturing holistic wellness through the synergy of ancient Vedic knowledge and modern botanical science.
                </p>
                <div className="ft-brand-divider">
                  <div className="ft-brand-div-line" />
                  <span className="ft-brand-div-glyph">✦</span>
                </div>
                <div className="ft-socials">
                  <a
                    href="https://www.instagram.com/nithya_ayurveda?utm_source=qr&igsh=MTUyY3gzcm1iYjN6dQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-social-btn"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1D8MDu7JVU/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-social-btn"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* NAVIGATION */}
              <div ref={addRef} className="ft-anim ft-anim-d2">
                <h4 className="ft-col-label">Navigation</h4>
                <ul className="ft-link-list">
                  {["Home", "About", "Products", "Team", "Contact"].map(l => (
                    <li key={l}>
                      <a href={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="ft-link">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COLLECTIONS */}
              <div ref={addRef} className="ft-anim ft-anim-d3">
                <h4 className="ft-col-label">Collections</h4>
                <ul className="ft-link-list">
                  {["Hemp Pain Spray", "Ovucare", "Vajra-X", "Kufrida Drops"].map(l => (
                    <li key={l}>
                      <a href="/products" className="ft-link">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONNECT */}
              <div ref={addRef} className="ft-anim ft-anim-d4">
                <h4 className="ft-col-label">Connect</h4>
                <div className="ft-contact-block">
                  <strong>Shop no 2 chatrapati shivaji maharaj chowk</strong>
                  <p>walhekarwadi pune Maharashtra 411033</p>
                </div>
                <div className="ft-contact-block">
                  <strong>Ayurvedic Support</strong>
                  <p><a href="mailto:nithyaayurveda09@gmail.com">nithyaayurveda09@gmail.com</a></p>
                  <p><a href="tel:+918956658209">+91 8956658209</a></p>
                </div>
                <a
                  href="https://wa.me/918956658209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ft-whatsapp-pill"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* TRUST BAR */}
            <div ref={addRef} className="ft-anim ft-anim-d2 ft-trust">
              {TRUST.map((t, i) => (
                <div key={t} className="ft-trust-item">
                  {i !== 0 && <div className="ft-trust-sep" />}
                  {t}
                </div>
              ))}
            </div>

            {/* BOTTOM */}
            <div ref={addRef} className="ft-anim ft-anim-d3 ft-bottom">
              <p className="ft-copy">
                &copy; {year} Nithya Ayurveda. Crafted for balance and tranquility.
              </p>
              <div className="ft-crafted">
                Made with <span>❤</span> in India
              </div>
              <div className="ft-legal">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Shipping</a>
              </div>
            </div>

            {/* Scroll to top */}
            <div className="ft-scroll-top-wrap">
              <button className="ft-scroll-top-btn" onClick={scrollToTop} aria-label="Back to top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}