import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// Comprehensive fallback countries list
const fallbackCountries = [
  { code: "AF", name: "Afganistan" }, { code: "DE", name: "Almanya" }, { code: "US", name: "Amerika Birleşik Devletleri" }, { code: "AD", name: "Andorra" }, { code: "AO", name: "Angola" }, { code: "AG", name: "Antigua ve Barbuda" }, { code: "AR", name: "Arjantin" }, { code: "AL", name: "Arnavutluk" }, { code: "AU", name: "Avustralya" }, { code: "AT", name: "Avusturya" }, { code: "AZ", name: "Azerbaycan" }, { code: "BS", name: "Bahamalar" }, { code: "BH", name: "Bahreyn" }, { code: "BD", name: "Bangladeş" }, { code: "BB", name: "Barbados" }, { code: "BE", name: "Belçika" }, { code: "BZ", name: "Belize" }, { code: "BJ", name: "Benin" }, { code: "BY", name: "Beyaz Rusya" }, { code: "BT", name: "Bhutan" }, { code: "AE", name: "Birleşik Arap Emirlikleri" }, { code: "GB", name: "Birleşik Krallık" }, { code: "BO", name: "Bolivya" }, { code: "BA", name: "Bosna Hersek" }, { code: "BW", name: "Botsvana" }, { code: "BR", name: "Brezilya" }, { code: "BN", name: "Brunei" }, { code: "BG", name: "Bulgaristan" }, { code: "BF", name: "Burkina Faso" }, { code: "BI", name: "Burundi" }, { code: "TD", name: "Çad" }, { code: "CZ", name: "Çek Cumhuriyeti" }, { code: "CN", name: "Çin" }, { code: "DK", name: "Danimarka" }, { code: "DO", name: "Dominik Cumhuriyeti" }, { code: "EC", name: "Ekvador" }, { code: "GQ", name: "Ekvator Ginesi" }, { code: "SV", name: "El Salvador" }, { code: "ID", name: "Endonezya" }, { code: "ER", name: "Eritre" }, { code: "AM", name: "Ermenistan" }, { code: "EE", name: "Estonya" }, { code: "ET", name: "Etiyopya" }, { code: "MA", name: "Fas" }, { code: "FJ", name: "Fiji" }, { code: "CI", name: "Fildişi Sahili" }, { code: "PH", name: "Filipinler" }, { code: "PS", name: "Filistin" }, { code: "FI", name: "Finlandiya" }, { code: "FR", name: "Fransa" }, { code: "GA", name: "Gabon" }, { code: "GM", name: "Gambiya" }, { code: "GH", name: "Gana" }, { code: "GN", name: "Gine" }, { code: "GW", name: "Gine-Bissau" }, { code: "GD", name: "Grenada" }, { code: "GT", name: "Guatemala" }, { code: "GY", name: "Guyana" }, { code: "ZA", name: "Güney Afrika" }, { code: "KR", name: "Güney Kore" }, { code: "GE", name: "Gürcistan" }, { code: "HT", name: "Haiti" }, { code: "HR", name: "Hırvatistan" }, { code: "IN", name: "Hindistan" }, { code: "NL", name: "Hollanda" }, { code: "HN", name: "Honduras" }, { code: "IQ", name: "Irak" }, { code: "IR", name: "İran" }, { code: "IE", name: "İrlanda" }, { code: "ES", name: "İspanya" }, { code: "IL", name: "İsrail" }, { code: "SE", name: "İsveç" }, { code: "CH", name: "İsviçre" }, { code: "IT", name: "İtalya" }, { code: "IS", name: "İzlanda" }, { code: "JM", name: "Jamaika" }, { code: "JP", name: "Japonya" }, { code: "KH", name: "Kamboçya" }, { code: "CM", name: "Kamerun" }, { code: "CA", name: "Kanada" }, { code: "ME", name: "Karadağ" }, { code: "QA", name: "Katar" }, { code: "KZ", name: "Kazakistan" }, { code: "KE", name: "Kenya" }, { code: "CY", name: "Kıbrıs" }, { code: "KG", name: "Kırgızistan" }, { code: "CO", name: "Kolombiya" }, { code: "KM", name: "Komorlar" }, { code: "CG", name: "Kongo Cumhuriyeti" }, { code: "CD", name: "Kongo Demokratik Cumhuriyeti" }, { code: "CR", name: "Kosta Rika" }, { code: "KW", name: "Kuveyt" }, { code: "KP", name: "Kuzey Kore" }, { code: "MK", name: "Kuzey Makedonya" }, { code: "CU", name: "Küba" }, { code: "LA", name: "Laos" }, { code: "LS", name: "Lesotho" }, { code: "LV", name: "Letonya" }, { code: "LR", name: "Liberya" }, { code: "LY", name: "Libya" }, { code: "LI", name: "Liechtenstein" }, { code: "LT", name: "Litvanya" }, { code: "LB", name: "Lübnan" }, { code: "LU", name: "Lüksemburg" }, { code: "HU", name: "Macaristan" }, { code: "MG", name: "Madagaskar" }, { code: "MW", name: "Malavi" }, { code: "MV", name: "Maldivler" }, { code: "MY", name: "Malezya" }, { code: "ML", name: "Mali" }, { code: "MT", name: "Malta" }, { code: "MU", name: "Mauritius" }, { code: "MX", name: "Meksika" }, { code: "EG", name: "Mısır" }, { code: "MN", name: "Moğolistan" }, { code: "MD", name: "Moldova" }, { code: "MC", name: "Monako" }, { code: "MR", name: "Moritanya" }, { code: "MZ", name: "Mozambik" }, { code: "MM", name: "Myanmar" }, { code: "NA", name: "Namibya" }, { code: "NR", name: "Nauru" }, { code: "NP", name: "Nepal" }, { code: "NE", name: "Nijer" }, { code: "NG", name: "Nijerya" }, { code: "NI", name: "Nikaragua" }, { code: "NO", name: "Norveç" }, { code: "CF", name: "Orta Afrika Cumhuriyeti" }, { code: "UZ", name: "Özbekistan" }, { code: "PK", name: "Pakistan" }, { code: "PA", name: "Panama" }, { code: "PG", name: "Papua Yeni Gine" }, { code: "PY", name: "Paraguay" }, { code: "PE", name: "Peru" }, { code: "PL", name: "Polonya" }, { code: "PT", name: "Portekiz" }, { code: "RO", name: "Romanya" }, { code: "RW", name: "Ruanda" }, { code: "RU", name: "Rusya" }, { code: "WS", name: "Samoa" }, { code: "SM", name: "San Marino" }, { code: "ST", name: "Sao Tome ve Principe" }, { code: "SN", name: "Senegal" }, { code: "SC", name: "Seyşeller" }, { code: "RS", name: "Sırbistan" }, { code: "SL", name: "Sierra Leone" }, { code: "SG", name: "Singapur" }, { code: "SK", name: "Slovakya" }, { code: "SI", name: "Slovenya" }, { code: "SB", name: "Solomon Adaları" }, { code: "SO", name: "Somali" }, { code: "LK", name: "Sri Lanka" }, { code: "SD", name: "Sudan" }, { code: "SR", name: "Surinam" }, { code: "SY", name: "Suriye" }, { code: "SA", name: "Suudi Arabistan" }, { code: "CL", name: "Şili" }, { code: "TJ", name: "Tacikistan" }, { code: "TZ", name: "Tanzanya" }, { code: "TH", name: "Tayland" }, { code: "TW", name: "Tayvan" }, { code: "TG", name: "Togo" }, { code: "TO", name: "Tonga" }, { code: "TT", name: "Trinidad ve Tobago" }, { code: "TN", name: "Tunus" }, { code: "TV", name: "Tuvalu" }, { code: "TR", name: "Türkiye" }, { code: "TM", name: "Türkmenistan" }, { code: "UG", name: "Uganda" }, { code: "UA", name: "Ukrayna" }, { code: "OM", name: "Umman" }, { code: "UY", name: "Uruguay" }, { code: "JO", name: "Ürdün" }, { code: "VU", name: "Vanuatu" }, { code: "VA", name: "Vatikan" }, { code: "VE", name: "Venezuela" }, { code: "VN", name: "Vietnam" }, { code: "YE", name: "Yemen" }, { code: "NZ", name: "Yeni Zelanda" }, { code: "CV", name: "Yeşil Burun Adaları" }, { code: "GR", name: "Yunanistan" }, { code: "ZM", name: "Zambiya" }, { code: "ZW", name: "Zimbabve" }
];

