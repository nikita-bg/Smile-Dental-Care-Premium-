"use client";

import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Lindiwe M.",
    text: "We made an appointment at Smile Dental for next day service and had an absolutely amazing experience and paid a very reasonable price. We highly recommend!",
  },
  {
    name: "Johan V.",
    text: "Best dental experience my family has had. The practice is modern and clean, the staff are friendly, and the prices are fair. We have been coming here for three years now.",
  },
  {
    name: "Priya S.",
    text: "Had my teeth whitened here and the results were amazing. The whole process was quick and painless. The reception staff are lovely and always accommodating.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <AnimateOnScroll>
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Patient Love
            </h2>
            <Heart className="mx-auto mt-3 h-6 w-6 fill-accent text-accent" />
          </div>

          <div className="mt-10 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                  {`\u201C${testimonials[current].text}\u201D`}
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-foreground">
                  {`\u2014 ${testimonials[current].name}`}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === current ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
