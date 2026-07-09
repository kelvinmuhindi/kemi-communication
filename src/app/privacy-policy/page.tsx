import { buildMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Kemi Communication Ltd. Learn how we collect, use and protect your personal data in compliance with the Kenya Data Protection Act 2019.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="1 July 2026">
      <p>
        This Privacy Policy explains how <strong>Kemi Communication Ltd</strong>{" "}
        (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;), registered in Kenya
        (Registration No. {siteConfig.regNumber}), collects, uses, stores and
        protects your personal data when you visit{" "}
        <a href={siteConfig.url}>{siteConfig.url}</a> or interact with our
        services.
      </p>
      <p>
        This policy is issued in compliance with the{" "}
        <strong>Kenya Data Protection Act, 2019 (No. 24 of 2019)</strong> and
        the Data Protection (General) Regulations, 2021.
      </p>

      <hr />

      <h2>1. Data Controller</h2>
      <p>
        Kemi Communication Ltd is the data controller responsible for your
        personal data. Our contact details are:
      </p>
      <ul>
        <li><strong>Address:</strong> {siteConfig.address}</li>
        <li><strong>Phone:</strong> {siteConfig.phone}</li>
        <li><strong>Email:</strong> {siteConfig.email}</li>
      </ul>

      <h2>2. Personal Data We Collect</h2>
      <p>We collect personal data only when you actively provide it to us through our website forms. This includes:</p>
      <ul>
        <li><strong>Contact form:</strong> name, email address and your message</li>
        <li><strong>Quote request form:</strong> name, email, phone number, company name, cargo details and route information</li>
        <li><strong>Career application form:</strong> name, email, phone number and position applied for</li>
        <li><strong>Partner application form:</strong> name, email, phone number, vehicle details, plate numbers and route availability</li>
      </ul>
      <p>
        We do not collect sensitive personal data (as defined under Section 2 of
        the Data Protection Act) and we do not collect data from persons under
        the age of 18.
      </p>

      <h2>3. Lawful Basis for Processing</h2>
      <p>We process your personal data on the following lawful bases under Section 30 of the Data Protection Act:</p>
      <ul>
        <li><strong>Contractual necessity:</strong> to respond to service enquiries and process quote or partner requests</li>
        <li><strong>Legitimate interests:</strong> to communicate with job applicants and to improve our services</li>
        <li><strong>Consent:</strong> where you have voluntarily submitted information via our forms</li>
      </ul>

      <h2>4. How We Use Your Data</h2>
      <p>We use the personal data you provide solely to:</p>
      <ul>
        <li>Respond to your enquiry, quote request or job application</li>
        <li>Communicate with you regarding our freight and logistics services</li>
        <li>Process and follow up on partner vehicle registration applications</li>
        <li>Comply with legal and regulatory obligations</li>
      </ul>
      <p>We do not use your data for automated decision-making or profiling.</p>

      <h2>5. Data Sharing and Third Parties</h2>
      <p>
        We do not sell, rent or trade your personal data. We share your data
        only with trusted third-party service providers who process it on our
        behalf and are bound by confidentiality obligations:
      </p>
      <ul>
        <li>
          <strong>Resend Inc.</strong> — our email delivery provider, used to
          receive form submissions. Data is transmitted securely. Resend&apos;s
          privacy policy is available at{" "}
          <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            resend.com/legal/privacy-policy
          </a>
        </li>
        <li>
          <strong>Vercel Inc.</strong> — our website hosting provider. Vercel
          may process request metadata (IP address, browser type) as part of
          serving the website
        </li>
        <li>
          <strong>Google LLC</strong> — we use Google Analytics 4 to understand
          how visitors use our website. Google Analytics collects anonymised
          usage data via cookies
        </li>
      </ul>
      <p>
        Where data is transferred outside Kenya, we take reasonable steps to
        ensure it receives a comparable level of protection consistent with Part
        V of the Data Protection Act.
      </p>

      <h2>6. Cookies and Analytics</h2>
      <p>
        Our website uses Google Analytics 4, which sets cookies to collect
        anonymised data about site visits, pages viewed and traffic sources. No
        personally identifiable information is included in this data. You can
        opt out of Google Analytics tracking by installing the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal data submitted through our forms for no longer than{" "}
        <strong>12 months</strong> from the date of submission, unless a longer
        retention period is required by law or where there is an ongoing
        business relationship. Data is securely deleted once it is no longer
        needed.
      </p>

      <h2>8. Your Rights as a Data Subject</h2>
      <p>
        Under the Kenya Data Protection Act 2019, you have the following rights
        in relation to your personal data:
      </p>
      <ul>
        <li><strong>Right of access:</strong> to obtain a copy of your personal data we hold</li>
        <li><strong>Right to rectification:</strong> to have inaccurate data corrected</li>
        <li><strong>Right to erasure:</strong> to request deletion of your data where there is no lawful basis to retain it</li>
        <li><strong>Right to object:</strong> to object to processing based on legitimate interests</li>
        <li><strong>Right to data portability:</strong> to receive your data in a structured, machine-readable format</li>
        <li><strong>Right to withdraw consent:</strong> at any time, without affecting the lawfulness of prior processing</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We will
        respond within <strong>21 days</strong> as required by the Act.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures to
        protect your personal data against unauthorised access, disclosure,
        alteration or destruction. All data transmitted through our website
        forms is sent over HTTPS encrypted connections.
      </p>

      <h2>10. Complaints</h2>
      <p>
        If you believe we have handled your personal data unlawfully, you have
        the right to lodge a complaint with the{" "}
        <strong>Office of the Data Protection Commissioner (ODPC)</strong> of
        Kenya:
      </p>
      <ul>
        <li>Website: <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer">www.odpc.go.ke</a></li>
        <li>Email: <a href="mailto:info@odpc.go.ke">info@odpc.go.ke</a></li>
      </ul>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The date at the
        top of this page reflects when it was last revised. Continued use of our
        website after any changes constitutes acceptance of the updated policy.
      </p>
    </LegalLayout>
  );
}
