"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/27760000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Smile%20Dental%20Care.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
