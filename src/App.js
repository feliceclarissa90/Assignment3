import { Routes, Route, Await } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import Awards from './pages/Awards';

function App() {
  return (
    <div>
      <Navigation />
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
  );
}

export default App;
