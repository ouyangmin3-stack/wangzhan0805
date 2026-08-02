import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";

export const metadata: Metadata = {
  title: "About",
  description: "Why Dune Edit exists and how its product guides are researched.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="About Dune Edit"
        title="Less noise. More context."
        description="Dune Edit is a small publishing project that explains useful products and the decisions around them."
      />
      <section className="content-section shell">
        <div className="prose">
          <h2>Why we exist</h2>
          <p>
            Online shopping gives us infinite choice and very little clarity. Dune Edit was created to make the decision smaller: define the real need, identify the qualities that matter, explain the trade-offs, and present a short, useful edit.
          </p>
          <p>
            We cover home, technology, travel, and everyday tools. Our point of view is practical rather than trend-led. The goal is to help readers understand fit and trade-offs before opening a retailer page.
          </p>

          <h2 id="method">How we choose</h2>
          <p>Every guide begins with selection criteria, not a product list. Depending on the category, we consider:</p>
          <ul>
            <li>Function and ease of use</li>
            <li>Materials, construction, and maintenance</li>
            <li>Compatibility, safety notes, and documented limitations</li>
            <li>Manufacturer documentation and current retailer information</li>
            <li>Price only when it can be checked at the time of publication</li>
          </ul>
          <p>
            Availability, specifications, and prices can change. We date our guides and ask readers to confirm current details on the retailer page. When we have not performed hands-on testing, we say so and present the content as a researched overview—not a personal-use review.
          </p>

          <h2>How we make money</h2>
          <p>
            Some clearly marked links are supplied through publisher platforms such as PartnerBoost or through direct brand programs. Dune Edit may earn a commission after a qualifying purchase, at no extra cost to the reader. Paid placements, if introduced, will be labeled separately. Read our full affiliate disclosure for details.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
