import { Link } from "react-router-dom";
import { BRANCHES } from "../data/branches";
import "./Branch.css";

export default function Branch() {
  return (
    <section className="container page">
      <p className="eyebrow">Step 1 of 3</p>
      <h1 className="page__title">Select your branch</h1>
      <p className="page__desc">
        Choose the engineering stream you're studying — we'll show
        semester-wise subjects next.
      </p>

      <div className="branch-grid">
        {BRANCHES.map((b) => (
          <Link
            key={b.key}
            to={`/semester?branch=${b.key}`}
            className="branch-card"
          >
            <div className="branch-card__icon">{b.icon}</div>
            <div>
              <div className="branch-card__label">{b.label}</div>
              <div className="branch-card__blurb">{b.blurb}</div>
              <span className="branch-card__cta">
                Choose semester
                <span aria-hidden className="branch-card__arrow">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
