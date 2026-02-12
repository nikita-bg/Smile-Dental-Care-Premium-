"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const WHATSAPP_LINK =
  "https://wa.me/27760000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Smile%20Dental%20Care.";

export function WhyChooseUs() {
  return (
    <>
      {/* Medical Aid Accepted - green/mint banner */}
      <section className="bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
              Medical Aid Accepted
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              {["Discovery", "Bonitas", "Momentum", "GEMS", "Medihelp", "Fedhealth"].map(
                (name) => (
                  <span
                    key={name}
                    className="rounded-full border border-secondary-foreground/10 bg-card px-6 py-2.5 text-sm font-semibold text-secondary-foreground"
                  >
                    {name}
                  </span>
                )
              )}
            </div>

            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {"Don't See Your Medical Aid?"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We accept most major plans. We also offer affordable cash rates and payment plans so everyone can get the dental care they need.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About / Fresh approach section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateOnScroll direction="left">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/clinic-exterior.jpg"
                  alt="Inside the Smile Dental Care clinic"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  <span className="text-balance">A Fresh Approach to Dentistry</span>
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Smile Dental Care is redefining what it means to go to the dentist. Whether you need a cleaning, Invisalign, or a crown, our expert team delivers high-quality care in a friendly, judgment-free environment, at convenient locations across Nigel and Gauteng.
                </p>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  What to Expect from Your First Visit
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  From the moment you walk in, you will notice the difference. Modern equipment, warm staff, and transparent pricing. No surprises, no judgment, just great dental care.
                </p>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    {"Learn More \u2192"}
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
