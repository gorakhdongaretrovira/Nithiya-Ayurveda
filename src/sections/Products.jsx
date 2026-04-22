import { useRef, useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import products from "../data/products";

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

const ALL_CATEGORIES = ["All", ...Array.from(new Set(products.map(p => p.category)))];

/* ── STAR RATING ── */
function StarDisplay({ rating, size = 13 }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} viewBox="0 0 24 24" style={{ width: size, height: size, color: "#6bbf59", flexShrink: 0 }}>
          <defs>
            {i === full + 1 && half && (
              <linearGradient id={`hg-${i}-${size}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            )}
          </defs>
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={i <= full ? "currentColor" : i === full + 1 && half ? `url(#hg-${i}-${size})` : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ))}
    </div>
  );
}

/* ── RATING WIDGET ── */
function RatingWidget({ productId }) {
  const storageKey = `nithya_rating_${productId}`;
  const [userRating, setUserRating] = useState(() => {
    try { return parseInt(localStorage.getItem(storageKey)) || 0; } catch { return 0; }
  });
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(() => {
    try { return !!localStorage.getItem(storageKey); } catch { return false; }
  });
  const [allRatings, setAllRatings] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(`nithya_all_ratings_${productId}`));
      return saved || [];
    } catch { return []; }
  });
  const [showForm, setShowForm] = useState(false);
  const [review, setReview] = useState("");
  const [tempStar, setTempStar] = useState(0);

  const communityRatings = allRatings.length > 0
    ? (allRatings.reduce((a, r) => a + r.stars, 0) / allRatings.length).toFixed(1)
    : null;

  const distribution = [5,4,3,2,1].map(star => ({
    star,
    count: allRatings.filter(r => r.stars === star).length
  }));

  const handleSubmitReview = () => {
    if (!tempStar) return;
    const newRating = { stars: tempStar, review: review.trim(), date: new Date().toLocaleDateString("en-IN") };
    const updated = [...allRatings, newRating];
    setAllRatings(updated);
    setUserRating(tempStar);
    setSubmitted(true);
    setShowForm(false);
    try {
      localStorage.setItem(storageKey, String(tempStar));
      localStorage.setItem(`nithya_all_ratings_${productId}`, JSON.stringify(updated));
    } catch {}
  };

  return (
    <div className="rw-wrap">
      <div className="rw-header">
        <div className="rw-title-block">
          <span className="rw-label">Customer Reviews</span>
          {communityRatings && (
            <div className="rw-avg-row">
              <span className="rw-avg-num">{communityRatings}</span>
              <div>
                <StarDisplay rating={parseFloat(communityRatings)} size={11} />
                <span className="rw-total">{allRatings.length} rating{allRatings.length !== 1 ? "s" : ""}</span>
              </div>
            </div>
          )}
        </div>
        {!submitted ? (
          <button className="rw-rate-btn" onClick={() => setShowForm(true)}>Rate Product</button>
        ) : (
          <div className="rw-your-rating">
            <span className="rw-yr-label">Your Rating</span>
            <StarDisplay rating={userRating} size={12} />
          </div>
        )}
      </div>

      {allRatings.length > 0 && (
        <div className="rw-dist">
          {distribution.map(({ star, count }) => (
            <div key={star} className="rw-dist-row">
              <span className="rw-dist-star">{star}★</span>
              <div className="rw-dist-bar-bg">
                <div className="rw-dist-bar-fill"
                  style={{ width: `${allRatings.length ? (count / allRatings.length) * 100 : 0}%` }} />
              </div>
              <span className="rw-dist-count">{count}</span>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="rw-form">
          <div className="rw-form-title">Share Your Experience</div>
          <div className="rw-star-picker">
            {[1,2,3,4,5].map(s => (
              <button key={s}
                className={`rw-sp-btn ${(hover || tempStar) >= s ? "active" : ""}`}
                onMouseEnter={() => setHover(s)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setTempStar(s)}>★</button>
            ))}
            {tempStar > 0 && (
              <span className="rw-star-label">
                {["","Poor","Fair","Good","Very Good","Excellent"][tempStar]}
              </span>
            )}
          </div>
          <textarea className="rw-textarea" placeholder="Write a short review (optional)..."
            value={review} onChange={e => setReview(e.target.value)} rows={3} />
          <div className="rw-form-actions">
            <button className="rw-cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
            <button className={`rw-submit-btn ${tempStar ? "active" : ""}`}
              onClick={handleSubmitReview} disabled={!tempStar}>Submit</button>
          </div>
        </div>
      )}

      {allRatings.length > 0 && !showForm && (
        <div className="rw-reviews">
          {allRatings.slice(-3).reverse().map((r, i) => (
            <div key={i} className="rw-review-card">
              <div className="rw-review-top">
                <StarDisplay rating={r.stars} size={10} />
                <span className="rw-review-date">{r.date}</span>
              </div>
              {r.review && <p className="rw-review-text">{r.review}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── STYLES ── */
const productsStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

  :root {
    --gd: #1f3d2b;
    --gf: #2a5239;
    --gm: #3a7a50;
    --gs: #6bbf59;
    --gsl: #92d47f;
    --gm2: #d4edcc;
    --gp: #eaf5e5;
    --gt: #f2faf0;
    --white: #ffffff;
    --off: #f7fbf6;
    --card: #ffffff;
    --text: #152217;
    --tbody: #2c3e2f;
    --tmuted: #5c7063;
    --tlight: #8fa896;
    --border: rgba(107,191,89,0.16);
    --borderc: rgba(31,61,43,0.08);
    --sh-sm: 0 2px 12px rgba(31,61,43,0.07);
    --sh-md: 0 6px 24px rgba(31,61,43,0.10);
    --sh-lg: 0 16px 48px rgba(31,61,43,0.13);
    --gold: #b8923a;
    --gold-l: #d4b06a;
  }

  * { box-sizing: border-box; }

  .prd-section {
    background: var(--off);
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    font-family: 'Nunito Sans', system-ui, sans-serif;
    color: var(--tbody);
  }

  .prd-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
  .prd-bg-grad {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 0% 0%, rgba(107,191,89,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 100% 100%, rgba(31,61,43,0.03) 0%, transparent 55%);
  }

  .prd-inner {
    position: relative; z-index: 1;
    max-width: 1160px; margin: 0 auto;
    padding: 0 28px 72px;
  }

  /* ── HERO ── */
  .prd-hero { text-align: center; padding: 48px 0 32px; }

  .prd-eyebrow {
    display: inline-flex; align-items: center; gap: 9px;
    font-size: 0.6rem; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gm); margin-bottom: 10px;
    opacity: 0; transform: translateY(8px);
    transition: opacity .6s ease, transform .6s ease;
  }
  .prd-eyebrow::before, .prd-eyebrow::after {
    content: ''; display: block; width: 18px; height: 1.5px;
    background: var(--gs); border-radius: 2px;
  }
  .prd-hero.vis .prd-eyebrow { opacity: 1; transform: translateY(0); }

  .prd-title {
    font-family: 'Nunito Sans', sans-serif;
    font-size: clamp(26px, 3.5vw, 44px);
    font-weight: 700; color: var(--gd);
    line-height: 1.1; margin: 0 0 10px;
    letter-spacing: -0.025em;
    opacity: 0; transform: translateY(16px);
    transition: opacity .7s ease .08s, transform .7s ease .08s;
  }
  .prd-title .accent { color: var(--gs); }
  .prd-hero.vis .prd-title { opacity: 1; transform: translateY(0); }

  .prd-subtitle {
    font-size: 0.84rem; font-weight: 400; color: var(--tmuted);
    max-width: 420px; margin: 0 auto 24px; line-height: 1.8;
    opacity: 0; transform: translateY(8px);
    transition: opacity .6s ease .18s, transform .6s ease .18s;
  }
  .prd-hero.vis .prd-subtitle { opacity: 1; transform: translateY(0); }

  .filter-bar {
    display: flex; align-items: center; justify-content: center; gap: 7px; flex-wrap: wrap;
    opacity: 0; transform: translateY(8px);
    transition: opacity .6s ease .28s, transform .6s ease .28s;
  }
  .prd-hero.vis .filter-bar { opacity: 1; transform: translateY(0); }

  .filter-tab {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
    color: var(--tmuted); background: var(--white);
    border: 1.5px solid var(--borderc); padding: 7px 18px;
    cursor: pointer; border-radius: 100px;
    transition: all .22s ease;
    box-shadow: var(--sh-sm);
  }
  .filter-tab:hover { color: var(--gd); border-color: var(--gs); background: var(--gp); }
  .filter-tab.active {
    background: var(--gd); border-color: var(--gd); color: #fff;
    box-shadow: 0 4px 14px rgba(31,61,43,0.22);
  }

  .prd-orn {
    display: flex; align-items: center; justify-content: center; gap: 9px;
    margin-bottom: 22px;
    opacity: 0; transition: opacity .6s ease .22s;
  }
  .prd-hero.vis .prd-orn { opacity: 1; }
  .prd-orn-line { width: 40px; height: 1.5px; background: linear-gradient(90deg, transparent, var(--gs)); border-radius: 2px; }
  .prd-orn-line.r { background: linear-gradient(90deg, var(--gs), transparent); }
  .prd-orn-icon { font-size: 0.8rem; color: var(--gs); letter-spacing: 5px; }

  /* ── PRODUCT LIST ── */
  .prd-list { display: flex; flex-direction: column; gap: 20px; }

  /* ── PRODUCT CARD ── */
  .pc-card-outer {
    background: var(--white);
    border: 1px solid var(--borderc);
    border-radius: 18px;
    box-shadow: var(--sh-sm);
    overflow: hidden;
    opacity: 0; transform: translateY(18px);
    transition: opacity .55s ease, transform .55s ease, box-shadow .3s ease, border-color .3s ease;
    /* overflow guard */
    min-width: 0;
    max-width: 100%;
  }
  .pc-card-outer.pc-vis { opacity: 1; transform: translateY(0); }
  .pc-card-outer:hover { box-shadow: var(--sh-md); border-color: var(--border); }

  /* TWO-COLUMN GRID */
  .pc-card {
    display: grid;
    grid-template-columns: 320px 1fr;
    min-height: 0;
    min-width: 0;
  }

  /* ── LEFT: IMAGE PANEL ── */
  .pc-img-panel {
    position: relative;
    background: linear-gradient(145deg, var(--gt) 0%, var(--gm2) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 36px 24px;
    border-right: 1px solid var(--borderc);
    gap: 16px;
    min-height: 420px;
    min-width: 0;
  }

  /* ── BIGGER IMAGE WRAP ── */
  .pc-img-wrap {
    position: relative;
    width: 256px;
    height: 256px;
    flex-shrink: 0;
  }

  .pc-img-circle {
    position: absolute; inset: 0; border-radius: 50%;
    background: radial-gradient(circle at 36% 28%, rgba(255,255,255,0.92) 0%, rgba(212,237,204,0.65) 55%, rgba(184,222,168,0.45) 100%);
    box-shadow:
      0 18px 52px rgba(31,61,43,0.18),
      0 4px 16px rgba(31,61,43,0.10),
      inset 0 1px 0 rgba(255,255,255,0.95);
    transition: box-shadow .4s ease, transform .4s ease;
  }
  .pc-card-outer:hover .pc-img-circle {
    box-shadow: 0 24px 64px rgba(31,61,43,0.24), 0 6px 20px rgba(31,61,43,0.12), inset 0 1px 0 rgba(255,255,255,0.95);
    transform: scale(1.03);
  }

  .pc-img-ring {
    position: absolute; inset: -10px; border-radius: 50%;
    border: 1px dashed rgba(107,191,89,0.3);
    animation: ringRotate 50s linear infinite;
  }
  .pc-img-ring2 {
    position: absolute; inset: -20px; border-radius: 50%;
    border: 1px solid rgba(107,191,89,0.1);
    animation: ringRotate 80s linear infinite reverse;
  }
  @keyframes ringRotate { from { transform: rotate(0); } to { transform: rotate(360deg); } }

  .pc-img-frame {
    position: absolute; inset: 0; border-radius: 50%; overflow: hidden;
  }
  .pc-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .6s cubic-bezier(.22,1,.36,1);
  }
  .pc-card-outer:hover .pc-img { transform: scale(1.06); }

  .pc-emoji { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 68px; }

  /* Standard USP badge */
  .pc-img-badge {
    background: var(--gd); color: #fff;
    font-size: 0.54rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
    padding: 6px 16px; border-radius: 100px; white-space: nowrap;
    box-shadow: 0 4px 14px rgba(31,61,43,0.28);
    text-align: center; max-width: 260px; line-height: 1.5;
  }
  .pc-img-badge span { color: var(--gsl); }

  /* Hemp special bombarded USP badge */
  .pc-img-badge.usp-hemp {
    background: linear-gradient(135deg, #0f2418 0%, #1f4d2e 100%);
    border: 1.5px solid rgba(107,191,89,0.45);
    font-size: 0.58rem;
    padding: 8px 20px;
    letter-spacing: 0.12em;
  }

  .pc-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 64px; font-weight: 400; line-height: 1;
    color: rgba(31,61,43,0.06); user-select: none;
    position: absolute; bottom: 12px; right: 16px;
  }

  /* ── RIGHT: CONTENT PANEL ── */
  .pc-content {
    padding: 28px 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    min-width: 0;
  }

  .pc-top-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }

  .pc-category {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.58rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--tmuted); border: 1.5px solid rgba(107,191,89,0.22);
    padding: 3px 11px; border-radius: 100px;
    background: var(--gp);
  }
  .pc-category::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--gs); }

  .pc-name {
    font-family: 'Nunito Sans', sans-serif;
    font-size: clamp(18px, 2.2vw, 26px);
    font-weight: 700; color: var(--gd);
    line-height: 1.15; margin: 0; letter-spacing: -0.02em;
    word-break: break-word;
  }
  .pc-name .accent { color: var(--gs); }

  .pc-tagline {
    font-size: 0.76rem; font-weight: 500; color: var(--gm);
    letter-spacing: 0.03em; font-style: italic; margin: -4px 0 0;
    word-break: break-word;
  }

  .pc-rating-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
  .pc-rating-val { font-weight: 700; font-size: 0.85rem; color: var(--text); }
  .pc-rating-count { font-size: 0.68rem; color: var(--tmuted); font-weight: 400; }

  .pc-sep { height: 1px; background: var(--borderc); margin: 0; }

  .pc-desc {
    font-size: 0.8rem; font-weight: 400; color: var(--tmuted);
    line-height: 1.75; margin: 0;
    word-break: break-word; overflow-wrap: break-word;
  }

  /* Hemp bombarded feature badges */
  .pc-hemp-usp-strip { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 2px; }
  .pc-hemp-badge {
    display: inline-flex; align-items: center; gap: 5px;
    font-size: 0.57rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase;
    color: var(--gd); background: linear-gradient(135deg, #cdf2be, #aae594);
    border: 1.5px solid rgba(107,191,89,0.45);
    padding: 4px 12px; border-radius: 100px;
    box-shadow: 0 2px 8px rgba(107,191,89,0.18);
  }
  .pc-hemp-badge::before { content: '🌿'; font-size: 0.65rem; }

  /* USP highlight block */
  .pc-usp-highlight {
    background: linear-gradient(135deg, var(--gd) 0%, var(--gf) 100%);
    border-radius: 8px; padding: 10px 14px;
  }
  .pc-usp-hl-label {
    font-size: 0.54rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--gsl); display: block; margin-bottom: 4px;
  }
  .pc-usp-hl-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.88rem; font-weight: 400; color: rgba(255,255,255,0.85);
    line-height: 1.6; font-style: italic;
    word-break: break-word; overflow-wrap: break-word;
  }

  /* Hemp USP highlight */
  .pc-usp-highlight.usp-hemp-hl {
    background: linear-gradient(135deg, #0c1f12 0%, #1a4228 50%, #2a6040 100%);
    border: 1.5px solid rgba(107,191,89,0.32);
    padding: 14px 18px;
    position: relative; overflow: hidden;
  }
  .pc-usp-highlight.usp-hemp-hl::after {
    content: '';
    position: absolute; top: -40px; right: -40px;
    width: 120px; height: 120px; border-radius: 50%;
    background: radial-gradient(circle, rgba(107,191,89,0.14) 0%, transparent 70%);
    pointer-events: none;
  }
  .pc-usp-highlight.usp-hemp-hl .pc-usp-hl-label {
    color: #a8e890; font-size: 0.6rem; letter-spacing: 0.22em;
  }
  .pc-usp-highlight.usp-hemp-hl .pc-usp-hl-text {
    font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 500;
  }

  .pc-use-cases {
    font-size: 0.74rem; font-weight: 400; color: var(--tmuted); line-height: 1.7;
    padding: 8px 12px;
    background: var(--gt); border-left: 2.5px solid var(--gs); border-radius: 0 7px 7px 0;
    word-break: break-word; overflow-wrap: break-word;
  }
  .pc-use-label {
    font-weight: 700; font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gm); display: block; margin-bottom: 3px;
  }

  .pc-benefits { display: flex; flex-direction: column; gap: 4px; }
  .pc-benefit-row {
    display: flex; align-items: flex-start; gap: 8px;
    font-size: 0.76rem; font-weight: 400; color: var(--tbody); line-height: 1.5;
    word-break: break-word; overflow-wrap: break-word;
  }
  .pc-benefit-mark {
    width: 16px; height: 16px; border-radius: 50%;
    background: var(--gp); border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 1px;
  }
  .pc-benefit-mark svg { width: 8px; height: 8px; color: var(--gm); }

  .pc-composition {
    background: var(--off); border: 1px solid var(--borderc);
    border-radius: 7px; padding: 10px 12px;
  }
  .pc-comp-label {
    font-size: 0.56rem; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase;
    color: var(--gm); display: block; margin-bottom: 4px;
  }
  .pc-comp-text {
    font-size: 0.7rem; font-weight: 400; color: var(--tmuted); line-height: 1.7;
    word-break: break-word; overflow-wrap: break-word;
  }

  .pc-footer {
    display: flex; align-items: center; justify-content: space-between; gap: 14px;
    flex-wrap: wrap;
    padding-top: 10px;
    border-top: 1px solid var(--borderc);
    margin-top: 2px;
  }
  .pc-price-group { display: flex; flex-direction: column; gap: 2px; }
  .pc-price-label { font-size: 0.54rem; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase; color: var(--tmuted); }
  .pc-price-row { display: flex; align-items: baseline; gap: 7px; flex-wrap: wrap; }
  .pc-price {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 26px; font-weight: 700; color: var(--gd); line-height: 1;
  }
  .pc-price sup { font-size: 13px; font-weight: 500; vertical-align: super; color: var(--gd); }
  .pc-mrp { font-size: 0.72rem; font-weight: 400; color: var(--tmuted); text-decoration: line-through; }
  .pc-off-badge {
    font-size: 0.55rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
    color: #fff; background: var(--gs); padding: 2px 7px; border-radius: 100px;
  }
  .pc-pack-info { font-size: 0.62rem; color: var(--tmuted); margin-top: 1px; }

  .pc-btn-group { display: flex; align-items: center; gap: 10px; }

  .pc-add-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    color: #fff; background: var(--gd); border: none;
    padding: 11px 22px; cursor: pointer; border-radius: 100px;
    transition: background .25s, transform .22s, box-shadow .25s;
    box-shadow: 0 4px 14px rgba(31,61,43,0.22); white-space: nowrap;
    display: flex; align-items: center; gap: 6px;
  }
  .pc-add-btn:hover { background: var(--gf); transform: translateY(-2px); box-shadow: 0 7px 20px rgba(31,61,43,0.28); }
  .pc-add-btn.added { background: var(--gm); }
  .pc-add-btn svg { width: 13px; height: 13px; }

  /* ── RATING WIDGET ── */
  .rw-wrap {
    background: var(--off); border: 1px solid var(--borderc);
    border-radius: 9px; padding: 13px 16px; margin-top: 2px;
  }
  .rw-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 8px; flex-wrap: wrap; }
  .rw-title-block { display: flex; flex-direction: column; gap: 5px; }
  .rw-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gm); }
  .rw-avg-row { display: flex; align-items: center; gap: 7px; }
  .rw-avg-num { font-family: 'Nunito Sans', sans-serif; font-size: 20px; font-weight: 700; color: var(--gd); line-height: 1; }
  .rw-total { font-size: 0.6rem; font-weight: 400; color: var(--tmuted); display: block; margin-top: 2px; }
  .rw-rate-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--gm); background: var(--white); border: 1.5px solid var(--border);
    padding: 5px 12px; border-radius: 100px; cursor: pointer; white-space: nowrap;
    transition: all .22s; flex-shrink: 0;
  }
  .rw-rate-btn:hover { background: var(--gd); border-color: var(--gd); color: #fff; }
  .rw-your-rating { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; flex-shrink: 0; }
  .rw-yr-label { font-size: 0.56rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gm); }
  .rw-dist { display: flex; flex-direction: column; gap: 3px; margin-bottom: 8px; }
  .rw-dist-row { display: flex; align-items: center; gap: 6px; }
  .rw-dist-star { font-size: 0.6rem; font-weight: 600; color: var(--gs); width: 16px; text-align: right; flex-shrink: 0; }
  .rw-dist-bar-bg { flex: 1; height: 3px; background: rgba(107,191,89,0.12); border-radius: 100px; overflow: hidden; }
  .rw-dist-bar-fill { height: 100%; background: linear-gradient(90deg, var(--gsl), var(--gs)); border-radius: 100px; transition: width .5s ease; }
  .rw-dist-count { font-size: 0.6rem; font-weight: 400; color: var(--tmuted); width: 13px; text-align: right; flex-shrink: 0; }
  .rw-form {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 8px; padding: 12px; margin-top: 7px;
  }
  .rw-form-title { font-family: 'Cormorant Garamond', serif; font-size: 0.95rem; font-weight: 500; color: var(--gd); margin-bottom: 8px; font-style: italic; }
  .rw-star-picker { display: flex; align-items: center; gap: 3px; margin-bottom: 8px; flex-wrap: wrap; }
  .rw-sp-btn { font-size: 20px; background: none; border: none; cursor: pointer; color: rgba(107,191,89,0.25); transition: color .15s, transform .15s; padding: 0; line-height: 1; }
  .rw-sp-btn.active { color: var(--gs); transform: scale(1.15); }
  .rw-star-label { font-size: 0.68rem; font-weight: 600; color: var(--gs); margin-left: 4px; }
  .rw-textarea {
    width: 100%; background: var(--off); border: 1px solid var(--borderc);
    border-radius: 6px; padding: 8px 10px;
    font-family: 'Nunito Sans', sans-serif; font-size: 0.78rem; font-weight: 400; color: var(--text);
    resize: none; outline: none; transition: border-color .22s; margin-bottom: 8px; line-height: 1.6;
  }
  .rw-textarea:focus { border-color: var(--gs); }
  .rw-textarea::placeholder { color: var(--tmuted); }
  .rw-form-actions { display: flex; gap: 7px; justify-content: flex-end; flex-wrap: wrap; }
  .rw-cancel-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.6rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--tmuted); background: transparent; border: 1px solid var(--borderc);
    padding: 6px 13px; border-radius: 100px; cursor: pointer; transition: all .22s;
  }
  .rw-cancel-btn:hover { border-color: var(--tmuted); color: var(--text); }
  .rw-submit-btn {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.6rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    color: #fff; background: rgba(31,61,43,0.28); border: none;
    padding: 6px 16px; border-radius: 100px; cursor: pointer; transition: all .22s; opacity: .5;
  }
  .rw-submit-btn.active { background: var(--gd); opacity: 1; }
  .rw-submit-btn.active:hover { background: var(--gf); }
  .rw-reviews { display: flex; flex-direction: column; gap: 5px; margin-top: 8px; border-top: 1px solid var(--borderc); padding-top: 8px; }
  .rw-review-card { background: var(--white); border-radius: 6px; padding: 8px 10px; border: 1px solid var(--borderc); }
  .rw-review-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 3px; flex-wrap: wrap; gap: 4px; }
  .rw-review-date { font-size: 0.56rem; font-weight: 400; color: var(--tmuted); }
  .rw-review-text { font-size: 0.72rem; font-weight: 400; color: var(--tbody); line-height: 1.55; margin: 0; word-break: break-word; overflow-wrap: break-word; }

  .prd-empty { text-align: center; padding: 56px 0; font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 400; color: var(--tmuted); }

  /* BOTTOM BANNER */
  .prd-banner {
    margin-top: 48px; padding: 40px 52px;
    background: linear-gradient(135deg, var(--gd) 0%, var(--gf) 60%, #1a4230 100%);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between; gap: 28px;
    border-radius: 18px;
    box-shadow: 0 16px 48px rgba(31,61,43,0.18);
  }
  .prd-banner::before {
    content: ''; position: absolute; inset: 0; border-radius: 18px;
    background: radial-gradient(ellipse 45% 80% at 0% 50%, rgba(107,191,89,0.08) 0%, transparent 60%);
  }
  .prd-banner-text { position: relative; z-index: 1; }
  .prd-banner-text h3 {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 5px; line-height: 1.25;
  }
  .prd-banner-text h3 span { color: var(--gsl); }
  .prd-banner-text p { font-size: 0.8rem; font-weight: 400; color: rgba(255,255,255,0.5); margin: 0; }
  .prd-banner-btn {
    position: relative; z-index: 1;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--gd); background: #fff; border: none;
    padding: 12px 30px; cursor: pointer; border-radius: 100px;
    transition: box-shadow .25s, transform .22s;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12); white-space: nowrap; flex-shrink: 0;
  }
  .prd-banner-btn:hover { box-shadow: 0 7px 24px rgba(0,0,0,0.18); transform: translateY(-2px); }

  /* ══════════════════════════════════════════
     RESPONSIVE — MOBILE FIRST FIX
  ══════════════════════════════════════════ */

  @media (max-width: 1060px) {
    .pc-card { grid-template-columns: 280px 1fr; }
    .pc-img-panel { min-height: 380px; padding: 28px 18px; }
    .pc-img-wrap { width: 224px; height: 224px; }
    .pc-content { padding: 22px 24px; }
  }

  @media (max-width: 800px) {
    .prd-inner { padding: 0 16px 56px; }
    .pc-card { grid-template-columns: 220px 1fr; }
    .pc-img-panel { min-height: 320px; padding: 20px 14px; }
    .pc-img-wrap { width: 175px; height: 175px; }
    .pc-content { padding: 18px 16px; gap: 8px; }
  }

  /* Stack card at 640px — well before typical 360px mobile */
  @media (max-width: 640px) {
    .prd-inner { padding: 0 12px 48px; }
    .prd-list { gap: 14px; }

    /* Single column */
    .pc-card { grid-template-columns: 1fr; }

    /* Image panel — compact horizontal strip */
    .pc-img-panel {
      border-right: none;
      border-bottom: 1px solid var(--borderc);
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 14px;
      min-height: unset;
      padding: 20px 16px;
    }
    .pc-img-wrap { width: 110px; height: 110px; flex-shrink: 0; }
    .pc-img-ring  { inset: -6px; }
    .pc-img-ring2 { inset: -12px; }
    .pc-img-badge {
      font-size: 0.48rem; padding: 5px 10px;
      max-width: 140px; white-space: normal; text-align: center;
    }
    .pc-num { display: none; }

    /* Content */
    .pc-content { padding: 16px 14px; gap: 8px; }
    .pc-name { font-size: 17px; }
    .pc-tagline { font-size: 0.72rem; }
    .pc-desc { font-size: 0.74rem; }

    /* Hemp badges */
    .pc-hemp-usp-strip { gap: 5px; }
    .pc-hemp-badge { font-size: 0.5rem; padding: 3px 8px; }

    /* USP highlight */
    .pc-usp-highlight { padding: 10px 12px; }
    .pc-usp-hl-text { font-size: 0.82rem; }

    /* Footer — stack vertically */
    .pc-footer { flex-direction: column; align-items: flex-start; gap: 10px; }
    .pc-btn-group { width: 100%; }
    .pc-add-btn { width: 100%; justify-content: center; padding: 12px 18px; }
    .pc-price { font-size: 22px; }

    /* Banner */
    .prd-banner { flex-direction: column; padding: 28px 20px; text-align: center; border-radius: 14px; gap: 18px; }
    .prd-banner-btn { width: 100%; }

    /* Hero */
    .prd-hero { padding: 32px 0 20px; }
    .filter-tab { padding: 6px 14px; font-size: 0.63rem; }

    /* Rating widget */
    .rw-wrap { padding: 10px 12px; }
  }

  @media (max-width: 400px) {
    .prd-inner { padding: 0 8px 40px; }
    .pc-img-panel { padding: 14px 10px; gap: 10px; }
    .pc-img-wrap { width: 88px; height: 88px; }
    .pc-img-ring  { inset: -5px; }
    .pc-img-ring2 { inset: -10px; }
    .pc-content { padding: 12px 10px; gap: 7px; }
    .pc-name { font-size: 15px; }
    .filter-tab { padding: 5px 10px; font-size: 0.58rem; }
    .pc-price { font-size: 20px; }
    .pc-hemp-badge { font-size: 0.46rem; padding: 3px 7px; }
  }
