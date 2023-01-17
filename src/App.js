import logo from './logo.svg';
import './App.css';
// import Homepage from './components/Homepage';
import { Route, Routes, Link } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Blog from './Pages/Blog'

function App() {
  return (
    <>
    {/* <Homepage /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Project" element={<Project />} />
    </Routes>
    </>
  );
}

export default App;
