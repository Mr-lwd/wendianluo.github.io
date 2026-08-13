# Wendian Luo — Personal Academic Website

A single-page academic personal website for **Wendian Luo** — M.Eng. candidate in Computer
Technology at Sichuan University. Research interests: edge intelligence, federated learning,
computer vision, large language models, and embodied intelligence.

## 🌐 Access

**Live site: https://mr-lwd.github.io/wendianluo.github.io/**

Deployed automatically via GitHub Pages from the `main` branch.

## ✨ Features

- **Bilingual** — full English / 中文 toggle (paper titles & venues stay English)
- **Light & dark themes** — follows system preference; manual toggle persisted in `localStorage`
- **Elegant typography** — Playfair Display, Inter, JetBrains Mono, Noto Serif SC
- **Sections** — About · Education · Research · Publications · Experience · Projects · Skills · Honors
- Responsive layout, scroll-spy navigation, reveal-on-scroll animations, downloadable CV (EN + 中文)

## 🛠 Local preview

```bash
# from the repo root
python -m http.server 8000
# then open http://localhost:8000
```

## 📁 Structure

```
index.html      # single-page site (bilingual markup)
css/style.css   # token-based design system (light & dark)
js/i18n.js      # EN / 中文 dictionary
js/main.js      # interactions — toggles, scroll-spy, reveal, back-to-top
assets/         # portrait + CV PDFs (English & Chinese)
favicon.svg     # WL monogram
```

---

## 中文说明

个人学术主页：**https://mr-lwd.github.io/wendianluo.github.io/** 。

- 支持**中英文切换**与**明暗主题**，选择会自动保存。
- 论文标题、作者与期刊名保持英文。
- 由 GitHub Pages 自动部署 `main` 分支。
- 本地预览：在仓库根目录运行 `python -m http.server 8000`，浏览器打开 `http://localhost:8000`。
