import Link from "next/link";

export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Dune Edit home">
      <span className="wordmark-mark" aria-hidden="true" />
      <span>DUNE</span>
      <i>/</i>
      <span>EDIT</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Wordmark />
        <nav aria-label="Main navigation">
          <Link href="/collections">Collections</Link>
          <Link href="/buying-guides">Buying guides</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link className="header-contact" href="/affiliate-disclosure">Disclosure <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Wordmark />
          <p>Plain-language product guides for a more considered everyday.</p>
        </div>
        <div className="footer-links">
          <div>
            <p>Explore</p>
            <Link href="/collections">Collections</Link>
            <Link href="/buying-guides">Buying guides</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <p>Information</p>
            <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Dune Edit. All rights reserved.</p>
        <p>Made for thoughtful choices.</p>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}
