import { useRef } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    initials: "SP",
    name: "Sangram Pawar",
    role: "Founder",
    company: "Nithya Ayurveda",
    quals: "Entrepreneur · Wellness Visionary",
    bio: "Sangram Pawar is the visionary force behind Nithya Ayurveda. Rooted in a deep reverence for India's ancient healing traditions, he built this brand with a singular mission — to make authentic, pure Ayurvedic wellness accessible to every household. His unwavering commitment to quality, ethical sourcing, and transparent formulation defines the soul of every product that carries the Nithya name.",
    tags: ["Ayurvedic Heritage", "Brand Vision", "Ethical Sourcing"],
    quote: "Nature has provided every remedy we will ever need. Our work is simply to listen, and to preserve.",
    stat: { num: "25+", label: "Years Experience" },
    theme: "dark",
  },
  {
    initials: "DS",
    name: "Dr. Shivani Pawar",
    role: "Physiotherapist",
    company: "Nithya Ayurveda",
    quals: "B.P.T. · Certified Ayurvedic Wellness Practitioner",
    bio: "Dr. Shivani Pawar merges the precision of modern physiotherapy with the holistic wisdom of Ayurvedic principles. With a compassionate, patient-first philosophy, she designs evidence-based recovery programmes that address pain, mobility, and long-term vitality — ensuring every Nithya remedy is grounded in clinical integrity and genuine care.",
    tags: ["Physiotherapy", "Pain Management", "Holistic Recovery"],
    quote: "True healing restores not just the body, but the natural harmony within.",
    stat: { num: "500+", label: "Patients Guided" },
    theme: "light",
  },
];

