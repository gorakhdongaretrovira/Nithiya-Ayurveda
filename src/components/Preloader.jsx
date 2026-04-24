import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .preloader-root {
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a1a0f;
    overflow: hidden;
    transition: opacity 0.9s cubic-bezier(0.76, 0, 0.24, 1),
                visibility 0.9s cubic-bezier(0.76, 0, 0.24, 1);
  }

  .preloader-root.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  /* ── Ambient background ── */
  .preloader-bg-radial {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16, 58, 24, 0.75) 0%, transparent 70%),
      radial-gradient(ellipse 80% 60% at 20% 80%, rgba(4, 38, 12, 0.5)  0%, transparent 60%),
      radial-gradient(ellipse 50% 40% at 80% 20%, rgba(20, 80, 30, 0.3)  0%, transparent 60%);
    animation: bgBreath 5s ease-in-out infinite alternate;
  }

  @keyframes bgBreath {
    from { opacity: 0.7; }
    to   { opacity: 1;   }
  }

  /* ── Grain texture ── */
  .preloader-grain {
    position: absolute;
    inset: 0;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    pointer-events: none;
  }

  /* ── Corner brackets ── */
  .preloader-corner {
    position: absolute;
    width: clamp(36px, 6vw, 60px);
    height: clamp(36px, 6vw, 60px);
    opacity: 0;
  }
  .preloader-corner::before,
  .preloader-corner::after {
    content: '';
    position: absolute;
    background: rgba(180, 220, 160, 0.22);
  }
  .preloader-corner::before { width: 1px; height: 100%; top: 0; left: 0; }
  .preloader-corner::after  { width: 100%; height: 1px; top: 0; left: 0; }

  .preloader-corner.tl {
    top: clamp(20px, 4vw, 48px);
    left: clamp(20px, 4vw, 48px);
    animation: revealTL 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
  }
  .preloader-corner.tr {
    top: clamp(20px, 4vw, 48px);
    right: clamp(20px, 4vw, 48px);
    animation: revealTR 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.45s forwards;
  }
  .preloader-corner.bl {
    bottom: clamp(20px, 4vw, 48px);
    left: clamp(20px, 4vw, 48px);
    animation: revealBL 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
  }
  .preloader-corner.br {
    bottom: clamp(20px, 4vw, 48px);
    right: clamp(20px, 4vw, 48px);
    animation: revealBR 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.75s forwards;
  }

  @keyframes revealTL { from { opacity:0; transform: translate(-6px,-6px); } to { opacity:1; transform: translate(0,0); } }
  @keyframes revealTR {
    from { opacity:0; transform: translate(6px,-6px); }
    to   { opacity:1; transform: translate(0,0); }
  }
  @keyframes revealBL {
    from { opacity:0; transform: translate(-6px,6px); }
    to   { opacity:1; transform: translate(0,0); }
  }
  @keyframes revealBR {
    from { opacity:0; transform: translate(6px,6px); }
    to   { opacity:1; transform: translate(0,0); }
  }

  /* corner TR — flip ::before/::after so lines go right & down */
  .preloader-corner.tr::before { left: auto; right: 0; }
  .preloader-corner.tr::after  { top: 0; left: auto; right: 0; }

  /* corner BL — lines go left & up */
  .preloader-corner.bl::before { top: auto; bottom: 0; }
  .preloader-corner.bl::after  { top: auto; bottom: 0; }

  /* corner BR — lines go right & up */
  .preloader-corner.br::before { left: auto; right: 0; top: auto; bottom: 0; }
  .preloader-corner.br::after  { top: auto; bottom: 0; left: auto; right: 0; }

  /* ── Main centre stage ── */
  .preloader-center {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(24px, 5vw, 40px);
  }

  /* ── Orbit container ── */
  .preloader-orbit-wrap {
    position: relative;
    width:  clamp(160px, 40vw, 220px);
    height: clamp(160px, 40vw, 220px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── Spinning rings ── */
  .preloader-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid transparent;
  }

  .ring-outer {
    inset: 0;
    border-color: rgba(140, 200, 120, 0.13);
    animation: spinCCW 14s linear infinite;
  }
  .ring-outer::before {
    content: '';
    position: absolute;
    top: -3px; left: 42%;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: rgba(160, 220, 130, 0.75);
    box-shadow: 0 0 14px 5px rgba(160, 220, 130, 0.4);
  }

  .ring-mid {
    inset: 16px;
    border-color: rgba(120, 180, 100, 0.18);
    animation: spinCW 9s linear infinite;
  }
  .ring-mid::before {
    content: '';
    position: absolute;
    bottom: -3px; right: 32%;
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(180, 230, 150, 0.85);
    box-shadow: 0 0 10px 3px rgba(180, 230, 150, 0.38);
  }

  .ring-inner {
    inset: 32px;
    border-color: rgba(100, 160, 80, 0.22);
    animation: spinCCW 6s linear infinite;
  }

  @keyframes spinCW  { to { transform: rotate(360deg);  } }
  @keyframes spinCCW { to { transform: rotate(-360deg); } }

  /* ── Logo wrapper — circular clip ── */
  .preloader-logo-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    width:  clamp(80px, 20vw, 110px);
    height: clamp(80px, 20vw, 110px);

    border-radius: 50%;
    overflow: hidden;

    /* Subtle green-tinted inner glow ring */
    box-shadow:
      0 0 0 1.5px rgba(160, 220, 120, 0.25),
      0 0 22px 6px  rgba(100, 180, 80, 0.18),
      inset 0 0 10px rgba(0, 0, 0, 0.35);

    opacity: 0;
    animation:
      logoReveal  1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards,
      logoPulse   3.5s ease-in-out 1.8s infinite;
  }

  @keyframes logoReveal {
    0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.78); filter: blur(10px); }
    65%  { filter: blur(0); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1);    filter: blur(0); }
  }

  @keyframes logoPulse {
    0%, 100% {
      box-shadow:
        0 0 0 1.5px rgba(160, 220, 120, 0.25),
        0 0 22px 6px  rgba(100, 180, 80, 0.18),
        inset 0 0 10px rgba(0, 0, 0, 0.35);
    }
    50% {
      box-shadow:
        0 0 0 1.5px rgba(160, 220, 120, 0.45),
        0 0 38px 12px rgba(100, 180, 80, 0.32),
        inset 0 0 10px rgba(0, 0, 0, 0.35);
    }
  }

  .preloader-emblem {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  /* ── Progress bar ── */
  .preloader-progress-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: clamp(120px, 32vw, 190px);
    opacity: 0;
    animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.3s forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .preloader-bar-track {
    width: 100%;
    height: 1px;
    background: rgba(140, 200, 110, 0.14);
    position: relative;
    overflow: hidden;
    border-radius: 1px;
  }

  .preloader-bar-fill {
    position: absolute;
    inset-block: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(100, 180, 80,  0.4),
      rgba(180, 240, 140, 0.95),
      rgba(100, 180, 80,  0.4)
    );
    transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px 1px rgba(180, 240, 140, 0.5);
  }

  .preloader-percent {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: clamp(9px, 2.2vw, 11px);
    letter-spacing: 0.32em;
    color: rgba(180, 220, 160, 0.38);
  }

  /* ── Responsive tweaks ── */
  @media (max-width: 480px) {
    .preloader-orbit-wrap {
      width:  clamp(150px, 72vw, 200px);
      height: clamp(150px, 72vw, 200px);
    }
    .preloader-logo-mark {
      width:  clamp(76px, 19vw, 100px);
      height: clamp(76px, 19vw, 100px);
    }
  }
