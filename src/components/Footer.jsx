import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TikTokIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
  </svg>
);

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" style={{ padding: '3rem 2rem 1rem', background: 'var(--surface-color)', textAlign: 'left' }}>
      <div className="grid-3" style={{ marginBottom: '2rem', maxWidth: '1200px', margin: '0 auto 2rem' }}>
        <div>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>ANATROSS</h3>
          <p style={{ maxWidth: '300px', marginBottom: '1.5rem' }}>
            {t('footer.desc')}
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.instagram.com/anatross.tr?igsh=MW13bDRmM2Nzc3hyMQ==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}>
              <InstagramIcon size={24} />
            </a>
            <a href="https://www.tiktok.com/@anatross.tr?_r=1&_t=ZS-95wZXtqF6Q9" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}>
              <TikTokIcon size={24} />
            </a>
            <a href="https://x.com/anatrosstr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}>
              <XIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/company/anatross-global/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}>
              <LinkedinIcon size={24} />
            </a>
            <a href="https://wa.me/905400400955" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'all 0.3s' }}>
              <WhatsAppIcon size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('footer.contactTitle')}</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ marginRight: '0.5rem' }}>📍</span>
              <span style={{ lineHeight: '1.5' }}>Küçükbakkalköy Mahallesi Selvili Sokak No:4/20 Ataşehir, Istanbul, Turkey, 34750</span>
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <span style={{ marginRight: '0.5rem' }}>📞</span>
              <a href="tel:+905400400955" style={{ color: 'var(--text-secondary)' }}>+90 540 040 09 55</a>
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <span style={{ marginRight: '0.5rem' }}>✉️</span>
              <a href="mailto:info@anatross.com" style={{ color: 'var(--text-secondary)' }}>info@anatross.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('footer.legalTitle')}</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem' }}><NavLink to="#" style={{ color: 'var(--text-secondary)' }}>{t('footer.kvkk')}</NavLink></li>
            <li style={{ marginBottom: '0.8rem' }}><NavLink to="#" style={{ color: 'var(--text-secondary)' }}>{t('footer.terms')}</NavLink></li>
            <li style={{ marginBottom: '0.8rem' }}><NavLink to="#" style={{ color: 'var(--text-secondary)' }}>{t('footer.cookies')}</NavLink></li>
          </ul>
        </div>
      </div>
      
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
