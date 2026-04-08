import React, { useState } from 'react';
import Products from './Pages/Products.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx'
import Nav from './Components/Nav.jsx'
import Header from './Components/Header.jsx'
import Features from './Components/Features.jsx'
import Recommended from './Components/Recommended.jsx'
import Footer from './Components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [isInputOpen, setIsInputOpen] = useState(false);

  const toggleSearch = () => {
    setIsInputOpen((prev) => !prev);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className={`app ${theme} ${isMenuOpen ? 'menu--open' : ''}`}>
      <Nav toggleTheme={toggleTheme} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Features />
            <Recommended />
            
          </>
           
        } />

        <Route path="/products" element={<Products  isInputOpen={isInputOpen} toggleSearch={toggleSearch} handleSearch={handleSearch} searchTerm={searchTerm} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
         <Footer />
    </div>

  );
}

export default App;
