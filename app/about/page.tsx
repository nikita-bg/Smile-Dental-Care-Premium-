import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About Us | Smile Dental Care - Nigel, Gauteng",
  description:
    "Meet the team at Smile Dental Care in Nigel. Learn about our qualified dental professionals, our clinic story, and our commitment to quality dental care in Gauteng.",
};

export default function AboutPage() {
  return <AboutContent />;
}
