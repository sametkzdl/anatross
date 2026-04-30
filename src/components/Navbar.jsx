import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center' }}>
        <NavLink to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
          <img className='logo-custom' src="/anatross_logo.png" alt="Anatross Logo" style={{ height: '150px', width: 'auto', objectFit: 'contain' }} />
        </NavLink>
      </div>
      
      <button 
        className="hamburger" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/home" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          {t('nav.home')}
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          {t('nav.about')}
        </NavLink>
        <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          {t('nav.products')}
        </NavLink>
        <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          {t('nav.services')}
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          {t('nav.contact')}
        </NavLink>
        <NavLink to="/price-request" onClick={closeMenu} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          <span className="btn btn-outline" style={{ padding: '0.4rem 1rem' }}>
            {t('nav.priceRequest')}
          </span>
        </NavLink>
        
        <div className="lang-switcher" style={{ marginLeft: '1rem', display: 'flex', alignItems: 'center' }}>
          <Globe size={18} style={{ marginRight: '0.5rem', color: 'var(--text-secondary)' }} />
          <select 
            value={i18n.language} 
            onChange={(e) => { changeLanguage(e.target.value); closeMenu(); }}
            style={{
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              padding: '0.3rem 0.5rem',
              cursor: 'pointer',
              outline: 'none',
              fontSize: '14px',
              fontFamily: 'inherit',
              fontWeight: 500
            }}
          >
            <option value="tr">TR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
