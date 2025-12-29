// Mock data for Eraser Medikal website

export const siteInfo = {
  companyName: 'ERASER',
  tagline: 'ALL IN SAFE',
  description: 'Eraser Medikal, 2007 yılında İzmir\'de kurulmuş, kemoterapi ve TPN karışımları için medikal cihazlar üreten öncü bir firmadır.',
  contact: {
    phone: '+90 232 479 80 60',
    fax: '+90 232 479 80 25',
    email: 'info@eraser.com.tr',
    address: 'No:78 Pınarbaşı, Bornova, İzmir, Turkey'
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/eraser-medikal',
  },
  stats: [
    { number: '1700', label: 'Metrekare Kapalı Alan', icon: 'building' },
    { number: '4', label: 'Kıtaya İhracat', icon: 'globe' },
    { number: '15+', label: 'Yıl Tecrübe', icon: 'award' },
    { number: '100+', label: 'Ürün Çeşidi', icon: 'package' }
  ]
};

export const heroSlides = [
  {
    id: 1,
    title: 'ONCOERA ÜRÜN SERİSİ İLE',
    subtitle: 'ONKOLOJİ GÜVENLİĞİ',
    description: 'Kemoterapi ilaç hazırlama ve uygulamada güvenli çözümler',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&h=600&fit=crop',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    id: 2,
    title: 'NUTRIERA ÜRÜN SERİSİ İLE',
    subtitle: 'BESLENME GÜVENLİĞİ',
    description: 'TPN ve parenteral beslenme çözümleri',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&h=600&fit=crop',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    id: 3,
    title: 'ERAVERSE ÜRÜN SERİSİ İLE',
    subtitle: 'KONTROLLÜ İLAÇ HAZIRLAMA',
    description: 'İlaç hazırlama modülleri ve yazılım sistemleri',
    image: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=1200&h=600&fit=crop',
    bgColor: 'from-purple-50 to-indigo-50'
  },
  {
    id: 4,
    title: 'ÜRETİM GÜVENLİĞİ',
    subtitle: 'ISO 13485 SERTİFİKALI',
    description: 'Class 10,000 ve Class 100,000 temiz oda üretim',
    image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=1200&h=600&fit=crop',
    bgColor: 'from-slate-50 to-gray-50'
  },
  {
    id: 5,
    title: 'GÜÇLÜ CİHAZ PARKURU',
    subtitle: 'İLERİ TEKNOLOJİ',
    description: 'Robotik ve tam otomatik sistemler',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&h=600&fit=crop',
    bgColor: 'from-orange-50 to-amber-50'
  }
];

export const solutions = [
  {
    id: 1,
    title: 'Robotik Antineoplastik İlaç Hazırlama',
    description: 'Robotik sistemler kullanılarak antineoplastik ilaç tedavilerinin el değmeden, doğru ve steril bir şekilde hazırlanması.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    category: 'Onkoloji',
    icon: 'bot'
  },
  {
    id: 2,
    title: 'Tam Otomatik Antineoplastik İlaç Hazırlama',
    description: 'Kapalı sistem ilaç transfer cihazları ve tam otomatik sistemler kullanılarak antineoplastik ilaç tedavilerinin doğru ve steril hazırlanması.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop',
    category: 'Onkoloji',
    icon: 'cpu'
  },
  {
    id: 3,
    title: 'Yarı Otomatik Antineoplastik İlaç Hazırlama',
    description: 'Kapalı sistem ilaç transfer cihazları ve yarı otomatik sistemler kullanılarak antineoplastik ilaç tedavilerinin doğru ve steril hazırlanması.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop',
    category: 'Onkoloji',
    icon: 'settings'
  },
  {
    id: 4,
    title: 'TPN Hazırlama',
    description: 'Kişiye özel TPN karışımlarının otomatik cihazlar yardımı ile, kapalı bir sistem içinde steril ve doğru bir şekilde hazırlanması.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    category: 'Beslenme',
    icon: 'droplet'
  },
  {
    id: 5,
    title: 'Aseptik IV İlaç Hazırlama',
    description: 'Cihaz ve yazılımlar kullanılarak, tehlikesiz IV ilaç tedavilerinin, çoklu elektronik kontrollerle doğru bir şekilde hazırlanması.',
    image: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=400&h=300&fit=crop',
    category: 'İlaç Hazırlama',
    icon: 'syringe'
  },
  {
    id: 6,
    title: 'Majistral Oral Süspansiyon Hazırlama',
    description: 'Pediatri ve yoğun bakım ünitelerinde tedavi gören hastaların oral yoldan ilaç alımını kolaylaştıran süspansiyon hazırlama.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
    category: 'İlaç Hazırlama',
    icon: 'beaker'
  },
  {
    id: 7,
    title: 'Birim Doz Tablet Paketleme',
    description: 'Hastane eczanesinin envanterinde bulunan oral katı dozaj formlarının birim dozlar halinde paketlenmesi.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
    category: 'Paketleme',
    icon: 'package'
  },
  {
    id: 8,
    title: 'Birim Doz Şurup Hazırlama',
    description: 'Hastane eczanesinin envanterinde bulunan oral sıvı dozaj formundaki ilaçların birim dozlar halinde hazırlanması.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop',
    category: 'Paketleme',
    icon: 'flask-conical'
  },
  {
    id: 9,
    title: 'Hasta Bazlı İlaç Dağıtım',
    description: 'Hastane eczanesinden servislerdeki yatan hastalara gönderimi yapılacak günlük dozların hazırlanması ve dağıtımı.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop',
    category: 'Dağıtım',
    icon: 'truck'
  }
];

