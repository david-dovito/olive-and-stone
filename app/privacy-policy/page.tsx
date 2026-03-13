import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Olive + Stone",
  description:
    "Privacy policy for Olive + Stone Interior Styling, covering data collection, SMS and email communications, and your rights.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-cream">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-olive mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Privacy Policy
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
              Olive + Stone Interior Styling ("we," "us," or "our") respects
              your privacy and is committed to protecting the personal
              information you share with us. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our
              website at oliveandstoneinterior.com, communicate with us via
              email or SMS, or engage our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-charcoal font-medium">Contact information</span> -
                your name, email address, phone number, and mailing address
              </li>
              <li>
                <span className="text-charcoal font-medium">Project details</span> -
                information about your space, styling preferences, and service
                needs that you provide through our contact form or during
                consultations
              </li>
              <li>
                <span className="text-charcoal font-medium">Communication records</span> -
                emails, text messages, and other correspondence between you and
                our team
              </li>
              <li>
                <span className="text-charcoal font-medium">Website usage data</span> -
                pages visited, time spent on site, browser type, and referring
                URLs, collected through cookies and similar technologies
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and schedule consultations</li>
              <li>Provide and deliver our interior styling services</li>
              <li>
                Send appointment confirmations, project updates, and
                service-related communications via email and SMS
              </li>
              <li>
                Send occasional marketing communications about our services,
                promotions, or design tips (with your consent)
              </li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Email Communications */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Email Communications
            </h2>
            <p className="mb-4">
              When you provide your email address through our contact form or
              during the course of our services, you may receive:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-charcoal font-medium">Transactional emails</span> -
                consultation confirmations, project updates, invoices, and other
                service-related messages
              </li>
              <li>
                <span className="text-charcoal font-medium">Marketing emails</span> -
                design inspiration, promotions, and company updates (only with
                your opt-in consent)
              </li>
            </ul>
            <p className="mt-4">
              You may unsubscribe from marketing emails at any time by clicking
              the "unsubscribe" link included in every marketing email or by
              contacting us directly. Unsubscribing from marketing emails will
              not affect transactional communications related to active
              projects.
            </p>
          </div>

          {/* SMS Communications */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              SMS / Text Message Communications
            </h2>
            <p className="mb-4">
              By providing your phone number and opting in to receive text
              messages from Olive + Stone, you consent to receive SMS
              communications including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appointment reminders and scheduling confirmations</li>
              <li>Project updates and coordination messages</li>
              <li>
                Promotional messages about our services (only with your express
                consent)
              </li>
            </ul>
            <p className="mt-4">
              <span className="text-charcoal font-medium">Message frequency</span> varies
              based on your project and communication preferences. Standard
              message and data rates may apply.
            </p>
            <p className="mt-4">
              <span className="text-charcoal font-medium">To opt out</span> of
              SMS communications at any time, reply STOP to any text message you
              receive from us. After opting out, you will receive a confirmation
              message and no further texts will be sent. You may also contact us
              directly to be removed from our SMS list.
            </p>
            <p className="mt-4">
              <span className="text-charcoal font-medium">For help</span>,
              reply HELP to any text message or contact us at
              Kara@oliveandstoneinterior.com.
            </p>
            <p className="mt-4">
              <span className="text-charcoal font-medium">No sharing of SMS consent</span> -
              your SMS consent and phone number will not be shared with or sold
              to third parties for their marketing purposes, except as required
              by our SMS service provider to deliver messages on our behalf.
            </p>
            <p className="mt-4">
              SMS consent is not a condition of purchasing any service from
              Olive + Stone.
            </p>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <span className="text-charcoal font-medium">Service providers</span> -
                trusted third-party tools we use for email delivery, scheduling,
                payment processing, or website analytics, who are contractually
                obligated to protect your data
              </li>
              <li>
                <span className="text-charcoal font-medium">Legal requirements</span> -
                when required by law, regulation, or legal process
              </li>
              <li>
                <span className="text-charcoal font-medium">Business transfers</span> -
                in connection with a merger, acquisition, or sale of assets,
                with notice provided to you
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of electronic transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Cookies & Tracking
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              improve your browsing experience and analyze site traffic. You can
              control cookie preferences through your browser settings. Disabling
              cookies may affect certain features of our website.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Opt out of SMS communications by replying STOP</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the
              information below.
            </p>
          </div>

          {/* Children */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. We encourage
              you to review this policy periodically.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
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
        </div>
      </section>
    </>
  );
}
