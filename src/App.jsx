import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PriceRequest from './pages/PriceRequest';
import StickyWhatsApp from './components/StickyWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function App() {
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    if (i18n.language === 'ar') {
      document.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('rtl');
      document.documentElement.classList.remove('ltr');
    } else {
      document.dir = 'ltr';
      document.documentElement.lang = 'en';
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.classList.add('ltr');
      document.documentElement.classList.remove('rtl');
    }
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/price-request" element={<PriceRequest />} />
          </Routes>
        </main>
        <Footer />
        <StickyWhatsApp />
      </div>
    </Router>
  );
}

export default App;
