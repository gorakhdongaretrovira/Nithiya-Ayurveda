import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import products from "../data/products";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --deep-green:    #040d07;
    --mid-green:     #0a1f12;
    --nav-green:     #0b2015;
    --nav-green2:    #0e2a1c;
    --gold:          #c9a84c;
    --gold-light:    #e8c96a;
    --gold-pale:     #f5e8c0;
    --gold-dim:      rgba(201,168,76,0.45);
    --gold-faint:    rgba(201,168,76,0.12);
    --cream:         #fdf6e8;
    --text-nav:      #e8dfc8;
    --text-dim:      rgba(232,223,200,0.55);
    --glass-bg:      rgba(4,13,7,0.92);
    --glass-border:  rgba(201,168,76,0.18);
  }

  /* ── NAVBAR ── */
  .na-navbar {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    z-index: 1000;
    background: var(--nav-green);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    box-shadow:
      0 4px 32px rgba(0,0,0,0.28),
      0 1px 0 rgba(201,168,76,0.1) inset;
    transition: background 0.35s ease, box-shadow 0.35s ease;
  }
  .na-navbar.na-scrolled {
    background: rgba(7, 20, 12, 0.98);
    box-shadow:
      0 16px 56px rgba(0,0,0,0.36),
      0 1px 0 rgba(201,168,76,0.14) inset;
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
  }

  .na-navbar::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(201,168,76,0.06) 10%,
      rgba(201,168,76,0.5) 30%,
      rgba(232,201,106,0.85) 50%,
      rgba(201,168,76,0.5) 70%,
      rgba(201,168,76,0.06) 90%,
      transparent 100%
    );
  }
  .na-navbar::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 20%; right: 20%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.12), transparent);
  }

  .na-navbar-inner {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 40px;
    height: 74px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 40px;
    position: relative;
  }

  /* ── LOGO ── */
  .na-logo-group {
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1);
  }
  .na-logo-group:hover { transform: translateY(-1.5px); }

  .na-logo-img-wrap {
    position: relative;
    width: 50px; height: 50px;
    flex-shrink: 0;
  }
  .na-logo-img-wrap::before {
    content: '';
    position: absolute; inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.3);
    transition: border-color 0.4s, box-shadow 0.4s;
  }
  .na-logo-img-wrap::after {
    content: '';
    position: absolute; inset: -12px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.1);
    transition: border-color 0.4s, transform 0.5s;
  }
  .na-logo-group:hover .na-logo-img-wrap::before {
    border-color: rgba(201,168,76,0.7);
    box-shadow: 0 0 22px rgba(201,168,76,0.28), inset 0 0 16px rgba(201,168,76,0.1);
  }
  .na-logo-group:hover .na-logo-img-wrap::after {
    border-color: rgba(201,168,76,0.22);
    transform: rotate(15deg);
  }

  .na-logo-img {
    width: 50px; height: 50px;
    object-fit: contain; border-radius: 50%;
    position: relative; z-index: 1;
    filter:
      drop-shadow(0 0 6px rgba(201,168,76,0.38))
      drop-shadow(0 0 20px rgba(201,168,76,0.18))
      brightness(1.08);
    transition: filter 0.4s ease;
  }
  .na-logo-group:hover .na-logo-img {
    filter:
      drop-shadow(0 0 12px rgba(201,168,76,0.65))
      drop-shadow(0 0 28px rgba(201,168,76,0.32))
      brightness(1.2);
  }

  .na-logo-text { display: flex; flex-direction: column; gap: 5px; }

  .na-logo-name {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 600;
    color: var(--gold-light);
    letter-spacing: 0.5px; line-height: 1;
    transition: color 0.3s, text-shadow 0.3s;
    text-shadow: 0 0 28px rgba(201,168,76,0.22);
  }
  .na-logo-group:hover .na-logo-name {
    color: var(--gold-pale);
    text-shadow: 0 0 40px rgba(201,168,76,0.5);
  }

  .na-logo-tagline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 9px; font-weight: 300;
    letter-spacing: 3.5px; text-transform: uppercase;
    color: rgba(201,168,76,0.45); font-style: italic;
    transition: color 0.3s;
  }
  .na-logo-group:hover .na-logo-tagline { color: rgba(201,168,76,0.72); }

  /* ── NAV CENTER ── */
  .na-nav-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .na-nav-ornament {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 5px; opacity: 0.38;
  }
  .na-orn-line {
    height: 1px; width: 40px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.7));
  }
  .na-orn-line.r { background: linear-gradient(90deg, rgba(201,168,76,0.7), transparent); }
  .na-orn-leaf {
    font-size: 8px; color: rgba(201,168,76,0.9);
    letter-spacing: 2px;
  }

  .na-nav-links {
    display: flex; align-items: center;
    list-style: none; gap: 0; margin: 0; padding: 0;
  }

  .na-nav-links li {
    position: relative;
    cursor: pointer;
    padding: 5px 22px;
    display: flex; align-items: center;
  }

  .na-nav-links li span {
    font-family: 'Jost', sans-serif;
    font-size: 10px; font-weight: 500;
    letter-spacing: 3.5px; text-transform: uppercase;
    color: var(--text-nav);
    display: block;
    transition: color 0.35s, text-shadow 0.35s;
    position: relative;
  }

  .na-nav-links li::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 22px; right: 22px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold-light), transparent);
    box-shadow: 0 0 8px rgba(201,168,76,0.6);
    transform: scaleX(0);
    transition: transform 0.4s cubic-bezier(0.25,1,0.5,1);
  }
  .na-nav-links li:hover::after,
  .na-nav-links li.na-active::after { transform: scaleX(1); }

  .na-nav-links li:hover span {
    color: var(--gold-pale);
    text-shadow: 0 0 18px rgba(201,168,76,0.35);
  }
  .na-nav-links li.na-active span {
    color: var(--gold-light);
    text-shadow: 0 0 16px rgba(201,168,76,0.3);
  }

  .na-nav-links li.na-active::before {
    content: '✦';
    position: absolute;
    top: -8px; left: 50%;
    transform: translateX(-50%);
    font-size: 6px;
    color: rgba(201,168,76,0.55);
  }

  /* ── ACTIONS ── */
  .na-nav-actions {
    display: flex; align-items: center; gap: 4px;
  }

  .na-icon-btn {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--text-nav);
    transition: color 0.3s, background 0.3s, transform 0.25s;
    background: none; border: none;
    position: relative; border-radius: 50%;
  }
  .na-icon-btn:hover {
    color: var(--gold-light);
    background: rgba(201,168,76,0.08);
    transform: translateY(-1px);
  }
  .na-icon-btn svg { width: 17px; height: 17px; stroke-width: 1.3; }

  .na-cart-badge {
    position: absolute; top: 5px; right: 5px;
    width: 15px; height: 15px; border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--deep-green);
    font-family: 'Jost', sans-serif;
    font-size: 7.5px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    line-height: 1;
    box-shadow: 0 0 12px rgba(201,168,76,0.6), 0 2px 6px rgba(0,0,0,0.3);
  }

  .na-actions-sep {
    width: 1px; height: 22px;
    background: rgba(201,168,76,0.2); margin: 0 6px;
  }

  /* ── BUY NOW CTA ── */
  .na-buy-wrap {
    position: relative; display: flex; align-items: center;
  }
  .na-buy-leaf {
    font-size: 12px; color: rgba(201,168,76,0.32);
    margin: 0 4px; transition: color 0.3s, transform 0.35s;
    pointer-events: none; user-select: none;
  }
  .na-buy-wrap:hover .na-buy-leaf { color: rgba(201,168,76,0.55); }
  .na-buy-leaf.r { transform: scaleX(-1); }
  .na-buy-wrap:hover .na-buy-leaf.r { transform: scaleX(-1) translateX(-2px); }

  .na-buy-btn {
    font-family: 'Jost', sans-serif;
    font-size: 9px; font-weight: 600;
    letter-spacing: 3.2px; text-transform: uppercase;
    color: var(--deep-green);
    background: linear-gradient(135deg, #b8903e 0%, #e8c96a 38%, #c9a84c 65%, #d4b460 100%);
    background-size: 220% 220%;
    background-position: left center;
    border: none; padding: 12px 28px;
    cursor: pointer; position: relative; overflow: hidden;
    clip-path: polygon(9px 0%, 100% 0%, calc(100% - 9px) 100%, 0% 100%);
    transition: background-position 0.55s ease, transform 0.25s ease, box-shadow 0.3s ease, letter-spacing 0.3s;
    box-shadow: 0 3px 20px rgba(201,168,76,0.22);
  }
  .na-buy-btn:hover {
    background-position: right center;
    transform: translateY(-2px);
    letter-spacing: 3.8px;
    box-shadow: 0 8px 30px rgba(201,168,76,0.42);
  }
  .na-buy-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 28%, rgba(255,255,255,0.4) 50%, transparent 72%);
    transform: translateX(-150%);
    transition: transform 0.6s ease;
  }
  .na-buy-btn:hover::before { transform: translateX(150%); }

  /* ── HAMBURGER ── */
  .na-hamburger {
    display: none; flex-direction: column;
    gap: 5px; cursor: pointer;
    background: none; border: none; padding: 8px;
    border-radius: 8px;
    transition: background 0.3s;
  }
  .na-hamburger:hover { background: rgba(201,168,76,0.06); }
  .na-hamburger span {
    display: block; height: 1px;
    background: var(--gold-light);
    transition: transform 0.35s ease, opacity 0.3s ease, width 0.3s ease;
    transform-origin: center;
  }
  .na-hamburger span:nth-child(1) { width: 22px; }
  .na-hamburger span:nth-child(2) { width: 14px; margin-left: 4px; }
  .na-hamburger span:nth-child(3) { width: 22px; }
  .na-hamburger.na-open span:nth-child(1) { width: 22px; transform: translateY(6px) rotate(45deg); }
  .na-hamburger.na-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .na-hamburger.na-open span:nth-child(3) { width: 22px; transform: translateY(-6px) rotate(-45deg); }

  /* ── MOBILE MENU — compact slide-down panel ── */
  .na-mobile-menu {
    position: fixed;
    top: 0; left: 0; right: 0;
    background: rgba(5, 14, 8, 0.98);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    z-index: 997;
    display: flex;
    flex-direction: column;
    padding: 0 0 20px 0;
    list-style: none;
    margin: 0;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;
    border-bottom: 1px solid rgba(201,168,76,0.18);
    box-shadow: 0 16px 48px rgba(0,0,0,0.5);
    overflow: hidden;
  }
  .na-mobile-menu::after {
    content: '';
    position: absolute;
    bottom: 0; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent);
  }
  .na-mobile-menu.na-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .na-mobile-menu-spacer {
    height: 60px;
    flex-shrink: 0;
  }

  .na-mobile-menu-top-accent {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.6) 30%, rgba(232,201,106,0.9) 50%, rgba(201,168,76,0.6) 70%, transparent);
    margin-bottom: 4px;
    flex-shrink: 0;
  }

  .na-mobile-links {
    display: flex;
    flex-direction: column;
    padding: 4px 0;
  }

  .na-mobile-link-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 24px;
    cursor: pointer;
    border-bottom: 1px solid rgba(201,168,76,0.06);
    transition: background 0.2s ease, padding-left 0.25s ease;
    position: relative;
  }
  .na-mobile-link-item:last-child { border-bottom: none; }
  .na-mobile-link-item:active { background: rgba(201,168,76,0.06); }

  .na-mobile-link-item span {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--text-nav);
    transition: color 0.25s;
  }
  .na-mobile-link-item.na-active span {
    color: var(--gold-light);
  }
  .na-mobile-link-item.na-active::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, transparent, var(--gold), transparent);
  }
  .na-mobile-link-item .na-ml-arrow {
    font-size: 9px;
    color: rgba(201,168,76,0.3);
    transition: color 0.25s, transform 0.25s;
  }
  .na-mobile-link-item.na-active .na-ml-arrow {
    color: rgba(201,168,76,0.6);
    transform: translateX(2px);
  }

  .na-mobile-menu-footer {
    padding: 14px 24px 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .na-mobile-buy-btn {
    flex: 1;
    font-family: 'Jost', sans-serif;
    font-size: 9px; font-weight: 600;
    letter-spacing: 3px; text-transform: uppercase;
    color: var(--deep-green);
    background: linear-gradient(135deg, #b8903e 0%, #e8c96a 45%, #c9a84c 100%);
    border: none;
    padding: 11px 20px;
    cursor: pointer;
    clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    position: relative; overflow: hidden;
  }
  .na-mobile-buy-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
    transform: translateX(-150%);
    transition: transform 0.5s;
  }
  .na-mobile-buy-btn:active::before { transform: translateX(150%); }
  .na-mobile-buy-btn:active {
    box-shadow: 0 8px 28px rgba(201,168,76,0.45);
    transform: translateY(-1px);
  }

  .na-mobile-contact-info {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 24px 0;
  }
  .na-mobile-contact-info span {
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px; font-style: italic;
    color: rgba(201,168,76,0.4);
    letter-spacing: 1px;
  }
  .na-mobile-contact-divider {
    flex: 1; height: 1px;
    background: rgba(201,168,76,0.1);
  }

  /* ── SEARCH ── */
  .na-search-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  .na-search-input {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: var(--text-nav);
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(201,168,76,0.25);
    border-radius: 20px;
    padding: 6px 14px;
    width: 180px;
    outline: none;
    transition: border-color 0.25s, background 0.25s, width 0.3s ease;
  }
  .na-search-input::placeholder {
    color: rgba(232,223,200,0.35);
  }
  .na-search-input:focus {
    border-color: rgba(201,168,76,0.55);
    background: rgba(255,255,255,0.07);
  }

  .na-search-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 240px;
    background: rgba(7, 20, 12, 0.98);
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 10px;
    box-shadow: 0 12px 36px rgba(0,0,0,0.4);
    z-index: 1001;
    overflow: hidden;
  }

  .na-search-item {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    cursor: pointer;
    border-bottom: 1px solid rgba(201,168,76,0.07);
    transition: background 0.2s ease;
  }
  .na-search-item:last-child { border-bottom: none; }
  .na-search-item:hover { background: rgba(201,168,76,0.08); }

  .na-search-item-name {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: var(--text-nav);
    transition: color 0.2s;
  }
  .na-search-item:hover .na-search-item-name { color: var(--gold-light); }

  .na-search-no-result {
    padding: 12px 16px;
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    color: rgba(232,223,200,0.35);
    letter-spacing: 0.5px;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 980px) {
  .na-nav-center { display: none; }
  .na-buy-wrap   { display: none; }
  .na-actions-sep { display: none; }
  .na-hamburger { display: flex; }
  .na-navbar-inner { padding: 0 16px; height: 60px; grid-template-columns: auto 1fr auto; gap: 12px; }
  .na-logo-img { width: 38px; height: 38px; }
  .na-logo-img-wrap { width: 38px; height: 38px; }
  .na-logo-img-wrap::before { inset: -5px; }
  .na-logo-img-wrap::after { inset: -9px; }
  .na-logo-group { gap: 10px; }
  .na-logo-name { font-size: 16px; }
  .na-logo-tagline { font-size: 7.5px; letter-spacing: 2px; }
  .na-icon-btn { width: 36px; height: 36px; }
  .na-icon-btn svg { width: 15px; height: 15px; }
  .na-cart-badge { top: 3px; right: 3px; width: 13px; height: 13px; font-size: 7px; }

  .na-navbar-inner {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }

  .na-hamburger {
    order: -1;
  }

  .na-logo-group {
    margin-left: 8px;
  }

  .na-search-input { width: 130px; font-size: 10px; }
  .na-search-dropdown { width: 210px; }
}

  @media (max-width: 480px) {
    .na-logo-tagline { display: none; }
    .na-logo-name { font-size: 15px; }
    .na-navbar-inner { height: 56px; padding: 0 14px; }
    .na-logo-img { width: 34px; height: 34px; }
    .na-logo-img-wrap { width: 34px; height: 34px; }
    .na-mobile-menu-spacer { height: 56px; }
    .na-search-input { width: 110px; }
    .na-search-dropdown { width: 190px; }
  }
