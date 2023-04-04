import { Routes, Route, Await } from 'react-router-dom';
import Navigation from './components/nav/Navigation';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Education from './pages/education/Education';
import Skills from './pages/skills/Skills';
import Interests from './pages/interests/Interests';
import Awards from './pages/awards/Awards';
import "./App.css";


function App() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
    }}>

      <Navigation />

      <div style={{
        flex: 1,
        overflowY: "scroll",
        scrollBehavior: "smooth",
      }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
