import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Dune Edit affiliate and editorial independence disclosure.",
};

export default function AffiliateDisclosurePage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Transparency"
        title="Affiliate disclosure."
        description="How Dune Edit earns revenue and protects editorial independence."
      />
      <section className="content-section shell">
        <div className="prose">
          <div className="notice"><strong>Some links on Dune Edit are commission links. We identify them close to the link.</strong></div>
          <h2>What that means</h2>
          <p>
            If you follow a marked partner link and make a qualifying purchase, Dune Edit may receive a commission. This does not increase the price you pay. Some retailer links are supplied through publisher platforms such as PartnerBoost; the exact retailer and offer are shown on the destination page.
          </p>
          <h2>Editorial independence</h2>
          <p>
            A commercial relationship does not guarantee a positive review. We explain the intended use, verify the details we can, and identify when an overview is based on documentation rather than hands-on testing. Any sponsored placement will be labeled as sponsored.
          </p>
          <h2>Prices and availability</h2>
          <p>
            Prices, offers, specifications, and stock can change after publication. Please confirm the latest details and the final seller on the destination page before purchasing.
          </p>
          <p>Last updated: August 2, 2026.</p>
        </div>
      </section>
    </PageShell>
  );
}
