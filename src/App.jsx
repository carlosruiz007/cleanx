import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CleanxPage from './cleanx/CleanxPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Cleanx React rebuild - now the home page */}
        <Route path="/" element={<CleanxPage />} />
        
        {/* Regular pages with header/footer */}
        <Route path="/*" element={
          <div className="min-h-screen">
            <Header />
            <Routes>
              <Route path="/old-home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;