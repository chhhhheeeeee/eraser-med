import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  tr: {
    translation: {
      // Navigation
      "nav.solutions": "Çözümler",
      "nav.products": "Ürünler",
      "nav.production": "Üretim ve Ar-Ge",
      "nav.academy": "Eraser Akademi",
      "nav.resources": "Kaynaklar",
      "nav.corporate": "Kurumsal",
      "nav.blog": "Blog",
      "nav.contact": "İletişim",
      "nav.about": "Hakkımızda",
      "nav.news": "Haberler",
      
      // Buttons
      "btn.getQuote": "Teklif Al",
      "btn.readMore": "Devamını Oku",
      "btn.learnMore": "Daha Fazla Bilgi",
      "btn.viewAll": "Tümünü Gör",
      "btn.send": "Gönder",
      
      // Footer
      "footer.quickAccess": "Hızlı Erişim",
      "footer.ourBrands": "Markalarımız",
      "footer.contactInfo": "İletişim Bilgileri",
      "footer.privacyPolicy": "Gizlilik Politikası",
      "footer.termsOfUse": "Kullanım Koşulları",
      "footer.career": "Kariyer",
      
      // Contact Form
      "contact.name": "Ad Soyad",
      "contact.email": "E-posta",
      "contact.phone": "Telefon",
      "contact.company": "Şirket",
      "contact.message": "Mesajınız",
      "contact.submit": "Gönder",
      "contact.success": "Mesajınız başarıyla gönderildi!",
      
      // Common
      "common.loading": "Yükleniyor...",
      "common.error": "Bir hata oluştu",
      "common.allRightsReserved": "Tüm hakları saklıdır",
      
      // Pages
      "page.home": "Ana Sayfa",
      "page.about": "Hakkımızda",
      "page.contact": "İletişim",
      "page.notFound": "Sayfa Bulunamadı",
    }
  },
  en: {
    translation: {
      // Navigation
      "nav.solutions": "Solutions",
      "nav.products": "Products",
      "nav.production": "Production & R&D",
      "nav.academy": "Eraser Academy",
      "nav.resources": "Resources",
      "nav.corporate": "Corporate",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      "nav.about": "About Us",
      "nav.news": "News",
      
      // Buttons
      "btn.getQuote": "Get Quote",
      "btn.readMore": "Read More",
      "btn.learnMore": "Learn More",
      "btn.viewAll": "View All",
      "btn.send": "Send",
      
      // Footer
      "footer.quickAccess": "Quick Access",
      "footer.ourBrands": "Our Brands",
      "footer.contactInfo": "Contact Information",
      "footer.privacyPolicy": "Privacy Policy",
      "footer.termsOfUse": "Terms of Use",
      "footer.career": "Career",
      
      // Contact Form
      "contact.name": "Full Name",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.company": "Company",
      "contact.message": "Your Message",
      "contact.submit": "Submit",
      "contact.success": "Your message has been sent successfully!",
      
      // Common
      "common.loading": "Loading...",
      "common.error": "An error occurred",
      "common.allRightsReserved": "All rights reserved",
      
      // Pages
      "page.home": "Home",
      "page.about": "About Us",
      "page.contact": "Contact",
      "page.notFound": "Page Not Found",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
