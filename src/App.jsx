import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Branch from "./pages/Branch";
import Semester from "./pages/Semester";
import Subjects from "./pages/Subjects";
import TutorialSheets from "./pages/TutorialSheets";
import NotFound from "./pages/NotFound";

// All routes are wrapped by Layout (sticky header + footer + page animation).
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="branch" element={<Branch />} />
        <Route path="semester" element={<Semester />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="tutorial-sheets" element={<TutorialSheets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
