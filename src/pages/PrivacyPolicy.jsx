import { useState, useEffect } from "react";

const sections = [
  {
    id: 1,
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, phone number, email address, shipping address, and order details when you contact us or purchase products from Nithya Ayurveda.",
  },
  {
    id: 2,
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
    title: "How We Use Your Information",
    content:
      "Your information is used exclusively for order processing, customer support, product updates, and improving our services. We believe in transparency and never misuse what you share with us.",
  },
  {
    id: 3,
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
      </svg>
    ),
    title: "Data Protection",
    content:
      "We take appropriate security measures to protect your personal information. We do not sell, trade, or share your data with unauthorized third parties — your trust is sacred to us.",
  },
  {
    id: 4,
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="6" rx="2"/>
        <path d="M3 10h18M7 6V4M17 6V4"/>
      </svg>
    ),
    title: "Cookies",
    content:
      "Our website may use cookies and analytics tools to enhance user experience and improve website performance. You may choose to disable cookies through your browser settings.",
  },
  {
    id: 5,
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "Third-Party Links",
    content:
      "Our website may contain links to platforms such as WhatsApp, Instagram, or Facebook. We are not responsible for their privacy practices and encourage you to review their respective policies.",
  },
];

const GoldDivider = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      margin: "0 auto 32px",
      maxWidth: "200px",
    }}
  >
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #c9a84c)" }} />
    <div style={{ width: "6px", height: "6px", background: "#c9a84c", transform: "rotate(45deg)", flexShrink: 0 }} />
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #c9a84c)" }} />
  </div>
);

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", color: "#2d2d2d", fontFamily: "'Jost', sans-serif" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "clamp(40px,8vw,72px) 20px 80px" }}>

        {/* Header badge */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span style={{
            display: "inline-block",
            border: "1px solid rgba(201,168,76,0.5)",
            color: "#a07a20",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "6px 18px",
            borderRadius: "20px",
            background: "rgba(201,168,76,0.08)",
          }}>
            Nithya Ayurveda
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(30px, 8vw, 52px)",
          fontWeight: 400,
          color: "#1a1a1a",
          lineHeight: 1.2,
          marginBottom: "12px",
          letterSpacing: "-0.5px",
        }}>
          Privacy <em style={{ color: "#b8892a", fontStyle: "italic" }}>Policy</em>
        </h1>

        {/* Subtitle */}
        <p style={{
          textAlign: "center",
          fontSize: "11px",
          color: "#aaa",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "28px",
        }}>
          Rooted in nature · Guided by trust
        </p>

        <GoldDivider />

        {/* Intro card */}
        <div style={{
          background: "#fdf8f0",
          border: "1px solid rgba(201,168,76,0.3)",
          borderRadius: "2px",
          padding: "24px",
          marginBottom: "40px",
          marginTop: "8px",
          position: "relative",
        }}>
          {[
            { top: -2.5, left: -2.5 },
            { top: -2.5, right: -2.5 },
            { bottom: -2.5, left: -2.5 },
            { bottom: -2.5, right: -2.5 },
          ].map((pos, i) => (
            <div key={i} style={{
              position: "absolute",
              width: "5px", height: "5px",
              background: "#c9a84c",
              opacity: 0.7,
              ...pos,
            }} />
          ))}
          <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.85, color: "#444" }}>
            <strong style={{ color: "#8a6418", fontWeight: 600 }}>Nithya Ayurveda</strong>{" "}
            respects your privacy and is committed to protecting your personal information.
            This policy outlines how we collect, use, and safeguard your data in accordance
            with our healing philosophy — rooted in honesty and care.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {sections.map((sec, i) => {
            const isOpen = openSection === sec.id;
            return (
              <div key={sec.id} style={{
                borderTop: "1px solid rgba(201,168,76,0.22)",
                borderBottom: i === sections.length - 1 ? "1px solid rgba(201,168,76,0.22)" : "none",
                overflow: "hidden",
                transition: "background 0.3s",
                background: isOpen ? "#fdf8f0" : "transparent",
              }}>
                <button
                  onClick={() => setOpenSection(isOpen ? null : sec.id)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "18px 4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textAlign: "left",
                    minHeight: "56px",
                  }}
                >
                  {/* Icon box */}
                  <span style={{
                    width: "34px",
                    height: "34px",
                    flexShrink: 0,
                    background: isOpen ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.07)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.3s",
                  }}>
                    {sec.svg}
                  </span>

                  <span style={{
                    flex: 1,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(14px, 4vw, 17px)",
                    color: isOpen ? "#8a6418" : "#1a1a1a",
                    fontWeight: 400,
                    transition: "color 0.3s",
                    lineHeight: 1.3,
                  }}>
                    {sec.title}
                  </span>

                  {/* Chevron */}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      flexShrink: 0,
                      transition: "transform 0.35s",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                <div style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
                }}>
                  <p style={{
                    margin: "0 0 22px",
                    padding: "0 8px 0 48px",
                    fontSize: "14px",
                    lineHeight: 1.9,
                    color: "#555",
                  }}>
                    {sec.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact section */}
        <div style={{ marginTop: "52px", textAlign: "center" }}>
          <GoldDivider />

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(18px, 5vw, 26px)",
            fontWeight: 400,
            color: "#1a1a1a",
            marginBottom: "8px",
          }}>
            Reach Out to Us
          </h2>
          <p style={{
            fontSize: "11px",
            color: "#aaa",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}>
            We're here to help
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
            {[
              {
                label: "Location",
                value: "Pune, Maharashtra",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
              },
              {
                label: "Email",
                value: "nithyaayurveda09@gmail.com",
                href: "mailto:nithyaayurveda09@gmail.com",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
              },
              {
                label: "Phone",
                value: "+91 8956658209",
                href: "tel:+918956658209",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8892a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l1.94-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href || undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 20px",
                  width: "100%",
                  maxWidth: "400px",
                  background: "#fdf8f0",
                  border: "1px solid rgba(201,168,76,0.28)",
                  borderRadius: "2px",
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "14px",
                  transition: "border-color 0.2s, background 0.2s",
                  boxSizing: "border-box",
                  cursor: item.href ? "pointer" : "default",
                }}
              >
                <span style={{
                  width: "32px", height: "32px", flexShrink: 0,
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "6px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {item.icon}
                </span>
                <div style={{ textAlign: "left" }}>
                  <div style={{
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#a07a20",
                    marginBottom: "2px",
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "13px" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p style={{
          textAlign: "center",
          fontSize: "11px",
          color: "#ccc",
          marginTop: "56px",
          letterSpacing: "1px",
        }}>
          © {new Date().getFullYear()} Nithya Ayurveda · All rights reserved
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a:hover { border-color: rgba(201,168,76,0.55) !important; background: #fef5e0 !important; }
        button:focus-visible { outline: 1px solid #c9a84c; outline-offset: 2px; }
      `}</style>
    </div>
  );
}