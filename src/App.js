import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Contact from './pages/contact';
import Footer from './components/footer';
import About2 from './pages/about2';
import Projects from './pages/projects';


function App() {
  return (
    <BrowserRouter basename="/portfolio">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About2 />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;