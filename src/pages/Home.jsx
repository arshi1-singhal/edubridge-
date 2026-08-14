import { Link } from "react-router-dom";
import { BRANCHES } from "../data/branches";
import "./Home.css";

// Feature cards on the home page.
const FEATURES = [
  {
    icon: "📘",
    title: "Get Notes",
    body:
      "Access verified, senior-shared notes curated subject-wise and exam-wise. Save time studying from trusted, concise, high-quality resources.",
    to: "/branch",
    cta: "Browse notes",
  },
  {
    icon: "📝",
    title: "Get Practice Sheets",
    body:
      "Strengthen concepts with topic-wise practice sheets, coding problems and exam-oriented questions with rising difficulty.",
    to: "/tutorial-sheets",
    cta: "Start practicing",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero container">
        <h1 className="hero__title">EduBridge</h1>
        <p className="hero__subtitle">Bridging Minds With Education</p>
        <p className="hero__desc">
          Collaborate, learn and succeed. Everything a college student needs,
          organised branch by branch, semester by semester.
        </p>
        <div className="hero__actions">
          <Link to="/branch" className="btn btn--primary">
            Get Started
          </Link>
          <Link to="/tutorial-sheets" className="btn btn--outline">
            Practice Sheets
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="container">
        <div className="features">
          {FEATURES.map((f) => (
            <Link key={f.title} to={f.to} className="feature-card">
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__body">{f.body}</p>
              <span className="feature-card__cta">
                {f.cta}
                <span aria-hidden className="feature-card__arrow">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Branch quick strip */}
      <section className="container branch-strip">
        <div className="branch-strip__head">
          <div>
            <p className="eyebrow">Branches</p>
            <h2 className="branch-strip__title">
              Jump straight to your branch
            </h2>
          </div>
          <Link to="/branch" className="branch-strip__viewall">
            View all →
          </Link>
        </div>
        <div className="branch-strip__grid">
          {BRANCHES.map((b) => (
            <Link
              key={b.key}
              to={`/semester?branch=${b.key}`}
              className="branch-chip"
            >
              <div className="branch-chip__icon">{b.icon}</div>
              <div className="branch-chip__label">{b.label}</div>
              <div className="branch-chip__blurb">{b.blurb}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
