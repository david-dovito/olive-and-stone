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

      {/* Team */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-olive mb-4 text-center">
            Meet the Team
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-16 text-center">
            The people behind the spaces
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Kara Rosen",
                title: "Co-Founder",
                email: "Kara@oliveandstoneinterior.com",
                image:
                  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80",
              },
              {
                name: "Fredricka Coleman",
                title: "Co-Founder",
                email: "Fredricka@oliveandstoneinterior.com",
                image: "/images/fredricka-coleman.jpg",
              },
            ].map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-64 h-80 mx-auto mb-6 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-sm tracking-widest uppercase text-olive mb-3">
                  {member.title}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-charcoal-light hover:text-olive transition-colors"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
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
                space and how they want it to feel, making sure the style
                reflects their personality and vision, not just ours.
              </p>
              <p>
                We specialize in starting with what you already have, finding
                ways to repurpose and rearrange before we begin shopping.
                Sometimes that means working with what our clients already own
                and rearranging things in a way that makes the space feel fresh
                again. Other times it means bringing in a few new pieces to
                help everything come together.
              </p>
              <p>
                We also love working with Airbnb hosts who want their spaces to
                stand out and create a great first impression for guests. We
                style homes so they photograph beautifully, refresh photos that
                may feel dated, and help update listing descriptions so they
                better capture the feel of the space.
              </p>
              <p>
                At the heart of it, we love helping people see the potential in
                a space, whether it's bringing together something that feels
                unfinished or styling a space that's starting out as a blank
                slate.
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
      <section className="py-24 px-6 lg:px-12">
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
                Every space reflects your style and vision. We take the time to
                understand the people who use the space, making sure everything
                feels comfortable, inviting, and personal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-px h-12 bg-olive mx-auto mb-6" />
              <h3 className="font-display text-xl text-charcoal mb-4">
                Full-Service Styling
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Homes, businesses, and Airbnb listings - polished,
                photographed, and ready to shine. We handle everything from
                restyling to photography and listing descriptions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-px h-12 bg-olive mx-auto mb-6" />
              <h3 className="font-display text-xl text-charcoal mb-4">
                Stress-Free Process
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Hands-on, adaptable, and approachable every step of the way.
                We're friendly, reliable, and easy to collaborate with,
                delivering results that feel personal and polished.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-olive mb-4">
                Who We Serve
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">
                Northern Colorado, from Windsor to Fort Collins and beyond
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                We work with homeowners, Airbnb hosts, businesses, corporate
                clients, general contractors, and property managers throughout
                Northern Colorado. Whether you're in a new build or an
                established neighborhood, we bring our styling expertise
                directly to you.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-10">
                Our clients value attention to detail, consistent quality, and a
                team they can trust. They want spaces that look polished, feel
                personal, and are comfortable and inviting.
              </p>
              <Link
                href="/connect"
                className="inline-block bg-olive text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-olive-dark transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80"
                alt="Styled living space in Northern Colorado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
