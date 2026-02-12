import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Smile Dental Care - Nigel, Gauteng",
  description:
    "Get in touch with Smile Dental Care in Nigel, Gauteng. Book appointments via WhatsApp, view our practice hours, or send us a message. Find us on the map.",
};

export default function ContactPage() {
  return <ContactContent />;
}
