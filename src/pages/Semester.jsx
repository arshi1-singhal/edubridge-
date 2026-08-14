import { Link, useSearchParams } from "react-router-dom";
import { BRANCHES, SEMESTERS, getBranchLabel } from "../data/branches";
import "./Semester.css";

const VALID_BRANCHES = BRANCHES.map((b) => b.key);

export default function Semester() {
  const [searchParams] = useSearchParams();
  const branch = searchParams.get("branch");
  const branchKey = VALID_BRANCHES.includes(branch) ? branch : "cse";
  const branchInfo = BRANCHES.find((b) => b.key === branchKey);

  return (
    <section className="container page">
      <p className="eyebrow">
        Step 2 of 3 · <Link to="/branch" className="page__inline-link">Change branch</Link>
      </p>
      <h1 className="page__title">
        {getBranchLabel(branchKey)} · Select semester
      </h1>
      <p className="page__desc">
        {branchInfo.blurb}. Pick a semester to see all subjects with notes.
      </p>

      <div className="semester-grid">
        {SEMESTERS.map((s) => (
          <Link
            key={s}
            to={`/subjects?branch=${branchKey}&sem=${s}`}
            className="semester-card"
          >
            <div className="semester-card__label">Semester</div>
            <div className="semester-card__number">{s}</div>
            <span className="semester-card__cta">
              View subjects
              <span aria-hidden className="semester-card__arrow">→</span>
            </span>
            <span aria-hidden className="semester-card__glow" />
          </Link>
        ))}
      </div>
    </section>
  );
}
