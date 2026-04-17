import { useState, useEffect } from "react";

export default function FloatingHelpWidget({
  whatsappNumber = "919876543210",
  phoneNumber = null,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Periodic pulse ring on WhatsApp button
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 900);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Hi! I need help with your products and services.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    if (phoneNumber) window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        /* ─── Keyframes ─────────────────────────────────── */
        @keyframes fhwSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   }
        }
        @keyframes fhwPulseRing {
          0%   { opacity: 0.72; transform: scale(1);    }
          100% { opacity: 0;    transform: scale(1.7);  }
        }
        @keyframes fhwDotGlow {
          0%,100% { box-shadow: 0 0 0 2px rgba(37,211,102,0.28); }
          50%      { box-shadow: 0 0 0 6px rgba(37,211,102,0.10); }
        }

        /* ─── Root ───────────────────────────────────────── */
        .fhw {
          position: fixed;
          bottom: 30px;
          right: 26px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
          font-family: 'DM Sans', sans-serif;
          animation: ${isVisible
            ? "fhwSlideUp 0.55s cubic-bezier(0.34,1.56,0.64,1) both"
            : "none"};
        }

        /* ─── "Need Help?" pill ──────────────────────────── */
        .fhw-bubble {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 18px;
          background: rgba(255,255,255,0.93);
          backdrop-filter: blur(18px) saturate(2);
          -webkit-backdrop-filter: blur(18px) saturate(2);
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow:
            0 2px 16px rgba(0,0,0,0.09),
            0 0 0 1px rgba(255,255,255,0.65) inset;
          font-size: 13.5px;
          font-weight: 600;
          color: #111;
          letter-spacing: 0.01em;
          user-select: none;
          cursor: default;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .fhw-bubble:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.13);
        }
        .fhw-bubble-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #25D366;
          flex-shrink: 0;
          animation: fhwDotGlow 2.4s ease-in-out infinite;
        }

        /* ─── Button group ───────────────────────────────── */
        .fhw-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
        }

        /* ─── Row (tooltip + button) ─────────────────────── */
        .fhw-row {
          display: flex;
          align-items: center;
          position: relative;
        }

        /* ─── TOOLTIP ────────────────────────────────────── */
        .fhw-tip {
          position: absolute;
          right: calc(100% + 15px);
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;

          /* Frosted dark glass */
          background: rgba(10,10,16,0.84);
          backdrop-filter: blur(20px) saturate(1.7);
          -webkit-backdrop-filter: blur(20px) saturate(1.7);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px;
          padding: 10px 14px 10px 10px;
          box-shadow:
            0 12px 40px rgba(0,0,0,0.4),
            0 3px 10px  rgba(0,0,0,0.28),
            0 0 0 1px   rgba(255,255,255,0.04) inset;

          transition:
            opacity   0.22s ease,
            transform 0.24s cubic-bezier(0.34,1.4,0.64,1);
        }

        /* Arrow caret pointing right */
        .fhw-tip::after {
          content: '';
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 9px;
          height: 9px;
          background: rgba(10,10,16,0.84);
          border-top:   1px solid rgba(255,255,255,0.09);
          border-right: 1px solid rgba(255,255,255,0.09);
          border-radius: 2px;
        }

        .fhw-row:hover .fhw-tip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* Tooltip inner layout */
        .fhw-tip-inner {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .fhw-tip-stripe {
          width: 3px;
          border-radius: 10px;
          align-self: stretch;
          min-height: 32px;
          flex-shrink: 0;
        }
        .fhw-tip-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .fhw-tip-label {
          font-size: 12.5px;
          font-weight: 600;
          color: #f0f0f0;
          letter-spacing: 0.015em;
          line-height: 1.3;
        }
        .fhw-tip-sub {
          font-size: 10.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.42);
          letter-spacing: 0.01em;
          line-height: 1.3;
        }

        /* ─── Shared FAB base ────────────────────────────── */
        .fhw-btn {
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition:
            transform  0.25s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 0.25s ease,
            filter     0.2s  ease;
        }
        .fhw-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: transparent;
          transition: background 0.2s;
        }
        .fhw-btn:hover::after { background: rgba(255,255,255,0.11); }
        .fhw-btn:active       { transform: scale(0.93) !important; }

        /* ─── WhatsApp FAB ───────────────────────────────── */
        .fhw-btn-wa {
          width: 60px;
          height: 60px;
          background: linear-gradient(145deg, #2BDB6E 0%, #1aad54 55%, #128C7E 100%);
          box-shadow:
            0 6px 22px rgba(37,211,102,0.38),
            0 2px 6px  rgba(0,0,0,0.14);
        }
        .fhw-btn-wa:hover {
          transform: scale(1.11);
          box-shadow:
            0 12px 36px rgba(37,211,102,0.48),
            0 4px 10px  rgba(0,0,0,0.16);
          filter: brightness(1.05);
        }

        /* Pulse ring */
        .fhw-pulse {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2.5px solid rgba(37,211,102,0.55);
          opacity: 0;
          pointer-events: none;
        }
        .fhw-pulse.active {
          animation: fhwPulseRing 0.9s ease-out forwards;
        }

        /* ─── Phone FAB ──────────────────────────────────── */
        .fhw-btn-call {
          width: 52px;
          height: 52px;
          background: linear-gradient(145deg, #4C8EDA 0%, #2563EB 60%, #1a4fc4 100%);
          box-shadow:
            0 5px 18px rgba(59,130,246,0.36),
            0 2px 6px  rgba(0,0,0,0.14);
        }
        .fhw-btn-call:hover {
          transform: scale(1.11);
          box-shadow:
            0 12px 32px rgba(59,130,246,0.46),
            0 4px 10px  rgba(0,0,0,0.16);
          filter: brightness(1.06);
        }

        /* ─── Responsive ─────────────────────────────────── */
        @media (max-width: 768px) {
          .fhw          { bottom: 22px; right: 18px; gap: 12px; }
          .fhw-btn-wa   { width: 54px;  height: 54px; }
          .fhw-btn-call { width: 46px;  height: 46px; }
          .fhw-bubble   { font-size: 13px; padding: 9px 15px; }
          .fhw-tip      { display: none; }
        }
        @media (max-width: 480px) {
          .fhw          { bottom: 16px; right: 14px; }
          .fhw-bubble   { display: none; }
          .fhw-btn-wa   { width: 50px; height: 50px; }
          .fhw-btn-call { width: 43px; height: 43px; }
        }
      `}</style>

      <div className="fhw">

        {/* ── "Need Help?" bubble ── */}
        <div className="fhw-bubble">
          <span className="fhw-bubble-dot" />
          Need Help?
        </div>

        <div className="fhw-group">

          {/* ── WhatsApp row ── */}
          <div className="fhw-row">
            <div className="fhw-tip">
              <div className="fhw-tip-inner">
                <span
                  className="fhw-tip-stripe"
                  style={{ background: "linear-gradient(180deg,#2BDB6E,#128C7E)" }}
                />
                <div className="fhw-tip-text">
                  <span className="fhw-tip-label">Chat on WhatsApp</span>
                  <span className="fhw-tip-sub">Typically replies instantly</span>
                </div>
              </div>
            </div>

            <button
              className="fhw-btn fhw-btn-wa"
              onClick={handleWhatsAppClick}
              aria-label="Chat with us on WhatsApp"
            >
              <span className={`fhw-pulse${pulse ? " active" : ""}`} />
              {/* Official WhatsApp icon path */}
              <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 7C14.611 7 7 14.611 7 24c0 3.313.955 6.406 2.608 9.016L7.5 40.5l7.7-2.068A16.94 16.94 0 0024 41c9.389 0 17-7.611 17-17S33.389 7 24 7zm-5.193 9.25c-.39-.02-.82.01-1.218.203-.36.175-.647.454-.9.72-.56.604-1.382 1.724-1.382 3.577 0 1.877 1.182 3.7 1.612 4.29.044.062.12.178.232.348.616.946 2.278 3.336 4.785 4.88 2.904 1.786 5.085 1.987 6.155 2.094.17.017.318.026.44.026 1.22 0 2.244-.46 3.01-1.275.578-.624.893-1.367.978-2.095.022-.19.017-.36-.01-.488-.055-.261-.268-.477-.535-.592-.254-.11-2.92-1.33-3.354-1.485-.433-.154-.78-.133-1.055.156-.322.34-.665.892-.934 1.215-.138.167-.334.195-.508.125-.316-.128-1.266-.575-2.447-1.674-1.183-1.1-1.872-2.358-2.04-2.688-.12-.237-.009-.43.1-.558.227-.264.504-.48.69-.746.132-.19.172-.39.108-.608-.17-.578-.936-2.74-1.222-3.527-.168-.46-.416-.52-.707-.534z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* ── Phone row (conditional) ── */}
          {phoneNumber && (
            <div className="fhw-row">
              <div className="fhw-tip">
                <div className="fhw-tip-inner">
                  <span
                    className="fhw-tip-stripe"
                    style={{ background: "linear-gradient(180deg,#4C8EDA,#1a4fc4)" }}
                  />
                  <div className="fhw-tip-text">
                    <span className="fhw-tip-label">Call Us Now</span>
                    <span className="fhw-tip-sub">{phoneNumber}</span>
                  </div>
                </div>
              </div>

              <button
                className="fhw-btn fhw-btn-call"
                onClick={handlePhoneClick}
                aria-label="Call support"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}