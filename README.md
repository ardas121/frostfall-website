# Frostfall: Son Ateş — Cinematic 3D Website

Responsive website for desktop and Android browsers, with 12-language selector: English, Turkish, Greek, German, French, Spanish, Portuguese, Italian, Russian, Arabic, Chinese and Japanese.

## Experience
- Cinematic opening and page-to-page transitions
- CSS 3D perspective, depth and card tilt on desktop pointer devices
- Subtle hero parallax on desktop
- Scroll reveal animations
- Touch-first layout and lightweight effects on Android/mobile
- Respects `prefers-reduced-motion`
- 12-language selector; selection is remembered in the browser
- Navigation and key hero/CTA copy localized; remaining long-form copy falls back to English pending full professional localization
- Arabic right-to-left page direction

## Android / PWA
The site includes a web app manifest and a lightweight service worker. On supported Android browsers, visitors can use the browser's **Install app / Add to Home screen** option. It requires HTTPS (for example, GitHub Pages).
The service worker caches the site shell and selected still images only. Large MP4 videos are deliberately not cached to avoid filling mobile storage or using excess data.

## Pages
- `index.html` — Home
- `story.html` — Story
- `gameplay.html` — Gameplay
- `heroes.html` — Heroes
- `updates.html` — Updates
- `media.html` — Media

## Publish
Upload all files and the complete `assets/` folder to the root of your static hosting project. Keep the directory structure unchanged. GitHub Pages is supported.

Google Play: https://play.google.com/store/apps/details?id=com.ardaedits.frostfall
Instagram: https://www.instagram.com/frostfall.game/
