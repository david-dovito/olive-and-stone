import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-cream mb-4">
              Olive <span className="text-olive-light">+</span> Stone
            </p>
            <p className="text-sm leading-relaxed text-stone">
              Interior styling for homes, businesses, and short-term rentals in Northern Colorado.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-dark mb-4">Navigate</p>
            <ul className="space-y-2">
              {["About", "Portfolio", "Testimonials", "Connect"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-stone hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-dark mb-4">Get in Touch</p>
            <p className="text-sm text-stone mb-2">Windsor, Colorado</p>
            <a
              href="mailto:Kara@oliveandstoneinterior.com"
              className="text-sm text-olive-light hover:text-cream transition-colors"
            >
              Kara@oliveandstoneinterior.com
            </a>
          </div>
        </div>

        <div className="border-t border-charcoal-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-dark">
            &copy; {new Date().getFullYear()} Olive + Stone Interior Styling. All rights reserved.
          </p>
          <p className="text-xs text-stone-dark">
            Website by{" "}
            <a
              href="https://dovito.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream transition-colors"
            >
              Dovito
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
