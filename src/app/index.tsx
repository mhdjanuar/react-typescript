import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
