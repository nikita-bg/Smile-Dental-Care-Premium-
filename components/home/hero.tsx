"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/27760000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Smile%20Dental%20Care.";

export function Hero() {
  return (
    <section className="bg-background">
      {/* Text content - centered */}
      <div className="mx-auto max-w-4xl px-4 pb-4 pt-16 text-center lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              {"A better "}
              <em className="italic">dental</em>
              {" experience,"}
              <br />
              {"by "}
              <em className="italic">design.</em>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Judgment-free care from expert dentists, delivering the best patient experience in Nigel and Gauteng.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Book Online
            </a>
            <a
              href="tel:+27110000000"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Call to Book 011 000 0000
            </a>
          </div>
          {/* Star rating */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Over 1,000 five star reviews
            </span>
          </div>
        </motion.div>
      </div>

      {/* Large hero image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mx-auto max-w-7xl px-4 pb-16 lg:px-8"
      >
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-dental.jpg"
            alt="Modern dental clinic interior at Smile Dental Care"
            width={1400}
            height={550}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
