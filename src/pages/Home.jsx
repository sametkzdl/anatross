import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { MapPin, Crown, ShieldCheck, Eye, DollarSign, Handshake, ArrowRight, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-panel" style={{ marginBottom: '1rem', padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => setIsOpen(!isOpen)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '1.1rem', color: isOpen ? 'var(--primary-color)' : 'var(--text-primary)' }}>{question}</h4>
        <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: isOpen ? 'var(--primary-color)' : 'var(--text-secondary)' }} />
      </div>
      <div style={{ 
        maxHeight: isOpen ? '500px' : '0', 
        overflow: 'hidden', 
        transition: 'all 0.3s ease',
        marginTop: isOpen ? '1rem' : '0',
        opacity: isOpen ? 1 : 0
      }}>
        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>{answer}</p>
      </div>
    </div>
  );
};


const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="glass-panel" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
    <div style={{ background: 'var(--primary-color)', width: 'fit-content', padding: '0.8rem', borderRadius: '12px', display: 'flex', color: '#fff' }}>
      <Icon size={28} />
    </div>
    <h3 style={{ margin: '0.5rem 0', color: 'var(--text-primary)' }}>{title}</h3>
    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', flexGrow: 1 }}>{desc}</p>
  </div>
);

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      {/* Banner Section */}
      <div style={{ 
        textAlign: 'left', 
        padding: '8rem 4rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0) 80%), url('/home_banner.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '24px',
        margin: '2rem 0 5rem 0',
        minHeight: '600px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
      }}>
        <div style={{ maxWidth: '650px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1.2', color: 'var(--text-primary)' }}>
            {t('home.title')}
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
            {t('home.subtitle')}
          </p>
          <NavLink to="/price-request" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            {t('home.cta')}
          </NavLink>
        </div>
      </div>

      {/* Featured Service Component */}
      <div style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{ margin: 0, fontSize: '2.5rem' }}>{t('home.featuredServiceTitle')}</h2>
          <NavLink to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
            {t('nav.services')} <ArrowRight size={20} />
          </NavLink>
        </div>
        
        <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', gap: '0', padding: '0', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <div style={{ flex: '1 1 400px', padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>{t('services.s2.title')}</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
              {t('services.s2.desc1')}
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
              {t('services.s2.desc2')}
            </p>
            <div>
              <NavLink to="/services" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                {t('nav.services')} <ArrowRight size={18} />
              </NavLink>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', minHeight: '400px', background: 'var(--surface-color)', position: 'relative' }}>
             <img src="/service-2.jpeg" alt="Featured Service" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>{t('home.whyUs')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <FeatureCard icon={MapPin} title={t('home.w1_title')} desc={t('home.w1_desc')} />
          <FeatureCard icon={Crown} title={t('home.w2_title')} desc={t('home.w2_desc')} />
          <FeatureCard icon={ShieldCheck} title={t('home.w3_title')} desc={t('home.w3_desc')} />
          <FeatureCard icon={Eye} title={t('home.w4_title')} desc={t('home.w4_desc')} />
          <FeatureCard icon={DollarSign} title={t('home.w5_title')} desc={t('home.w5_desc')} />
          <FeatureCard icon={Handshake} title={t('home.w6_title')} desc={t('home.w6_desc')} />
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>{t('home.faq_title')}</h2>
        <div>
          <FAQItem question={t('home.faq_q1')} answer={t('home.faq_a1')} />
          <FAQItem question={t('home.faq_q2')} answer={t('home.faq_a2')} />
          <FAQItem question={t('home.faq_q3')} answer={t('home.faq_a3')} />
          <FAQItem question={t('home.faq_q4')} answer={t('home.faq_a4')} />
        </div>
      </div>
    </div>
  );
};

export default Home;
