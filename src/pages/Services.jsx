import { useTranslation } from 'react-i18next';
import { Globe, Briefcase, Plane, ShieldCheck, Image as ImageIcon } from 'lucide-react';

const ServiceCard = ({ title, desc1, desc2, desc3, icon: Icon, image, reverse }) => {
  return (
    <div className="glass-panel" style={{ 
      display: 'flex', 
      flexDirection: reverse ? 'row-reverse' : 'row', 
      alignItems: 'center', 
      gap: '3rem', 
      marginBottom: '3rem',
      flexWrap: 'wrap'
    }}>
      <div style={{ flex: '1 1 400px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
          <div style={{ background: 'var(--primary-color)', padding: '0.8rem', borderRadius: '12px', display: 'flex' }}>
            {Icon && <Icon size={32} color="#fff" />}
          </div>
          <h2 style={{ marginBottom: 0, color: 'var(--text-primary)' }}>{title}</h2>
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          {desc1 && <p style={{ marginBottom: '1rem' }}>{desc1}</p>}
          {desc2 && <p style={{ marginBottom: '1rem' }}>{desc2}</p>}
          {desc3 && <p style={{ marginBottom: '0' }}>{desc3}</p>}
        </div>
      </div>
      
      <div style={{ 
        flex: '1 1 400px', 
        height: '350px', 
        background: 'var(--bg-color)', 
        borderRadius: '16px', 
        border: '2px dashed var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'var(--text-secondary)',
        minWidth: '300px'
      }}>
        <img src={image} alt="Service" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '14px' }} />
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in" style={{ marginTop: '3rem', marginBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem' }}>{t('services.title')}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          {t('services.description')}
        </p>
      </div>

      <div>
        <ServiceCard 
          title={t('services.s1.title', { defaultValue: '' })}
          desc1={t('services.s1.desc1', { defaultValue: '' })}
          desc2={t('services.s1.desc2', { defaultValue: '' })}
          icon={Globe}
          image={`${import.meta.env.BASE_URL}service-1.jpeg`}
          reverse={false}
        />
        
        <ServiceCard 
          title={t('services.s2.title', { defaultValue: '' })}
          desc1={t('services.s2.desc1', { defaultValue: '' })}
          desc2={t('services.s2.desc2', { defaultValue: '' })}
          desc3={t('services.s2.desc3', { defaultValue: '' })}
          icon={Briefcase}
          image={`${import.meta.env.BASE_URL}service-2.jpeg`}
          reverse={true}
        />
        
        <ServiceCard 
          title={t('services.s3.title', { defaultValue: '' })}
          desc1={t('services.s3.desc1', { defaultValue: '' })}
          desc2={t('services.s3.desc2', { defaultValue: '' })}
          icon={Plane}
          image={`${import.meta.env.BASE_URL}service-3.jpeg`}
          reverse={false}
        />
        
        <ServiceCard 
          title={t('services.s4.title', { defaultValue: '' })}
          desc1={t('services.s4.desc1', { defaultValue: '' })}
          desc2={t('services.s4.desc2', { defaultValue: '' })}
          icon={ShieldCheck}
          image={`${import.meta.env.BASE_URL}service-4.jpeg`}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Services;
