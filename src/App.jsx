import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import ArchiveLayout from "./components/ArchiveLayout";
import MainLayout from "./components/MainLayout";
import Achievements from "./components/Achievements";
import ArchiveProjects from "./components/ArchiveProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/experience" element={<Experience />} />
        </Route>

        <Route path="/archive" element={<ArchiveLayout />}>
          <Route path="/archive/projects" element={<ArchiveProjects />} />
          <Route path="/archive/achievements" element={<Achievements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
