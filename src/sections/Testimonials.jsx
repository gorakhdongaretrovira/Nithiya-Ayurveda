import { useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    name: "Raj Mulay",
    initials: "RM",
    color: "#4285F4",
    rating: 5,
    time: "2 weeks ago",
    text: "Very useful product. I've been using it for a month and the results are amazing. Highly recommend Nithya Ayurveda!",
    helpful: 12,
  },
  {
    name: "Sanket Gulve",
    initials: "SG",
    color: "#34A853",
    rating: 5,
    time: "1 month ago",
    text: "Highly recommended. Good results. The quality is excellent and customer service is top-notch. Will definitely buy again.",
    helpful: 8,
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    color: "#EA4335",
    rating: 5,
    time: "3 weeks ago",
    text: "Excellent experience and fast results. The product is authentic and packaging is neat. Very happy with my purchase!",
    helpful: 15,
  },
  {
    name: "Amit Desai",
    initials: "AD",
    color: "#FBBC05",
    rating: 5,
    time: "5 days ago",
    text: "Genuine Ayurvedic products with visible results. The hemp spray works wonders for joint pain. Completely satisfied.",
    helpful: 6,
  },
  {
    name: "Meera Joshi",
    initials: "MJ",
    color: "#9C27B0",
    rating: 4,
    time: "2 months ago",
    text: "Good quality products and prompt delivery. The OvuCare has helped me tremendously. Will continue using.",
    helpful: 9,
  },
];

