import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} EduBridge. Made for students, by students.</p>
        <p className="footer__tagline">Collaborate. Learn. Succeed.</p>
      </div>
    </footer>
  );
}
