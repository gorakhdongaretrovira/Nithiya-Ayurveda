import { useEffect, useRef, useState } from "react";

const initialTestimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Yoga Instructor, Mumbai",
    initials: "PS",
    rating: 5,
    text: "The Kufrida tonic transformed my energy levels completely. After 3 weeks, I noticed a profound shift in my vitality — ancient wisdom truly works.",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Software Engineer, Bengaluru",
    initials: "AM",
    rating: 5,
    text: "I've been using Vajra-X for two months now. The improvement in my stamina and focus is remarkable. Highly recommend it.",
  },
  {
    id: 3,
    name: "Deepa Nair",
    role: "Homemaker, Kochi",
    initials: "DN",
    rating: 5,
    text: "Ovucare has been a blessing. My hormonal balance has improved significantly. I trust Nithya Ayurveda completely.",
  },
  {
    id: 4,
    name: "Vikram Rajan",
    role: "Ayurvedic Doctor, Chennai",
    initials: "VR",
    rating: 5,
    text: "As a practitioner myself, I recommend Nithya Ayurveda to my patients. Pure, authentic, and effective formulations.",
  },
  {
    id: 5,
    name: "Sunita Krishnan",
    role: "Teacher, Pune",
    initials: "SK",
    rating: 5,
    text: "The Hemp Pain Spray gave me relief within minutes. No side effects, completely natural. Finally found something that works.",
  },
  {
    id: 6,
    name: "Rahul Desai",
    role: "Fitness Trainer, Delhi",
    initials: "RD",
    rating: 5,
    text: "Vajra-X is part of my daily routine now. The recovery after workouts has improved significantly. Genuinely trusted by athletes.",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", rating: 5, text: "" });
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverStar, setHoverStar] = useState(0);
  const headRef = useRef(null);
  const autoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ts-vis");
        });
      },
      { threshold: 0.1 }
    );
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, [testimonials.length]);

  const goTo = (idx) => {
    clearInterval(autoRef.current);
    setActiveIdx(idx);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    const initials = form.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    setTestimonials([
      { id: Date.now(), ...form, initials, role: form.role || "Verified Customer" },
      ...testimonials,
    ]);
    setForm({ name: "", role: "", rating: 5, text: "" });
    setShowForm(false);
    setActiveIdx(0);
  };

  // Show 3 on desktop/tablet, 2 on mobile (handled by CSS grid)
  const visible = [];
  for (let i = 0; i < 3; i++) {
    visible.push(testimonials[(activeIdx + i) % testimonials.length]);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');

        :root {
          --dark-green: #1f3d2b;
          --soft-green: #6bbf59;
          --accent-bg: #f8faf9;
          --text-main: #2c3e33;
          --text-muted: #5c6d62;
          --premium-gold: #c5a35d;
        }

        .ts-section {
          padding: clamp(60px, 8vw, 100px) 0;
          background: #ffffff;
          font-family: 'Nunito Sans', sans-serif;
          color: var(--text-main);
          position: relative;
          overflow: hidden;
        }

        .ts-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 24px);
        }

        /* ── HEADER ── */
        .ts-head {
          text-align: center;
          margin-bottom: clamp(36px, 5vw, 60px);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }
        .ts-head.ts-vis { opacity: 1; transform: translateY(0); }

        .ts-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--premium-gold);
          margin-bottom: 10px;
          display: block;
        }

        .ts-title {
          font-size: clamp(1.6rem, 4vw, 2.75rem);
          font-weight: 700;
          color: var(--dark-green);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .ts-add-btn {
          font-family: inherit;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: transparent;
          color: var(--dark-green);
          border: 1.5px solid var(--dark-green);
          padding: 11px 28px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .ts-add-btn:hover {
          background: var(--dark-green);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(31, 61, 43, 0.1);
        }

        /* ── FORM ── */
        .ts-form-wrap {
          max-width: 520px;
          margin: 0 auto clamp(36px, 5vw, 60px);
          background: var(--accent-bg);
          padding: clamp(24px, 4vw, 40px);
          border-radius: 20px;
          border: 1px solid rgba(31, 61, 43, 0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          animation: tsFadeUp 0.5s ease-out;
        }

        @keyframes tsFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ts-form input, .ts-form textarea {
          width: 100%;
          margin-bottom: 14px;
          padding: 12px 16px;
          border: 1px solid #e2e8e4;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.88rem;
          outline: none;
          background: #fff;
          transition: all 0.3s;
        }
        .ts-form input:focus, .ts-form textarea:focus {
          border-color: var(--soft-green);
          box-shadow: 0 0 0 3px rgba(107, 191, 89, 0.1);
        }

        .ts-star-label {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          display: block;
          margin-bottom: 8px;
        }

        .ts-star-row {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }
        .ts-star {
          font-size: 22px;
          cursor: pointer;
          transition: transform 0.2s;
          color: #e2e8e4;
        }
        .ts-star.filled { color: #facc15; }
        .ts-star:hover { transform: scale(1.2); }

        .ts-form-submit {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          background: var(--dark-green);
          color: #fff;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: background 0.3s;
          font-family: inherit;
          font-size: 0.82rem;
        }
        .ts-form-submit:hover { background: var(--soft-green); }

        /* ── CARDS GRID ──
           Desktop: 3 columns
           Tablet:  2 columns
           Mobile:  2 columns (compact)
        ── */
        .ts-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2.5vw, 30px);
          margin-bottom: clamp(32px, 5vw, 50px);
        }

        .ts-card {
          background: #fff;
          padding: clamp(20px, 3vw, 40px);
          border-radius: 20px;
          border: 1px solid var(--accent-bg);
          box-shadow: 0 8px 24px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
        }
        .ts-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(31, 61, 43, 0.08);
          border-color: rgba(107, 191, 89, 0.2);
        }

        .ts-card-stars {
          color: #facc15;
          margin-bottom: clamp(12px, 2vw, 20px);
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        .ts-card-text {
          font-size: clamp(0.8rem, 1.5vw, 1rem);
          line-height: 1.75;
          color: var(--text-main);
          margin-bottom: clamp(16px, 2.5vw, 30px);
          flex: 1;
          font-style: italic;
          opacity: 0.9;
        }

        .ts-card-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: clamp(14px, 2vw, 24px);
          border-top: 1px solid var(--accent-bg);
        }

        .ts-avatar {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: var(--accent-bg);
          color: var(--dark-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
        }

        .ts-card-name { font-weight: 700; font-size: clamp(0.8rem, 1.5vw, 0.95rem); margin: 0; color: var(--dark-green); }
        .ts-card-role { font-size: clamp(0.68rem, 1.2vw, 0.8rem); color: var(--text-muted); margin: 0; }

        /* ── PAGINATION ── */
        .ts-pagination { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .ts-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #e2e8e4;
          cursor: pointer;
          transition: all 0.3s;
          border: none; padding: 0;
        }
        .ts-dot.active {
          width: 24px;
          border-radius: 10px;
          background: var(--soft-green);
        }

        /* ═══════════════════════════════════════
           TABLET (≤ 1024px) — 2 cards
        ═══════════════════════════════════════ */
        @media (max-width: 1024px) {
          .ts-cards-grid { grid-template-columns: repeat(2, 1fr); }
          /* Hide 3rd card on tablet */
          .ts-card:nth-child(3) { display: none; }
        }

        /* ═══════════════════════════════════════
           MOBILE (≤ 768px) — 2 compact cards
        ═══════════════════════════════════════ */
        @media (max-width: 768px) {
          .ts-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          /* Show all 3 again but hide 3rd — 2 per row is the target */
          .ts-card:nth-child(3) { display: none; }

          .ts-card {
            padding: 16px;
            border-radius: 14px;
          }

          .ts-card-stars { font-size: 0.75rem; margin-bottom: 8px; }

          .ts-card-text {
            font-size: 0.76rem;
            line-height: 1.6;
            margin-bottom: 12px;
            /* Limit height on mobile for visual consistency */
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .ts-card-footer {
            gap: 8px;
            padding-top: 10px;
          }

          .ts-avatar {
            width: 32px; height: 32px; min-width: 32px;
            font-size: 0.7rem;
          }

          .ts-card-name { font-size: 0.76rem; }
          .ts-card-role { font-size: 0.64rem; }

          /* Form full-width */
          .ts-form-wrap { margin-left: 0; margin-right: 0; border-radius: 16px; }
        }

        /* ═══════════════════════════════════════
           SMALL PHONES (≤ 420px)
        ═══════════════════════════════════════ */
        @media (max-width: 420px) {
          .ts-cards-grid { gap: 10px; }
          .ts-card { padding: 14px 12px; border-radius: 12px; }
          .ts-card-text { -webkit-line-clamp: 4; font-size: 0.72rem; }
          .ts-title { font-size: 1.5rem; }
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-container">
          <div className="ts-head" ref={headRef}>
            <span className="ts-eyebrow">User Stories</span>
            <h2 className="ts-title">Trusted by our Community</h2>
            <button className="ts-add-btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Cancel Review" : "Share Your Experience"}
            </button>
          </div>

          {showForm && (
            <div className="ts-form-wrap">
              <form className="ts-form" onSubmit={handleSubmit}>
                <input
                  placeholder="Your Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  placeholder="Role / Location (e.g. Yoga Instructor, Delhi)"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                />
                <span className="ts-star-label">Rating</span>
                <div className="ts-star-row">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`ts-star ${n <= (hoverStar || form.rating) ? "filled" : ""}`}
                      onClick={() => setForm({ ...form, rating: n })}
                      onMouseEnter={() => setHoverStar(n)}
                      onMouseLeave={() => setHoverStar(0)}
                    >★</span>
                  ))}
                </div>
                <textarea
                  placeholder="How has Nithya Ayurveda helped your wellness journey?"
                  rows="4"
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  required
                />
                <button type="submit" className="ts-form-submit">Submit Review</button>
              </form>
            </div>
          )}

          <div className="ts-cards-grid">
            {visible.map((t, idx) => (
              <div key={`${t.id}-${idx}`} className="ts-card">
                <div className="ts-card-stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
                <p className="ts-card-text">"{t.text}"</p>
                <div className="ts-card-footer">
                  <div className="ts-avatar">{t.initials}</div>
                  <div>
                    <p className="ts-card-name">{t.name}</p>
                    <p className="ts-card-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ts-pagination">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`ts-dot ${activeIdx === i ? "active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}