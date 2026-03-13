import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Home Styling",
    description:
      "From a single room to your whole home, we work with what you have first, repurposing and rearranging before bringing in anything new. The result feels fresh, personal, and unmistakably yours.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    title: "Airbnb & Short-Term Rentals",
    description:
      "We go beyond styling. We help your space photograph beautifully, refresh listing photos that feel dated, and update descriptions so your property truly stands out and books.",
    image:
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
  },
  {
    title: "Business & Commercial",
    description:
      "Create a space that reflects your brand and impresses every client who walks in. We style offices, lobbies, and retail spaces with the same attention to detail we bring to homes.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    title: "Staging & New Builds",
    description:
      "For real estate companies, builders, and property managers who need spaces that show beautifully and sell. We create that polished, move-in-ready feeling buyers respond to.",
    image:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&q=80",
  },
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=80",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
          alt="Beautifully styled living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/40" />
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
            Whether you're finishing a room that never quite came together or
            starting fresh with a blank slate, we combine professional design
            knowledge with over 20 years of hands-on experience to create
            spaces that feel warm, welcoming, and thoughtfully put together.
            We take the time to understand how you use your space and how you
            want it to feel, making sure the style reflects your personality
            and vision.
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
          <div className="grid md:grid-cols-2 gap-8">
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
