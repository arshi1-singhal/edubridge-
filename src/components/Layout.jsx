import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

// Shared page shell: sticky header, animated main content, footer.
// Uses <Outlet /> so React Router renders the matched child route here.
export default function Layout() {
  const { pathname } = useLocation();

  // Re-trigger the page-enter animation on each route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <div key={pathname} className="animate-page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
