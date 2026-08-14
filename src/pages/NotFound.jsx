import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__inner">
        <h1 className="notfound__code">404</h1>
        <h2 className="notfound__title">Page not found</h2>
        <p className="notfound__text">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn--primary">
          Go home
        </Link>
      </div>
    </div>
  );
}
