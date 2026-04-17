import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const drawerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Jost:wght@200;300;400;500;600&display=swap');

  :root {
    --cd-bg:        #040d07;
    --cd-bg2:       #071510;
    --cd-gold:      #c9a84c;
    --cd-gold-lt:   #e8c96a;
    --cd-gold-pale: #f5e8c0;
    --cd-gold-dim:  rgba(201,168,76,0.18);
    --cd-cream:     #fdf6e8;
    --cd-text:      #e8dfc8;
    --cd-text-dim:  rgba(232,223,200,0.5);
  }

  /* ── BACKDROP ── */
  .cd-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(2,6,3,0.65);
    backdrop-filter: blur(6px) saturate(120%);
    -webkit-backdrop-filter: blur(6px) saturate(120%);
    z-index: 2000;
    cursor: pointer;
  }

  /* ── DRAWER PANEL ── */
  .cd-panel {
    position: fixed;
    top: 0; right: 0;
    width: 420px;
    max-width: 100vw;
    height: 100%;
    background: var(--cd-bg);
    z-index: 2001;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: -20px 0 80px rgba(0,0,0,0.6), -1px 0 0 var(--cd-gold-dim);
  }

  .cd-panel::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--cd-gold), var(--cd-gold-lt), transparent);
  }

  .cd-panel::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 0% 0%, rgba(201,168,76,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 100% 100%, rgba(201,168,76,0.03) 0%, transparent 60%);
    pointer-events: none;
  }

  /* ── HEADER ── */
  .cd-header {
    padding: 28px 32px 24px;
    border-bottom: 1px solid var(--cd-gold-dim);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .cd-eyebrow {
    font-family: 'Jost', sans-serif;
    font-size: 8.5px;
    font-weight: 400;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--cd-gold);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }
  .cd-eyebrow::before {
    content: '';
    width: 16px; height: 1px;
    background: var(--cd-gold);
  }

  .cd-title {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 400;
    color: var(--cd-cream);
    line-height: 1;
    margin: 0;
  }
  .cd-title em { font-style: italic; color: var(--cd-gold-lt); }

  .cd-item-count {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 300;
    color: var(--cd-text-dim);
    letter-spacing: 1px;
    margin-top: 4px;
  }

  .cd-close {
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    background: transparent;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--cd-text-dim);
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin-top: 4px;
  }
  .cd-close:hover {
    border-color: var(--cd-gold);
    color: var(--cd-gold);
    background: rgba(201,168,76,0.06);
    transform: rotate(90deg);
  }
  .cd-close svg { width: 14px; height: 14px; }

  /* ── ITEMS AREA ── */
  .cd-body {
    flex: 1;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    scrollbar-width: thin;
    scrollbar-color: rgba(201,168,76,0.2) transparent;
  }
  .cd-body::-webkit-scrollbar { width: 3px; }
  .cd-body::-webkit-scrollbar-track { background: transparent; }
  .cd-body::-webkit-scrollbar-thumb { background: rgba(201,168,76,0.2); border-radius: 2px; }

  /* ── EMPTY STATE ── */
  .cd-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 32px;
    text-align: center;
    gap: 16px;
    height: 100%;
  }

  .cd-empty-icon {
    width: 72px; height: 72px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    display: flex; align-items: center; justify-content: center;
    color: rgba(201,168,76,0.25);
    margin-bottom: 8px;
  }
  .cd-empty-icon svg { width: 28px; height: 28px; }

  .cd-empty-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 300;
    color: rgba(232,223,200,0.35);
    font-style: italic;
    margin: 0;
  }
  .cd-empty-sub {
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    font-weight: 300;
    color: rgba(232,223,200,0.2);
    letter-spacing: 1px;
    line-height: 1.7;
    margin: 0;
    max-width: 220px;
  }

  /* ── CART ITEM ── */
  .cd-item-list { padding: 8px 0; }

  .cd-item {
    display: flex;
    gap: 16px;
    padding: 20px 32px;
    border-bottom: 1px solid rgba(201,168,76,0.06);
    align-items: center;
    transition: background 0.25s ease;
    position: relative;
  }
  .cd-item:hover { background: rgba(201,168,76,0.025); }

  .cd-item::before {
    content: '';
    position: absolute;
    left: 0; top: 20%; bottom: 20%;
    width: 2px;
    background: linear-gradient(180deg, transparent, var(--cd-gold), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .cd-item:hover::before { opacity: 1; }

  .cd-item-thumb {
    width: 56px; height: 56px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    display: flex; align-items: center; justify-content: center;
    background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(4,13,7,0.3) 100%);
    flex-shrink: 0;
    overflow: hidden;
    font-size: 22px;
  }
  .cd-item-thumb img {
    width: 100%; height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(201,168,76,0.2));
  }

  .cd-item-info { flex: 1; min-width: 0; }

  .cd-item-name {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 400;
    color: var(--cd-cream);
    margin: 0 0 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cd-item-cat {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--cd-gold);
    margin: 0 0 8px;
    opacity: 0.7;
  }

  .cd-qty-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cd-qty-btn {
    width: 22px; height: 22px;
    border-radius: 50%;
    border: 1px solid var(--cd-gold-dim);
    background: transparent;
    color: var(--cd-text-dim);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    font-size: 13px;
    line-height: 1;
    transition: all 0.25s;
  }
  .cd-qty-btn:hover {
    border-color: var(--cd-gold);
    color: var(--cd-gold);
    background: rgba(201,168,76,0.06);
  }
  .cd-qty-num {
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--cd-cream);
    min-width: 18px;
    text-align: center;
  }

  .cd-item-price {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--cd-gold-lt);
    white-space: nowrap;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
  .cd-item-price .cd-unit-price {
    font-size: 10px;
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    color: var(--cd-text-dim);
  }
  .cd-remove-btn {
    background: none;
    border: none;
    color: rgba(232,223,200,0.2);
    cursor: pointer;
    font-size: 10px;
    letter-spacing: 1px;
    font-family: 'Jost', sans-serif;
    padding: 0;
    transition: color 0.25s;
    text-transform: uppercase;
  }
  .cd-remove-btn:hover { color: rgba(220,60,60,0.6); }

  /* ── SUMMARY ── */
  .cd-summary {
    padding: 20px 32px;
    border-bottom: 1px solid var(--cd-gold-dim);
    position: relative; z-index: 1;
    flex-shrink: 0;
  }

  .cd-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .cd-summary-label {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--cd-text-dim);
  }
  .cd-summary-val {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    color: var(--cd-cream);
  }
  .cd-summary-divider {
    height: 1px;
    background: var(--cd-gold-dim);
    margin: 12px 0;
  }
  .cd-total-label {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--cd-gold);
  }
  .cd-total-val {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: var(--cd-gold-lt);
  }

  /* ── FOOTER ── */
  .cd-footer {
    padding: 24px 32px 32px;
    position: relative; z-index: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .cd-wa-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #040d07;
    background: linear-gradient(135deg, #25D366 0%, #1ebe5d 50%, #25D366 100%);
    background-size: 200% 200%;
    background-position: left center;
    border: none;
    padding: 16px 28px;
    cursor: pointer;
    clip-path: polygon(9px 0%, 100% 0%, calc(100% - 9px) 100%, 0% 100%);
    transition: background-position 0.5s ease, box-shadow 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 24px rgba(37,211,102,0.2);
    position: relative;
    overflow: hidden;
  }
  .cd-wa-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
    transform: translateX(-140%);
    transition: transform 0.6s ease;
  }
  .cd-wa-btn:hover {
    background-position: right center;
    box-shadow: 0 8px 40px rgba(37,211,102,0.4);
    transform: translateY(-1px);
  }
  .cd-wa-btn:hover::before { transform: translateX(140%); }
  .cd-wa-btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    transform: none;
  }

  .cd-wa-icon { flex-shrink: 0; }
  .cd-wa-icon svg { width: 18px; height: 18px; }

  .cd-continue-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--cd-text-dim);
    background: transparent;
    border: 1px solid rgba(201,168,76,0.12);
    padding: 12px 28px;
    cursor: pointer;
    clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
    transition: all 0.3s ease;
  }
  .cd-continue-btn:hover {
    border-color: rgba(201,168,76,0.3);
    color: var(--cd-gold);
    background: rgba(201,168,76,0.03);
  }

  .cd-note {
    font-family: 'Jost', sans-serif;
    font-size: 9px;
    font-weight: 300;
    color: rgba(232,223,200,0.2);
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.6;
  }
  .cd-note strong { color: rgba(232,223,200,0.35); font-weight: 400; }

  @media (max-width: 460px) {
    .cd-panel { width: 100vw; }
    .cd-header { padding: 24px 20px 20px; }
    .cd-item { padding: 16px 20px; }
    .cd-footer { padding: 20px 20px 28px; }
    .cd-summary { padding: 16px 20px; }
  }
