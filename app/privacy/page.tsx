import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Dune Edit privacy information.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Information"
        title="Privacy."
        description="A plain-English overview of information associated with your visit to Dune Edit."
      />
      <section className="content-section shell">
        <div className="prose">
          <div className="notice"><strong>Current setup:</strong> Dune Edit does not currently operate an email signup, advertising pixel, or non-essential analytics tool.</div>
          <h2>Information we receive</h2>
          <p>
            Like most websites, our hosting provider may process technical information needed to deliver and secure the site, such as IP address, browser type, requested pages, and timestamps. Dune Edit does not currently offer a contact form or public email inbox on this website.
          </p>
          <h2>Affiliate links</h2>
          <p>
            Dune Edit may link to third-party publisher platforms and retailers, including PartnerBoost and Amazon. Those services operate under their own privacy and cookie policies. A partner link may include identifiers that allow a platform or retailer to attribute a click or qualifying purchase to Dune Edit.
          </p>
          <h2>Cookies and analytics</h2>
          <p>
            We will update this page before enabling non-essential analytics, advertising pixels, or email subscription tools. Where required, visitors will be offered appropriate consent choices before those tools load.
          </p>
          <h2>Questions and changes</h2>
          <p>
            A public privacy contact will be added before Dune Edit begins collecting information directly from visitors. This page will also be updated when the site’s tools or practices change.
          </p>
          <p>Last updated: August 2, 2026.</p>
        </div>
      </section>
    </PageShell>
  );
}
