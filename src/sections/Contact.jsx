import { useRef, useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

  :root {
    --white: #FFFFFF;
    --bg-light: #F9FBFA;
    --green-dark: #1A2E28;
    --green-primary: #2D5344;
    --green-accent: #4A7360;
    --gold-muted: #B8964E;
    --text-main: #1A2E28;
    --text-body: #4A5551;
    --wa-green: #25D366;
    --call-blue: #1A73E8;
    --mail-red: #EA4335;
  }

  @keyframes ctFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .ct-section {
    background: var(--white);
    position: relative;
    overflow: hidden;
    font-family: 'Nunito Sans', sans-serif;
    color: var(--text-main);
    -webkit-font-smoothing: antialiased;
  }

  .ct-top-rule {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(45,83,68,0.1), transparent);
  }

  .ct-leaf { position: absolute; pointer-events: none; opacity: 0.04; }
  .ct-leaf.tl { top: 0; left: 0; width: 220px; transform: rotate(-10deg) translate(-20px,-20px); }
  .ct-leaf.br { bottom: 0; right: 0; width: 220px; transform: rotate(170deg) translate(-20px,-20px); }

  .ct-inner {
    position: relative; z-index: 1;
    max-width: 1100px; margin: 0 auto;
    padding: clamp(56px, 8vw, 100px) clamp(16px, 4vw, 40px);
  }

  /* HEADER */
  .ct-eyebrow {
    display: flex; align-items: center; justify-content: center;
    gap: 12px; margin-bottom: 16px;
    opacity: 0; transform: translateY(10px);
    transition: opacity .8s, transform .8s;
  }
  .ct-eyebrow.cv { opacity: 1; transform: translateY(0); }
  .ct-eyebrow-line { height: 1px; width: 40px; background: var(--gold-muted); opacity: 0.4; }
  .ct-eyebrow-text {
    font-size: 0.7rem; letter-spacing: 0.3em;
    color: var(--gold-muted); text-transform: uppercase; font-weight: 800;
  }

  .ct-title {
    font-size: clamp(26px, 5vw, 56px); font-weight: 800;
    color: var(--green-dark); line-height: 1.15;
    text-align: center; margin: 0 0 16px;
    opacity: 0; transform: translateY(20px);
    transition: opacity .9s ease .1s, transform .9s ease .1s;
    letter-spacing: -0.02em;
  }
  .ct-title.cv { opacity: 1; transform: translateY(0); }
  .ct-title span { color: var(--green-primary); font-weight: 600; }

  .ct-title-deco {
    display: flex; align-items: center; justify-content: center;
    gap: 10px; margin-bottom: 20px;
    opacity: 0; transition: opacity .8s ease .2s;
  }
  .ct-title-deco.cv { opacity: 1; }
  .ct-deco-line { height: 1px; width: 40px; background: rgba(45,83,68,0.15); }
  .ct-deco-diamond { width: 5px; height: 5px; background: var(--gold-muted); transform: rotate(45deg); opacity: 0.6; }

  .ct-subtitle {
    font-size: clamp(0.88rem, 2vw, 1rem); font-weight: 400;
    color: var(--text-body); max-width: 500px;
    margin: 0 auto clamp(40px, 6vw, 64px); line-height: 1.7; text-align: center;
    opacity: 0; transition: opacity .9s ease .3s;
    padding: 0 8px;
  }
  .ct-subtitle.cv { opacity: 1; }

  /* GRID */
  .ct-grid {
    display: grid; grid-template-columns: 1fr 1.1fr;
    gap: clamp(24px, 4vw, 50px); align-items: start;
  }

  /* INFO CARDS */
  .ct-info-col {
    display: flex; flex-direction: column; gap: 10px;
    opacity: 0; transform: translateX(-20px);
    transition: opacity .9s ease .4s, transform .9s ease .4s;
  }
  .ct-info-col.cv { opacity: 1; transform: translateX(0); }

  .ct-info-card {
    display: flex; align-items: flex-start; gap: 16px;
    padding: clamp(16px, 2.5vw, 24px);
    border: 1px solid rgba(45,83,68,0.08);
    background: var(--white);
    border-radius: 12px;
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .ct-info-card:hover {
    transform: translateY(-4px);
    border-color: var(--green-primary);
    box-shadow: 0 10px 30px rgba(26,46,40,0.06);
  }

  .ct-icon-wrap {
    width: 42px; height: 42px; min-width: 42px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; transition: all .35s;
    background: var(--bg-light); color: var(--green-primary);
  }
  .ct-info-card:hover .ct-icon-wrap { background: var(--green-primary); color: #fff; }

  .ct-info-label {
    font-size: 0.62rem; letter-spacing: 0.15em;
    color: var(--gold-muted); text-transform: uppercase; display: block; margin-bottom: 3px; font-weight: 800;
  }
  .ct-info-value {
    font-size: clamp(0.95rem, 2vw, 1.15rem); font-weight: 700;
    color: var(--green-dark); display: block; line-height: 1.3; margin-bottom: 2px;
    word-break: break-word;
  }
  .ct-info-sub {
    font-size: 0.82rem; font-weight: 400;
    color: var(--text-body); display: block;
  }

  .ct-hours-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; }
  .ct-hours-item {
    padding: 10px;
    background: var(--bg-light);
    border-radius: 8px;
  }
  .ct-hours-day {
    font-size: 0.58rem; letter-spacing: 0.1em;
    color: var(--gold-muted); text-transform: uppercase; display: block; margin-bottom: 2px; font-weight: 800;
  }
  .ct-hours-time {
    font-size: 0.85rem; color: var(--green-dark); font-weight: 700;
  }

  /* ACTION PANEL */
  .ct-action-col {
    opacity: 0; transform: translateX(20px);
    transition: opacity .9s ease .5s, transform .9s ease .5s;
  }
  .ct-action-col.cv { opacity: 1; transform: translateX(0); }

  .ct-panel {
    background: var(--bg-light); padding: clamp(24px, 4vw, 40px);
    border-radius: 20px;
    position: relative;
    border: 1px solid rgba(45,83,68,0.05);
  }

  .ct-panel-label {
    font-size: 0.62rem; letter-spacing: 0.25em;
    color: var(--gold-muted); text-transform: uppercase;
    display: flex; align-items: center; gap: 12px; margin-bottom: 14px; font-weight: 800;
  }
  .ct-panel-label::after { content: ''; flex: 1; height: 1px; background: rgba(184,150,78,0.2); }

  .ct-panel-title {
    font-size: clamp(22px, 3.5vw, 32px); font-weight: 800;
    color: var(--green-dark); margin: 0 0 10px; line-height: 1.2;
  }

  .ct-panel-desc {
    font-size: 0.88rem; font-weight: 400;
    color: var(--text-body); line-height: 1.75; margin-bottom: clamp(20px, 3vw, 30px);
  }

  .ct-divider { height: 1px; background: rgba(45,83,68,0.1); margin-bottom: clamp(16px, 3vw, 24px); }

  .ct-action-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 14px; }

  .ct-action-btn {
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    padding: clamp(14px, 2.5vw, 20px) 8px;
    border: 1px solid rgba(45,83,68,0.1);
    background: var(--white); cursor: pointer;
    border-radius: 12px;
    transition: all .3s ease;
  }
  .ct-action-btn:hover { transform: translateY(-5px); border-color: var(--green-primary); box-shadow: 0 8px 20px rgba(0,0,0,0.05); }

  .ct-action-icon {
    width: 42px; height: 42px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: all .3s;
  }
  .ct-action-icon.call { background: rgba(26,115,232,0.06); color: var(--call-blue); }
  .ct-action-icon.wa { background: rgba(37,211,102,0.06); color: #1aab55; }
  .ct-action-icon.mail { background: rgba(234,67,53,0.06); color: var(--mail-red); }
  .ct-action-btn:hover .ct-action-icon { transform: scale(1.1); }

  .ct-action-label {
    font-size: 0.62rem; letter-spacing: 0.1em;
    text-transform: uppercase; font-weight: 800; color: var(--text-main);
  }

  .ct-book-btn {
    width: 100%; display: flex; align-items: center;
    justify-content: space-between; gap: 14px;
    padding: clamp(14px, 2vw, 18px) clamp(16px, 3vw, 24px);
    background: var(--green-primary);
    border: none; color: #fff; cursor: pointer;
    border-radius: 12px; margin-bottom: 18px;
    transition: all .3s ease;
    box-shadow: 0 6px 20px rgba(45,83,68,0.25);
  }
  .ct-book-btn:hover { background: var(--green-dark); transform: translateY(-2px); box-shadow: 0 10px 25px rgba(45,83,68,0.35); }

  .ct-book-inner { display: flex; align-items: center; gap: 12px; }
  .ct-book-label {
    font-size: 0.78rem; letter-spacing: 0.05em;
    text-transform: uppercase; display: block; margin-bottom: 2px; font-weight: 800;
  }
  .ct-book-sub {
    font-size: 0.72rem; font-weight: 400; opacity: 0.9;
  }

  .ct-promise-strip {
    display: flex; align-items: center; justify-content: center;
    gap: clamp(12px, 2vw, 20px); padding-top: 18px;
    border-top: 1px solid rgba(45,83,68,0.08);
    flex-wrap: wrap;
  }
  .ct-promise-item {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.72rem; font-weight: 600; color: var(--text-body);
  }
  .ct-promise-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--green-primary); flex-shrink: 0; }

  /* ── MAP SECTION ── */
  .ct-map-section {
    margin: clamp(48px, 7vw, 80px) 0 0;
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s;
  }
  .ct-map-section.cv { opacity: 1; transform: translateY(0); }

  .ct-map-header {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 20px;
  }
  .ct-map-eyebrow {
    font-size: 0.62rem; letter-spacing: 0.25em;
    color: var(--gold-muted); text-transform: uppercase; font-weight: 800;
    white-space: nowrap;
  }
  .ct-map-line { flex: 1; height: 1px; background: rgba(45,83,68,0.1); }

  .ct-map-wrapper {
    position: relative;
    border-radius: 20px; overflow: hidden;
    border: 1px solid rgba(45,83,68,0.1);
    box-shadow: 0 20px 60px rgba(26,46,40,0.1);
  }
  .ct-map-wrapper::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, transparent, var(--green-primary), rgba(45,83,68,0.5), transparent);
    z-index: 2;
  }
  .ct-map-frame {
    display: block; width: 100%; height: clamp(300px, 45vw, 460px);
    border: none; filter: saturate(0.9) contrast(0.95);
    transition: filter 0.4s;
  }
  .ct-map-frame:hover { filter: saturate(1.05) contrast(1); }

  /* Map overlay info */
  .ct-map-overlay {
    position: absolute; bottom: 20px; left: 20px;
    background: rgba(255,255,255,0.97);
    border: 1px solid rgba(45,83,68,0.12);
    border-radius: 12px; padding: 14px 18px;
    box-shadow: 0 8px 24px rgba(26,46,40,0.1);
    max-width: 280px; z-index: 3;
    backdrop-filter: blur(12px);
  }
  .ct-map-overlay-title {
    font-size: 0.8rem; font-weight: 800;
    color: var(--green-dark); margin-bottom: 4px;
    display: flex; align-items: center; gap: 8px;
  }
  .ct-map-overlay-title::before {
    content: '';
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--green-primary); flex-shrink: 0;
  }
  .ct-map-overlay-addr {
    font-size: 0.72rem; color: var(--text-body);
    line-height: 1.5; margin-bottom: 10px;
  }
  .ct-map-directions-btn {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 0.65rem; font-weight: 800;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--green-primary); text-decoration: none;
    padding: 7px 14px; border-radius: 8px;
    background: rgba(45,83,68,0.07);
    border: 1px solid rgba(45,83,68,0.15);
    transition: all 0.3s;
  }
  .ct-map-directions-btn:hover {
    background: var(--green-primary); color: #fff;
  }
  .ct-map-directions-btn svg { width: 12px; height: 12px; }

  /* QUOTE */
  .ct-quote {
    text-align: center; padding: clamp(40px, 6vw, 70px) 0 0;
    opacity: 0; transition: opacity .9s ease .4s;
  }
  .ct-quote.cv { opacity: 1; }
  .ct-quote-text {
    font-size: clamp(15px, 2.5vw, 24px); font-weight: 400; font-style: italic;
    color: var(--green-dark); max-width: 650px; margin: 0 auto 16px; line-height: 1.6;
  }
  .ct-quote-attr {
    font-size: 0.68rem; letter-spacing: 0.3em;
    color: var(--gold-muted); text-transform: uppercase; font-weight: 800;
  }

  .ct-bot-rule {
    height: 1px; width: 100%; margin-top: 40px;
    background: linear-gradient(90deg, transparent, rgba(45,83,68,0.05), transparent);
  }

  /* ═══════════════════════════════════════
     TABLET (≤ 900px)
  ═══════════════════════════════════════ */
  @media (max-width: 900px) {
    .ct-grid { grid-template-columns: 1fr; gap: 28px; }
    .ct-info-col { transform: translateX(0); transition: opacity .9s ease .4s; }
    .ct-action-col { transform: translateX(0); transition: opacity .9s ease .5s; }
    .ct-leaf.tl { width: 150px; }
    .ct-leaf.br { width: 150px; }
    .ct-map-overlay { max-width: 220px; }
  }

  /* ═══════════════════════════════════════
     MOBILE (≤ 640px)
  ═══════════════════════════════════════ */
  @media (max-width: 640px) {
    .ct-info-card { gap: 12px; }
    .ct-icon-wrap { width: 36px; height: 36px; min-width: 36px; border-radius: 8px; }
    .ct-icon-wrap svg { width: 16px; height: 16px; }
    .ct-hours-grid { gap: 6px; }
    .ct-hours-item { padding: 8px; }
    .ct-hours-time { font-size: 0.8rem; }
    .ct-panel { border-radius: 16px; }
    .ct-action-row { gap: 8px; }
    .ct-action-btn { padding: 12px 6px; border-radius: 10px; }
    .ct-action-icon { width: 36px; height: 36px; }
    .ct-action-icon svg { width: 17px; height: 17px; }
    .ct-action-label { font-size: 0.58rem; }
    .ct-promise-strip { gap: 10px; }
    .ct-promise-item { font-size: 0.68rem; }
    .ct-leaf { display: none; }
    .ct-map-overlay { display: none; }
    .ct-map-frame { height: 260px; }
    .ct-map-wrapper { border-radius: 14px; }
  }

  /* ═══════════════════════════════════════
     SMALL PHONES (≤ 380px)
  ═══════════════════════════════════════ */
  @media (max-width: 380px) {
    .ct-hours-grid { grid-template-columns: 1fr 1fr; }
    .ct-book-label { font-size: 0.72rem; }
    .ct-book-sub { font-size: 0.66rem; }
  }
