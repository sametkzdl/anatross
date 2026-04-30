import { useTranslation } from 'react-i18next';
import { Package, Cloud, BarChart } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in" style={{ marginTop: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>{t('products.title')}</h1>
        <p style={{ fontSize: '1.2rem' }}>{t('products.description')}</p>
      </div>

      <div className="grid-3">
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Package size={40} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
          <h3>{t('products.p1')}</h3>
        </div>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Cloud size={40} color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
          <h3>{t('products.p2')}</h3>
        </div>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <BarChart size={40} color="var(--success-color)" style={{ marginBottom: '1rem' }} />
          <h3>{t('products.p3')}</h3>
        </div>
      </div>
    </div>
  );
};

export default Products;
