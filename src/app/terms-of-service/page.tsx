import { buildMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Kemi Communication Ltd. Read the terms governing use of our website and road freight logistics services in Kenya.",
  path: "/terms-of-service",
  noIndex: false,
});

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="1 July 2026">
      <p>
        Please read these Terms of Service carefully before using the website at{" "}
        <a href={siteConfig.url}>{siteConfig.url}</a> or engaging the services
        of <strong>Kemi Communication Ltd</strong>, a company incorporated in
        Kenya (Registration No. {siteConfig.regNumber}), with its principal
        place of business at {siteConfig.address}.
      </p>
      <p>
        By accessing our website or submitting any enquiry or service request,
        you agree to be bound by these Terms. If you do not agree, please do not
        use our website or services.
      </p>

      <hr />

      <h2>1. Services</h2>
      <p>
        Kemi Communication Ltd provides road freight and logistics services
        including but not limited to cargo transport, cross-border haulage and
        corporate bulk hire across Kenya and East Africa. Detailed service terms
        for specific engagements are set out in individual service agreements or
        quotations issued to clients.
      </p>
      <p>
        Nothing on this website constitutes a binding offer or contract for
        services. A contract arises only upon our written acceptance of a
        service request and issuance of a formal quotation or service agreement.
      </p>

      <h2>2. Use of This Website</h2>
      <p>You agree to use this website only for lawful purposes. You must not:</p>
      <ul>
        <li>Use the site in any way that violates applicable Kenyan laws or regulations</li>
        <li>Submit false, misleading or fraudulent information through any of our forms</li>
        <li>Attempt to gain unauthorised access to any part of our website or systems</li>
        <li>Transmit unsolicited commercial communications or spam</li>
        <li>Reproduce or distribute any content from this website without our prior written consent</li>
      </ul>

      <h2>3. Quotations and Pricing</h2>
      <p>
        Any pricing or rate information communicated via this website, email or
        phone is indicative only and subject to change. A formal written
        quotation must be obtained before any service is confirmed. Prices are
        quoted in Kenya Shillings (KES) unless otherwise stated and are
        exclusive of applicable taxes.
      </p>

      <h2>4. Liability</h2>
      <p>
        To the fullest extent permitted by Kenyan law, Kemi Communication Ltd
        shall not be liable for:
      </p>
      <ul>
        <li>Loss or damage to cargo arising from circumstances beyond our reasonable control, including but not limited to acts of God, road accidents not attributable to our negligence, civil unrest or government action</li>
        <li>Indirect, consequential or economic loss arising from delays in delivery</li>
        <li>Loss arising from inaccurate or incomplete information provided by the client</li>
      </ul>
      <p>
        Our liability for loss or damage to cargo, where proven to be caused by
        our negligence, shall not exceed the declared value of the goods or the
        amount set out in the applicable service agreement, whichever is lower.
        Clients are advised to obtain appropriate cargo insurance.
      </p>

      <h2>5. Client Obligations</h2>
      <p>As a client or prospective client, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information about cargo including weight, dimensions, nature and value</li>
        <li>Ensure all goods tendered for transport are lawfully owned and may be legally transported</li>
        <li>Comply with all applicable customs, import and export regulations for cross-border shipments</li>
        <li>Make payment in accordance with the agreed payment terms</li>
      </ul>

      <h2>6. Partner Vehicle Owners</h2>
      <p>
        Individuals or entities who register vehicles for use in our logistics
        operations through our Partner Programme agree that:
      </p>
      <ul>
        <li>All vehicles must be roadworthy, validly insured and comply with applicable NTSA requirements</li>
        <li>Drivers operating partner vehicles must hold valid, appropriate driving licences</li>
        <li>Kemi Communication Ltd acts as a logistics principal and not as an employer of partner drivers</li>
        <li>Payment terms for individual trips will be agreed separately upon onboarding</li>
        <li>We reserve the right to remove any vehicle or driver from our network for non-compliance or misconduct</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content on this website including text, images, logos and design is
        the property of Kemi Communication Ltd or its licensors and is protected
        under applicable Kenyan intellectual property law. Unauthorised use,
        reproduction or distribution is prohibited.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. These are
        provided for convenience only. We do not endorse or accept
        responsibility for the content or practices of any linked site.
      </p>

      <h2>9. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        Kenya. Any disputes arising out of or in connection with these Terms
        shall be subject to the exclusive jurisdiction of the courts of Kenya.
      </p>
      <p>
        Where a dispute arises from a service engagement, the parties agree to
        first attempt resolution through good-faith negotiation before
        initiating formal proceedings.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may update these Terms of Service from time to time. The revised
        version will be posted on this page with an updated date. Continued use
        of our website after changes constitutes acceptance of the revised Terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any questions about these Terms, please contact us at:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
        <li><strong>Phone:</strong> {siteConfig.phone}</li>
        <li><strong>Address:</strong> {siteConfig.address}</li>
      </ul>
    </LegalLayout>
  );
}
