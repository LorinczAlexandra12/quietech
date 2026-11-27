// ===========================
// THEME SWITCHER
// ===========================

class ThemeSwitcher {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const moonIcon = document.querySelector('.moon-icon');
        const sunIcon = document.querySelector('.sun-icon');
        
        if (theme === 'dark') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }
}

// ===========================
// LANGUAGE SWITCHING
// ===========================

class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        this.detectBrowserLanguage();
        this.setupEventListeners();
        this.updateContent(this.currentLang);
    }

    detectBrowserLanguage() {
        // If no saved language, detect from browser
        if (!localStorage.getItem('language')) {
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'hu') {
                this.currentLang = 'hu';
            }
        }
    }

    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchLanguage(btn.dataset.lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updateContent(lang);
        this.updateActiveButton(lang);
    }

    updateContent(lang) {
        // Update all elements with data-en and data-hu attributes
        document.querySelectorAll('[data-en][data-hu]').forEach(element => {
            const text = element.dataset[lang] || element.dataset.en;
            
            // Handle different element types
            if (element.tagName === 'INPUT' && element.type === 'email') {
                const placeholderKey = `${lang}Placeholder`;
                element.placeholder = element.dataset[placeholderKey] || element.dataset.enPlaceholder;
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = element.dataset[`${lang}Placeholder`] || element.dataset.enPlaceholder;
            } else {
                element.textContent = text;
            }
        });

        // Update page title
        document.title = lang === 'hu' 
            ? 'QT - Egészségtechnológiai Innováció | Hamarosan Érkezik'
            : 'QT - Healthtech Innovation | Coming Soon';

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    updateActiveButton(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }
}

// ===========================
// NEWSLETTER FORM
// ===========================

class NewsletterForm {
    constructor() {
        this.form = document.getElementById('newsletterForm');
        this.messageEl = document.getElementById('formMessage');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const email = this.form.querySelector('.email-input').value.trim();

        // Basic validation
        if (!this.isValidEmail(email)) {
            this.showError('Please enter a valid email address');
            return;
        }

        // Show loading state
        this.showLoading();

        try {
            // Simulate form submission (since there's no backend)
            await this.simulateSubmission(email);
            this.showSuccess(email);
            this.form.reset();
        } catch (error) {
            this.showError('Something went wrong. Please try again.');
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async simulateSubmission(email) {
        // Simulate API call delay
        return new Promise(resolve => {
            setTimeout(() => {
                // Store email in localStorage (simulating persistence)
                this.storeEmail(email);
                resolve();
            }, 500);
        });
    }

    storeEmail(email) {
        const emails = JSON.parse(localStorage.getItem('subscribedEmails') || '[]');
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('subscribedEmails', JSON.stringify(emails));
        }
    }

    showLoading() {
        this.messageEl.textContent = 'Subscribing...';
        this.messageEl.className = '';
        this.form.querySelector('.submit-btn').disabled = true;
    }

    showSuccess(email) {
        const lang = document.documentElement.lang || 'en';
        const messages = {
            en: `Thanks for subscribing! We'll notify you when we launch.`,
            hu: `Köszönjük a feliratkozást! Értesítünk, amikor elindulunk.`
        };
        
        this.messageEl.textContent = messages[lang];
        this.messageEl.className = 'success';
        this.form.querySelector('.submit-btn').disabled = false;

        // Reset message after 5 seconds
        setTimeout(() => {
            this.messageEl.textContent = '';
            this.messageEl.className = '';
        }, 5000);
    }

    showError(message) {
        this.messageEl.textContent = message;
        this.messageEl.className = 'error';
        this.form.querySelector('.submit-btn').disabled = false;

        // Reset message after 5 seconds
        setTimeout(() => {
            this.messageEl.textContent = '';
            this.messageEl.className = '';
        }, 5000);
    }
}

// ===========================
// SCROLL ANIMATIONS
// ===========================

class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            observer.observe(card);
        });

        // Observe contact cards
        document.querySelectorAll('.contact-card').forEach(card => {
            card.style.opacity = '0';
            observer.observe(card);
        });
    }
}

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme switcher
    new ThemeSwitcher();

    // Initialize language switcher
    const languageSwitcher = new LanguageSwitcher();

    // Initialize newsletter form
    new NewsletterForm();

    // Initialize scroll animations
    new ScrollAnimations();

    // Setup smooth scroll
    setupSmoothScroll();

    // Add page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.6s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// UTILITY: Get current language
// ===========================

function getCurrentLanguage() {
    return localStorage.getItem('language') || document.documentElement.lang || 'en';
}

// ===========================
// TRACK NEWSLETTER SUBSCRIPTIONS (for debugging)
// ===========================

console.log('QT Coming Soon - Page loaded successfully');
