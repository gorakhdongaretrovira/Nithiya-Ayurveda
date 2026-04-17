import { generateWhatsAppMessage } from "../utils/whatsapp";

export default function WhatsAppButton({ cart, setCart }) {
  const phone = "917972643129";

  const handleClick = () => {
    const message = generateWhatsAppMessage(cart);
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");

    // OPTIONAL: clear cart after sending
    setCart([]);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      Order on WhatsApp
    </button>
  );
}