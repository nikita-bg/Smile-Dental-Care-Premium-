import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/27760000000?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Smile%20Dental%20Care.";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold">Smile Dental</h3>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Your trusted family dental practice in Nigel, Gauteng. Judgment-free care from expert dentists, delivering the best patient experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Quick Links</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-background/70">
              <li>
                <Link href="/" className="transition-colors hover:text-background">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-background">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-background">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-background">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Contact Us</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/50" />
                <span>123 Hendrik Verwoerd St, Nigel, Gauteng, 1490</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-background/50" />
                <a href="tel:+27110000000" className="transition-colors hover:text-background">
                  011 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-background/50" />
                <a href="mailto:info@smiledentalcare.co.za" className="transition-colors hover:text-background">
                  info@smiledentalcare.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Practice Hours</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-background/50" />
                <span>Mon - Fri: 08:00 - 17:00</span>
              </li>
              <li className="pl-6">Sat: 08:00 - 13:00</li>
              <li className="pl-6">Sun: Closed</li>
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-6 text-center text-sm text-background/40">
          <p>
            {"© "}
            {new Date().getFullYear()}
            {" Smile Dental Care. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