`;

const ICON_MAP = {
  spray: "💆",
  flower: "🌸",
  bolt: "⚡",
  leaf: "🌿",
};

export default function CartDrawer({ isOpen, setIsOpen, cart, setCart }) {
  const phone = "918956658209";
  const panelRef = useRef();

  useEffect(() => {
    const id = "cd-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = drawerStyles;
      document.head.appendChild(tag);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(p => p.id === id
        ? { ...p, quantity: Math.max(1, (p.quantity || 1) + delta) }
        : p
      )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const generateMessage = () => {
    if (cart.length === 0) return encodeURIComponent("Hello, I want to know more about your products.");
    let msg = "Hello! I'd like to place an order:\n\n";
    cart.forEach((item, i) => {
      const price = parseFloat(item.price) || 0;
      const qty = item.quantity || 1;
      const lineTotal = price * qty;
      msg += `${i + 1}. ${item.name}  ×${qty}  (₹${price} each = ₹${lineTotal})\n`;
    });
    const total = cart.reduce((s, p) => s + (parseFloat(p.price) || 0) * (p.quantity || 1), 0);
    msg += `\nOrder Total: ₹${total.toLocaleString("en-IN")}`;
    msg += "\n\nPlease assist me with completing this order. Thank you!";
    return encodeURIComponent(msg);
  };

  const handleWhatsApp = () => {
    if (cart.length === 0) return;
    window.open(`https://wa.me/${phone}?text=${generateMessage()}`, "_blank");
  };

  const totalItems = cart.reduce((s, p) => s + (p.quantity || 1), 0);
  const totalPrice = cart.reduce((s, p) => {
    const price = parseFloat(p.price) || 0;
    return s + price * (p.quantity || 1);
  }, 0);

  const panelVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", damping: 28, stiffness: 300 } },
    exit:    { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const backdropVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit:    { opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cd-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            ref={panelRef}
            className="cd-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* ── HEADER ── */}
            <div className="cd-header">
              <div className="cd-header-left">
                <div className="cd-eyebrow">Your Selection</div>
                <h2 className="cd-title">Sacred <em>Cart</em></h2>
                <div className="cd-item-count">
                  {totalItems === 0 ? "No items" : `${totalItems} item${totalItems !== 1 ? "s" : ""} selected`}
                </div>
              </div>
              <button className="cd-close" onClick={() => setIsOpen(false)} aria-label="Close cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── BODY ── */}
            <div className="cd-body">
              {cart.length === 0 ? (
                <div className="cd-empty">
                  <div className="cd-empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  </div>
                  <h3 className="cd-empty-title">Your cart awaits</h3>
                  <p className="cd-empty-sub">
                    Add sacred formulations to begin your Ayurvedic journey.
                  </p>
                </div>
              ) : (
                <div className="cd-item-list">
                  <AnimatePresence initial={false}>
                    {cart.map((item) => {
                      const unitPrice = parseFloat(item.price) || 0;
                      const qty = item.quantity || 1;
                      const lineTotal = unitPrice * qty;

                      return (
                        <motion.div
                          key={item.id}
                          className="cd-item"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20, height: 0, padding: 0, marginBottom: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {/* Thumbnail */}
                          <div className="cd-item-thumb">
                            {item.image
                              ? <img src={item.image} alt={item.name} />
                              : <span>{ICON_MAP[item.icon] || "🌿"}</span>
                            }
                          </div>

                          {/* Info */}
                          <div className="cd-item-info">
                            <div className="cd-item-name">{item.name}</div>
                            {item.category && <div className="cd-item-cat">{item.category}</div>}
                            <div className="cd-qty-row">
                              <button className="cd-qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                              <span className="cd-qty-num">{qty}</span>
                              <button className="cd-qty-btn" onClick={() => updateQty(item.id, +1)}>+</button>
                            </div>
                          </div>

                          {/* Price & remove */}
                          <div className="cd-item-price">
                            {unitPrice > 0 ? (
                              <>
                                <span>₹{lineTotal.toLocaleString("en-IN")}</span>
                                {qty > 1 && (
                                  <span className="cd-unit-price">₹{unitPrice} × {qty}</span>
                                )}
                              </>
                            ) : (
                              <span style={{ fontSize: 12, opacity: 0.4 }}>—</span>
                            )}
                            <button className="cd-remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* ── SUMMARY ── */}
            {cart.length > 0 && (
              <div className="cd-summary">
                <div className="cd-summary-row">
                  <span className="cd-summary-label">Subtotal</span>
                  <span className="cd-summary-val">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="cd-summary-row">
                  <span className="cd-summary-label">Shipping</span>
                  <span className="cd-summary-val" style={{ color: "#5fb87a", fontSize: 13 }}>
                    {totalPrice >= 499 ? "Free ✦" : "Calculated on order"}
                  </span>
                </div>
                <div className="cd-summary-divider" />
                <div className="cd-summary-row">
                  <span className="cd-total-label">Order Total</span>
                  <span className="cd-total-val">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            )}

            {/* ── FOOTER ── */}
            <div className="cd-footer">
              <button
                className="cd-wa-btn"
                onClick={handleWhatsApp}
                disabled={cart.length === 0}
              >
                <span className="cd-wa-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                Order via WhatsApp
              </button>

              <button className="cd-continue-btn" onClick={() => setIsOpen(false)}>
                ← Continue Shopping
              </button>

              <p className="cd-note">
                Your order will be processed by our team via WhatsApp.<br />
                <strong>Free shipping on orders above ₹499.</strong>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}