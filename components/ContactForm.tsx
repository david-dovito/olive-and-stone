"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Construct mailto link as simple booking mechanism
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`New Inquiry from ${name} - ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:Kara@oliveandstoneinterior.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="font-display text-3xl text-charcoal mb-4">Thank you!</h3>
        <p className="text-charcoal-light">
          Your email client should have opened. We look forward to hearing from you.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-olive hover:text-olive-dark underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-xs tracking-widest uppercase text-charcoal-light mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border-b border-stone bg-transparent py-3 text-charcoal placeholder:text-stone focus:border-olive focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs tracking-widest uppercase text-charcoal-light mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border-b border-stone bg-transparent py-3 text-charcoal placeholder:text-stone focus:border-olive focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-xs tracking-widest uppercase text-charcoal-light mb-2">
          Service
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full border-b border-stone bg-transparent py-3 text-charcoal focus:border-olive focus:outline-none transition-colors"
        >
          <option value="">Select a service</option>
          <option value="Home Styling">Home Styling</option>
          <option value="Room Refresh">Room Refresh</option>
          <option value="Airbnb / Short-Term Rental">Airbnb / Short-Term Rental</option>
          <option value="Business / Commercial">Business / Commercial</option>
          <option value="Staging">Staging</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-charcoal-light mb-2">
          Tell us about your space
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full border-b border-stone bg-transparent py-3 text-charcoal placeholder:text-stone focus:border-olive focus:outline-none transition-colors resize-none"
          placeholder="What are you looking to transform?"
        />
      </div>

      <button
        type="submit"
        className="bg-olive text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-olive-dark transition-colors"
      >
        Book a Consultation
      </button>
    </form>
  );
}