`;

const NAV_LINKS = ["Home", "About", "Products", "Team", "Contact"];

export default function Navbar({ cartCount = 0, setIsCartOpen }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [query,       setQuery]       = useState("");
  const [results,     setResults]     = useState([]);
  const styleInjected = useRef(false);
  const searchRef     = useRef(null);

  const navigate  = useNavigate();
  const location  = useLocation();

  const handleCartClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (typeof setIsCartOpen === "function") setIsCartOpen(true);
  };

  useEffect(() => {
    if (styleInjected.current) return;
    const tag = document.createElement("style");
    tag.textContent = styles;
    document.head.appendChild(tag);
    styleInjected.current = true;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Filter products when query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.trim().toLowerCase();
    const matched = products
      .filter(p => p.name.toLowerCase().includes(q))
      .slice(0, 5);
    setResults(matched);
  }, [query]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setQuery("");
        setResults([]);
      }
    };
    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  const handleSearchToggle = () => {
    setSearchOpen(prev => {
      if (prev) {
        setQuery("");
        setResults([]);
      }
      return !prev;
    });
  };

  const handleProductSelect = (productId) => {
    setSearchOpen(false);
    setQuery("");
    setResults([]);
    if (location.pathname !== "/products") {
      navigate("/products");
      // Wait for navigation + render, then scroll
      setTimeout(() => {
        const el = document.getElementById(`product-${productId}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const el = document.getElementById(`product-${productId}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Mobile compact slide-down menu ── */}
      <div className={`na-mobile-menu${menuOpen ? " na-open" : ""}`}>
        <div className="na-mobile-menu-spacer" />
        <div className="na-mobile-menu-top-accent" />

        <div className="na-mobile-links">
          {NAV_LINKS.map((link, i) => {
            const path = link === "Home" ? "/" : "/" + link.toLowerCase();
            const isActive = location.pathname === path;
            return (
              <div
                key={i}
                className={`na-mobile-link-item${isActive ? " na-active" : ""}`}
                onClick={() => { navigate(path); setMenuOpen(false); }}
              >
                <span>{link}</span>
                <span className="na-ml-arrow">›</span>
              </div>
            );
          })}
        </div>

        <div className="na-mobile-menu-footer">
          <button
            className="na-mobile-buy-btn"
            onClick={() => { navigate("/products"); setMenuOpen(false); }}
          >
            Shop Now
          </button>
        </div>

        <div className="na-mobile-contact-info">
          <div className="na-mobile-contact-divider" />
          <span>Rooted in Nature · Trusted in Science</span>
          <div className="na-mobile-contact-divider" />
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className={`na-navbar${scrolled ? " na-scrolled" : ""}`}>
        <div className="na-navbar-inner">

          {/* LOGO */}
          <div className="na-logo-group" onClick={() => navigate("/")}>
            <div className="na-logo-img-wrap">
              <img src={logo} alt="Nithya Ayurveda" className="na-logo-img" />
            </div>
            <div className="na-logo-text">
              <div className="na-logo-name">Nithya Ayurveda</div>
              <div className="na-logo-tagline">Rooted in Nature · Trusted in Science</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="na-nav-center">
            <div className="na-nav-ornament">
              <div className="na-orn-line" />
              <span className="na-orn-leaf">✦ ❧ ✦</span>
              <div className="na-orn-line r" />
            </div>
            <ul className="na-nav-links">
              {NAV_LINKS.map((link) => {
                const path = link === "Home" ? "/" : "/" + link.toLowerCase();
                return (
                  <li
                    key={link}
                    className={location.pathname === path ? "na-active" : ""}
                    onClick={() => navigate(path)}
                  >
                    <span>{link}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Actions */}
          <div className="na-nav-actions">

            {/* Search */}
            <div className="na-search-wrap" ref={searchRef}>
              <button
                type="button"
                className="na-icon-btn"
                aria-label="Search"
                onClick={handleSearchToggle}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </button>

              {searchOpen && (
                <>
                  <input
                    autoFocus
                    className="na-search-input"
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                  />
                  {query.trim() && (
                    <div className="na-search-dropdown">
                      {results.length > 0 ? (
                        results.map(p => (
                          <div
                            key={p.id}
                            className="na-search-item"
                            onClick={() => handleProductSelect(p.id)}
                          >
                            <span className="na-search-item-name">{p.name}</span>
                          </div>
                        ))
                      ) : (
                        <div className="na-search-no-result">No products found</div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            <button
              type="button"
              className="na-icon-btn"
              aria-label="Cart"
              onClick={handleCartClick}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="na-cart-badge">{cartCount}</span>
            </button>

            <div className="na-actions-sep" />

            <div className="na-buy-wrap">
              <span className="na-buy-leaf">❧</span>
              <button className="na-buy-btn" onClick={() => navigate("/products")}>
                Buy Now
              </button>
              <span className="na-buy-leaf r">❧</span>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`na-hamburger ${menuOpen ? "na-open" : ""}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "60px" }} className="na-desktop-spacer" />
      <style>{`
        @media (min-width: 981px) {
          .na-desktop-spacer { height: 74px !important; }
        }
      `}</style>
    </>
  );
}