export const products = [
  {
    id: 1,
    name: 'i.v.STATION Onco™ Kemoterapi Hazırlama Robotu',
    description: 'Hastaya özel kemoterapi ilaçlarını, tam otomatik bir şekilde ve güvenle hazırlar.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    category: 'Robotik Sistemler',
    featured: true
  },
  {
    id: 2,
    name: 'ONCOERA Tam Otomatik Kemoterapi Hazırlama Cihazı',
    description: 'Hastaya özel kemoterapi ilaçlarını, tam otomatik bir şekilde ve güvenle hazırlar.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop',
    category: 'Kemoterapi Cihazları',
    featured: true
  },
  {
    id: 3,
    name: 'ERAVERSE CHECK İlaç Doğrulama Modülü',
    description: 'Hazırlanacak ilaçların görsel doğrulamasını sağlayan ilaç doğrulama modülü.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop',
    category: 'ERAVERSE Serisi',
    featured: true
  },
  {
    id: 4,
    name: 'ERAVERSE DOSER İlaç Dolum Modülü',
    description: 'Kapalı sistem kullanarak ilaç ve sıvıların güvenli transferini sağlayan dolum modülü.',
    image: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=400&h=300&fit=crop',
    category: 'ERAVERSE Serisi',
    featured: true
  },
  {
    id: 5,
    name: 'ERAVERSE SENSE Ağırlık Doğrulama Modülü',
    description: 'Manuel veya Eraverse Doser ile gerçekleştirilen dolumların gravimetrik doğrulaması.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop',
    category: 'ERAVERSE Serisi',
    featured: false
  },
  {
    id: 6,
    name: 'MULTIBLIST N1 Birim Doz Tablet Paketleme Cihazı',
    description: 'Blister içindeki katı dozaj formlarının birim dozlar halinde otomatik paketlenmesi.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
    category: 'Paketleme Cihazları',
    featured: false
  },
  {
    id: 7,
    name: 'SAFE CRUSH Otomatik Tablet Ezme Cihazı',
    description: 'Tabletlerin elektronik olarak, güvenle, kolay ve hızlı bir şekilde ezilmesini sağlar.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
    category: 'Diğer Cihazlar',
    featured: false
  },
  {
    id: 8,
    name: 'ONCOERA® İğnesiz Konnektörler',
    description: 'Split Septum Valf grubu iğnesiz konnektörler.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    category: 'Tıbbi Malzemeler',
    featured: false
  },
  {
    id: 9,
    name: 'ONCOERA® İnfüzyon Setleri',
    description: 'Kritik bakım yapan birimlerde kullanılan infüzyon setleri.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop',
    category: 'Tıbbi Malzemeler',
    featured: false
  },
  {
    id: 10,
    name: 'NUTRIERA® Parenteral Beslenme Setleri',
    description: 'Total parenteral beslenme için özel tasarlanmış setler.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop',
    category: 'Tıbbi Malzemeler',
    featured: false
  },
  {
    id: 11,
    name: 'EVA Torbalar',
    description: 'UV korumalı, farklı hacim ve özelliklerde EVA torbalar.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=300&fit=crop',
    category: 'Tıbbi Malzemeler',
    featured: false
  },
  {
    id: 12,
    name: 'SYRSPEND® SF PH4 Süspansiyon Bazı',
    description: 'Oral süspansiyon hazırlanması için taşıyıcı süspansiyon bazı.',
    image: 'https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=400&h=300&fit=crop',
    category: 'Tıbbi Malzemeler',
    featured: false
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'Oral Süspansiyon Hazırlama Kategorileri ve Karar Algoritması',
    date: '2021-06-08',
    category: 'Oral Süspansiyon Hazırlama',
    excerpt: 'İnvotek Sağlık Teknolojileri eczacısı ve SBÜ Tepecik Eğitim ve Araştırma Hastanesi\'nin eczacılarının ortak çalışması.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'İlaç Güvenliğini Geliştirmede Tall Man Letters (TML) Tekniği',
    date: '2021-05-24',
    category: 'İlaç Güvenliği',
    excerpt: 'İnvotek Sağlık Teknolojileri ve SBÜ Tepecik Eğitim ve Araştırma Hastanesi\'nin eczacılarının ortak çalışması.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Birim Doz Tablet Paketleme',
    date: '2021-04-26',
    category: 'Birim Doz Paketleme',
    excerpt: 'Hastane eczanesinden servislere, hastaya özel günlük ilaç dozlarını güvenli bir şekilde göndermek.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'Farmasötik Karışımlarda İlaç Hatalarının Önemi',
    date: '2022-01-03',
    category: 'İlaç Güvenliği',
    excerpt: 'İlaç hazırlama süreçlerinde güvenlik ve doğruluğun önemi üzerine kapsamlı bir çalışma.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop'
  }
];