`;

function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const PhoneIcon = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const LocationIcon = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const MailIcon = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const WhatsAppIcon = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.122 1.532 5.852L.057 23.504a.5.5 0 0 0 .612.632l5.796-1.52A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.002-1.373l-.359-.214-3.724.976.994-3.634-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
);
const CalendarIcon = ({ s = 18 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const MapIcon = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
);
const NavIcon = ({ s = 12 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);

export default function Contact() {
  const sectionRef = useRef();
  const quoteRef = useRef();
  const mapRef = useRef();
  const visible = useInView(sectionRef, 0.08);
  const qVis = useInView(quoteRef, 0.2);
  const mapVis = useInView(mapRef, 0.1);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/918956658209?text=${encodeURIComponent("Namaste! I'd like to enquire about Nithya Ayurveda's products and treatments.")}`, "_blank");
  };
  const handleCall = () => window.open("tel:+918956658209", "_self");
  const handleMail = () => window.open("mailto:nithyaayurveda09@gmail.com", "_self");

  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=chatrapati+shivaji+maharaj+chowk+walhekarwadi+pune+Maharashtra+411033";
  const mapEmbedUrl = "https://maps.google.com/maps?q=chatrapati+shivaji+maharaj+chowk+walhekarwadi+pune+Maharashtra+411033&output=embed&hl=en&z=16";

  return (
    <>
      <style>{styles}</style>
      <section id="contact" className="ct-section" ref={sectionRef}>
        <div className="ct-top-rule" />

        <svg className="ct-leaf tl" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="26" ry="84" fill="#2D5344" transform="rotate(-15 100 100)"/>
          <ellipse cx="100" cy="100" rx="17" ry="70" fill="#2D5344" transform="rotate(12 100 100)"/>
        </svg>
        <svg className="ct-leaf br" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="26" ry="84" fill="#2D5344" transform="rotate(-15 100 100)"/>
          <ellipse cx="100" cy="100" rx="17" ry="70" fill="#2D5344" transform="rotate(12 100 100)"/>
        </svg>

        <div className="ct-inner">
          {/* Header */}
          <div className={`ct-eyebrow${visible ? " cv" : ""}`}>
            <div className="ct-eyebrow-line" />
            <span className="ct-eyebrow-text">Reach Out</span>
            <div className="ct-eyebrow-line" />
          </div>

          <h2 className={`ct-title${visible ? " cv" : ""}`}>
            Begin Your<br /><span>Healing Journey</span>
          </h2>

          <div className={`ct-title-deco${visible ? " cv" : ""}`}>
            <div className="ct-deco-line" /><div className="ct-deco-diamond" /><div className="ct-deco-line" />
          </div>

          <p className={`ct-subtitle${visible ? " cv" : ""}`}>
            Our Vaidyas are ready to guide you — whether you seek a remedy, a consultation, or simply a conversation about your wellbeing.
          </p>

          {/* Main grid */}
          <div className="ct-grid">
            <div className={`ct-info-col${visible ? " cv" : ""}`}>
              <div className="ct-info-card">
                <div className="ct-icon-wrap"><PhoneIcon /></div>
                <div>
                  <span className="ct-info-label">Phone & WhatsApp</span>
                  <span className="ct-info-value">+91 8956658209</span>
                  <span className="ct-info-sub">Available 9 AM – 8 PM daily</span>
                </div>
              </div>

              <div className="ct-info-card">
                <div className="ct-icon-wrap"><MailIcon /></div>
                <div>
                  <span className="ct-info-label">Email</span>
                  <span className="ct-info-value">nithyaayurveda09@gmail.com</span>
                  <span className="ct-info-sub">Response within 24 hours</span>
                </div>
              </div>

              <div className="ct-info-card">
                <div className="ct-icon-wrap"><LocationIcon /></div>
                <div>
                  <span className="ct-info-label">Clinic Address</span>
                  <span className="ct-info-value">Shop no 2, Chatrapati Shivaji Maharaj Chowk</span>
                  <span className="ct-info-sub">Walhekarwadi, Pune, Maharashtra 411033</span>
                </div>
              </div>

              <div className="ct-info-card">
                <div className="ct-icon-wrap"><ClockIcon /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span className="ct-info-label">Consultation Hours</span>
                  <div className="ct-hours-grid">
                    {[
                      { day: "Mon – Fri", time: "9 AM – 7 PM" },
                      { day: "Saturday", time: "9 AM – 5 PM" },
                      { day: "Sunday", time: "10 AM – 2 PM" },
                      { day: "Emergency", time: "On Call" },
                    ].map(h => (
                      <div key={h.day} className="ct-hours-item">
                        <span className="ct-hours-day">{h.day}</span>
                        <span className="ct-hours-time">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`ct-action-col${visible ? " cv" : ""}`}>
              <div className="ct-panel">
                <div className="ct-panel-label">Connect With Us</div>
                <h3 className="ct-panel-title">Speak with a Vaidya Today</h3>
                <p className="ct-panel-desc">
                  A single conversation can illuminate the path to lasting wellness. Reach us on your preferred channel for instant guidance.
                </p>

                <div className="ct-divider" />

                <div className="ct-action-row">
                  <button className="ct-action-btn" onClick={handleCall}>
                    <div className="ct-action-icon call"><PhoneIcon /></div>
                    <span className="ct-action-label">Call</span>
                  </button>
                  <button className="ct-action-btn" onClick={handleWhatsApp}>
                    <div className="ct-action-icon wa"><WhatsAppIcon /></div>
                    <span className="ct-action-label">WhatsApp</span>
                  </button>
                  <button className="ct-action-btn" onClick={handleMail}>
                    <div className="ct-action-icon mail"><MailIcon /></div>
                    <span className="ct-action-label">Email</span>
                  </button>
                </div>

                <button className="ct-book-btn" onClick={handleWhatsApp}>
                  <div className="ct-book-inner">
                    <CalendarIcon />
                    <div style={{ textAlign: "left" }}>
                      <span className="ct-book-label">Book Appointment</span>
                      <span className="ct-book-sub">In-clinic or online · Free first consult</span>
                    </div>
                  </div>
                  <span>→</span>
                </button>

                <div className="ct-promise-strip">
                  {["Free consultation", "Personalised care", "Confidential"].map(p => (
                    <div key={p} className="ct-promise-item">
                      <div className="ct-promise-dot" />{p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── PREMIUM MAP SECTION ── */}
          <div ref={mapRef} className={`ct-map-section${mapVis ? " cv" : ""}`}>
            <div className="ct-map-header">
              <MapIcon s={14} />
              <span className="ct-map-eyebrow">Find Us</span>
              <div className="ct-map-line" />
            </div>

            <div className="ct-map-wrapper">
              <iframe
                className="ct-map-frame"
                title="Nithya Ayurveda — Walhekarwadi, Pune"
                src={mapEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating info overlay */}
              <div className="ct-map-overlay">
                <div className="ct-map-overlay-title">Nithya Ayurveda</div>
                <div className="ct-map-overlay-addr">
                  Shop No. 2, Chatrapati Shivaji Maharaj Chowk,<br />
                  Walhekarwadi, Pune — 411033
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-map-directions-btn"
                >
                  <NavIcon />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div ref={quoteRef} className={`ct-quote${qVis ? " cv" : ""}`}>
            <p className="ct-quote-text">
              "The physician who knows the science of life treats not merely the ailment, but the whole person — body, mind, and consciousness."
            </p>
            <span className="ct-quote-attr">— Ashtanga Hridayam</span>
          </div>
        </div>

        <div className="ct-bot-rule" />
      </section>
    </>
  );
}