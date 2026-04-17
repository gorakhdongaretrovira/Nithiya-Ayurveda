/**
 * FLOATING HELP WIDGET - IMPLEMENTATION EXAMPLES
 * 
 * This file shows various ways to use the FloatingHelpWidget component
 * Copy these examples into your App.jsx or other files as needed.
 */

// ============================================
// EXAMPLE 1: BASIC SETUP (Current Implementation)
// ============================================
// In App.jsx:

import FloatingHelpWidget from "./components/FloatingHelpWidget";

export default function App() {
  return (
    <>
      {/* Your existing components */}
      
      {/* Add this at the end before closing <> */}
      <FloatingHelpWidget 
        whatsappNumber="918956658209"
        phoneNumber="+91-89566-58209"
      />
    </>
  );
}


// ============================================
// EXAMPLE 2: WHATSAPP ONLY
// ============================================

<FloatingHelpWidget whatsappNumber="918956658209" />


// ============================================
// EXAMPLE 3: CONDITIONAL RENDERING
// ============================================
// Show help widget only on certain pages

const ShowHelpWidget = true; // Set based on route/condition

export default function App() {
  return (
    <>
      {ShowHelpWidget && (
        <FloatingHelpWidget whatsappNumber="918956658209" />
      )}
    </>
  );
}


// ============================================
// EXAMPLE 4: DIFFERENT REGIONS
// ============================================

// India
<FloatingHelpWidget 
  whatsappNumber="918956658209"
  phoneNumber="+91-918956658209"
/>

// USA
<FloatingHelpWidget 
  whatsappNumber="918956658209"
  phoneNumber="918956658209"
/>

// UK
<FloatingHelpWidget 
  whatsappNumber="918956658209"
  phoneNumber="918956658209"
/>

// Australia
<FloatingHelpWidget 
  whatsappNumber="918956658209"
  phoneNumber="918956658209"
/>


// ============================================
// EXAMPLE 5: CUSTOM CONFIGURATION BY ENV
// ============================================
// Create a config file: src/config/helpWidget.js

export const HELP_WIDGET_CONFIG = {
  development: {
    whatsappNumber: "918956658209",
    phoneNumber: "918956658209",
  },
  production: {
    whatsappNumber: "918956658209",
    phoneNumber: "918956658209",
  },
};

// In App.jsx:
import { HELP_WIDGET_CONFIG } from "./config/helpWidget";

const config = HELP_WIDGET_CONFIG[process.env.NODE_ENV || "development"];

export default function App() {
  return (
    <>
      <FloatingHelpWidget 
        whatsappNumber={config.whatsappNumber}
        phoneNumber={config.phoneNumber}
      />
    </>
  );
}


// ============================================
// EXAMPLE 6: WITH ENVIRONMENT VARIABLES
// ============================================
// In .env file:
// VITE_HELP_WHATSAPP=918956658209
// VITE_HELP_PHONE=918956658209

// In App.jsx:
<FloatingHelpWidget 
  whatsappNumber={import.meta.env.VITE_HELP_WHATSAPP}
  phoneNumber={import.meta.env.VITE_HELP_PHONE}
/>


// ============================================
// EXAMPLE 7: PAGE-SPECIFIC HELP WIDGET
// ============================================
// Different widget configurations on different pages

// pages/Home.jsx
import FloatingHelpWidget from "../components/FloatingHelpWidget";

function Home() {
  return (
    <>
      <h1>Welcome to Nithya Ayurveda</h1>
      {/* Page content */}
      <FloatingHelpWidget 
        whatsappNumber="918956658209"
        phoneNumber="918956658209"
      />
    </>
  );
}


// ============================================
// EXAMPLE 8: WITH CUSTOM MESSAGE
// ============================================
// To customize the WhatsApp message, edit FloatingHelpWidget.jsx:
// Line ~20:
/*
const handleWhatsAppClick = () => {
  const message = "Hi! I'm interested in your Ayurvedic products."; // Change this
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
};
*/


