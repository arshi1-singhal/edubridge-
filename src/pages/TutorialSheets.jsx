import { TUTORIAL_SHEETS } from "../data/tutorialSheets";
import "./TutorialSheets.css";

export default function TutorialSheets() {
  return (
    <section className="container page page--wide">
      <p className="eyebrow">Practice</p>
      <h1 className="page__title">Tutorial &amp; practice sheets</h1>
      <p className="page__desc page__desc--wide">
        Strengthen your fundamentals with topic-wise sheets. Ramp up from basics
        to interview-level problems at your own pace.
      </p>

      <div className="sheets-grid">
        {TUTORIAL_SHEETS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="sheet-card"
          >
            <div className="sheet-card__icon">{s.icon}</div>
            <h3 className="sheet-card__title">{s.name}</h3>
            <p className="sheet-card__desc">{s.desc}</p>
            <span className="sheet-card__cta">
              Open sheet
              <span aria-hidden className="sheet-card__arrow">↗</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
