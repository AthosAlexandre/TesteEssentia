# 🌿 noorskin — teste prático Essentia Group

Projeto front-end de **teste prático** para a **Essentia Group**: landing em React com Vite, Tailwind CSS v4, roteamento e layout inspirado em marca de skincare (`noorskin`).

> ✨ Essentia Group — exercício prático

## 📋 O que tem aqui

- ⚛️ **React 19** + ⚡ **Vite 8**
- 🎨 **Tailwind CSS v4** com `@tailwindcss/vite`
- 🧭 **React Router** — rotas em `src/routes/routes.config.js`, layout com header/footer, página 404 fora do layout
- 🏠 **Página Home** com **5 seções** em `src/page/home/sections/` (componentizadas por pasta)

## 📁 Estrutura (resumo)

Pastas principais do `src/` para navegar no código:

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── layout/
│   ├── MainLayout.jsx
│   ├── nav-links.js
│   └── components/
├── routes/
│   ├── AppRoutes.jsx
│   └── routes.config.js
└── page/
    ├── home/
    │   ├── index.jsx
    │   └── sections/
    │       ├── renasca-com-nutricao/
    │       ├── living-in-consciousness/
    │       ├── informacao-nutricional/
    │       ├── sua-forca-vem-de-dentro/
    │       └── avaliacoes/
    └── not-found/
```

## 🚀 Como rodar

Na pasta do projeto (`teste-essentia`):

```bash
npm install
npm run dev
```

Abre o endereço que o Vite mostrar no terminal (geralmente `http://localhost:5173`).

Outros scripts:

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Preview do build |
| `npm run lint` | ESLint |

## ✅ Requisitos

- **Node.js** recente (recomendado 20 LTS ou superior)
- **npm** (vem com o Node)

---

🤝 Feito para o processo da Essentia Group.
