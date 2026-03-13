import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Olive + Stone",
  description:
    "Terms of service for Olive + Stone Interior Styling, including SMS messaging terms, service agreements, and liability limitations.",
};

export default function TermsOfService() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-olive mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Terms of Service
          </h1>
          <p className="text-charcoal-light">
            Last updated: March 13, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-12 text-charcoal-light leading-relaxed">
          {/* Intro */}
          <div>
            <p>
              Welcome to oliveandstoneinterior.com, operated by Olive + Stone
              Interior Styling ("we," "us," or "our"). By accessing or using our
              website and services, you agree to be bound by these Terms of
              Service. If you do not agree with these terms, please do not use
              our website or services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Our Services
            </h2>
            <p>
              Olive + Stone provides interior styling services including home
              styling, room refreshes, Airbnb and short-term rental styling,
              commercial styling, and staging for the Northern Colorado area.
              Specific services, timelines, and pricing are agreed upon between
              the client and Olive + Stone prior to the start of any project.
            </p>
          </div>

          {/* Use of Website */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Use of Website
            </h2>
            <p className="mb-4">You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Infringe on the rights of others</li>
              <li>Restrict or inhibit anyone else's use of the website</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Introduce viruses or other harmful materials</li>
            </ul>
          </div>

          {/* Consultations & Bookings */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Consultations & Bookings
            </h2>
            <p>
              Submitting a contact form or inquiry through our website does not
              constitute a binding agreement for services. All project
              agreements, including scope of work, pricing, and timelines, will
              be confirmed in writing between you and Olive + Stone before work
              begins. We reserve the right to decline any project at our
              discretion.
            </p>
          </div>

          {/* SMS Messaging Terms */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              SMS Messaging Terms
            </h2>
            <p className="mb-4">
              By opting in to receive SMS messages from Olive + Stone, you agree
              to the following terms:
            </p>

            <h3 className="text-charcoal font-medium mt-6 mb-2">
              Transactional Messages
            </h3>
            <p>
              If you consent to transactional SMS messages, you may receive text
              messages from Olive + Stone related to appointment scheduling,
              project coordination, and service-related updates. These messages
              are not promotional in nature.
            </p>

            <h3 className="text-charcoal font-medium mt-6 mb-2">
              Marketing Messages
            </h3>
            <p>
              If you separately consent to marketing SMS messages, you may
              receive promotional messages from Olive + Stone including design
              tips, special offers, and company updates. Marketing consent is
              entirely optional and is not a condition of purchasing any service
              or submitting an inquiry.
            </p>

            <h3 className="text-charcoal font-medium mt-6 mb-2">
              Message Frequency & Rates
            </h3>
            <p>
              Message frequency varies based on your project status and
              communication preferences. Standard message and data rates may
              apply depending on your mobile carrier and plan.
            </p>

            <h3 className="text-charcoal font-medium mt-6 mb-2">
              Opting Out
            </h3>
            <p>
              You may opt out of SMS messages at any time by replying STOP to
              any message received from Olive + Stone. After opting out, you
              will receive a single confirmation message. No further messages
              will be sent unless you re-subscribe.
            </p>

            <h3 className="text-charcoal font-medium mt-6 mb-2">
              Help
            </h3>
            <p>
              For assistance, reply HELP to any message or contact us at{" "}
              <a
                href="mailto:Kara@oliveandstoneinterior.com"
                className="text-olive hover:text-olive-dark transition-colors"
              >
                Kara@oliveandstoneinterior.com
              </a>
              .
            </p>

            <h3 className="text-charcoal font-medium mt-6 mb-2">
              No Sharing of SMS Consent
            </h3>
            <p>
              Your SMS consent and phone number will not be shared with or sold
              to third parties for their marketing purposes. We may share your
              information with our SMS service provider solely for the purpose
              of delivering messages on our behalf.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos, and
              design elements, is the property of Olive + Stone Interior Styling
              or its content suppliers and is protected by applicable copyright
              and trademark laws. You may not reproduce, distribute, or create
              derivative works from any content on this website without our
              written permission.
            </p>
          </div>

          {/* Photography & Portfolio */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Photography & Portfolio Use
            </h2>
            <p>
              By engaging our services, you grant Olive + Stone permission to
              photograph completed projects and use those photographs on our
              website, social media, and marketing materials unless otherwise
              agreed upon in writing prior to the start of the project.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Limitation of Liability
            </h2>
            <p>
              Olive + Stone Interior Styling provides this website and its
              content on an "as is" basis. We make no warranties, express or
              implied, regarding the accuracy or completeness of the information
              on this website. To the fullest extent permitted by law, Olive +
              Stone shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of this website or
              our services.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of the State of Colorado. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of the
              courts located in Weld County, Colorado.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms of Service at any time.
              Changes will be posted on this page with an updated revision date.
              Continued use of our website after changes are posted constitutes
              your acceptance of the revised terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact
              us:
            </p>
            <div className="space-y-1">
              <p className="text-charcoal font-medium">
                Olive + Stone Interior Styling
              </p>
              <p>Windsor, Colorado</p>
              <p>
                <a
                  href="mailto:Kara@oliveandstoneinterior.com"
                  className="text-olive hover:text-olive-dark transition-colors"
                >
                  Kara@oliveandstoneinterior.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:Fredricka@oliveandstoneinterior.com"
                  className="text-olive hover:text-olive-dark transition-colors"
                >
                  Fredricka@oliveandstoneinterior.com
                </a>
              </p>
            </div>
          </div>

          {/* Cross-link */}
          <div className="pt-4 border-t border-warm-grey">
            <p className="text-xs text-stone-dark">
              See also our{" "}
              <Link
                href="/privacy-policy"
                className="text-olive hover:text-olive-dark underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
