import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Dune Edit editorial team.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Contact"
        title="Contact details are being set up."
        description="Dune Edit does not currently collect messages or publish an inbox on this website."
      />
      <section className="content-section shell">
        <div className="prose">
          <div className="notice"><strong>No form, no pretend inbox:</strong> a public contact address will appear here once it is active and monitored.</div>
          <h2>Brand and campaign messages</h2>
          <p>Current brand communication is handled through the publisher platform or campaign channel where the relationship began.</p>
          <h2>Editorial corrections</h2>
          <p>A corrections inbox will be added before Dune Edit begins accepting reader submissions. Until then, every product page asks readers to verify current details with the retailer.</p>
        </div>
      </section>
    </PageShell>
  );
}