const PriceRequest = () => {
  const { t, i18n } = useTranslation();
  
  const [formData, setFormData] = useState({
    country: '',
    weight: '',
    width: '',
    length: '',
    height: '',
    email: '',
    phone: '',
    recaptcha: false,
    privacyPolicy: false
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [showKvkkModal, setShowKvkkModal] = useState(false);

  const countriesList = useMemo(() => {
    try {
      const regionNames = new Intl.DisplayNames([i18n.language], { type: 'region' });
      return fallbackCountries.map(c => ({
        code: c.code,
        name: regionNames.of(c.code) || c.name
      })).sort((a, b) => a.name.localeCompare(b.name, i18n.language));
    } catch (e) {
      return fallbackCountries;
    }
  }, [i18n.language]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.recaptcha || !formData.privacyPolicy) return;
    
    setStatus('loading');
    
    try {
      const WEBHOOK_URL ="https://script.google.com/macros/s/AKfycbzQQKcFphZyeaa3SN6sLNPrrKN2v6tIWecMmQ_orAV7lqZopGwt16IlG3JiTrTSRoKO/exec"; 
      
      // kvkk ve recaptcha API'ye gönderilmeyecek
      const { recaptcha, privacyPolicy, ...dataToSend } = formData;

      const formPayload = new FormData();
      Object.entries(dataToSend).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      });

      setStatus('success');
      setFormData({ country: '', weight: '', width: '', length: '', height: '', email: '', phone: '', recaptcha: false, privacyPolicy: false });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 0',
    border: 'none',
    borderBottom: '1px solid var(--border-color, #999)',
    backgroundColor: 'transparent',
    color: 'var(--text-color)',
    outline: 'none',
    fontSize: '16px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '20px',
    color: 'var(--text-color)'
  };

  return (
    <>
      <div className="animate-fade-in" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', padding: '0 1rem' }}>
        <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', backgroundColor: 'var(--bg-color, #fff)', color: 'var(--text-color, #000)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('priceRequest.title')}</h1>
        
        {status === 'success' && (
          <div style={{ backgroundColor: 'var(--success-color, #4CAF50)', color: '#fff', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
            {t('priceRequest.success')}
          </div>
        )}

        {status === 'error' && (
          <div style={{ backgroundColor: 'var(--error-color, #F44336)', color: '#fff', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 'bold' }}>
            {t('priceRequest.error')}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          
          <div style={titleStyle}>{t('priceRequest.countrySectionTitle')}</div>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: 'pointer', color: formData.country ? 'var(--text-color)' : '#999' }}
            required
          >
            <option value="" disabled>{t('priceRequest.country')}</option>
            {countriesList.map(c => (
              <option key={c.code} value={c.name}>{c.name}</option>
            ))}
          </select>

          <div style={{ ...titleStyle, marginTop: '20px' }}>{t('priceRequest.packageSectionTitle')}</div>
          <input 
            type="number" 
            name="weight" 
            placeholder={t('priceRequest.weight')} 
            value={formData.weight}
            onChange={handleChange}
            style={inputStyle}
            required 
            min="0"
            step="0.01"
          />
          <input 
            type="number" 
            name="width" 
            placeholder={t('priceRequest.width')} 
            value={formData.width}
            onChange={handleChange}
            style={inputStyle}
            required 
            min="0"
          />
          <input 
            type="number" 
            name="length" 
            placeholder={t('priceRequest.length')} 
            value={formData.length}
            onChange={handleChange}
            style={inputStyle}
            required 
            min="0"
          />
          <input 
            type="number" 
            name="height" 
            placeholder={t('priceRequest.height')} 
            value={formData.height}
            onChange={handleChange}
            style={inputStyle}
            required 
            min="0"
          />

          <input 
            type="email" 
            name="email" 
            placeholder={t('priceRequest.email')} 
            value={formData.email}
            onChange={handleChange}
            style={{ ...inputStyle, marginTop: '10px' }}
            required 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder={t('priceRequest.phone')} 
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            required 
          />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px', gap: '15px' }}>
            {/* reCAPTCHA Mockup */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #d3d3d3', backgroundColor: '#f9f9f9', padding: '10px 15px', borderRadius: '3px', width: '300px', marginLeft: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="checkbox" 
                  id="recaptcha" 
                  name="recaptcha"
                  checked={formData.recaptcha}
                  onChange={handleChange}
                  style={{ width: '28px', height: '28px', cursor: 'pointer' }}
                  required
                />
                <label htmlFor="recaptcha" style={{ margin: 0, fontSize: '14px', cursor: 'pointer', color: '#000' }}>
                  {t('priceRequest.recaptcha')}
                </label>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.4246 3.01356C17.653 3.66698 19.4975 5.34005 20.3702 7.50294C21.6116 10.5796 20.1258 14.1593 17.049 15.4006C13.9723 16.642 10.4632 15.1121 9.22188 12.0354C8.38466 9.95995 8.78446 7.6433 10.1558 5.91894C10.6033 5.35593 11.4116 5.26315 11.9568 5.71183C12.5021 6.1605 12.5772 6.98083 12.1246 7.5457C11.2335 8.658 10.974 10.1568 11.5173 11.5034C12.3364 13.5323 14.6543 14.5427 16.6832 13.7236C18.712 12.9045 19.6914 10.5422 18.8723 8.51333C18.3072 7.11293 17.108 6.02451 15.6565 5.59918C14.9749 5.39958 14.5822 4.68344 14.7797 4.00171C14.9772 3.31998 15.6896 2.92723 16.3712 3.12683H15.4246Z" fill="#1A73E8"/>
                  <path d="M12.9497 4.63604L13.6568 3.92893C14.0474 3.53841 14.6805 3.53841 15.0711 3.92893C15.4616 4.31946 15.4616 4.95262 15.0711 5.34315L14.364 6.05025L12.9497 4.63604Z" fill="#1A73E8"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L19.7071 6.70711C20.0976 6.31658 20.0976 5.68342 19.7071 5.29289C19.3166 4.90237 18.6834 4.90237 18.2929 5.29289L8 15.5858L3.70711 11.2929Z" fill="#1A73E8"/>
                </svg>
                <span style={{ fontSize: '10px', color: '#555', marginTop: '2px' }}>reCAPTCHA</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '15px' }}>
              {/* Privacy Policy */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="checkbox" 
                  id="privacyPolicy" 
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  style={{ width: '18px', height: '18px', cursor: 'pointer', flexShrink: 0 }}
                  required
                />
                <label htmlFor="privacyPolicy" style={{ margin: 0, fontSize: '14px', cursor: 'pointer', color: 'var(--text-color)' }}>
                  <span 
                    onClick={(e) => { e.preventDefault(); setShowKvkkModal(true); }} 
                    style={{ color: 'var(--primary-color, #1A73E8)', textDecoration: 'underline', fontWeight: 'bold', marginRight: '4px' }}
                  >
                    {t('priceRequest.privacyPolicyLink')}
                  </span>
                  {t('priceRequest.privacyPolicyText')}
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ 
                  opacity: status === 'loading' ? 0.7 : (!formData.recaptcha || !formData.privacyPolicy ? 0.5 : 1), 
                  backgroundColor: 'var(--primary-color, #d3d3d3)', 
                  color: 'var(--bg-color, #000)', 
                  border: 'none', 
                  padding: '12px 40px',
                  borderRadius: '4px',
                  cursor: (!formData.recaptcha || !formData.privacyPolicy) ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold'
                }}
                disabled={status === 'loading' || !formData.recaptcha || !formData.privacyPolicy}
              >
                {status === 'loading' ? '...' : t('priceRequest.submit')}
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      {showKvkkModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '1rem' }}>
          <div className="animate-fade-in" style={{ backgroundColor: 'var(--bg-color, #fff)', color: 'var(--text-color, #000)', padding: '2rem', borderRadius: '8px', maxWidth: '500px', width: '100%', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', border: '1px solid var(--border-color, #eee)' }}>
            <h2 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', borderBottom: '1px solid var(--border-color, #eee)', paddingBottom: '0.5rem' }}>
              {t('priceRequest.kvkkModalTitle')}
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '1.5rem', opacity: 0.9 }}>
              {t('priceRequest.kvkkModalContent')}
            </p>
            <div style={{ textAlign: 'right' }}>
              <button 
                onClick={() => setShowKvkkModal(false)}
                className="btn btn-primary"
                style={{ backgroundColor: 'var(--primary-color, #1A73E8)', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                {t('priceRequest.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceRequest;
