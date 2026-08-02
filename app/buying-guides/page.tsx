import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PageShell } from "../components";

export const metadata: Metadata = {
  title: "Buying Guides",
  description: "Practical buying frameworks and product guides from Dune Edit.",
};

const guides = [
  {
    category: "Smart home",
    title: "Matter smart bulbs: what to check before you buy",
    description: "A clear guide to bases, brightness, color temperature, Wi-Fi, Matter controllers, and setup—with one current partner-linked example.",
    meta: "6 min read · Includes commission link",
    href: "/buying-guides/matter-smart-bulbs",
  },
  {
    category: "Tech",
    title: "How to choose a power bank without overbuying",
    description: "Translate capacity, power output, ports, size, and travel requirements into a charger that fits your actual routine.",
    meta: "5 min read · No commission links",
    href: "/buying-guides/power-bank-basics",
  },
  {
    category: "Travel",
    title: "A carry-on system that earns its space",
    description: "Build a simple packing system around access, weight, laundry, and the items you use in transit—not around more organizers.",
    meta: "5 min read · No commission links",
    href: "/buying-guides/carry-on-organization",
  },
];

export default function BuyingGuidesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Research, translated"
        title="Buying guides without the noise."
        description="Original explainers built around real use cases, checkable specifications, and honest limits."
      />
      <section className="content-section shell">
        <div className="notice">
          <strong>How to read Dune Edit:</strong> an article only contains a commission link when it is clearly identified. A researched overview is not presented as hands-on testing.
        </div>
        <div className="content-grid" style={{ marginTop: 28 }}>
          {guides.map((guide, index) => (
            <article className="content-card" key={guide.title}>
              <div>
                <p className="card-number">{String(index + 1).padStart(2, "0")} · {guide.category}</p>
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
                <p className="card-meta">{guide.meta}</p>
              </div>
              <Link href={guide.href}>Read the guide →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
