export const generateWhatsAppMessage = (cart) => {
  if (cart.length === 0) {
    return encodeURIComponent("Hello, I want to know more about your products.");
  }

  let message = "Hello, I want to order:\n\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (Qty: ${item.quantity})\n`;
  });

  message += "\nPlease assist me with the order.";

  return encodeURIComponent(message);
};