const philosophy = [
  {
    glyph: "॥",
    title: "Ancient Texts, Modern Validation",
    desc: "Every formula begins with classical Charaka Samhita references, then passes through clinical biomarker studies before reaching production.",
  },
  {
    glyph: "✦",
    title: "Seed-to-Shelf Integrity",
    desc: "We partner directly with organic farmers across India — traceable, pesticide-free, and harvested at peak potency.",
  },
  {
    glyph: "◉",
    title: "No Compromise on Purity",
    desc: "Triple-tested at NABL-accredited labs for heavy metals and standardised active compounds before any batch is approved.",
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cinzel:wght@400;500&family=Jost:wght@200;300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --tm-beige:      #F2F1EB;
    --tm-ivory:      #FAF9F6;
    --tm-dark:       #1C2E25;
    --tm-green:      #2D5A43;
    --tm-green-mid:  #3A7057;
    --tm-gold:       #C9A84C;
    --tm-gold-l:     #E8C96A;
    --tm-bronze:     #967259;
    --tm-bronze-lt:  rgba(150,114,89,0.18);
    --tm-text:       #1B3628;
    --tm-muted:      #6B6257;
    --tm-pale:       rgba(245,235,221,0.88);
  }

  /* ROOT */
  .tm-root {
    background: var(--tm-beige);
    font-family: 'Jost', sans-serif;
    color: var(--tm-text);
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .tm-hero {
    position: relative;
    background: var(--tm-ivory);
    padding: clamp(80px, 12vw, 140px) clamp(20px, 5%, 5%) clamp(60px, 8vw, 100px);
    text-align: center;
    border-bottom: 1px solid var(--tm-bronze-lt);
    overflow: hidden;
  }

  .tm-hero-bg {
    position: absolute; inset: 0; pointer-events: none; opacity: 0.35;
    display: flex; align-items: center; justify-content: center;
  }

  .tm-ring {
    position: absolute; border-radius: 50%;
    border: 0.5px solid var(--tm-bronze);
  }

  .tm-eyebrow {
    font-family: 'Cinzel', serif;
    font-size: clamp(8px, 1.5vw, 10px);
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--tm-bronze);
    margin-bottom: 20px;
    display: flex; align-items: center; justify-content: center; gap: 14px;
  }
  .tm-eyebrow-line {
    height: 1px; width: 40px;
    background: linear-gradient(90deg, transparent, rgba(150,114,89,0.5));
  }
  .tm-eyebrow-line.r {
    background: linear-gradient(90deg, rgba(150,114,89,0.5), transparent);
  }

  .tm-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 6vw, 70px);
    font-weight: 400;
    line-height: 1.12;
    margin-bottom: 16px;
    color: var(--tm-text);
  }
  .tm-hero h1 em {
    color: var(--tm-bronze);
    font-style: italic;
  }

  .tm-hero-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(14px, 2vw, 18px);
    font-style: italic; font-weight: 300;
    color: var(--tm-muted);
    max-width: 480px; margin: 0 auto 44px;
    line-height: 1.7;
  }

  .tm-stats {
    display: flex;
    justify-content: center;
    gap: clamp(32px, 6vw, 72px);
    flex-wrap: wrap;
  }
  .tm-stat-item { text-align: center; }
  .tm-stat-num {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 4vw, 36px);
    color: var(--tm-green); line-height: 1;
    margin-bottom: 6px;
  }
  .tm-stat-label {
    font-size: clamp(8px, 1.2vw, 10px);
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--tm-muted);
  }

  /* ── TEAM CARDS SECTION ── */
  .tm-cards-section {
    max-width: 1280px;
    margin: 0 auto;
    padding: clamp(64px, 9vw, 110px) clamp(20px, 5%, 5%);
  }

  .tm-section-label {
    text-align: center;
    font-family: 'Cinzel', serif;
    font-size: clamp(8px, 1.2vw, 10px);
    letter-spacing: 4px; text-transform: uppercase;
    color: var(--tm-gold);
    margin-bottom: 56px;
    display: flex; align-items: center; justify-content: center; gap: 16px;
  }
  .tm-section-label::before,
  .tm-section-label::after {
    content: '';
    flex: 1; max-width: 80px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4));
  }
  .tm-section-label::after {
    background: linear-gradient(90deg, rgba(201,168,76,0.4), transparent);
  }

  /* Two-card grid */
  .tm-cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(20px, 3vw, 36px);
    align-items: stretch;
  }

  /* Individual card */
  .tm-card {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s;
  }
  .tm-card:hover {
    transform: translateY(-6px);
  }

  /* DARK card (Founder) */
  .tm-card-dark {
    background: var(--tm-dark);
    box-shadow: 0 20px 60px rgba(28,46,37,0.25);
  }
  .tm-card-dark:hover {
    box-shadow: 0 32px 80px rgba(28,46,37,0.38);
  }

  /* LIGHT card (Doctor) */
  .tm-card-light {
    background: var(--tm-ivory);
    border: 1px solid var(--tm-bronze-lt);
    box-shadow: 0 20px 60px rgba(150,114,89,0.1);
  }
  .tm-card-light:hover {
    box-shadow: 0 32px 80px rgba(150,114,89,0.2);
    border-color: rgba(150,114,89,0.35);
  }

  /* Top accent line */
  .tm-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent, var(--tm-gold), var(--tm-gold-l), var(--tm-gold), transparent);
    z-index: 2;
  }

  /* Card content padding */
  .tm-card-inner {
    padding: clamp(36px, 5vw, 56px);
    display: flex; flex-direction: column;
    height: 100%;
  }

  /* Avatar */
  .tm-avatar-wrap {
    display: flex; align-items: center; gap: 22px;
    margin-bottom: 28px;
  }
  .tm-avatar {
    width: clamp(72px, 9vw, 96px);
    height: clamp(72px, 9vw, 96px);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 500;
    flex-shrink: 0;
    position: relative;
  }
  .tm-card-dark .tm-avatar {
    background: rgba(201,168,76,0.12);
    color: var(--tm-gold-l);
    border: 1px solid rgba(201,168,76,0.35);
  }
  .tm-card-light .tm-avatar {
    background: rgba(45,90,67,0.07);
    color: var(--tm-green);
    border: 1px solid rgba(45,90,67,0.2);
  }
  .tm-avatar::after {
    content: '';
    position: absolute; inset: -6px; border-radius: 50%;
    border: 1px dashed;
    opacity: 0.3;
  }
  .tm-card-dark .tm-avatar::after { border-color: var(--tm-gold); }
  .tm-card-light .tm-avatar::after { border-color: var(--tm-bronze); }

  .tm-avatar-meta { flex: 1; }

  .tm-role {
    font-family: 'Cinzel', serif;
    font-size: clamp(8px, 1.2vw, 10px);
    letter-spacing: 2.5px; text-transform: uppercase;
    display: block; margin-bottom: 8px;
  }
  .tm-card-dark .tm-role { color: var(--tm-gold); }
  .tm-card-light .tm-role { color: var(--tm-bronze); }

  .tm-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 500; line-height: 1.1; margin: 0 0 8px;
  }
  .tm-card-dark .tm-name { color: var(--tm-pale); }
  .tm-card-light .tm-name { color: var(--tm-text); }

  .tm-quals {
    font-family: 'Jost', sans-serif;
    font-size: 0.72rem; font-weight: 300; font-style: normal;
    letter-spacing: 0.02em;
  }
  .tm-card-dark .tm-quals { color: rgba(245,235,221,0.38); }
  .tm-card-light .tm-quals { color: var(--tm-muted); }

  /* Divider */
  .tm-card-divider {
    height: 1px; margin: 24px 0;
  }
  .tm-card-dark .tm-card-divider {
    background: linear-gradient(90deg, rgba(201,168,76,0.25), transparent);
  }
  .tm-card-light .tm-card-divider {
    background: linear-gradient(90deg, rgba(150,114,89,0.2), transparent);
  }

  /* Bio */
  .tm-bio {
    font-size: clamp(13px, 1.5vw, 15px);
    line-height: 1.82; font-weight: 300;
    margin-bottom: 24px; flex: 1;
  }
  .tm-card-dark .tm-bio { color: rgba(245,235,221,0.65); }
  .tm-card-light .tm-bio { color: var(--tm-muted); }

  /* Quote */
  .tm-quote-wrap {
    position: relative; padding: 18px 20px;
    margin-bottom: 24px; border-radius: 4px;
  }
  .tm-card-dark .tm-quote-wrap {
    background: rgba(201,168,76,0.05);
    border-left: 2px solid rgba(201,168,76,0.35);
  }
  .tm-card-light .tm-quote-wrap {
    background: rgba(45,90,67,0.04);
    border-left: 2px solid rgba(45,90,67,0.25);
  }
  .tm-quote {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(13px, 1.8vw, 16px); font-style: italic; font-weight: 300;
    line-height: 1.65; margin: 0;
  }
  .tm-card-dark .tm-quote { color: rgba(245,235,221,0.55); }
  .tm-card-light .tm-quote { color: var(--tm-muted); }

  /* Tags */
  .tm-tags {
    display: flex; gap: 8px; flex-wrap: wrap;
    margin-top: auto;
  }
  .tm-tag {
    font-size: 0.6rem; padding: 5px 12px;
    text-transform: uppercase; letter-spacing: 1.5px;
    border-radius: 2px; font-weight: 500;
    transition: all 0.3s;
  }
  .tm-card-dark .tm-tag {
    border: 1px solid rgba(201,168,76,0.2);
    color: rgba(201,168,76,0.6);
    background: rgba(201,168,76,0.04);
  }
  .tm-card-dark .tm-tag:hover {
    border-color: rgba(201,168,76,0.5);
    color: var(--tm-gold-l);
    background: rgba(201,168,76,0.1);
  }
  .tm-card-light .tm-tag {
    border: 1px solid var(--tm-bronze-lt);
    color: var(--tm-bronze);
    background: transparent;
  }
  .tm-card-light .tm-tag:hover {
    border-color: var(--tm-bronze);
    background: rgba(150,114,89,0.07);
  }

  /* Stat badge */
  .tm-stat-badge {
    display: inline-flex; align-items: baseline; gap: 6px;
    padding: 10px 18px;
    margin-bottom: 20px; border-radius: 4px;
  }
  .tm-card-dark .tm-stat-badge {
    background: rgba(201,168,76,0.08);
    border: 1px solid rgba(201,168,76,0.18);
  }
  .tm-card-light .tm-stat-badge {
    background: rgba(45,90,67,0.06);
    border: 1px solid rgba(45,90,67,0.15);
  }
  .tm-stat-badge-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem; font-weight: 600; line-height: 1;
  }
  .tm-card-dark .tm-stat-badge-num { color: var(--tm-gold-l); }
  .tm-card-light .tm-stat-badge-num { color: var(--tm-green); }
  .tm-stat-badge-label {
    font-size: 0.62rem; text-transform: uppercase; letter-spacing: 1.5px;
  }
  .tm-card-dark .tm-stat-badge-label { color: rgba(245,235,221,0.4); }
  .tm-card-light .tm-stat-badge-label { color: var(--tm-muted); }

  /* ── PHILOSOPHY STRIP ── */
  .tm-phil-section {
    background: var(--tm-dark);
    padding: clamp(56px, 8vw, 88px) clamp(20px, 5%, 5%);
    position: relative; overflow: hidden;
  }
  .tm-phil-section::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent);
  }

  .tm-phil-inner {
    max-width: 1280px; margin: 0 auto;
  }

  .tm-phil-header {
    text-align: center; margin-bottom: clamp(44px, 6vw, 64px);
  }
  .tm-phil-header h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3.5vw, 38px);
    font-weight: 400; color: var(--tm-pale);
    margin: 0 0 12px;
  }
  .tm-phil-header h3 em {
    color: var(--tm-gold); font-style: italic;
  }
  .tm-phil-header p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem; font-style: italic;
    color: rgba(245,235,221,0.35); max-width: 400px; margin: 0 auto;
  }

  .tm-phil-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: rgba(201,168,76,0.1);
    border-radius: 8px; overflow: hidden;
  }
  .tm-phil-item {
    text-align: center;
    padding: clamp(36px, 5vw, 52px) clamp(24px, 3vw, 40px);
    background: rgba(12, 32, 24, 0.95);
    transition: background 0.4s;
  }
  .tm-phil-item:hover { background: rgba(18, 40, 30, 0.98); }

  .tm-glyph {
    font-size: clamp(22px, 4vw, 32px);
    color: var(--tm-gold);
    display: block; margin-bottom: 18px;
  }
  .tm-phil-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(15px, 2vw, 20px);
    font-weight: 500; margin-bottom: 12px;
    color: var(--tm-pale);
  }
  .tm-phil-desc {
    font-size: clamp(12px, 1.4vw, 13.5px);
    color: rgba(245,235,221,0.38);
    line-height: 1.75; font-weight: 300;
  }

  /* ═══════════════
     TABLET (≤ 860px)
  ═══════════════ */
  @media (max-width: 860px) {
    .tm-cards-grid { grid-template-columns: 1fr; max-width: 580px; margin: 0 auto; }
    .tm-phil-grid { grid-template-columns: 1fr; }
    .tm-phil-item + .tm-phil-item {
      border-top: 1px solid rgba(201,168,76,0.08);
    }
    .tm-hero-bg { display: none; }
  }

  /* ═══════════════
     MOBILE (≤ 540px)
  ═══════════════ */
  @media (max-width: 540px) {
    .tm-card-inner { padding: 28px 22px; }
    .tm-avatar-wrap { gap: 16px; }
    .tm-avatar { width: 64px; height: 64px; font-size: 20px; }
    .tm-tag { font-size: 0.55rem; padding: 4px 9px; }
    .tm-quote-wrap { padding: 14px 16px; }
    .tm-cards-section { padding-left: 16px; padding-right: 16px; }
    .tm-stats { gap: 20px; }
  }
