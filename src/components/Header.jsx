import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/branch", label: "Branch", end: false },
  { to: "/tutorial-sheets", label: "Tutorial Sheets", end: false },
];

// Desktop + mobile navigation header.
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="header__bar container">
        <Link to="/" className="header__logo" aria-label="EduBridge home">
          <span className="header__logo-badge">E</span>
          <span className="header__logo-text">EduBridge</span>
        </Link>

        {/* Desktop nav */}
        <nav className="header__nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                "header__navlink" + (isActive ? " header__navlink--active" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="header__menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="drawer">
          <div className="drawer__header">
            <span className="drawer__title">Menu</span>
            <button
              type="button"
              className="drawer__close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="drawer__nav">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  "drawer__link" + (isActive ? " drawer__link--active" : "")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
