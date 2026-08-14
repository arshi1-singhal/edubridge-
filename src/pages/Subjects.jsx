import { Link, useSearchParams } from "react-router-dom";
import { BRANCHES, SEMESTERS, getBranchLabel } from "../data/branches";
import { getSubjects } from "../data/subjects";
import { iconFor } from "../data/icons";
import "./Subjects.css";

const VALID_BRANCHES = BRANCHES.map((b) => b.key);

export default function Subjects() {
  const [searchParams] = useSearchParams();

  const rawBranch = searchParams.get("branch");
  const rawSem = searchParams.get("sem");
  const branch = VALID_BRANCHES.includes(rawBranch) ? rawBranch : "cse";
  const sem = SEMESTERS.includes(rawSem) ? rawSem : "1";

  const subjects = getSubjects(branch, sem);

  return (
    <section className="container page page--wide">
      <p className="eyebrow">
        Step 3 of 3 ·{" "}
        <Link to={`/semester?branch=${branch}`} className="page__inline-link">
          Change semester
        </Link>
      </p>
      <h1 className="page__title">
        {getBranchLabel(branch)} · Semester {sem}
      </h1>
      <p className="page__desc">
        Tap Notes or PYQ to open the shared Google Drive folder for that subject.
      </p>

      {subjects.length === 0 ? (
        <div className="subjects-empty">
          No subjects listed yet for this semester.
        </div>
      ) : (
        <div className="subjects-grid">
          {subjects.map((s) => {
            const hasNotes = s.notes && s.notes !== "#";
            const hasPyq = s.pyq && s.pyq !== "#";
            const noLinks = !hasNotes && !hasPyq;

            return (
              <div
                key={s.name}
                className={"subject-card" + (noLinks ? " subject-card--disabled" : "")}
              >
                <div className="subject-card__icon">{iconFor(s.icon)}</div>
                <div className="subject-card__body">
                  <div className="subject-card__name">{s.name}</div>
                  {noLinks ? (
                    <div className="subject-card__meta">Notes coming soon</div>
                  ) : (
                    <div className="subject-card__links">
                      {hasNotes && (
                        <a
                          href={s.notes}
                          target="_blank"
                          rel="noreferrer"
                          className="subject-card__btn subject-card__btn--notes"
                        >
                          Notes ↗
                        </a>
                      )}
                      {hasPyq && (
                        <a
                          href={s.pyq}
                          target="_blank"
                          rel="noreferrer"
                          className="subject-card__btn subject-card__btn--pyq"
                        >
                          PYQ ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
