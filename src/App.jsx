import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CartDrawer from "./components/CartDrawer";
import FloatingHelpWidget from "./components/FloatingHelpWidget";
import { Outlet } from "react-router-dom";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <Navbar
        cartCount={cart.reduce((s, p) => s + (p.quantity || 1), 0)}
        setIsCartOpen={setIsCartOpen}
      />

      <Outlet context={{ addToCart, cart, setCart }} />

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        setCart={setCart}
      />

      <WhatsAppButton cart={cart} setCart={setCart} />

      <FloatingHelpWidget
        whatsappNumber="918956658209"
        phoneNumber="918956658209"
      />
    </>
  );
}