import { useTranslation } from 'react-i18next';
import { Info, ShieldCheck, Globe } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
      <div className="glass-panel" style={{ maxWidth: '900px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '1rem' }}>
          <Info size={36} color="var(--primary-color)" />
          <h1 style={{ marginBottom: 0, fontSize: '2.5rem', color: 'var(--text-primary)' }}>{t('about.title')}</h1>
        </div>
        
        <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            <Globe size={20} color="var(--primary-color)" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
            {t('about.p1')}
          </p>
          
          <p style={{ marginBottom: '2rem' }}>
            <ShieldCheck size={20} color="var(--primary-color)" style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
            {t('about.p2')}
          </p>
          
          <div style={{ 
            background: 'var(--bg-color)', 
            padding: '1.5rem', 
            borderRadius: '8px', 
            borderLeft: '4px solid var(--primary-color)',
            color: 'var(--text-primary)',
            fontSize: '1.25rem',
            fontWeight: '600',
            fontStyle: 'italic',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            "{t('about.highlight')}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
