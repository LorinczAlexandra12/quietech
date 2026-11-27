# QuieTech - Coming Soon Webpage

A modern, bilingual (English/Hungarian) coming soon webpage for QuieTech Healthtech Innovation.

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
- Hungarian by default
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
- Embedded Brevo signup form
- Submissions are managed in the connected Brevo account

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
  ```

### Language Switching

- Click the **EN/HU** buttons in the top-right corner
- Selected language is saved to your browser

### Newsletter Signup

- Visitors submit their email through the embedded Brevo form.
- View contacts in the Brevo account and list connected to that form.
- Configure the form text, consent, confirmation email, and any notifications in Brevo.
  The embedded form has its own language and does not change with the site's language switcher.
- Test with an address you control after deployment, and complete any confirmation
  email if double opt-in is enabled. Verify the contact in Brevo.

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

## Deployment

This repository is configured for Vercel as a static site. It serves `index.html`
and the referenced `css/`, `js/`, and `images/` files directly from the project
root; no build command or dependencies are required.

### Deploy with Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. If prompted, set the **Root Directory** to the folder containing `vercel.json`
   and `index.html`.
4. Leave the build settings at their defaults; `vercel.json` specifies the static
   output directory and disables a framework build.
5. Select **Deploy**. Future pushes to the connected production branch deploy
   automatically.

You can also deploy from this folder with the Vercel CLI by running `vercel`
and following its prompts.

## Hosting and external services

This is a **fully static HTML webpage** with:
- ✅ No server setup needed
- ✅ No database is required for the website itself
- ✅ No build step required for deployment
- The Brevo signup form requires an internet connection and a Brevo account.

## Future Enhancements

Optional additions include analytics and a content management system.

## Technical Details

### JavaScript Classes

**LanguageSwitcher**
- Manages language switching
- Defaults to Hungarian
- Stores preference in localStorage

**Brevo signup form**
- Handles subscriptions in the connected Brevo account

**ScrollAnimations**
- Fade-in animations on scroll
- Uses Intersection Observer API

## Notes

- All translations are in Hungarian/English
- The page is optimized for fast loading
- The website uses Google Fonts and the embedded Brevo form
- Fully accessible with semantic HTML

## Support

For customization needs, check the HTML comments in `index.html` and CSS comments in `style.css`.

---

**Created for QuieTech - Healthtech Innovation** 
© 2024 All rights reserved
