"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const services = [
  {
    title: "First Visit",
    description:
      "Easy check-in, short waits, and beautiful, comfy surroundings. Come in to experience the Smile Dental difference.",
    image: "/images/service-checkup.jpg",
    price: "R350",
  },
  {
    title: "Professional Cleaning",
    description:
      "Faster, brighter. More affordable with better results. Thousands of satisfied smiles.",
    image: "/images/service-cleaning.jpg",
    price: "R450",
  },
  {
    title: "Teeth Whitening",
    description:
      "Same-day care from a team of friendly experts. Leave our practice with a brighter smile.",
    image: "/images/service-whitening.jpg",
    price: "R1 800",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">Dental Services at Smile Dental</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {"We're your go-to for general dentistry, cosmetic treatments, and restorative care."}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} delay={index * 0.15}>
              <div className="group flex flex-col">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={350}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                  >
                    {`Book Now - From ${service.price}`}
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              View All Services & Prices
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
