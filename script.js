// Scroll fonksiyonunu güncelleyelim
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navHeight = document.querySelector('nav')?.offsetHeight || 0;
    const sectionTop = section.offsetTop - navHeight;
    
    try {
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    } catch (error) {
        // Fallback for older browsers
        window.scrollTo(0, sectionTop);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Tüm anchor tag'leri için smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // İletişim formu
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]')?.value || '';
            const email = this.querySelector('input[name="email"]')?.value || '';
            const message = this.querySelector('textarea[name="message"]')?.value || '';
            
            const mailtoLink = `mailto:serkanmiletisim@gmail.com?subject=Portfolio İletişim&body=İsim: ${encodeURIComponent(name)}%0D%0AE-posta: ${encodeURIComponent(email)}%0D%0AMesaj: ${encodeURIComponent(message)}`;
            
            window.location.href = mailtoLink;
        });
    }

    // Form gönderimi sonrası durum kontrolü
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    
    if (status) {
        let message = '';
        switch(status) {
            case 'success':
                message = 'Mesajınız başarıyla gönderildi!';
                break;
            case 'error':
                message = 'Mesaj gönderilirken bir hata oluştu.';
                break;
            case 'invalid_email':
                message = 'Geçersiz e-posta adresi.';
                break;
            case 'empty_fields':
                message = 'Lütfen tüm alanları doldurun.';
                break;
        }
        
        if (message) {
            alert(message); // Daha şık bir bildirim sistemi kullanılabilir
        }
    }

    // Mobil menü için eklemeler
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Menü linklerine tıklandığında menüyü kapat
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Ekran boyutu değiştiğinde menüyü sıfırla
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks?.classList.remove('active');
            hamburger?.classList.remove('active');
        }
    });
});

// Hamburger menü animasyonu için CSS
const style = document.createElement('style');
style.textContent = `
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Sayfa yüklenirken smooth scroll davranışını engelle
if (window.location.hash) {
    window.setTimeout(function() {
        window.scrollTo(0, 0);
    }, 1);
} 