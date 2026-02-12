"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const WHATSAPP_LINK =
  "https://wa.me/27760000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Smile%20Dental%20Care.";

export function CtaBanner() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Image grid */}
        <AnimateOnScroll>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/service-checkup.jpg"
                alt="Dental care"
                width={500}
                height={300}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/service-cleaning.jpg"
                alt="Professional cleaning"
                width={500}
                height={300}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/service-whitening.jpg"
                alt="Teeth whitening"
                width={500}
                height={300}
                className="h-48 w-full object-cover md:h-56"
              />
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">Find Smile Dental Care near you!</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Located in the heart of Nigel, Gauteng. Equipped with the latest technology, relaxing spaces, and a team that treats you like a person, not a patient file.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Book Your Visit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                See Location
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
