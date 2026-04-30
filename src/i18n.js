import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        products: "Ürünler",
        services: "Hizmetler",
        contact: "İletişim",
        priceRequest: "Teklif Al"
      },
      home: {
        title: "Türkiye'nin Üretim Gücünü Küresel Pazara Taşıyoruz",
        subtitle: "Profesyonel Dış Ticaret ve Stratejik Tedarik Ortağınız.",
        cta: "Hemen İletişime Geçin",
        whyUs: "Neden Biz?",
        w1_title: "Yerel Uzmanlık",
        w1_desc: "Türkiye’nin üretim potansiyeline ve bölgesel sektör dinamiklerine en üst seviyede hakimiz. Doğru üreticiyi sadece katalog verileriyle değil, sahadaki gerçek performansı, mali gücü ve üretim kalitesiyle analiz ederek sizi en güvenilir kaynakla buluşturuyoruz.",
        w2_title: "VIP Ağırlama",
        w2_desc: "Ticari ilişkileri dijital ekranların ötesine taşıyoruz. Türkiye ziyaretlerinizde sizi havalimanında karşılıyor, konaklamadan fabrika ziyaretlerine kadar tüm seyahatinizi organize ediyor ve profesyonel refakat hizmetimizle tüm görüşmelerde yanınızda oluyoruz.",
        w3_title: "Saha Denetimi",
        w3_desc: "Bizim için kalite kontrol, sadece sevkiyat anında yapılan bir işlem değildir. Üretimin ilk aşamasından paketleme sürecine kadar bizzat fabrikada bulunuyor; teknik şartnamelerinize uyumu yerinde denetleyerek hata payını ortadan kaldırıyoruz.",
        w4_title: "Tam Şeffaflık",
        w4_desc: "Türkiye’deki \"gözünüz ve kulağınız\" olarak, her aşamada tam şeffaflık sağlıyoruz. Üretim bandından canlı görseller, teknik denetim raporları ve süreç güncellemeleriyle, mesafeleri ortadan kaldıran bir veri akışı sunuyoruz.",
        w5_title: "Maliyet Avantajı",
        w5_desc: "Doğrudan üreticiye erişim imkanımız ve yerel pazar üzerindeki müzakere gücümüz sayesinde, aracı maliyetlerini minimize ediyoruz. Sizin adınıza en avantajlı ticari şartları ve ödeme koşullarını güvence altına alıyoruz.",
        w6_title: "Butik Hizmet",
        w6_desc: "Her iş ortağımızın ihtiyacının farklı olduğunu biliyoruz. Standart prosedürler yerine, taleplerinize özel butik tedarik modelleri geliştiriyor ve kendimizi tamamen sizin iş modelinize entegre bir operasyon merkezi olarak konumlandırıyoruz.",
        featuredServiceTitle: "Öne Çıkan Hizmetimiz",
        faq_title: "Sıkça Sorulan Sorular",
        faq_q1: "Tedarik süreci ne kadar sürüyor?",
        faq_a1: "Tedarik sürecini etkileyen birçok faktör mevcuttur. Ürünün türü, sipariş miktarı ve üreticinin kapasitesi üretim süresini doğrudan etkiler. Başlangıçta size detaylı bir proje takvimi sunuyoruz.",
        faq_q2: "İhracat ve gümrük süreçlerinde destek sağlıyor musunuz?",
        faq_a2: "Evet. Tüm gümrük prosedürlerini, gerekli teknik belgeleri ve sertifikasyon süreçlerini uluslararası standartlara uygun olarak profesyonel operasyon ekibimizle yönetiyoruz.",
        faq_q3: "Hangi bölgelere hizmet veriyorsunuz?",
        faq_a3: "Türkiye’nin üretim gücünü küresel pazarlarla buluşturuyoruz. Coğrafi sınır tanımadan, dünyanın her noktasına Türkiye'den sağlam bir tedarik zinciri kurabiliyoruz.",
        faq_q4: "Kalite kontrol sürecinde üretim hatası tespit edilirse ne yapıyorsunuz?",
        faq_a4: "Önceliğimiz hatayı kaynağında çözmektir. Saha onayımız tamamlanmadan ve standartlara uygunluk sağlanmadan hiçbir ürünün fabrikadan çıkışına izin vermeyerek riskinizi sıfıra indiriyoruz."
      },
      about: {
        title: "Hakkımızda",
        p1: "Anatross Global, Türkiye’nin üretim gücünü uluslararası ticaretin dinamikleriyle birleştiren stratejik bir Tedarik ve Denetim şirketidir. Modern ticaretin sadece ürün bulmaktan ibaret olmadığının bilinciyle; yurt dışındaki iş ortaklarımızın Türkiye’deki profesyonel temsilcisi ve operasyonel gücü olarak hareket ediyoruz.",
        p2: "Geniş üretici ağımız, yerel pazardaki derin bağlantılarımız ve taviz vermediğimiz kalite standartlarımızla, tedarik zincirlerini uçtan uca optimize ediyoruz. Ticareti sadece bir alışveriş değil, bir güven inşası olarak görüyor; her adımda şeffaflık ve sürdürülebilirlik ilkelerimizle bu güveni pekiştiriyoruz.",
        highlight: "Anatross Global ile ticaret, sınırların ötesinde profesyonel bir çözüm ortaklığıdır."
      },
      products: {
        title: "Ürünlerimiz",
        description: "Geniş ürün yelpazemiz ile her türlü ihtiyacınıza cevap veriyoruz.",
        p1: "Kurumsal Çözümler",
        p2: "Bulut Altyapısı",
        p3: "Veri Analitiği"
      },
      services: {
        title: "Hizmetlerimiz",
        description: "İşletmenizin her adımında profesyonel ve yenilikçi çözümlerle yanınızdayız.",
        s1: {
          title: "Dış Ticaret",
          desc1: "Anatross Global olarak dış ticaretteki en büyük önceliğimiz, Türkiye’nin üretim gücünü küresel pazarlarla profesyonel bir çizgide buluşturmaktır. Ticari faaliyetlerimizde sadece ürün sevkiyatına değil; markamızın dijital dünyadaki saygınlığına, şeffaf iş ortaklıklarımıza ve sürdürülebilir bir ihracat ağına odaklanıyoruz.",
          desc2: "Dinamik girişimcilik ruhumuzu uluslararası standartlarla birleştirerek, güvene dayalı ve kalıcı bir ticaret köprüsü kurmayı hedefliyoruz. Her adımımızda yerel değerleri küresel bir vizyonla harmanlayarak, iş ortaklarımız için değer yaratan çözümler üretmeye devam ediyoruz."
        },
        s2: {
          title: "Stratejik Tedarik Yönetimi",
          desc1: "Anatross Global olarak, Türkiye genelinde kurduğumuz güçlü saha temasları ve stratejik iş ortaklıklarımız sayesinde, taleplerinizi en doğru üreticilerle buluşturuyoruz. Üretim kalitesi, kapasite raporları ve finansal güvenilirlik kriterlerimize tam uyum sağlayan potansiyel paydaşları titizlikle belirliyoruz.",
          desc2: "Sektördeki profesyonel bağlantılarımızın sağladığı çeviklik ve kurumsal nüfuzumuzla, projeniz için en optimize kalite-fiyat dengesini yakalıyoruz. Sadece ürün temini değil, aynı zamanda profesyonel danışmanlık hizmetleri sunarak iş süreçlerinize değer katmayı amaçlıyoruz.",
          desc3: "Tedarik sürecinizi sahip olduğumuz geniş iletişim kanallarının sağladığı güvenle yönetiyor; işletmenizi Türkiye'deki en yetkin çözüm ortaklarıyla bir araya getirerek sağlam, şeffaf ve sürdürülebilir bir ticaret köprüsü kuruyoruz."
        },
        s3: {
          title: "VIP Saha Operasyonu",
          desc1: "Ticareti yalnızca dijital ekranlardan ve yazışmalardan ibaret görmüyor, güvenin temelini sahada atıyoruz. Anatross Global olarak, potansiyel iş ortaklarımızı Türkiye’de bizzat ağırlayarak dijital dünyayı fiziksel gerçeklikle birleştiriyoruz. Havalimanı transferinizden konaklama planlamanıza kadar her ayrıntıyı titizlikle koordine ediyor, Türkiye’deki tüm operasyonel sürecinizi konforlu ve verimli bir iş seyahatine dönüştürüyoruz.",
          desc2: "İlginizi çeken üretim tesislerini ve fabrikaları sizinle birlikte ziyaret ederek; ürünlerin üretim aşamalarını, kalite standartlarını ve fabrika işleyişini yerinde gözlemlemenize olanak tanıyoruz. Saha ziyaretleri boyunca teknik süreçleri yerinde incelemenizi sağlıyor ve tüm ikili temaslarınızda profesyonel destek sunarak Türkiye’deki stratejik çözüm ortağınız olarak tüm süreç boyunca yanınızda yer alıyoruz."
        },
        s4: {
          title: "Kalite Denetimi",
          desc1: "Anatross Global olarak üretim bandındaki her aşamayı sizin adınıza bizzat denetliyor; teknik şartnameye uygunluk, malzeme kalitesi ve paketleme standartlarından ödün vermiyoruz.",
          desc2: "Saha onayımız ve kalite güvence sürecimiz tamamlanmadan hiçbir ürünün sevkiyatına izin vermeyerek, operasyonel risklerinizi henüz kaynağında kontrol altına alıyoruz."
        }
      },
      contact: {
        title: "İletişim",
        subtitle: "Bize Ulaşın",
        desc: "Projeleriniz, talepleriniz ve tüm iş birlikleri için aşağıdaki iletişim kanallarından bize ulaşabilir veya yandaki formu doldurabilirsiniz.",
        addressTitle: "Adres",
        phoneTitle: "Telefon",
        emailTitle: "E-Posta",
        socialTitle: "Sosyal Medya",
        formTitle: "İletişim Formu",
        formName: "İsim Soyisim",
        formNamePlaceholder: "Adınız ve Soyadınız",
        formEmail: "E-Posta",
        formEmailPlaceholder: "mail@ornek.com",
        formMessage: "Mesajınız",
        formMessagePlaceholder: "Bize iletmek istediğiniz mesajı buraya yazın...",
        formSubmit: "Mesajı Gönder",
        formSuccess: "Mesajınız başarıyla gönderildi!",
        address: "Küçükbakkalköy Mahallesi Selvili Sokak No:4/20 Ataşehir, Istanbul, Turkey, 34750",
        phone: "+90 212 400 09 09",
        email: "info@anatross.com"
      },
      footer: {
        desc: "B2B ve B2C Dış Ticaret Çözümleri. Satın alma, gümrük hizmetleri, kalite kontrol, vb. tüm ihtiyaçlarınızın esnek çözüm süreçlerini başlatmak için iletişime geçin.",
        contactTitle: "İletişim",
        legalTitle: "Sözleşmeler",
        kvkk: "KVKK ve Aydınlatma Metni",
        terms: "Kullanım Koşulları",
        cookies: "Çerez Politikası",
        copyright: "© {year} ANATROSS tüm hakları saklıdır.",
        rights: "Web sitedeki içerikler izinsiz kopyalanamaz ve çoğaltılamaz."
      },
      priceRequest: {
        title: "Fiyat Teklifi İsteyin",
        countrySectionTitle: "Göndermek istediğiniz ülkeyi seçin",
        country: "Nereye",
        packageSectionTitle: "Paket boyutlarınızı girin",
        weight: "Ağırlık (kg)",
        width: "En (cm)",
        length: "Boy (cm)",
        height: "Yükseklik (cm)",
        email: "Eposta",
        phone: "Telefon",
        recaptcha: "Ben robot değilim",
        privacyPolicyLink: "İletişim Formu Aydınlatma Metnini",
        privacyPolicyText: "okudum, anladım.",
        kvkkModalTitle: "Aydınlatma Metni",
        kvkkModalContent: "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, bu form aracılığıyla topladığımız kişisel verileriniz (isim, e-posta, telefon vb.) yalnızca talebinizin değerlendirilmesi, fiyatlandırma sürecinin yürütülmesi ve sizinle iletişime geçilmesi amacıyla işlenmektedir. Verileriniz, yasal zorunluluklar dışında üçüncü şahıslarla paylaşılmamaktadır.",
        close: "Kapat",
        submit: "Teklif Al",
        success: "Talebiniz başarıyla alınmıştır. En kısa sürede dönüş yapılacaktır.",
        error: "Bir hata oluştu, lütfen tekrar deneyin."
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        products: "Products",
        services: "Services",
        contact: "Contact",
        priceRequest: "Request a Quote"
      },
      home: {
        title: "Taking Turkey's Production Power to the Global Market",
        subtitle: "Your Professional Foreign Trade and Strategic Sourcing Partner.",
        cta: "Contact Us Now",
        whyUs: "Why Us?",
        w1_title: "Local Expertise",
        w1_desc: "We have the highest level of command over Turkey's production potential and regional sector dynamics. We bring you together with the most reliable source by analyzing the right manufacturer not only with catalog data, but with their actual performance in the field, financial strength, and production quality.",
        w2_title: "VIP Hosting",
        w2_desc: "We take commercial relations beyond digital screens. During your visits to Turkey, we welcome you at the airport, organize your entire trip from accommodation to factory visits, and stand by you in all meetings with our professional escort service.",
        w3_title: "Field Inspection",
        w3_desc: "For us, quality control is not a process done only at the time of shipment. We are personally present at the factory from the first stage of production to the packaging process; we eliminate the margin of error by inspecting compliance with your technical specifications on-site.",
        w4_title: "Full Transparency",
        w4_desc: "As your \"eyes and ears\" in Turkey, we ensure full transparency at every stage. We provide a data flow that eliminates distances with live images from the production line, technical inspection reports, and process updates.",
        w5_title: "Cost Advantage",
        w5_desc: "Thanks to our direct access to the manufacturer and our negotiation power over the local market, we minimize intermediary costs. We secure the most advantageous commercial terms and payment conditions on your behalf.",
        w6_title: "Boutique Service",
        w6_desc: "We know that every business partner's needs are different. Instead of standard procedures, we develop boutique supply models tailored to your demands and position ourselves entirely as an operation center integrated into your business model.",
        featuredServiceTitle: "Our Featured Service",
        faq_title: "Frequently Asked Questions",
        faq_q1: "How long does the sourcing process take?",
        faq_a1: "Many factors affect the sourcing process. Product type, order quantity, and manufacturer capacity directly affect production time. We provide you with a detailed project schedule from the beginning.",
        faq_q2: "Do you provide support in export and customs processes?",
        faq_a2: "Yes. We manage all customs procedures, required technical documents, and certification processes in accordance with international standards with our professional operations team.",
        faq_q3: "Which regions do you serve?",
        faq_a3: "We bring Turkey's production power to global markets. We can establish a solid supply chain from Turkey to anywhere in the world, without geographical boundaries.",
        faq_q4: "What do you do if a production error is detected during quality control?",
        faq_a4: "Our priority is to solve the error at the source. We reduce your risk to zero by not allowing any product to leave the factory before our field approval is completed and standards are met."
      },
      about: {
        title: "About Us",
        p1: "Anatross Global is a strategic Sourcing and Auditing company that combines Turkey's production power with the dynamics of international trade. With the awareness that modern trade is not just about finding products; we act as the professional representative and operational power of our international business partners in Turkey.",
        p2: "With our wide manufacturer network, deep connections in the local market, and uncompromising quality standards, we optimize supply chains end-to-end. We see trade not just as shopping, but as building trust; we reinforce this trust at every step with our principles of transparency and sustainability.",
        highlight: "Trade with Anatross Global is a professional solution partnership beyond borders."
      },
      products: {
        title: "Our Products",
        description: "We answer all your needs with our wide range of products.",
        p1: "Enterprise Solutions",
        p2: "Cloud Infrastructure",
        p3: "Data Analytics"
      },
      services: {
        title: "Our Services",
        description: "We are by your side with professional and innovative solutions at every step of your business.",
        s1: {
          title: "Foreign Trade",
          desc1: "As Anatross Global, our biggest priority in foreign trade is to bring Turkey's production power to global markets on a professional line. In our commercial activities, we focus not only on product shipment; but also on our brand's reputation in the digital world, transparent business partnerships, and a sustainable export network.",
          desc2: "By combining our dynamic entrepreneurial spirit with international standards, we aim to build a trust-based and permanent trade bridge. By blending local values with a global vision at every step, we continue to produce solutions that create value for our business partners."
        },
        s2: {
          title: "Strategic Sourcing Management",
          desc1: "As Anatross Global, thanks to our strong field contacts and strategic partnerships established throughout Turkey, we bring your demands together with the right manufacturers. We meticulously determine potential stakeholders that fully comply with our production quality, capacity reports, and financial reliability criteria.",
          desc2: "With the agility and corporate influence provided by our professional connections in the sector, we capture the most optimized quality-price balance for your project. We aim to add value to your business processes by offering not only product supply but also professional consulting services.",
          desc3: "We manage your supply process with the confidence provided by our wide communication channels; we establish a solid, transparent, and sustainable trade bridge by bringing your business together with the most competent solution partners in Turkey."
        },
        s3: {
          title: "VIP Field Operation",
          desc1: "We do not see trade merely as digital screens and correspondence; we lay the foundation of trust in the field. As Anatross Global, we personally host our potential business partners in Turkey, combining the digital world with physical reality. We meticulously coordinate every detail from your airport transfer to accommodation planning, turning your entire operational process in Turkey into a comfortable and efficient business trip.",
          desc2: "By visiting the production facilities and factories you are interested in with you; we allow you to observe the production stages of the products, quality standards, and factory operations on-site. We enable you to examine technical processes on-site during field visits and offer professional support in all your bilateral contacts, standing by you throughout the entire process as your strategic solution partner in Turkey."
        },
        s4: {
          title: "Quality Control",
          desc1: "As Anatross Global, we personally inspect every stage on the production line on your behalf; we do not compromise on compliance with technical specifications, material quality, and packaging standards.",
          desc2: "By not allowing the shipment of any product before our field approval and quality assurance process is completed, we take your operational risks under control right at the source."
        }
      },
      contact: {
        title: "Contact",
        subtitle: "Contact Us",
        desc: "For your projects, requests, and all collaborations, you can reach us through the communication channels below or fill out the form.",
        addressTitle: "Address",
        phoneTitle: "Phone",
        emailTitle: "Email",
        socialTitle: "Social Media",
        formTitle: "Contact Form",
        formName: "Full Name",
        formNamePlaceholder: "Your Name and Surname",
        formEmail: "Email",
        formEmailPlaceholder: "mail@example.com",
        formMessage: "Your Message",
        formMessagePlaceholder: "Write the message you want to send us here...",
        formSubmit: "Send Message",
        formSuccess: "Your message has been sent successfully!",
        address: "Küçükbakkalköy Mahallesi Selvili Sokak No:4/20 Ataşehir, Istanbul, Turkey, 34750",
        phone: "+90 212 400 09 09",
        email: "info@anatross.com"
      },
      footer: {
        desc: "B2B and B2C Foreign Trade Solutions. Contact us to start flexible solution processes for all your needs such as purchasing, customs services, quality control, etc.",
        contactTitle: "Contact",
        legalTitle: "Agreements",
        kvkk: "KVKK and Clarification Text",
        terms: "Terms of Use",
        cookies: "Cookie Policy",
        copyright: "© {year} ANATROSS all rights reserved.",
        rights: "The content on the website cannot be copied or reproduced without permission."
      },
      priceRequest: {
        title: "Request a Quote",
        countrySectionTitle: "Select the destination country",
        country: "Where to",
        packageSectionTitle: "Enter your package dimensions",
        weight: "Weight (kg)",
        width: "Width (cm)",
        length: "Length (cm)",
        height: "Height (cm)",
        email: "Email",
        phone: "Phone",
        recaptcha: "I'm not a robot",
        privacyPolicyLink: "Contact Form Privacy Notice",
        privacyPolicyText: "I have read and understood.",
        kvkkModalTitle: "Clarification Text",
        kvkkModalContent: "In accordance with the Personal Data Protection Law (KVKK), your personal data (name, email, phone, etc.) collected through this form is processed solely for the purpose of evaluating your request, conducting the pricing process, and contacting you. Your data is not shared with third parties except for legal obligations.",
        close: "Close",
        submit: "Get a Quote",
        success: "Your request has been successfully received. We will get back to you shortly.",
        error: "An error occurred, please try again."
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "معلومات عنا",
        products: "المنتجات",
        services: "الخدمات",
        contact: "اتصل بنا",
        priceRequest: "طلب سعر"
      },
      home: {
        title: "نأخذ قوة الإنتاج التركية إلى السوق العالمية",
        subtitle: "شريكك المهني في التجارة الخارجية والتوريد الاستراتيجي.",
        cta: "اتصل بنا الآن",
        whyUs: "لماذا نحن؟",
        w1_title: "الخبرة المحلية",
        w1_desc: "لدينا أعلى مستوى من الإلمام بإمكانيات الإنتاج في تركيا وديناميكيات القطاع الإقليمي. نجمعك بالمصدر الأكثر موثوقية من خلال تحليل الشركة المصنعة المناسبة ليس فقط باستخدام بيانات الكتالوج، ولكن من خلال أدائها الفعلي في الميدان وقوتها المالية وجودة إنتاجها.",
        w2_title: "استضافة كبار الشخصيات",
        w2_desc: "نأخذ العلاقات التجارية إلى ما هو أبعد من الشاشات الرقمية. خلال زياراتك لتركيا، نرحب بك في المطار، وننظم رحلتك بالكامل من الإقامة إلى زيارات المصانع، ونقف بجانبك في جميع الاجتماعات مع خدمة المرافقة المهنية لدينا.",
        w3_title: "التفتيش الميداني",
        w3_desc: "بالنسبة لنا، مراقبة الجودة ليست عملية تتم فقط وقت الشحن. نحن متواجدون شخصيًا في المصنع من المرحلة الأولى للإنتاج إلى عملية التعبئة والتغليف؛ نقوم بالقضاء على هامش الخطأ من خلال فحص الامتثال لمواصفاتك الفنية في الموقع.",
        w4_title: "الشفافية التامة",
        w4_desc: "بصفتنا \"عينك وأذنك\" في تركيا، فإننا نضمن الشفافية التامة في كل مرحلة. نوفر تدفقًا للبيانات يقضي على المسافات من خلال صور حية من خط الإنتاج، وتقارير الفحص الفني، وتحديثات العملية.",
        w5_title: "ميزة التكلفة",
        w5_desc: "بفضل وصولنا المباشر إلى الشركة المصنعة وقوتنا التفاوضية في السوق المحلية، نقوم بتقليل تكاليف الوسطاء. نؤمن الشروط التجارية وشروط الدفع الأكثر فائدة نيابة عنك.",
        w6_title: "خدمة البوتيك",
        w6_desc: "نعلم أن احتياجات كل شريك تجاري مختلفة. بدلاً من الإجراءات القياسية، نقوم بتطوير نماذج توريد مخصصة تلبي متطلباتك ونضع أنفسنا كمركز عمليات متكامل تمامًا في نموذج عملك.",
        featuredServiceTitle: "خدمتنا المميزة",
        faq_title: "أسئلة مكررة",
        faq_q1: "كم تستغرق عملية التوريد؟",
        faq_a1: "هناك العديد من العوامل التي تؤثر على عملية التوريد. نوع المنتج، وكمية الطلب، وقدرة الشركة المصنعة تؤثر بشكل مباشر على وقت الإنتاج. نحن نقدم لك جدولاً زمنياً مفصلاً للمشروع من البداية.",
        faq_q2: "هل تقدمون الدعم في عمليات التصدير والجمارك؟",
        faq_a2: "نعم. ندير جميع الإجراءات الجمركية، والوثائق الفنية المطلوبة، وعمليات التصديق وفقًا للمعايير الدولية من خلال فريق العمليات المحترف لدينا.",
        faq_q3: "ما هي المناطق التي تخدمونها؟",
        faq_a3: "ننقل قوة الإنتاج التركية إلى الأسواق العالمية. يمكننا إنشاء سلسلة توريد قوية من تركيا إلى أي مكان في العالم، دون حدود جغرافية.",
        faq_q4: "ماذا تفعلون إذا تم اكتشاف خطأ في الإنتاج أثناء مراقبة الجودة؟",
        faq_a4: "أولويتنا هي حل الخطأ من المصدر. نحن نقلل المخاطر الخاصة بك إلى الصفر من خلال عدم السماح لأي منتج بمغادرة المصنع قبل اكتمال موافقتنا الميدانية واستيفاء المعايير."
      },
      about: {
        title: "معلومات عنا",
        p1: "أناتروس جلوبال هي شركة استراتيجية للتوريد والتدقيق تجمع بين القوة الإنتاجية لتركيا وديناميكيات التجارة الدولية. وإدراكًا منا بأن التجارة الحديثة لا تقتصر على إيجاد المنتجات فحسب؛ فإننا نعمل كممثل محترف وقوة تشغيلية لشركائنا التجاريين الدوليين في تركيا.",
        p2: "من خلال شبكة مصنعينا الواسعة، وعلاقاتنا العميقة في السوق المحلية، ومعايير الجودة التي لا نتنازل عنها، نقوم بتحسين سلاسل التوريد من البداية إلى النهاية. نحن نرى التجارة ليس فقط كعملية بيع وشراء، ولكن كبناء للثقة؛ ونعزز هذه الثقة في كل خطوة من خلال مبادئنا المتمثلة في الشفافية والاستدامة.",
        highlight: "التجارة مع أناتروس جلوبال هي شراكة حلول احترافية تتجاوز الحدود."
      },
      products: {
        title: "منتجاتنا",
        description: "نجيب على جميع احتياجاتك من خلال مجموعة واسعة من المنتجات.",
        p1: "حلول الشركات",
        p2: "البنية التحتية السحابية",
        p3: "تحليل البيانات"
      },
      services: {
        title: "خدماتنا",
        description: "نحن بجانبك بحلول احترافية ومبتكرة في كل خطوة من خطوات عملك.",
        s1: {
          title: "التجارة الخارجية",
          desc1: "بصفتنا أناتروس جلوبال، فإن أولويتنا الكبرى في التجارة الخارجية هي جمع قوة الإنتاج في تركيا مع الأسواق العالمية بشكل احترافي. في أنشطتنا التجارية، لا نركز فقط على شحن المنتجات؛ بل نركز أيضًا على سمعة علامتنا التجارية في العالم الرقمي، والشراكات التجارية الشفافة، وشبكة تصدير مستدامة.",
          desc2: "من خلال الجمع بين روح ريادة الأعمال الديناميكية لدينا والمعايير الدولية، نهدف إلى بناء جسر تجاري دائم وقائم على الثقة. من خلال مزج القيم المحلية برؤية عالمية في كل خطوة، نواصل إنتاج حلول تخلق قيمة لشركائنا التجاريين."
        },
        s2: {
          title: "الإدارة الاستراتيجية للتوريد",
          desc1: "بصفتنا أناتروس جلوبال، وبفضل اتصالاتنا الميدانية القوية وشراكاتنا الاستراتيجية التي تأسست في جميع أنحاء تركيا، نجمع بين طلباتك والمصنعين المناسبين. نحدد بدقة أصحاب المصلحة المحتملين الذين يمتثلون بالكامل لمعايير جودة الإنتاج وتقارير القدرات والموثوقية المالية الخاصة بنا.",
          desc2: "بفضل الرشاقة والنفوذ المؤسسي الذي توفره اتصالاتنا المهنية في القطاع، نحصل على أفضل توازن بين الجودة والسعر لمشروعك. نهدف إلى إضافة قيمة إلى عمليات عملك من خلال تقديم خدمات استشارية مهنية إلى جانب توريد المنتجات.",
          desc3: "نحن ندير عملية التوريد الخاصة بك بالثقة التي توفرها قنوات الاتصال الواسعة لدينا؛ نؤسس جسرًا تجاريًا صلبًا وشفافًا ومستدامًا من خلال الجمع بين عملك وأكثر شركاء الحلول كفاءة في تركيا."
        },
        s3: {
          title: "العمليات الميدانية لكبار الشخصيات (VIP)",
          desc1: "نحن لا نرى التجارة مجرد شاشات رقمية ومراسلات؛ بل نضع أساس الثقة في الميدان. بصفتنا أناتروس جلوبال، نستضيف شخصيًا شركاءنا التجاريين المحتملين في تركيا، جامعين بين العالم الرقمي والواقع المادي. نقوم بتنسيق كل التفاصيل بدقة من نقل المطار إلى تخطيط الإقامة، وتحويل العملية التشغيلية بأكملها في تركيا إلى رحلة عمل مريحة وفعالة.",
          desc2: "من خلال زيارة مرافق الإنتاج والمصانع التي تهتم بها معك؛ نسمح لك بمراقبة مراحل إنتاج المنتجات ومعايير الجودة وعمليات المصنع على أرض الواقع. نمكنك من فحص العمليات الفنية في الموقع أثناء الزيارات الميدانية ونقدم لك دعمًا مهنيًا في جميع اتصالاتك الثنائية، ونقف بجانبك طوال العملية بأكملها كشريك استراتيجي لك في تركيا."
        },
        s4: {
          title: "مراقبة الجودة",
          desc1: "بصفتنا أناتروس جلوبال، نقوم شخصيًا بفحص كل مرحلة على خط الإنتاج نيابة عنك؛ ولا نتنازل عن الامتثال للمواصفات الفنية وجودة المواد ومعايير التعبئة والتغليف.",
          desc2: "من خلال عدم السماح بشحن أي منتج قبل اكتمال موافقتنا الميدانية وعملية ضمان الجودة، فإننا نسيطر على مخاطرك التشغيلية من المصدر."
        }
      },
      contact: {
        title: "اتصل بنا",
        subtitle: "تواصل معنا",
        desc: "لمشاريعك وطلباتك وجميع أوجه التعاون، يمكنك الوصول إلينا عبر قنوات الاتصال أدناه أو ملء النموذج.",
        addressTitle: "العنوان",
        phoneTitle: "هاتف",
        emailTitle: "البريد الإلكتروني",
        socialTitle: "وسائل التواصل الاجتماعي",
        formTitle: "نموذج الاتصال",
        formName: "الاسم واللقب",
        formNamePlaceholder: "اسمك ولقبك",
        formEmail: "البريد الإلكتروني",
        formEmailPlaceholder: "mail@example.com",
        formMessage: "رسالتك",
        formMessagePlaceholder: "اكتب الرسالة التي تريد إرسالها إلينا هنا...",
        formSubmit: "إرسال رسالة",
        formSuccess: "تم إرسال رسالتك بنجاح!",
        address: "Küçükbakkalköy Mahallesi Selvili Sokak No:4/20 Ataşehir, Istanbul, Turkey, 34750",
        phone: "+90 212 400 09 09",
        email: "info@anatross.com"
      },
      footer: {
        desc: "حلول التجارة الخارجية B2B و B2C. اتصل بنا لبدء عمليات حل مرنة لجميع احتياجاتك مثل الشراء والخدمات الجمركية ومراقبة الجودة وما إلى ذلك.",
        contactTitle: "اتصل بنا",
        legalTitle: "الاتفاقيات",
        kvkk: "نص التوضيح وقانون حماية البيانات",
        terms: "شروط الاستخدام",
        cookies: "سياسة ملفات تعريف الارتباط",
        copyright: "© {year} ANATROSS جميع الحقوق محفوظة.",
        rights: "لا يجوز نسخ محتوى الموقع أو إعادة إنتاجه بدون إذن."
      },
      priceRequest: {
        title: "طلب عرض سعر",
        countrySectionTitle: "حدد بلد الوجهة",
        country: "إلى أين",
        packageSectionTitle: "أدخل أبعاد الحزمة الخاصة بك",
        weight: "الوزن (كجم)",
        width: "العرض (سم)",
        length: "الطول (سم)",
        height: "الارتفاع (سم)",
        email: "البريد الإلكتروني",
        phone: "هاتف",
        recaptcha: "أنا لست روبوتًا",
        privacyPolicyLink: "إشعار خصوصية نموذج الاتصال",
        privacyPolicyText: "لقد قرأت وفهمت.",
        kvkkModalTitle: "نص التوضيح",
        kvkkModalContent: "وفقًا لقانون حماية البيانات الشخصية (KVKK)، تتم معالجة بياناتك الشخصية (الاسم، البريد الإلكتروني، الهاتف، إلخ) التي تم جمعها من خلال هذا النموذج فقط لغرض تقييم طلبك وإجراء عملية التسعير والاتصال بك. لا تتم مشاركة بياناتك مع جهات خارجية باستثناء الالتزامات القانونية.",
        close: "إغلاق",
        submit: "احصل على عرض سعر",
        success: "تم استلام طلبك بنجاح. سوف نعود اليكم قريبا.",
        error: "حدث خطأ، يرجى المحاولة مرة أخرى."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "tr", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
