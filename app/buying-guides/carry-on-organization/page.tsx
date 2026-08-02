import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../../components";

export const metadata: Metadata = {
  title: "A Carry-on System That Earns Its Space",
  description: "A practical carry-on organization guide built around access, weight, laundry, and repeatable packing routines.",
};

export default function CarryOnGuide() {
  return (
    <PageShell>
      <article>
        <header className="article-hero shell">
          <div className="article-heading">
            <p className="eyebrow">Travel guide</p>
            <h1>A carry-on system that earns its space</h1>
            <p className="article-deck">Organization is useful when it makes items easier to reach and repack. It is not useful when the organizers become most of the luggage.</p>
            <div className="article-meta"><span>Published August 2, 2026</span><span>5 min read</span><span>No commission links</span></div>
          </div>
          <div className="article-art carry-art" aria-label="Abstract illustration of a carry-on bag"><div className="carry-body" /><span>PACK / LIGHT</span></div>
        </header>

        <div className="article-layout shell">
          <aside className="article-aside"><p className="eyebrow">Quick answer</p><p>Use three zones: items needed in transit, clean clothing, and worn or wet items. Add containers only when they keep those zones clearer.</p></aside>
          <div className="article-body">
            <h2>1. Start with access, not categories</h2>
            <p>Anything needed at security, at the gate, or during the journey belongs where it can be reached without opening the main clothing compartment. Documents, medication, charging gear, and one warm layer usually deserve the easiest access.</p>
            <h2>2. Give clothing one clear boundary</h2>
            <p>One or two packing cubes can make repacking easier, but a separate cube for every garment often adds weight and complexity. Group by when items are used or by traveler, and leave enough flexibility for the return trip.</p>
            <h2>3. Create a return-trip system</h2>
            <p>Clean packing is the easy half. Reserve a light washable bag for worn clothing and a small waterproof pouch for anything damp. This keeps the rest of the case usable without turning every item into its own package.</p>
            <h2>4. Build one charging kit</h2>
            <p>Keep the adapter, charging cable, and small accessories together. Before packing a second cable or converter, ask which device it serves and whether another item already covers that job. Label unfamiliar adapters before the trip.</p>
            <h2>5. Test the packed bag at home</h2>
            <p>Carry it up stairs, lift it overhead, open it as if you were at security, and find the item you would need first. A five-minute rehearsal reveals weak handles, awkward weight distribution, and buried essentials faster than another packing checklist.</p>
            <h2>The final edit</h2>
            <ul className="check-list"><li>Transit essentials are reachable with one opening.</li><li>Clothing fits within one clear zone.</li><li>Worn and wet items have a return-trip plan.</li><li>Every cable has a named device.</li><li>The packed weight works for the traveler and the carrier’s current rules.</li></ul>
            <div className="article-sources"><p className="eyebrow">Dune Edit rule</p><p>If an organizer does not improve access, separation, or repacking, it probably does not earn its space.</p></div>
          </div>
        </div>
        <nav className="article-next shell" aria-label="More guides"><p>Continue reading</p><Link href="/buying-guides/matter-smart-bulbs">Matter smart bulbs: what to check before you buy <span>→</span></Link></nav>
      </article>
    </PageShell>
  );
}