export const news = [
  {
    id: 1,
    title: 'Florida Uluslararası Medikal Fuarı 2024',
    date: '2024-06-28',
    category: 'Kongre/Fuar',
    excerpt: '19-21 Haziran 2024 tarihlerinde Florida\'da gerçekleştirilen uluslararası medikal fuarında Oncoera, Nutriera ve Eraverse ürünlerimizi Amerika pazarına tanıttık.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Expomed Eurasia 2024',
    date: '2024-05-01',
    category: 'Kongre/Fuar',
    excerpt: '25-27 Nisan 2024 tarihlerinde İstanbul Tüyap Kongre Merkezi\'nde gerçekleşen "Leading Medical Devices Exhibition of Eurasia" fuarındaydık.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Eraser Medikal Eczacıları İKÇÜ Eczacılık Fakültesi Öğrencileri İle Buluştu',
    date: '2024-01-12',
    category: 'Basın Açıklaması',
    excerpt: 'Eczacılarımız Ecz. Fusun Kolat ve Ecz. Hakkı Özçeltik, İzmir Katip Çelebi Üniversitesi Eczacılık Fakültesi 5. sınıf öğrencilerine "Hastane Eczacılığı" dersi verdi.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'ERAVERSE Ürünlerinin Uluslararası Lansmanı Medica 2022\'de Gerçekleştirildi',
    date: '2022-11-15',
    category: 'Basın Açıklaması',
    excerpt: 'İlaç hazırlamayı destekleyen cihaz serisi ERAVERSE ürünleri, Medica 2022\'de uluslararası pazara sunuldu.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    title: 'Türkiye\'nin En Hızlı Büyüyen 100 Şirketi Arasına Girdik',
    date: '2022-02-17',
    category: 'Basın Açıklaması',
    excerpt: 'TOBB ETÜ ve TEPAV işbirliğiyle TOBB\'un öncülüğünde yapılan Türkiye\'nin en hızlı büyüyen şirketleri araştırmasında 2021 yarışmasında başarılı olduk.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    title: 'Arab Health 2023 Uluslararası Sağlık Medikal Fuarı',
    date: '2023-02-01',
    category: 'Kongre/Fuar',
    excerpt: 'Üreticisi olduğumuz ürünlerimizle 30 Ocak - 2 Şubat 2023 tarihlerinde Dubai\'de gerçekleştirilen Arab Health 2023\'e katıldık.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
  }
];

export const menuItems = [
  { label: 'Çözümler', href: '#cozumler' },
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Üretim ve Ar-Ge', href: '#uretim' },
  { label: 'Eraser Akademi', href: '#akademi' },
  { label: 'Kaynaklar', href: '#kaynaklar' },
  { label: 'Kurumsal', href: '#kurumsal' },
  { label: 'Blog', href: '#blog' }
];