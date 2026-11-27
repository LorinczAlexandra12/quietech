# QT - Coming Soon Webpage

A modern, bilingual (English/Hungarian) coming soon webpage for QT Healthtech Innovation.

## Project Structure

```
web/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with responsive design
├── js/
│   └── script.js       # JavaScript for interactivity
└── images/            # Image folder (ready for future assets)
```

## Features

✨ **Bilingual Support**
- English and Hungarian language switching
- Automatic browser language detection
- Language preference saved to localStorage

📱 **Responsive Design**
- Mobile-first approach
- Works seamlessly on all devices
- Optimized for desktop, tablet, and mobile

🎨 **Modern UI/UX**
- Clean, minimalist design
- Smooth animations and transitions
- Professional color scheme

📧 **Newsletter Subscription**
- Email validation
- Form submission handling
- Success/error messages in both languages
- Subscriptions stored locally (simulated backend)

📋 **Sections Included**
1. **Navigation Bar** - Logo and language switcher
2. **Hero Section** - Company tagline and value proposition
3. **Call-to-Action** - Newsletter signup
4. **Features** - Key product benefits
5. **Contact** - Email, social links, and team members
6. **Footer** - Copyright and status

## How to Use

### Opening the Webpage

1. **Local Development:**
   - Simply open `index.html` in your web browser
   - No server required!

2. **File Path:**
   ```
   D:\Susu\Msc - MBA\3. félév\Vállalkozásindítás\web\index.html
   ```

### Language Switching

- Click the **EN/HU** buttons in the top-right corner
- Selected language is saved to your browser

### Newsletter Signup

- Enter your email address in the subscription form
- Click "Subscribe"
- Success message will appear in your selected language
- Emails are stored locally (not sent anywhere - no backend)

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #1a1a2e;
    --highlight-color: #e94560;
    /* ... other colors ... */
}
```

### Content
All translatable content uses `data-en` and `data-hu` attributes in `index.html`:
```html
<h1 data-en="English Text" data-hu="Magyar Szöveg">English Text</h1>
```

### Team Members
Update the team list in the Contact section of `index.html`:
```html
<ul class="team-list">
    <li>Your Name 1</li>
    <li>Your Name 2</li>
    <li>Your Name 3</li>
</ul>
```

### Contact Information
Update the email and social links in the Contact section:
```html
<a href="mailto:contact@qt-health.com" class="contact-link">contact@qt-health.com</a>
```

## Browser Compatibility

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers

## No Backend Required

This is a **fully static HTML webpage** with:
- ✅ No server setup needed
- ✅ No database required
- ✅ No deployment necessary (just open the HTML file)
- ✅ All functionality works in the browser

## Future Enhancements

When you're ready to deploy:
1. Replace the simulated form handling with a real backend service
2. Add a real email service (Mailchimp, SendGrid, etc.)
3. Host on a web server (GitHub Pages, Netlify, Vercel, etc.)
4. Add tracking/analytics
5. Integrate with CMS if needed

## Technical Details

### JavaScript Classes

**LanguageSwitcher**
- Manages language switching
- Detects browser language
- Stores preference in localStorage

**NewsletterForm**
- Handles form submission
- Validates email format
- Shows success/error messages
- Stores subscriptions locally

**ScrollAnimations**
- Fade-in animations on scroll
- Uses Intersection Observer API

## Quick Deploy Options (When Ready)

### Option 1: GitHub Pages
1. Push to GitHub
2. Enable Pages in settings
3. Done!

### Option 2: Netlify
1. Drag & drop the `web` folder
2. Auto-deployed

### Option 3: Vercel
1. Connect repository
2. Auto-deployed

## Notes

- All translations are in Hungarian/English
- The page is optimized for fast loading
- No external dependencies (pure HTML/CSS/JS)
- Fully accessible with semantic HTML

## Support

For customization needs, check the HTML comments in `index.html` and CSS comments in `style.css`.

---

**Created for QT - Healthtech Innovation** 
© 2024 All rights reserved
