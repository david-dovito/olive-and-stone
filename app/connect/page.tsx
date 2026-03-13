import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect | Olive + Stone",
  description:
    "Book a consultation with Olive + Stone. Interior styling for homes, businesses, and Airbnb rentals in Windsor and Northern Colorado.",
};

export default function Connect() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-olive mb-4">
            Let's Talk
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-charcoal mb-6">
            Connect
          </h1>
          <p className="text-charcoal-light max-w-xl text-lg">
            Whether it's a single room or your entire home, we'd love to hear
            about your space. Reach out and let's start the conversation.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-8">
              Book a Consultation
            </h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="md:pl-12">
            <h2 className="font-display text-2xl text-charcoal mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-olive mb-2">
                  Email
                </p>
                <a
                  href="mailto:Kara@oliveandstoneinterior.com"
                  className="text-charcoal hover:text-olive transition-colors"
                >
                  Kara@oliveandstoneinterior.com
                </a>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-olive mb-2">
                  Location
                </p>
                <p className="text-charcoal">Windsor, Colorado</p>
                <p className="text-charcoal-light text-sm mt-1">
                  Serving all of Northern Colorado
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-olive mb-2">
                  What to Expect
                </p>
                <div className="space-y-4 text-charcoal-light text-sm leading-relaxed">
                  <div className="flex gap-4">
                    <span className="font-display text-olive text-lg">01</span>
                    <div>
                      <p className="text-charcoal font-medium mb-1">
                        Initial Conversation
                      </p>
                      <p>
                        We'll chat about your space, your style, and what you're
                        hoping to achieve.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-display text-olive text-lg">02</span>
                    <div>
                      <p className="text-charcoal font-medium mb-1">
                        In-Home Visit
                      </p>
                      <p>
                        We'll see your space in person, take notes, and start
                        forming ideas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-display text-olive text-lg">03</span>
                    <div>
                      <p className="text-charcoal font-medium mb-1">
                        Styling Day
                      </p>
                      <p>
                        We bring the vision to life, working hands-on to
                        transform your space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