`;

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [hiding,   setHiding]   = useState(false);

  useEffect(() => {
    const steps = [
      { target: 30,  delay: 200,  duration: 400 },
      { target: 55,  delay: 700,  duration: 500 },
      { target: 78,  delay: 1300, duration: 600 },
      { target: 92,  delay: 2000, duration: 400 },
      { target: 100, delay: 2600, duration: 300 },
    ];

    const timers = steps.map(({ target, delay, duration }) =>
      setTimeout(() => {
        setProgress(target);
        if (target === 100) {
          setTimeout(() => {
            setHiding(true);
            setTimeout(() => { if (onComplete) onComplete(); }, 950);
          }, duration + 200);
        }
      }, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <>
      <style>{styles}</style>
      <div
        className={`preloader-root${hiding ? " hidden" : ""}`}
        aria-hidden="true"
      >
        {/* Background layers */}
        <div className="preloader-bg-radial" />
        <div className="preloader-grain" />

        {/* Corner brackets */}
        <div className="preloader-corner tl" />
        <div className="preloader-corner tr" />
        <div className="preloader-corner bl" />
        <div className="preloader-corner br" />

        {/* Centre content */}
        <div className="preloader-center">

          {/* Orbit + logo */}
          <div className="preloader-orbit-wrap">
            <div className="preloader-ring ring-outer" />
            <div className="preloader-ring ring-mid"   />
            <div className="preloader-ring ring-inner" />

            {/* Circular logo — absolutely centred inside orbit wrap */}
            <div className="preloader-logo-mark">
              <img
                src={logo}
                alt="Nithya Ayurveda"
                className="preloader-emblem"
              />
            </div>
          </div>

          {/* Progress bar */}
          <div className="preloader-progress-wrap">
            <div className="preloader-bar-track">
              <div
                className="preloader-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="preloader-percent">{progress}%</span>
          </div>

        </div>
      </div>
    </>
  );
}