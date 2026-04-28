# Rafli Triwijaya — Personal Portfolio

A modern, dark-themed personal portfolio and CV website built with **Vite + React**, **Tailwind CSS**, **Framer Motion**, and **GitHub API integration**.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vite + React (JavaScript) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |
| GitHub Data | GitHub REST API v3 |
| Contact Form | Formspree |
| Deployment | GitHub Pages / GitHub Actions |
| Fonts | Syne · DM Sans · JetBrains Mono |

---

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Then edit `.env`:
```
VITE_FORMSPREE_ID=your_formspree_form_id
```

> **Get a Formspree ID**: Sign up at [formspree.io](https://formspree.io), create a form, and copy the ID from the endpoint URL.

### 4. Update your personal config

Edit `src/config.js` and update:
- `githubUsername` — your real GitHub username
- `linkedin` — your LinkedIn profile URL
- `avatarUrl` — your photo URL or keep the generated avatar
- `excludedRepos` — repos you want hidden from the projects section

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

### Option A — Manual deploy with gh-pages

```bash
npm run deploy
```

> Make sure `base` in `vite.config.js` is set to `/your-repo-name/` if deploying to a GitHub Pages project site (not user site).

### Option B — Automatic with GitHub Actions

1. Push your code to the `main` branch on GitHub.
2. Go to **Settings → Pages** and set source to **GitHub Actions**.
3. Add your `VITE_FORMSPREE_ID` secret at **Settings → Secrets and variables → Actions**.
4. Every push to `main` will auto-deploy.

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy GitHub Action
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with mobile menu + theme toggle
│   │   ├── Hero.jsx            # Landing section with avatar
│   │   ├── About.jsx           # Bio + highlight cards
│   │   ├── Experience.jsx      # Timeline of work history
│   │   ├── Projects.jsx        # Static projects + GitHub repo fetch
│   │   ├── Skills.jsx          # Animated skill bars + tools
│   │   ├── Education.jsx       # Academic background cards
│   │   ├── Contact.jsx         # Contact form (Formspree) + info
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx     # Reusable toggle component
│   ├── hooks/
│   │   └── useGitHubRepos.js   # Custom hook for GitHub API
│   ├── App.jsx                 # Root with theme state management
│   ├── config.js               # ⭐ ALL your personal data lives here
│   ├── index.css               # Tailwind directives + custom styles
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Customization

### Change theme colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-bg: #070d1a;
  --color-cyan: #22d3ee;   /* primary accent */
  --color-gold: #fbbf24;   /* secondary accent */
}
```

### Change fonts
Replace Google Fonts import in `index.html` and update `tailwind.config.js` under `fontFamily`.

### Add your photo
Replace `avatarUrl` in `config.js` with a public image URL (e.g. hosted on GitHub or Cloudinary).

---

## 📬 Contact Form Setup (Formspree)

1. Go to [formspree.io](https://formspree.io) and sign up for free.
2. Create a new form and note the form ID (e.g. `xknqqwzv`).
3. Set `VITE_FORMSPREE_ID=xknqqwzv` in your `.env` file.
4. The contact form will immediately start sending emails to your registered address.

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio.
