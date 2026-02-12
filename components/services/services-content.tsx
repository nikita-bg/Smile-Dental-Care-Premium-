"use client";

import {
  Stethoscope,
  Sparkles,
  Wrench,
  Scissors,
  Sun,
  SmilePlus,
  ShieldCheck,
  Scan,
  Baby,
  Syringe,
  Crown,
  HeartPulse,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const WHATSAPP_LINK =
  "https://wa.me/27760000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Smile%20Dental%20Care.";

const services = [
  {
    icon: Stethoscope,
    title: "Dental Check-up",
    price: "R350",
    description:
      "A thorough oral examination including a visual assessment of your teeth, gums, and mouth. We check for cavities, gum disease, and any signs of oral health concerns. Ideal as a preventive measure every six months.",
    includes: [
      "Full oral examination",
      "Oral cancer screening",
      "Treatment plan discussion",
      "Aftercare advice",
    ],
  },
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    price: "R450",
    description:
      "A professional scale and polish to remove plaque, tartar, and surface stains that regular brushing cannot reach. Helps prevent gum disease and keeps your smile looking its best.",
    includes: [
      "Ultrasonic scaling",
      "Hand scaling where needed",
      "Polishing",
      "Oral hygiene advice",
    ],
  },
  {
    icon: Wrench,
    title: "Dental Fillings",
    price: "R600",
    description:
      "Tooth-coloured composite fillings to restore teeth affected by decay or damage. We carefully match the shade to your natural teeth for a seamless, natural-looking result.",
    includes: [
      "Local anaesthetic",
      "Decay removal",
      "Composite filling placement",
      "Bite adjustment",
    ],
  },
  {
    icon: Scissors,
    title: "Tooth Extraction",
    price: "R500",
    description:
      "Safe, gentle tooth extractions performed using modern techniques and effective anaesthesia. Whether it is a damaged tooth or a wisdom tooth causing problems, we ensure your comfort throughout.",
    includes: [
      "Local anaesthetic",
      "Gentle extraction technique",
      "Post-extraction care pack",
      "Follow-up instructions",
    ],
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    price: "R1 800",
    description:
      "Professional in-office whitening treatment that can brighten your teeth by several shades in a single appointment. Safe, effective, and long-lasting results with proper care.",
    includes: [
      "Pre-treatment assessment",
      "Professional-grade whitening gel",
      "LED activation light",
      "At-home maintenance tips",
    ],
  },
  {
    icon: SmilePlus,
    title: "Braces Consultation",
    price: "R750",
    description:
      "A comprehensive orthodontic consultation to assess your bite and alignment. We discuss treatment options including traditional braces and clear aligners to find the best solution for your smile.",
    includes: [
      "Orthodontic assessment",
      "Digital impressions",
      "Treatment options discussion",
      "Cost estimate for full treatment",
    ],
  },
  {
    icon: Scan,
    title: "Digital X-Rays",
    price: "R250",
    description:
      "Low-radiation digital X-rays for a detailed view of your teeth, roots, and jawbone. Essential for diagnosing hidden cavities, impacted teeth, and bone loss not visible during a regular exam.",
    includes: [
      "Periapical X-rays",
      "Panoramic option available",
      "Instant digital results",
      "Dentist explanation of findings",
    ],
  },
  {
    icon: Syringe,
    title: "Root Canal Treatment",
    price: "R2 500",
    description:
      "Endodontic treatment to save a badly infected or damaged tooth. We remove the infected pulp, clean the canal, and seal it to preserve your natural tooth and relieve pain.",
    includes: [
      "Local anaesthetic",
      "Infected pulp removal",
      "Canal cleaning and shaping",
      "Temporary or permanent filling",
    ],
  },
  {
    icon: Crown,
    title: "Dental Crowns",
    price: "R3 500",
    description:
      "Custom-made porcelain or ceramic crowns to restore the shape, size, and strength of a damaged tooth. Crowns are colour-matched and designed for a natural, long-lasting fit.",
    includes: [
      "Tooth preparation",
      "Digital impression",
      "Temporary crown fitting",
      "Permanent crown placement",
    ],
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    price: "R300",
    description:
      "Gentle dental care designed for little ones. We create a friendly, fun environment to help children feel comfortable while building good oral health habits from an early age.",
    includes: [
      "Child-friendly examination",
      "Fissure sealants if needed",
      "Fluoride treatment",
      "Fun oral hygiene education",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Mouth Guards",
    price: "R800",
    description:
      "Custom-fitted mouth guards for sports protection or night-time teeth grinding (bruxism). Made from high-quality materials for maximum comfort and protection.",
    includes: [
      "Dental impression",
      "Custom fabrication",
      "Fitting and adjustment",
      "Care instructions",
    ],
  },
  {
    icon: HeartPulse,
    title: "Emergency Dental Care",
    price: "From R400",
    description:
      "Same-day emergency appointments for sudden tooth pain, broken teeth, lost fillings, or dental trauma. We prioritise urgent cases to get you out of pain as quickly as possible.",
    includes: [
      "Priority appointment",
      "Pain assessment",
      "Emergency treatment",
      "Follow-up plan",
    ],
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
            Our Services & Prices
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Quality dental care at transparent, affordable prices. All fees are quoted in South African Rand (ZAR) and include VAT.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={(index % 2) * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg lg:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="font-serif text-xl font-semibold text-card-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-primary">
                      {service.price}
                    </span>
                  </div>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-card-foreground">
                      What is included:
                    </p>
                    <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Note */}
          <AnimateOnScroll delay={0.2}>
            <div className="mt-12 rounded-2xl border border-border bg-secondary p-6 text-center lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-secondary-foreground">
                Medical Aid & Payment Plans
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                We accept most major South African medical aids. For patients without medical aid, we offer flexible payment plans on selected treatments. Please contact us for more details about your specific plan.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
