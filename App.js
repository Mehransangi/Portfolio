import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';
import About from './Routes/About';

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/About" element={<About/>} />
  </Routes>
  
  </>
  );
}

export default App;