`;

function getDiscountedPrice(mrp, discount) {
  return Math.round(mrp * (1 - discount / 100));
}

const CheckIcon = () => (
  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
    <path d="M1.5 5.5L3.5 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h2l2.5 9h7l2-6H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="16" r="1" fill="currentColor"/>
    <circle cx="14" cy="16" r="1" fill="currentColor"/>
  </svg>
);

/* ── PRODUCT CARD ── */
function ProductItem({ product, index, addToCart }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.04 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleAddToCart = () => {
    const discountedPrice = getDiscountedPrice(product.mrp, product.discount);
    addToCart({ ...product, price: discountedPrice });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const productImage = imageMap[product.icon] || null;
  const discountedPrice = getDiscountedPrice(product.mrp, product.discount);
  const nameParts = product.name.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  const firstName = nameParts.slice(0, -1).join(" ");

  const isHemp = product.icon === "spray";

  return (
    <div
      ref={ref}
      className={`pc-card-outer${visible ? " pc-vis" : ""}`}
      style={{ transitionDelay: `${Math.min(index * 0.06, 0.18)}s` }}
    >
      <div className="pc-card">

        {/* LEFT: IMAGE PANEL */}
        <div className="pc-img-panel">
          <div className="pc-img-wrap">
            <div className="pc-img-ring2" />
            <div className="pc-img-ring" />
            <div className="pc-img-circle" />
            <div className="pc-img-frame">
              {productImage ? (
                <img src={productImage} alt={product.name} className="pc-img" />
              ) : (
                <div className="pc-emoji">
                  {product.icon === "spray" ? "💆" : product.icon === "flower" ? "🌸" : product.icon === "bolt" ? "⚡" : "🌿"}
                </div>
              )}
            </div>
          </div>

          {isHemp ? (
            <div className="pc-img-badge usp-hemp">
              🌿 USP: <span>Cannabis Sativa Seed Oil</span>
            </div>
          ) : (
            product.usp && (
              <div className="pc-img-badge">USP: <span>{product.usp}</span></div>
            )
          )}

          <div className="pc-num">0{index + 1}</div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="pc-content">

          <div className="pc-top-row">
            {product.category && (
              <span className="pc-category">{product.category}</span>
            )}
          </div>

          <h3 className="pc-name">
            {firstName && <>{firstName} </>}
            <span className="accent">{lastName}</span>
          </h3>

          {product.tagline && (
            <p className="pc-tagline">{product.tagline}</p>
          )}

          <div className="pc-rating-row">
            <StarDisplay rating={product.rating} size={12} />
            <span className="pc-rating-val">{product.rating?.toFixed(1)}</span>
            <span className="pc-rating-count">({product.reviewCount} reviews)</span>
          </div>

          <div className="pc-sep" />

          <p className="pc-desc">{product.description}</p>

          {/* Hemp: bombard Cannabis Sativa USP with feature badges */}
          {isHemp && (
            <div className="pc-hemp-usp-strip">
              <span className="pc-hemp-badge">Anti-Inflammatory</span>
              <span className="pc-hemp-badge">Rapid Pain Relief</span>
              <span className="pc-hemp-badge">Deep Tissue Action</span>
              <span className="pc-hemp-badge">Cannabis Sativa Oil</span>
            </div>
          )}

          {product.uspHighlight && (
            <div className={`pc-usp-highlight${isHemp ? " usp-hemp-hl" : ""}`}>
              <span className="pc-usp-hl-label">✦ Key Active Ingredient</span>
              <div className="pc-usp-hl-text">{product.uspHighlight}</div>
            </div>
          )}

          {product.useCases && (
            <div className="pc-use-cases">
              <span className="pc-use-label">Indicated For</span>
              {product.useCases}
            </div>
          )}

          {product.benefits?.length > 0 && (
            <div className="pc-benefits">
              {product.benefits.map((b, bi) => (
                <div key={bi} className="pc-benefit-row">
                  <span className="pc-benefit-mark"><CheckIcon /></span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          )}

          {product.ingredients && (
            <div className="pc-composition">
              <span className="pc-comp-label">Composition</span>
              <p className="pc-comp-text">{product.ingredients}</p>
            </div>
          )}

          <div className="pc-footer">
            <div className="pc-price-group">
              <span className="pc-price-label">Offer Price</span>
              <div className="pc-price-row">
                <div className="pc-price"><sup>₹</sup>{discountedPrice}</div>
                <span className="pc-mrp">₹{product.mrp}</span>
                <span className="pc-off-badge">{product.discount}% OFF</span>
              </div>
              {product.pack && (
                <span className="pc-pack-info">{product.pack}</span>
              )}
            </div>
            <div className="pc-btn-group">
              <button
                className={`pc-add-btn${added ? " added" : ""}`}
                onClick={handleAddToCart}
              >
                {added ? <>✓ Added</> : <><CartIcon /> Add to Cart</>}
              </button>
            </div>
          </div>

          <RatingWidget productId={product.id} />

        </div>
      </div>
    </div>
  );
}

/* ── MAIN EXPORT ── */
export default function Products() {
  const { addToCart } = useOutletContext();
  const heroRef = useRef();
  const heroVisible = useInView(heroRef, 0.1);
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? products : products.filter(p => p.category === activeTab);
  const phone = "918956658209";

  return (
    <>
      <style>{productsStyles}</style>
      <section className="prd-section">

        <div className="prd-bg">
          <div className="prd-bg-grad" />
        </div>

        <div className="prd-inner">

          <div ref={heroRef} className={`prd-hero${heroVisible ? " vis" : ""}`}>
            <span className="prd-eyebrow">Nithya Ayurveda · Sacred Formulations</span>
            <h1 className="prd-title">
              Our <span className="accent">Sacred</span> Formulations
            </h1>
            <p className="prd-subtitle">
              Each product blends ancient Ayurvedic wisdom with modern science — crafted from ethically sourced herbs and time-honoured traditions.
            </p>
            <div className="prd-orn">
              <div className="prd-orn-line" />
              <span className="prd-orn-icon">🌿</span>
              <div className="prd-orn-line r" />
            </div>
            <div className="filter-bar">
              {ALL_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab${activeTab === cat ? " active" : ""}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="prd-list">
            {filtered.length === 0 ? (
              <div className="prd-empty">No products found in this category.</div>
            ) : (
              filtered.map((product, index) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  index={index}
                  addToCart={addToCart}
                />
              ))
            )}
          </div>

          <div className="prd-banner">
            <div className="prd-banner-text">
              <h3>Need personalised <span>guidance?</span></h3>
              <p>Consult our Ayurvedic physicians for a tailored wellness plan crafted just for you.</p>
            </div>
            <button
              className="prd-banner-btn"
              onClick={() =>
                window.open(
                  `https://wa.me/${phone}?text=${encodeURIComponent("Hello, I need personalised Ayurvedic guidance.")}`,
                  "_blank"
                )
              }
            >
              Consult Now →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}