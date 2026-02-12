import type { Metadata } from "next";
import { ServicesContent } from "@/components/services/services-content";

export const metadata: Metadata = {
  title: "Our Services & Prices | Smile Dental Care - Nigel, Gauteng",
  description:
    "View our full list of dental services and prices in ZAR. From check-ups to braces, Smile Dental Care in Nigel offers affordable, quality dental treatments.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
