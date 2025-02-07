// Dil çevirilerini ayrı bir dosyada tutuyoruz
const translations = {
    tr: {
        // Navigation
        'nav-about': 'Hakkımda',
        'nav-skills': 'Yetenekler',
        'nav-experience': 'Deneyim',
        'nav-contact': 'İletişim',
        
        // Hero Section
        'hero-title': 'Merhaba, Ben Serkan',
        'hero-subtitle': 'Web Geliştirici & Grafik Tasarımcı',
        'hero-contact': 'Benimle İletişime Geç',
        'hero-about': 'Hakkımda',
        
        // About Section
        'about-title': 'Hakkımda',
        'about-highlight': 'Teknoloji tutkunu bir Web Geliştirici ve geleceğin Siber Güvenlik Uzmanı.',
        'about-p1': 'Ankara\'da doğup büyüdüm ve küçük yaşlardan beri teknolojiye olan tutkum hiç eksilmedi. Ortaokul yıllarından bu yana dijital dünyada kendimi geliştirmeye odaklandım. Grafik tasarımla başlayan yolculuğum, zamanla web geliştirme, makale yazarlığı ve site çevirmenliği gibi farklı alanlara yayıldı.',
        'about-p2': 'Şu anda aktif olarak Full Stack Web Developer olarak çalışıyorum ve aynı zamanda Siber Güvenlik alanında kendimi geliştiriyorum. 2025 hedeflerim arasında güvenlik açıklarını tespit etme ve önleme konusunda uzmanlaşmak var.',
        'about-collab-title': 'Neden Birlikte Çalışmalıyız?',
        'about-collab-1': '✨ Modern ve güvenli web uygulamaları geliştirme deneyimi',
        'about-collab-2': '🚀 Hızlı öğrenme ve adapte olma yeteneği',
        'about-collab-3': '🔒 Güvenlik odaklı geliştirme yaklaşımı',
        'about-collab-4': '🎯 Detaylara özen gösteren çalışma prensibi',
        'about-collab-5': '🤝 Güçlü iletişim ve işbirliği becerileri',
        
        // Skills Section
        'skills-title': 'Yetenekler',
        'skill-web': 'Web Geliştirme',
        'skill-article': 'Makale Yazarlığı',
        'skill-design': 'Grafik Tasarım',
        'skill-translation': 'Site Çevirmenliği',
        
        // Experience Section
        'exp-title': 'Deneyimlerim',
        'exp-web-title': 'Web Developer',
        'exp-web-desc': 'Full stack web geliştirme alanında modern teknolojiler kullanarak projeler geliştirdim.',
        'exp-article-title': 'Makale Yazarı',
        'exp-article-desc': 'Teknoloji ve yazılım alanında bilgilendirici makaleler yazarak içerik ürettim.',
        'exp-design-title': 'Grafik Tasarımcı',
        'exp-design-desc': 'Modern ve yaratıcı tasarımlar oluşturarak markaların görsel kimliklerine katkıda bulundum.',
        'exp-trans-title': 'Site Çevirmeni',
        'exp-trans-desc': 'Uluslararası web sitelerinin yerelleştirme çalışmalarını gerçekleştirdim.',
        
        // Contact Form
        'contact-title': 'İletişim',
        'contact-name': 'Adınız',
        'contact-email': 'E-posta Adresiniz',
        'contact-message': 'Mesajınız',
        'contact-send': 'Gönder',
        
        // Footer
        'footer-rights': 'Tüm hakları saklıdır.',
        
        // Time
        'year': 'Yıl',
        'years': 'Yıl'
    },
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Hello, I\'m Serkan',
        'hero-subtitle': 'Web Developer & Graphic Designer',
        'hero-contact': 'Contact Me',
        'hero-about': 'About Me',
        
        // About Section
        'about-title': 'About Me',
        'about-highlight': 'A technology enthusiast Web Developer and future Cybersecurity Expert.',
        'about-p1': 'Born and raised in Ankara, my passion for technology has never diminished since childhood. I\'ve focused on developing myself in the digital world since middle school. My journey, which started with graphic design, has expanded into different areas such as web development, article writing, and website translation.',
        'about-p2': 'I\'m currently working as a Full Stack Web Developer and developing myself in the field of Cybersecurity. Among my 2025 goals is to specialize in detecting and preventing security vulnerabilities.',
        'about-collab-title': 'Why Work With Me?',
        'about-collab-1': '✨ Experience in developing modern and secure web applications',
        'about-collab-2': '🚀 Quick learning and adaptation ability',
        'about-collab-3': '🔒 Security-focused development approach',
        'about-collab-4': '🎯 Detail-oriented work principle',
        'about-collab-5': '🤝 Strong communication and collaboration skills',
        
        // Skills Section
        'skills-title': 'Skills',
        'skill-web': 'Web Development',
        'skill-article': 'Article Writing',
        'skill-design': 'Graphic Design',
        'skill-translation': 'Site Translation',
        
        // Experience Section
        'exp-title': 'Experience',
        'exp-web-title': 'Web Developer',
        'exp-web-desc': 'Developed projects using modern technologies in full stack web development.',
        'exp-article-title': 'Article Writer',
        'exp-article-desc': 'Created informative content in technology and software fields.',
        'exp-design-title': 'Graphic Designer',
        'exp-design-desc': 'Contributed to brands\' visual identities by creating modern and creative designs.',
        'exp-trans-title': 'Site Translator',
        'exp-trans-desc': 'Performed localization work for international websites.',
        
        // Contact Form
        'contact-title': 'Contact',
        'contact-name': 'Your Name',
        'contact-email': 'Your Email',
        'contact-message': 'Your Message',
        'contact-send': 'Send',
        
        // Footer
        'footer-rights': 'All rights reserved.',
        
        // Time
        'year': 'Year',
        'years': 'Years'
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'tr';
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.updateContent();
        this.setupTransitionEffect();
    }

    setupLanguageToggle() {
        const button = document.getElementById('languageToggle');
        if (button) {
            button.textContent = this.currentLang === 'tr' ? 'EN' : 'TR';
            button.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        // Geçiş animasyonunu başlat
        document.body.style.opacity = '0';

        setTimeout(() => {
            this.currentLang = this.currentLang === 'tr' ? 'en' : 'tr';
            localStorage.setItem('preferredLanguage', this.currentLang);
            
            // Dil butonunu güncelle
            const button = document.getElementById('languageToggle');
            if (button) {
                button.textContent = this.currentLang === 'tr' ? 'EN' : 'TR';
            }

            // İçeriği güncelle
            this.updateContent();
            
            // HTML lang özelliğini güncelle
            document.documentElement.lang = this.currentLang;
            
            // Sayfanın başlığını güncelle
            document.title = this.currentLang === 'tr' ? 'Serkan - Portföy' : 'Serkan - Portfolio';

            // Geçiş animasyonunu bitir
            document.body.style.opacity = '1';
        }, 300);
    }

    updateContent() {
        // data-translate özelliği olan tüm elementleri güncelle
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[this.currentLang][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Deneyim yıllarını güncelle
        this.updateExperienceYears();
    }

    updateExperienceYears() {
        document.querySelectorAll('.timeline-item .date').forEach(element => {
            const years = parseInt(element.textContent);
            if (!isNaN(years)) {
                const yearKey = years === 1 ? 'year' : 'years';
                element.textContent = `${years} ${translations[this.currentLang][yearKey]}`;
            }
        });
    }

    setupTransitionEffect() {
        // Geçiş efekti için CSS ekle
        const style = document.createElement('style');
        style.textContent = `
            body {
                transition: opacity 0.3s ease-in-out;
            }
            #languageToggle {
                transition: all 0.3s ease;
            }
            #languageToggle:hover {
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);
    }
}

// Sayfa yüklendiğinde dil yöneticisini başlat
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});