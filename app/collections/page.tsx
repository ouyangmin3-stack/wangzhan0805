import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PageShell } from "../components";

export const metadata: Metadata = {
  title: "Collections",
  description: "Focused product collections for home, tech, travel, and everyday life.",
};

const collections = [
  ["01", "Home", "Practical pieces for cooking, cleaning, organizing, and unwinding. We favor durable materials, intuitive design, and objects that settle naturally into a space."],
  ["02", "Tech", "Devices and accessories that remove friction. Our edits prioritize reliability, compatibility, privacy, and the features you will genuinely use."],
  ["03", "Travel", "Luggage, organizers, adapters, and comfort essentials chosen around weight, versatility, and the realities of moving through an airport."],
  ["04", "Everyday", "The quiet workhorses: personal care tools, bags, stationery, and small upgrades that make repeat routines noticeably better."],
];

export default function CollectionsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="The Dune collections"
        title="Browse by the way you live."
        description="Four focused collections, each edited to help you compare less and choose with more confidence."
      />
      <section className="content-section shell">
        <div className="content-grid">
          {collections.map(([number, name, description]) => (
            <article className="content-card" id={name.toLowerCase()} key={name}>
              <div>
                <p className="card-number">Collection {number}</p>
                <h2>{name}</h2>
                <p>{description}</p>
              </div>
              <Link href="/buying-guides">See related guides →</Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
