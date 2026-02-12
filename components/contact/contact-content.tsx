"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const WHATSAPP_LINK =
  "https://wa.me/27760000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Smile%20Dental%20Care.";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We would love to hear from you. Get in touch to book an appointment or ask us anything about our dental services.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Info */}
            <AnimateOnScroll direction="left">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  The fastest way to book an appointment is via WhatsApp. You can also call us during practice hours or fill in the contact form and we will get back to you within 24 hours.
                </p>

                {/* WhatsApp CTA */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                </a>

                {/* Contact details */}
                <div className="mt-10 flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        123 Hendrik Verwoerd Street
                        <br />
                        Nigel, Gauteng, 1490
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a
                        href="tel:+27110000000"
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        011 000 0000
                      </a>
                      <a
                        href="tel:+27760000000"
                        className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        076 000 0000 (WhatsApp)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:info@smiledentalcare.co.za"
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        info@smiledentalcare.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Practice Hours
                      </h3>
                      <div className="mt-1 text-sm text-muted-foreground">
                        <p>Monday - Friday: 08:00 - 17:00</p>
                        <p>Saturday: 08:00 - 13:00</p>
                        <p>Sunday & Public Holidays: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right - Form */}
            <AnimateOnScroll direction="right">
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-serif text-xl font-bold text-card-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill in the form below and we will get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xl bg-secondary p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                      <Send className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for reaching out. We will get back to you within 24 hours. For urgent matters, please contact us on WhatsApp.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder="e.g. Sipho"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-1.5 block text-sm font-medium text-card-foreground"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder="e.g. Ndlovu"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                        placeholder="you@example.co.za"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                        placeholder="076 000 0000"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        Service Enquiry
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                      >
                        <option value="">Select a service (optional)</option>
                        <option value="checkup">Dental Check-up</option>
                        <option value="cleaning">Professional Cleaning</option>
                        <option value="filling">Dental Filling</option>
                        <option value="extraction">Tooth Extraction</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="braces">Braces Consultation</option>
                        <option value="emergency">Emergency Dental Care</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-card-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="font-serif text-2xl font-bold text-secondary-foreground md:text-3xl">
                Find Us in Nigel
              </h2>
              <p className="mt-2 text-muted-foreground">
                Conveniently located on Hendrik Verwoerd Street with ample parking available.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Smile Dental Care location in Nigel, Gauteng"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28625.755363891106!2d28.667!3d-26.438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956d1095d8b1d3%3A0x4b1f3a0f7e7db86!2sNigel%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
