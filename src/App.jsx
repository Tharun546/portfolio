import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ArchiveLayout from "./components/ArchiveLayout";
import Achievements from "./components/Achievements";
import ArchiveProjects from "./components/ArchiveProjects";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route path="/archive" element={<ArchiveLayout />}>
          <Route path="/archive/projects" element={<ArchiveProjects />} />
          <Route path="/archive/achievements" element={<Achievements />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
