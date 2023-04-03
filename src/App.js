import { Routes, Route, Await } from 'react-router-dom';
import Navigation from './components/nav/Navigation';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Education from './pages/education/Education';
import Skills from './pages/skills/Skills';
import Interests from './pages/interests/Interests';
import Awards from './pages/awards/Awards';

function App() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      height: 0,
      
    }}>

      <Navigation />

      <div style={{ flex: 1}}>
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
