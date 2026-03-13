import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Olive + Stone",
  description:
    "See our recent interior styling projects across Northern Colorado. Homes, businesses, and short-term rentals styled to feel polished and personal.",
};

const projects = [
  {
    title: "Modern Farmhouse Refresh",
    category: "Home Styling",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    title: "Downtown Loft",
    category: "Room Refresh",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Mountain View Rental",
    category: "Airbnb Styling",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
  {
    title: "Family Living Room",
    category: "Home Styling",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Boutique Office",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    title: "Cozy Guest Suite",
    category: "Airbnb Styling",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    title: "Open Concept Kitchen",
    category: "Home Styling",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
  {
    title: "Master Bedroom Suite",
    category: "Room Refresh",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Styled interior space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16">
          <p className="text-xs tracking-widest uppercase text-olive-light mb-4">
            Our Work
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Portfolio
          </h1>
          <p className="text-cream/80 max-w-lg text-lg font-light">
            Spaces we've styled across Northern Colorado, each one as
            unique as the people who live in them.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs tracking-widest uppercase text-olive-light mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-display text-xl text-cream">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 px-6 lg:px-12 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl text-charcoal italic mb-8">
            Every space has potential. Let us help you find it.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-olive text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-olive-dark transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
