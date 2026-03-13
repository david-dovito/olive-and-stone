import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Olive + Stone",
  description:
    "Over 20 years of interior styling experience. We listen first, style second, and make sure every space reflects the people who live in it.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
          alt="Styled interior space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16">
          <p className="text-xs tracking-widest uppercase text-olive-light mb-4">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-cream">
            About Olive + Stone
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8 leading-tight">
              We help people create spaces that feel like home
            </h2>
            <div className="space-y-5 text-charcoal-light leading-relaxed">
              <p>
                With over 20 years in home design, we've learned that the best
                spaces start with listening. Before we move a single piece of
                furniture, we take the time to understand the people who use the
                space and how they want it to feel.
              </p>
              <p>
                We specialize in starting with what you already have, finding
                ways to repurpose and rearrange before we begin shopping. The
                result is a space that feels fresh, intentional, and unmistakably
                yours.
              </p>
              <p>
                Whether we're styling a family home, refreshing a business
                lobby, or preparing an Airbnb listing that photographs
                beautifully, our approach is always the same: collaborative,
                thoughtful, and personal.
              </p>
            </div>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80"
              alt="Interior styling details"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-olive mb-4 text-center">
            How We Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-16 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-px h-12 bg-olive mx-auto mb-6" />
              <h3 className="font-display text-xl text-charcoal mb-4">
                We Listen First
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Every project begins with understanding your vision, your style,
                and how you live in your space. The design reflects you, not us.
              </p>
            </div>
            <div className="text-center">
              <div className="w-px h-12 bg-olive mx-auto mb-6" />
              <h3 className="font-display text-xl text-charcoal mb-4">
                Start With What You Have
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                We repurpose and reimagine your existing pieces before
                introducing anything new. It's more sustainable, more personal,
                and often more beautiful.
              </p>
            </div>
            <div className="text-center">
              <div className="w-px h-12 bg-olive mx-auto mb-6" />
              <h3 className="font-display text-xl text-charcoal mb-4">
                Stress-Free Process
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Hands-on, adaptable, and approachable every step of the way. We
                make the process enjoyable, not overwhelming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-olive mb-6">
            Northern Colorado
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">
            Proudly serving Windsor and the surrounding communities
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10">
            From Fort Collins to Loveland and everywhere in between, we bring
            our styling expertise directly to you. Homeowners, Airbnb hosts,
            businesses, builders, and property managers trust us to create
            spaces that are polished, warm, and welcoming.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-olive text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-olive-dark transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
