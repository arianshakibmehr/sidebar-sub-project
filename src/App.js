import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Overview from "./pages/overview";
import Comments from "./pages/comments";
import Calendar from "./pages/calendar";
import { Projects, Projects2, Projects3 } from "./pages/projects";
import Analytics from "./pages/analytics";
import { Reports, Reports1, Reports2 } from "./pages/reports";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/projects1" element={<Projects2 />} />
        <Route path="/projects/projects2" element={<Projects3 />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/reports1" element={<Reports1 />} />
        <Route path="/reports/reports2" element={<Reports2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
