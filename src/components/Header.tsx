import { useEffect, useRef, useState } from "react";
import { externalUrl, siteConfig } from "../config/site";
import { hero } from "../content/home";
import { Icon } from "./Icon";

export function Wordmark() {
  if (siteConfig.logo) {
    return <img className="logo-img" src={siteConfig.logo} alt={siteConfig.name} height={28} />;
  }
  return (
    <span className="wordmark">
      <span className="wordmark-mark" aria-hidden="true">
        H
      </span>
      <span>
        Hozvik<span className="wordmark-dim">Cloud</span>
      </span>
    </span>
  );
}

const FOCUSABLE = "a[href], button:not([disabled])";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const discord = externalUrl(siteConfig.links.discord);

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  };

  // Drawer behaviour: lock page scroll, focus the close button, Escape to close, trap Tab.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab" || !navRef.current) return;
      const items = Array.from(navRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the drawer if the viewport grows to the desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 821px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <Wordmark />
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      <div className={`nav-overlay${open ? " is-open" : ""}`} onClick={() => close()} aria-hidden="true" />

      {/* One navigation: inline on desktop, a right-hand drawer on mobile. */}
      <nav id="site-nav" ref={navRef} className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary">
        <div className="drawer-head">
          <span className="drawer-title">Menu</span>
          <button ref={closeRef} type="button" className="menu-toggle" aria-label="Close menu" onClick={() => close(true)}>
            <Icon name="close" size={24} />
          </button>
        </div>
        <ul className="nav-list" role="list">
          <li>
            <a href="/" aria-current="page" onClick={() => close()}>
              Home
            </a>
          </li>
        </ul>
        <div className="drawer-actions">
          <a className="btn btn-primary" href={hero.primaryCta.href} onClick={() => close()}>
            {hero.primaryCta.label}
          </a>
          <a className="btn btn-secondary" href={hero.secondaryCta.href} onClick={() => close()}>
            {hero.secondaryCta.label}
          </a>
          {discord && (
            <a className="btn btn-secondary" href={discord} target="_blank" rel="noopener noreferrer">
              Join our Discord ↗
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
