"use client";

import Image from "next/image";
import { Award, GraduationCap, Users, Heart } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const certifications = [
  "Health Professions Council of South Africa (HPCSA) Registered",
  "South African Dental Association (SADA) Member",
  "BChD - University of the Western Cape",
  "Continuous Professional Development (CPD) Compliant",
  "Infection Control & Sterilisation Certified",
  "Digital Dentistry Advanced Training",
];

const teamMembers = [
  {
    name: "Dr. Rajesh Naidoo",
    role: "Principal Dentist",
    bio: "With over 15 years of experience, Dr. Naidoo leads our practice with a passion for patient-centred care. He graduated from the University of the Western Cape and has a special interest in restorative and cosmetic dentistry.",
  },
  {
    name: "Dr. Thandi Molefe",
    role: "Associate Dentist",
    bio: "Dr. Molefe joined our team in 2019 and brings expertise in paediatric dentistry and orthodontics. She is known for her gentle approach, especially with nervous patients and children.",
  },
  {
    name: "Sister Anelisa Dlamini",
    role: "Dental Hygienist",
    bio: "Anelisa is our dedicated dental hygienist with a focus on preventive care. She ensures every patient leaves with a sparkling smile and the knowledge to maintain it at home.",
  },
  {
    name: "Karen van der Merwe",
    role: "Practice Manager",
    bio: "Karen keeps the practice running smoothly. From scheduling appointments to handling medical aid claims, she ensures every patient has a seamless experience from start to finish.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient First",
    description:
      "Every decision we make is guided by what is best for our patients. We listen, we care, and we treat you like family.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We invest in the latest technology and continuous training to deliver dental care of the highest standard.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "We believe in empowering our patients with knowledge about their oral health so they can make informed decisions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "As a proudly Nigel-based practice, we are committed to serving our local community and making dental care accessible to all.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
            About Smile Dental Care
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Proudly caring for smiles in Nigel and the greater Ekurhuleni area since 2009.
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateOnScroll direction="left">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/clinic-exterior.jpg"
                  alt="Smile Dental Care clinic in Nigel, Gauteng"
                  width={640}
                  height={440}
                  className="h-auto w-full object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  <span className="text-balance">A Practice Built on Trust</span>
                </h2>
                <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
                  <p>
                    Smile Dental Care was founded in 2009 by Dr. Rajesh Naidoo with a simple mission: to provide the people of Nigel and surrounding areas with honest, affordable, and high-quality dental care.
                  </p>
                  <p>
                    What started as a single-chair practice has grown into a modern, fully equipped dental clinic serving thousands of patients across Gauteng. Over the years, we have built a reputation for gentle, patient-focused care and have become one of the most trusted dental practices in the Ekurhuleni region.
                  </p>
                  <p>
                    Our practice is equipped with digital X-ray technology, modern sterilisation systems, and comfortable treatment rooms designed to put even the most anxious patients at ease.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
                <span className="text-balance">What Drives Us Every Day</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 0.1}>
                <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Dr Profile */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateOnScroll direction="left">
              <div className="mx-auto max-w-sm overflow-hidden rounded-2xl">
                <Image
                  src="/images/doctor-placeholder.jpg"
                  alt="Dr. Rajesh Naidoo, principal dentist at Smile Dental Care"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Meet Dr. Rajesh Naidoo
                </h2>
                <p className="mt-2 text-lg font-medium text-accent">
                  BChD (UWC), HPCSA Registered
                </p>
                <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
                  <p>
                    Dr. Naidoo graduated from the University of the Western Cape in 2006 and has dedicated his career to providing exceptional dental care. After gaining experience at several practices across Gauteng, he established Smile Dental Care in Nigel in 2009.
                  </p>
                  <p>
                    He has a special interest in restorative dentistry and cosmetic procedures, and regularly attends local and international conferences to stay at the forefront of dental techniques.
                  </p>
                  <p>
                    Outside the practice, Dr. Naidoo is an active member of the Nigel community, participating in oral health awareness campaigns at local schools and community centres.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
                <span className="text-balance">The People Behind Your Smile</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our dedicated team of dental professionals works together to ensure you receive the best possible care in a warm, welcoming environment.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <AnimateOnScroll key={member.name} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    <span className="text-xl font-bold text-primary">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">{member.role}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/dental-team.jpg"
                alt="The Smile Dental Care team"
                width={1200}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
                <span className="text-balance">Certifications & Memberships</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We are committed to meeting the highest professional and regulatory standards in South African dentistry.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <AnimateOnScroll key={cert} delay={index * 0.08}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">
                    {cert}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