`;

const anim = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
};

export default function Team() {
  return (
    <div className="tm-root">
      <style>{css}</style>

      {/* HERO */}
      <section className="tm-hero">
        <div className="tm-hero-bg">
          {[380, 640, 900].map(size => (
            <div key={size} className="tm-ring" style={{ width: size, height: size }} />
          ))}
        </div>

        <motion.div {...anim}>
          <div className="tm-eyebrow">
            <div className="tm-eyebrow-line" />
            The Lineage of Care
            <div className="tm-eyebrow-line r" />
          </div>
        </motion.div>

        <motion.h1 {...anim} transition={{ delay: 0.15, duration: 0.85, ease: [0.22,1,0.36,1] }}>
          The <em>Minds</em> Behind<br />Nithya Ayurveda
        </motion.h1>

        <motion.p className="tm-hero-sub" {...anim} transition={{ delay: 0.25, duration: 0.85, ease: [0.22,1,0.36,1] }}>
          Built on passion, grounded in science, and guided by the oldest healing tradition on earth.
        </motion.p>

        <div className="tm-stats">
          {[
            { n: "Est. 2025", l: "Year Founded" },
            { n: "100%", l: "Natural Ingredients" },
            { n: "500+", l: "Healing Stories" }
          ].map((s, i) => (
            <motion.div key={i} className="tm-stat-item" {...anim} transition={{ delay: 0.32 + i * 0.1, duration: 0.8, ease: [0.22,1,0.36,1] }}>
              <span className="tm-stat-num">{s.n}</span>
              <span className="tm-stat-label">{s.l}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM CARDS */}
      <div className="tm-cards-section">
        <div className="tm-section-label">Our Team</div>

        <div className="tm-cards-grid">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              className={`tm-card ${m.theme === "dark" ? "tm-card-dark" : "tm-card-light"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tm-card-inner">
                {/* Avatar + Title */}
                <div className="tm-avatar-wrap">
                  <div className="tm-avatar">{m.initials}</div>
                  <div className="tm-avatar-meta">
                    <span className="tm-role">{m.role}</span>
                    <h2 className="tm-name">{m.name}</h2>
                    <p className="tm-quals">{m.quals}</p>
                  </div>
                </div>

                {/* Stat */}
                {/* <div className="tm-stat-badge">
                  <span className="tm-stat-badge-num">{m.stat.num}</span>
                  <span className="tm-stat-badge-label">{m.stat.label}</span>
                </div> */}

                <div className="tm-card-divider" />

                {/* Bio */}
                <p className="tm-bio">{m.bio}</p>

                {/* Quote */}
                <div className="tm-quote-wrap">
                  <p className="tm-quote">"{m.quote}"</p>
                </div>

                {/* Tags */}
                <div className="tm-tags">
                  {m.tags.map(t => <span key={t} className="tm-tag">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY STRIP */}
      <section className="tm-phil-section">
        <div className="tm-phil-inner">
          <div className="tm-phil-header">
            <motion.h3 {...anim}>
              Our <em>Philosophy</em>
            </motion.h3>
            <motion.p {...anim} transition={{ delay: 0.1 }}>
              The principles that guide every decision we make.
            </motion.p>
          </div>
          <div className="tm-phil-grid">
            {philosophy.map((p, i) => (
              <motion.div key={i} className="tm-phil-item" {...anim} transition={{ delay: 0.1 * i }}>
                <span className="tm-glyph">{p.glyph}</span>
                <h3 className="tm-phil-title">{p.title}</h3>
                <p className="tm-phil-desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}