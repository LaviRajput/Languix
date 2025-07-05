# Languix

A modern Multi-language website built with Next.js, Next-Intl, and Tailwind CSS.

## Features
- 🌐 Internationalization (i18n) with English, Hindi, French, and Spanish
- ⚡ Fast route and language switching with animated loader
- 🎨 Beautiful, modern, and fully responsive design
- 🧩 Modular components (Header, Footer, Language Switcher, Loader)
- 🛠️ Easy to extend with more languages or pages

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 3. Build for production
```bash
npm run build
npm start
```

## Project Structure
```
multilang/
  message/           # Translation JSON files
  public/            # Static assets (images, SVGs)
  src/
    app/             # Next.js app directory (pages, layouts)
    components/      # Reusable React components
    i18n/            # i18n helpers and config
```

## Customization
- Add new languages: Create a new JSON file in `message/` and update the language list in `LanguageSwitcher.tsx`.
- Add new pages: Create a new folder in `src/app/[locale]/`.
- Update styles: Edit Tailwind classes in components or add to `globals.css`.

## Credits
- Built with [Next.js](https://nextjs.org/), [Next-Intl](https://next-intl.dev/), and [Tailwind CSS](https://tailwindcss.com/).

---

Feel free to contribute or customize for your needs!