const RATING_DISTRIBUTION = [
  { stars: 5, pct: 80 },
  { stars: 4, pct: 15 },
  { stars: 3, pct: 3 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

function StarRating({ rating, size = 16, color = "#FBBC05" }) {
  return (
    <div style={{ display: "flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width={size} height={size} viewBox="0 0 24 24">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={s <= rating ? color : "#e0e0e0"}
            stroke={s <= rating ? color : "#e0e0e0"}
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, delay }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLong = review.text.length > 100;
  const displayText = isLong && !expanded ? review.text.slice(0, 100) + "..." : review.text;

  return (
    <div
      ref={ref}
      className="ts-review-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      {/* Card Header */}
      <div className="ts-rc-header">
        <div className="ts-rc-avatar" style={{ background: review.color }}>
          {review.initials}
        </div>
        <div className="ts-rc-meta">
          <div className="ts-rc-name">{review.name}</div>
          <div className="ts-rc-time">{review.time}</div>
        </div>
        {/* Google G icon */}
        <svg className="ts-rc-google-icon" viewBox="0 0 24 24" width="20" height="20">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Stars */}
      <div className="ts-rc-stars">
        <StarRating rating={review.rating} size={14} />
      </div>

      {/* Review text */}
      <p className="ts-rc-text">
        {displayText}
        {isLong && (
          <button className="ts-rc-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? " Less" : " More"}
          </button>
        )}
      </p>

      {/* Helpful */}
      <div className="ts-rc-footer">
        <span className="ts-rc-helpful-label">Helpful?</span>
        <button
          className={`ts-rc-helpful-btn ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={liked ? "#1f3d2b" : "none"} stroke={liked ? "#1f3d2b" : "#888"} strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
            <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
          </svg>
          {liked ? review.helpful + 1 : review.helpful}
        </button>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headRef = useRef(null);
  const [headVis, setHeadVis] = useState(false);
  const [summaryVis, setSummaryVis] = useState(false);
  const summaryRef = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeadVis(true); obs1.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headRef.current) obs1.observe(headRef.current);

    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSummaryVis(true); obs2.disconnect(); } },
      { threshold: 0.1 }
    );
    if (summaryRef.current) obs2.observe(summaryRef.current);

    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,500;6..12,600;6..12,700&display=swap');

        :root {
          --dark-green: #1f3d2b;
          --mid-green: #2a5239;
          --soft-green: #6bbf59;
          --pale-green: #eaf5e5;
          --pale-green2: #f2faf0;
          --text-main: #202124;
          --text-muted: #5f6368;
          --text-light: #9aa0a6;
          --border: #e8eaed;
          --white: #ffffff;
          --surface: #f8f9fa;
          --google-blue: #4285F4;
          --google-yellow: #FBBC05;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
          --shadow-md: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
          --shadow-lg: 0 8px 24px rgba(0,0,0,0.10);
        }

        * { box-sizing: border-box; }

        .ts-section {
          padding: clamp(56px, 8vw, 96px) 0;
          background: var(--white);
          font-family: 'Nunito Sans', system-ui, sans-serif;
          color: var(--text-main);
          position: relative;
          overflow: hidden;
        }

        .ts-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335);
        }

        .ts-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 32px);
        }

        /* ── HEAD ── */
        .ts-head {
          text-align: center;
          margin-bottom: clamp(32px, 5vw, 52px);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ts-head.ts-vis { opacity: 1; transform: translateY(0); }

        .ts-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: var(--text-muted);
          margin-bottom: 10px;
        }
        .ts-eyebrow::before, .ts-eyebrow::after {
          content: '';
          width: 16px;
          height: 1.5px;
          background: var(--text-light);
          border-radius: 2px;
        }

        .ts-title {
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: var(--dark-green);
          margin: 0 0 8px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .ts-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        /* ── REVIEW UI WRAPPER ── */
        .ts-review-ui {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── SUMMARY PANEL ── */
        .ts-summary-panel {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          padding: 28px 24px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 28px;
          align-items: center;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .ts-summary-panel.ts-vis { opacity: 1; transform: translateY(0); }

        /* Left: big number */
        .ts-summary-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          min-width: 90px;
        }

        .ts-big-rating {
          font-size: 3.8rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .ts-summary-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
          text-align: center;
          line-height: 1.4;
        }

        .ts-google-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 4px;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        /* Right: bars */
        .ts-bars {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }

        .ts-bar-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ts-bar-label {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-muted);
          min-width: 20px;
          text-align: right;
          flex-shrink: 0;
        }

        .ts-bar-track {
          flex: 1;
          height: 8px;
          background: #e8eaed;
          border-radius: 100px;
          overflow: hidden;
          cursor: pointer;
        }

        .ts-bar-fill {
          height: 100%;
          background: var(--google-yellow);
          border-radius: 100px;
          transition: width 1s cubic-bezier(.22,1,.36,1);
        }

        .ts-bar-pct {
          font-size: 0.65rem;
          color: var(--text-light);
          min-width: 28px;
          flex-shrink: 0;
        }

        /* ── REVIEW CARDS SCROLL ── */
        .ts-cards-outer {
          position: relative;
        }

        .ts-cards-scroll {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 14px;
        }

        /* ── INDIVIDUAL REVIEW CARD ── */
        .ts-review-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 16px;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .ts-review-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .ts-rc-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .ts-rc-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }

        .ts-rc-meta { flex: 1; min-width: 0; }

        .ts-rc-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ts-rc-time {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 400;
          margin-top: 1px;
        }

        .ts-rc-google-icon {
          flex-shrink: 0;
          opacity: 0.85;
        }

        .ts-rc-stars {
          margin-bottom: 8px;
        }

        .ts-rc-text {
          font-size: 0.8rem;
          font-weight: 400;
          color: #3c4043;
          line-height: 1.65;
          margin: 0 0 10px;
          word-break: break-word;
        }

        .ts-rc-more {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--google-blue);
          font-family: inherit;
        }
        .ts-rc-more:hover { text-decoration: underline; }

        .ts-rc-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 8px;
          border-top: 1px solid var(--border);
        }

        .ts-rc-helpful-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 500;
          flex: 1;
        }

        .ts-rc-helpful-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 4px 10px;
          cursor: pointer;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          font-family: inherit;
          transition: all 0.2s ease;
        }
        .ts-rc-helpful-btn:hover { border-color: #aaa; color: #333; }
        .ts-rc-helpful-btn.liked {
          background: var(--pale-green);
          border-color: var(--soft-green);
          color: var(--dark-green);
        }

        /* ── WRITE REVIEW PROMPT ── */
        .ts-write-prompt {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ts-write-left { flex: 1; min-width: 160px; }

        .ts-write-title {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--text-main);
          margin: 0 0 3px;
        }

        .ts-write-sub {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 400;
          margin: 0;
        }

        /* ── GOOGLE BUTTON (ORIGINAL — UNTOUCHED) ── */
        .ts-google-btn-wrap {
          text-align: center;
          margin-top: 6px;
        }

        .ts-google-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ts-google-divider {
          width: 40px;
          height: 1px;
          background: var(--border);
        }

        .ts-google-or {
          font-size: 0.68rem;
          color: var(--text-light);
          font-weight: 500;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .ts-summary-panel {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 20px;
            padding: 22px 18px;
          }

          .ts-summary-left {
            align-items: center;
          }

          .ts-bar-row { max-width: 340px; margin: 0 auto; width: 100%; }

          .ts-cards-scroll {
            grid-template-columns: 1fr;
          }

          .ts-review-card:hover { transform: none; }
        }

        @media (max-width: 420px) {
          .ts-big-rating { font-size: 3rem; }
          .ts-summary-panel { padding: 18px 14px; }
          .ts-review-card { padding: 14px 12px; }
          .ts-write-prompt { padding: 16px 14px; gap: 12px; }
          .ts-title { font-size: 1.4rem; }
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-container">

          {/* Head */}
          <div
            className={`ts-head${headVis ? " ts-vis" : ""}`}
            ref={headRef}
          >
            <span className="ts-eyebrow">User Stories</span>
            <h2 className="ts-title">What Our Customers Say</h2>
            <p className="ts-subtitle">Real reviews from verified buyers</p>
          </div>

          {/* Review UI */}
          <div className="ts-review-ui">

            {/* Summary Panel */}
            <div
              ref={summaryRef}
              className={`ts-summary-panel${summaryVis ? " ts-vis" : ""}`}
            >
              {/* Left: Big Score */}
              <div className="ts-summary-left">
                <div className="ts-big-rating">4.8</div>
                <StarRating rating={5} size={15} />
                <p className="ts-summary-label">
                  Based on<br />127 reviews
                </p>
                <div className="ts-google-badge">
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google Reviews
                </div>
              </div>

              {/* Right: Rating Bars */}
              <div className="ts-bars">
                {RATING_DISTRIBUTION.map(({ stars, pct }) => (
                  <div key={stars} className="ts-bar-row">
                    <span className="ts-bar-label">{stars}★</span>
                    <div className="ts-bar-track">
                      <div
                        className="ts-bar-fill"
                        style={{ width: summaryVis ? `${pct}%` : "0%" }}
                      />
                    </div>
                    <span className="ts-bar-pct">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Cards */}
            <div className="ts-cards-outer">
              <div className="ts-cards-scroll">
                {REVIEWS.map((review, i) => (
                  <ReviewCard key={i} review={review} delay={0.05 * i} />
                ))}
              </div>
            </div>

            {/* Write a Review prompt */}
            <div className="ts-write-prompt">
              <div className="ts-write-left">
                <p className="ts-write-title">Share your experience</p>
                <p className="ts-write-sub">Help others by reviewing Nithya Ayurveda on Google</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ marginBottom: "12px", fontSize: "0.78rem", color: "#5f6368" }}>
                  See what our customers are saying about us
                </p>

                {/* ── ORIGINAL BUTTON — UNTOUCHED ── */}
                <a
                  href="https://g.page/Nithya+Ayurveda/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 22px",
                    borderRadius: "30px",
                    border: "1.5px solid #1f3d2b",
                    color: "#1f3d2b",
                    fontWeight: "600",
                    textDecoration: "none"
                  }}
                >
                  ⭐ View Reviews on Google
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}