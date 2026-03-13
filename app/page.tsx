import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Home Styling",
    description:
      "We work with what you have, rearranging and refreshing your space before bringing in anything new.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    title: "Room Refresh",
    description:
      "A single room can change the feel of your entire home. Let us help you see its potential.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    title: "Airbnb & Rentals",
    description:
      "Stand out from the listing. We style, photograph, and help craft descriptions that book.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1616137466211-f736a1f05b98?w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1920&q=80"
          alt="Beautifully styled living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative z-10 text-center text-cream px-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide">
            Olive <span className="text-olive-light">+</span> Stone
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider mb-10 max-w-lg mx-auto">
            Fresh, polished style for every space
          </p>
          <Link
            href="/connect"
            className="inline-block border border-cream/80 text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-olive mb-6">
            Windsor, Colorado
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-8 leading-tight">
            We help you see the potential in your space
          </h2>
          <p className="text-charcoal-light leading-relaxed text-lg">
            Whether it's bringing together something that feels unfinished or
            styling a space from a blank slate, we combine professional design
            knowledge with over 20 years of hands-on experience to create rooms
            that feel like you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-olive mb-4 text-center">
            What We Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-16 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="relative h-80 mb-6 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-warm-white">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-display text-2xl md:text-3xl text-charcoal italic leading-relaxed mb-6">
            "We listen first. Every space should reflect your style, your
            story, and your vision."
          </blockquote>
          <p className="text-xs tracking-widest uppercase text-olive">
            Olive + Stone
          </p>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="px-6 lg:px-12 py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-olive mb-4">
                Our Work
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-sm tracking-widest uppercase text-olive hover:text-olive-dark transition-colors hidden md:block"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={`Portfolio project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/portfolio"
              className="text-sm tracking-widest uppercase text-olive"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-cream mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-stone mb-10 text-lg">
            Let's start with a conversation about what you're looking for.
          </p>
          <Link
            href="/connect"
            className="inline-block border border-cream/60 text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