// ============================================
// EXAMPLE 9: HOOK FOR HELP WIDGET STATE
// ============================================
// If you want to control the widget from anywhere:

// hooks/useHelpWidget.js
import { useState } from "react";

export function useHelpWidget() {
  const [isHelpVisible, setIsHelpVisible] = useState(true);
  const [helpConfig, setHelpConfig] = useState({
    whatsappNumber: "918956658209",
    phoneNumber: "918956658209",
  });

  return {
    isHelpVisible,
    setIsHelpVisible,
    helpConfig,
    setHelpConfig,
  };
}

// Usage in App.jsx:
import { useHelpWidget } from "./hooks/useHelpWidget";

export default function App() {
  const { isHelpVisible, helpConfig } = useHelpWidget();

  return (
    <>
      {isHelpVisible && (
        <FloatingHelpWidget {...helpConfig} />
      )}
    </>
  );
}


// ============================================
// EXAMPLE 10: CONTEXTUAL HELP WIDGET
// ============================================
// Use React Context to provide help widget config globally

// context/HelpWidgetContext.jsx
import { createContext, useContext } from "react";

const HelpWidgetContext = createContext();

export function HelpWidgetProvider({ children, config }) {
  return (
    <HelpWidgetContext.Provider value={config}>
      {children}
    </HelpWidgetContext.Provider>
  );
}

export function useHelpWidgetContext() {
  return useContext(HelpWidgetContext);
}

// In main.jsx or App.jsx:
import { HelpWidgetProvider } from "./context/HelpWidgetContext";

ReactDOM.render(
  <HelpWidgetProvider config={{ whatsappNumber: "918956658209" }}>
    <App />
  </HelpWidgetProvider>,
  document.getElementById("root")
);

// Use anywhere:
function SomeComponent() {
  const helpConfig = useHelpWidgetContext();
  return <FloatingHelpWidget {...helpConfig} />;
}


// ============================================
// COMPLETE REAL-WORLD EXAMPLE
// ============================================
// Full App.jsx integration

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

      {/* Floating Help Widget - Global Component */}
      <FloatingHelpWidget 
        whatsappNumber="918956658209"
        phoneNumber="918956658209"
      />
    </>
  );
}


// ============================================
// STYLING CUSTOMIZATION
// ============================================
// To customize colors, edit FloatingHelpWidget.jsx:

/*
// Line ~37: WhatsApp button color
background: #25D366;  // Change to any hex color
// Examples:
// - Blue: #1A73E8
// - Purple: #7C3AED
// - Red: #DC2626

// Line ~123: Phone button color
background: #4A7360;  // Change to any hex color

// Line ~30: Bubble background
background: #ffffff;  // Change to any hex color
// Example: Light cream: #FAF7F1

// Line ~31: Bubble shadow
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
// Increase 0.12 for darker shadow: rgba(0, 0, 0, 0.25)
*/


// ============================================
// TESTING
// ============================================

// To verify the widget works:
// 1. Navigate to any page of your website
// 2. Look at bottom-right corner
// 3. You should see "Need Help?" bubble with chat icon button
// 4. Hover over button - it should scale up
// 5. Click button - WhatsApp should open in new tab
// 6. On mobile, text bubble should be hidden

// Browser Console Test:
// Open developer tools and run:
// document.querySelector(".floating-help-widget")
// Should return the widget DOM element


// ============================================
// END OF EXAMPLES
// ============================================

/*
KEY TAKEAWAYS:
1. Import FloatingHelpWidget at the top of App.jsx
2. Add it at the end of your JSX (before closing <> or <App>)
3. Pass whatsappNumber prop (required)
4. Optionally pass phoneNumber prop
5. Widget appears on ALL pages automatically
6. Customize colors by editing FloatingHelpWidget.jsx CSS
7. Update contact numbers with your actual details
8. Test on mobile to verify responsive behavior
*/

export { };
