import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';

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

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in" style={{ marginTop: '3rem', marginBottom: '5rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}>{t('contact.title')}</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Contact Info */}
        <div style={{ flex: '1 1 400px' }}>
          <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{t('contact.subtitle')}</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.1rem' }}>
              {t('contact.desc')}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', padding: '1rem', borderRadius: '50%', color: '#fff', display: 'flex' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--text-primary)' }}>{t('contact.addressTitle')}</h4>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.5' }}>{t('contact.address')}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ backgroundColor: 'var(--secondary-color)', padding: '1rem', borderRadius: '50%', color: '#fff', display: 'flex' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--text-primary)' }}>{t('contact.phoneTitle')}</h4>
                  <a href={`tel:${t('contact.phone').replace(/ /g, '')}`} style={{ margin: 0, color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('contact.phone')}</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ backgroundColor: 'var(--text-primary)', padding: '1rem', borderRadius: '50%', color: '#fff', display: 'flex' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0', color: 'var(--text-primary)' }}>{t('contact.emailTitle')}</h4>
                  <a href={`mailto:${t('contact.email')}`} style={{ margin: 0, color: 'var(--text-secondary)', textDecoration: 'none' }}>{t('contact.email')}</a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t('contact.socialTitle')}</h4>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="https://www.instagram.com/anatross.tr?igsh=MW13bDRmM2Nzc3hyMQ==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary-color)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                  <InstagramIcon size={28} />
                </a>
                <a href="https://www.tiktok.com/@anatross.tr?_r=1&_t=ZS-95wZXtqF6Q9" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary-color)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                  <TikTokIcon size={28} />
                </a>
                <a href="https://x.com/anatrosstr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary-color)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                  <XIcon size={28} />
                </a>
                <a href="https://www.linkedin.com/company/anatross-global/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary-color)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                  <LinkedinIcon size={28} />
                </a>
                <a href="https://wa.me/905400400955" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary-color)'} onMouseOut={e => e.currentTarget.style.color='var(--text-secondary)'}>
                  <WhatsAppIcon size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '1 1 500px' }}>
          <div className="glass-panel" style={{ height: '100%', padding: '3rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>{t('contact.formTitle')}</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert(t('contact.formSuccess')); e.target.reset(); }}>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>{t('contact.formName')}</label>
                <input type="text" className="form-control" placeholder={t('contact.formNamePlaceholder')} required style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>{t('contact.formEmail')}</label>
                <input type="email" className="form-control" placeholder={t('contact.formEmailPlaceholder')} required style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>{t('contact.formMessage')}</label>
                <textarea className="form-control" placeholder={t('contact.formMessagePlaceholder')} rows="5" required style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-primary)', resize: 'vertical', outline: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                {t('contact.formSubmit')}
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
