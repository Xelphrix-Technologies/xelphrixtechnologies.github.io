import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Xelphrix Technologies",
  description:
    "Read the Privacy Policy of Xelphrix Technologies outlining data collection, usage, cookies, analytics tracking, and data protection practices.",
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-[#25343F] px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last Updated: February 22, 2026</p>

        <section>
          <p>
            Xelphrix Technologies (“Company”, “We”, “Our”, or “Us”) values your privacy.
            This Privacy Policy explains how we collect, use, disclose, and protect
            your information when you visit our website
            (https://www.xelphrixtechnologies.com) or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

          <h3 className="font-semibold mt-4">Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide,
            including:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Name</li>
            <li>Inquiry Details</li>
          </ul>

          <h3 className="font-semibold mt-4">Usage Data</h3>
          <p>
            We automatically collect certain information when you visit our
            website, such as:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Device Information</li>
            <li>Pages Visited</li>
            <li>Time Spent on Pages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Use of Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Respond to inquiries and consultation requests</li>
            <li>Provide and improve our services</li>
            <li>Analyze website performance</li>
            <li>Enhance security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Google Analytics</h2>
          <p>
            We use Google Analytics, a web analytics service provided by
            Google LLC, to understand how visitors interact with our website.
          </p>
          <p className="mt-2">
            Google Analytics may collect information such as your IP address,
            device information, browsing behavior, and referring pages.
            This data helps us analyze traffic patterns and improve user experience.
          </p>
          <p className="mt-2">
            Google may use this information in accordance with its own Privacy Policy:
            https://policies.google.com/privacy
          </p>
          <p className="mt-2">
            You can opt out of Google Analytics tracking by installing the
            Google Analytics Opt-Out Browser Add-on:
            https://tools.google.com/dlpage/gaoptout
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Cookies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to
            enhance user experience and analyze traffic.
          </p>
          <p className="mt-2">
            You can disable cookies through your browser settings.
            Please note that some website features may not function properly
            if cookies are disabled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Trusted service providers (e.g., hosting providers)</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Data Security</h2>
          <p>
            We implement reasonable technical and organizational measures
            to protect your personal data. However, no method of transmission
            over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill
            the purposes outlined in this policy or to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            information by contacting us at:
          </p>
          <p className="mt-2 font-medium">
            info@xelphrixtechnologies.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Children’s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 16.
            We do not knowingly collect data from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically.
            Changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">11. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please contact:
          </p>
          <p className="mt-2">
            Xelphrix Technologies<br />
            South West Delhi, Delhi, India<br />
            Email: info@xelphrixtechnologies.com
          </p>
        </section>

      </div>
    </div>
  );
}