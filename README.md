# Wildan Andalaluna – Portfolio

This repository contains the source code for my personal developer & machine learning portfolio. It showcases selected projects, core skills, and contact channels with a focus on accessibility, performance, and clean semantic structure.

## Features
- Modern responsive layout using Tailwind utility classes + custom design tokens
- Accessible navigation (skip link, focus styles, semantic landmarks)
- Curated project slider with keyboard-friendly horizontal scrolling
- Consistent typography scale and color system
- Progressive enhancement (typewriter effect, section highlighting, back-to-top control)
- Lightweight single-page structure for fast loading

## Structure
```
index.html   # Main document (sections: hero, about, projects, contact, footer)
style.css    # Design tokens & component-level enhancements
main.js      # Interactivity (menu, slider, theme toggle, utilities)
images/      # Asset placeholders (add favicon, og-image, portraits, etc.)
```

## Customization
1. Replace `profile_formal.jpg` and `profile.jpeg` with your high-quality images.
2. Add a `favicon.png` and `og-image.jpg` under `images/` for proper branding.
3. Update meta description in `index.html` to reflect any role changes.
4. Extend the project list by duplicating a `.project-card` article and adjusting content & tags.
5. If you want a functional contact form, uncomment the form markup and integrate a service (e.g. Formspree, Firebase, a small server endpoint).

## Performance Tips
- Prefer optimized, compressed images (WebP / AVIF where possible).
- Audit with Lighthouse and ensure minimal unused Tailwind classes.
- Consider self-hosting fonts or using `font-display: swap` if loading time is critical.

## License
See `LICENSE` for details.

---
Feel free to fork and adapt. If you build on this structure, attribution is appreciated but not required.
