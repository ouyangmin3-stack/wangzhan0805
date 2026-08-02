import Link from "next/link";
import { Footer, Header } from "./components";

const categories = [
  {
    name: "Home",
    number: "01",
    description: "Quiet upgrades for cooking, cleaning, resting, and living well.",
    tone: "clay",
  },
  {
    name: "Tech",
    number: "02",
    description: "Useful devices and accessories without the feature-list noise.",
    tone: "ink",
  },
  {
    name: "Travel",
    number: "03",
    description: "Lighter luggage, smarter organizers, and gear that earns its space.",
    tone: "sand",
  },
  {
    name: "Everyday",
    number: "04",
    description: "Simple tools that make routines calmer, faster, and more considered.",
    tone: "sage",
  },
];

const guides = [
  {
    category: "Smart home guide",
    title: "Matter smart bulbs: what to check before you buy",
    excerpt: "Compatibility, brightness, Wi-Fi, and setup explained—plus one current partner-linked example.",
    reading: "6 min read",
    className: "guide-light",
    href: "/buying-guides/matter-smart-bulbs",
  },
  {
    category: "Tech guide",
    title: "How to choose a power bank without overbuying",
    excerpt: "Capacity, ports, charging speed, weight, and travel checks in plain English.",
    reading: "5 min read",
    className: "guide-power",
    href: "/buying-guides/power-bank-basics",
  },
  {
    category: "Travel guide",
    title: "A carry-on system that earns its space",
    excerpt: "A simple packing framework built around access, weight, and repeatable routines.",
    reading: "5 min read",
    className: "guide-travel",
    href: "/buying-guides/carry-on-organization",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Practical buying guides · Est. 2026</p>
            <h1 id="hero-heading">
              Better things,
              <span>thoughtfully chosen.</span>
            </h1>
            <p className="hero-lede">
              Dune Edit turns specifications, compatibility questions, and
              everyday use cases into clear guides for home, tech, travel,
              and the routines in between.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/buying-guides">
                Explore the guides <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/about#method">
                How we choose <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="hero-still-life" aria-label="An abstract arrangement of considered everyday objects">
            <div className="sun-disc" />
            <div className="arch-card">
              <span>THE</span>
              <strong>EDIT</strong>
              <small>Useful, lasting, considered.</small>
            </div>
            <div className="lamp">
              <div className="lamp-shade" />
              <div className="lamp-stem" />
              <div className="lamp-base" />
            </div>
            <div className="speaker">
              <i />
              <i />
              <i />
            </div>
            <p className="composition-note">Objects for a life<br />with less friction.</p>
          </div>
        </section>

        <section className="trust-bar" aria-label="Our editorial principles">
          <div className="shell trust-grid">
            <p><span>01</span> Plain-language guides</p>
            <p><span>02</span> Sources and limits stated</p>
            <p><span>03</span> Commission links disclosed</p>
          </div>
        </section>

        <section className="section shell" id="collections">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Browse by need</p>
              <h2>Start with the edit.</h2>
            </div>
            <p>
              Start with a real need, understand the deciding details, then
              check the current product page before buying.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                className={`category-card category-${category.tone}`}
                href={`/collections#${category.name.toLowerCase()}`}
                key={category.name}
              >
                <span className="category-number">{category.number}</span>
                <div className="category-shape" aria-hidden="true" />
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
                <span className="round-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section section-warm">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Fresh from the desk</p>
                <h2>Featured guides.</h2>
              </div>
              <Link className="text-link" href="/buying-guides">
                View all guides <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="guide-grid">
              {guides.map((guide) => (
                <article className="guide-card" key={guide.title}>
                  <div className={`guide-art ${guide.className}`} aria-hidden="true">
                    <div className="guide-object" />
                    <span>DUNE / EDIT</span>
                  </div>
                  <p className="guide-meta">{guide.category} · {guide.reading}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.excerpt}</p>
                  <Link href={guide.href}>Read the guide <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell method-preview" id="method">
          <div className="method-intro">
            <p className="eyebrow">Our point of view</p>
            <h2>Fewer tabs.<br />Better decisions.</h2>
            <p>
              We explain what matters, distinguish verified specifications
              from opinion, and clearly say when we have not tested a product.
            </p>
            <Link className="button button-light" href="/about#method">Read our method</Link>
          </div>
          <ol className="method-list">
            <li>
              <span>01</span>
              <div><h3>Useful by design</h3><p>We look for products that solve a real, repeatable problem.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>Checkable details</h3><p>Compatibility, materials, maintenance, and documented limitations all matter.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>Fit over hype</h3><p>A product is only useful when its features match the reader’s actual setup.</p></div>
            </li>
          </ol>
        </section>

        <section className="closing-statement">
          <div className="shell">
            <p className="eyebrow">The Dune Edit promise</p>
            <blockquote>“Understand the fit before you follow the link.”</blockquote>
            <p className="disclosure-note">
              Dune Edit may earn a commission when you purchase through a
              clearly marked partner link, at no extra cost to you. We disclose
              these links where they appear. <Link href="/affiliate-disclosure">Learn more</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
