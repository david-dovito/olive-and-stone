import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Olive + Stone",
  description:
    "Hear from homeowners, Airbnb hosts, and businesses who trusted Olive + Stone to style their spaces in Northern Colorado.",
};

const testimonials = [
  {
    quote:
      "They completely transformed our living room using pieces we already had. I couldn't believe it was the same space. It finally feels like us.",
    name: "Sarah M.",
    project: "Home Styling, Windsor",
  },
  {
    quote:
      "Our Airbnb bookings increased noticeably after Olive + Stone restyled the space and updated our photos. The listing looks completely different.",
    name: "James & Lisa K.",
    project: "Airbnb Styling, Fort Collins",
  },
  {
    quote:
      "Working with them felt like having a friend help you decorate, except this friend has incredible taste and 20 years of experience.",
    name: "Rachel D.",
    project: "Room Refresh, Loveland",
  },
  {
    quote:
      "They took the time to understand our brand and created an office space that impresses every client who walks in. Professional and warm at the same time.",
    name: "Mark T.",
    project: "Commercial Styling, Greeley",
  },
  {
    quote:
      "I was overwhelmed trying to pull my home together after moving. They made it effortless and the result is beautiful. I actually look forward to coming home now.",
    name: "Emily R.",
    project: "Full Home Styling, Timnath",
  },
  {
    quote:
      "The attention to detail is what sets them apart. Every pillow, every shelf, every corner was considered. Nothing felt random or forced.",
    name: "Nicole & Ryan P.",
    project: "Home Styling, Windsor",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-olive mb-4">
            Kind Words
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-charcoal mb-6">
            Testimonials
          </h1>
          <p className="text-charcoal-light max-w-xl text-lg">
            Nothing means more to us than knowing our clients love their spaces.
            Here's what they have to say.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border-l-2 border-olive/30 pl-8 py-2"
              >
                <blockquote className="font-display text-lg text-charcoal italic leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="text-xs text-olive tracking-wide">{t.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-6">
            Your space could be next
          </h2>
          <p className="text-stone mb-10">
            We'd love to hear about your project and see how we can help.
          </p>
          <Link
            href="/connect"
            className="inline-block border border-cream/60 text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
