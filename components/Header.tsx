"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/connect", label: "Connect" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-warm-grey/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Wordmark */}
        <Link href="/" className="font-display text-2xl tracking-wide text-charcoal hover:text-olive transition-colors">
          Olive <span className="text-olive">+</span> Stone
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href
                    ? "text-olive font-medium"
                    : "text-charcoal-light hover:text-olive"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-charcoal transition-transform ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-charcoal transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warm-white border-b border-warm-grey/50">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-widest uppercase ${
                    pathname === link.href ? "text-olive font-medium" : "text-charcoal-light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
