# noorskin — teste prático Essentia Group

Front-end de **teste prático** para a **Essentia Group**: landing em React com Vite, Tailwind CSS v4, roteamento e layout inspirado em marca de skincare (`noorskin`).

---

## Stack tecnológica

| Tecnologia | Uso |
| --- | --- |
| **React 19** | UI e componentes |
| **Vite 8** | Bundler e dev server |
| **Tailwind CSS v4** | Estilos (`@tailwindcss/vite`, `@import "tailwindcss"` em `src/index.css`) |
| **React Router 7** | Rotas SPA (`BrowserRouter`, `Routes`, `NavLink`) |
| **Framer Motion 12** | Animações de scroll, secções, acordeão e toast |

**Fontes (Google Fonts):** Cormorant Garamond (logo), DM Sans (navegação/corpo), Material Symbols Outlined (ícones do header), com `display=swap` onde aplicável.

---

## Como rodar

Na pasta **`teste-essentia`**:

```bash
npm install
npm run dev
```

Abre o URL indicado pelo Vite (geralmente `http://localhost:5173`).

| Script | Descrição |
| --- | --- |
| `npm run dev` | Desenvolvimento com hot reload |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Servir o build localmente |
| `npm run lint` | ESLint |

**Requisitos:** Node.js recente (recomendado 20 LTS+) e npm.

### Variáveis de ambiente (opcional)

Crie um ficheiro `.env` na raiz de `teste-essentia` (podes copiar `.env.example`):

| Variável | Descrição |
| --- | --- |
| `VITE_SITE_URL` | URL pública do site **sem** barra final (ex.: `https://www.seudominio.com.br`). Usada em **canonical**, **Open Graph** e **JSON-LD** quando definida. Se estiver vazia, o cliente usa `window.location.origin`. |

---

## Estrutura do projeto (`src/`)

```
src/
├── App.jsx                    # Router + TopToastProvider
├── main.jsx
├── index.css                  # Tailwind + keyframes (ex.: carrossel de avaliações)
├── config/
│   └── seo.js                 # Títulos, descrições, getSiteOrigin()
├── context/
│   └── TopToastContext.jsx    # Toast global (adicionar ao carrinho — simulação)
├── components/
│   ├── Button.jsx
│   ├── ProductCard.jsx
│   ├── ScrollReveal.jsx       # Entrada suave das secções (viewport)
│   ├── SectionContentReveal.jsx
│   └── SEOHead.jsx            # Meta / OG / canonical em SPA
├── layout/
│   ├── MainLayout.jsx         # Header, main, footer, skip link
│   ├── nav-links.js
│   └── components/
│       ├── Header.jsx
│       └── Footer.jsx
├── lib/
│   └── sectionRevealVariants.js  # Variantes Framer Motion partilhadas
├── routes/
│   ├── AppRoutes.jsx
│   └── routes.config.js
├── services/                  # Simulação de API (GET com delay)
│   ├── reviews.js
│   └── livingConsciousnessProducts.js
├── stores/
│   └── mockLocalStorage.js    # Persistência dos mocks em localStorage
└── page/
    ├── home/
    │   ├── index.jsx          # Ordem das secções + ScrollReveal
    │   └── sections/          # Uma pasta por secção
    └── not-found/
```

---

## Dados mockados (simulação de backend)

Não existe API real: os dados vêm de **arrays estáticos** nos ficheiros de serviço, expostos através de funções assíncronas que imitam latência de rede.

### Serviços (`src/services/`)

| Ficheiro | Função | Conteúdo simulado |
| --- | --- | --- |
| `reviews.js` | `fetchReviews()` | Lista de avaliações (nome, rating, texto) |
| `livingConsciousnessProducts.js` | `fetchLivingConsciousnessProducts()` | Lista de produtos (nome, preço, `imageKey`) |

Cada `fetch*` devolve uma `Promise` resolvida após um **timeout** curto (centenas de ms), como um GET lazy.

### Persistência em `localStorage` (`src/stores/mockLocalStorage.js`)

Após o primeiro carregamento bem-sucedido, os arrays são **gravados** em `localStorage` com chaves prefixadas `teste-essentia:mock:…`. Nas visitas seguintes, `loadMockOrSeed` **lê** o que está guardado (comportamento semelhante a “cache” persistente no cliente).

| Chave | Dados |
| --- | --- |
| `teste-essentia:mock:reviews` | Avaliações |
| `teste-essentia:mock:living-products` | Produtos Living in Consciousness |

**Funções úteis**

- `saveMock(key, data)` — para futuras simulações de POST/PATCH.
- `clearAllMockCaches()` — apaga todas as chaves mock (útil em desenvolvimento quando alteras o seed no código e queres ver os dados “de fábrica” outra vez).

---

## Efeitos e animações (Framer Motion + CSS)

### Entrada das secções — `ScrollReveal`

- Envolve cada bloco principal na **Home** (`src/page/home/index.jsx`).
- **`whileInView`** com `once: true`, opacidade (sem `translateY` no wrapper, para não interferir com o Intersection Observer das secções vizinhas).
- Viewport com `amount` e margem inferior negativa para **não disparar** a secção seguinte quando só aparece um cantinho.

### Conteúdo dentro da secção — `SectionContentReveal`

- Dentro de várias secções: **stagger** entre títulos, parágrafos e blocos.
- Variantes em `src/lib/sectionRevealVariants.js`:
  - **blurFadeUp** — opacidade, subida leve e blur a limpar.
  - **textMaskReveal** — subida um pouco mais marcada (efeito “máscura”).
  - **cardScaleBlur** — escala ~1,05 → 1 com blur (cards / blocos).
- Respeita **`prefers-reduced-motion`** com variantes “instantâneas”.

### Acordeão — Informação nutricional

- Painéis com **`height: auto` ↔ 0**, `overflow: hidden`, easing estilo “iPhone / Air”.
- Linhas do painel com **stagger** ao abrir/fechar.
- Ícone **+ / −** com micro-animação.

### Carrossel de avaliações

- Transição entre páginas: animação em **`index.css`** (`.avaliacoes-carousel-panel`), desativada em `prefers-reduced-motion`.
- Ao mudar de página, o painel usa **`initial` / `animate`** explícitos (não só variantes ligadas ao `whileInView` com `once`), para o conteúdo **não ficar invisível** após paginar.

### Toast “Adicionar ao carrinho”

- **`TopToastProvider`** em `App.jsx`; **`useTopToast()`** no `ProductCard`.
- Mensagem no **topo**, centrada, abaixo do header; **`createPortal` para `document.body`** e `z-index` alto para ficar acima do header e de stacking contexts do `#root`.
- **`aria-live="polite"`** para leitores de ecrã.

### Build — chunks

Em `vite.config.js`, **`manualChunks`** separa `react`/`react-dom`, `framer-motion` e `react-router` para melhor cache em produção.

---

## SEO técnico e acessibilidade (resumo)

- **`index.html`:** `lang="pt-BR"`, meta description, `theme-color`, robots, Open Graph, Twitter card, título alinhado à marca.
- **`public/robots.txt`:** `Allow: /`.
- **`SEOHead` + `config/seo.js`:** atualizam título, description, canonical, `og:url`, robots e injetam **JSON-LD** `WebSite` (Schema.org) em navegação.
- **404:** `noindex` enquanto a página de erro está ativa (`src/page/not-found/NotFound.jsx`).
- **Home:** `<h1 class="sr-only">` para hierarquia de títulos sem alterar o layout.
- **MainLayout:** link **“Ir para o conteúdo principal”** (`#conteudo-principal`, `main` com `tabIndex={-1}`).
- **Header:** foco para o botão fechar ao abrir o menu móvel e de volta ao botão menu ao fechar.
- **ProductCard / imagens:** `sizes`, dimensões onde faz sentido, hero com `fetchPriority="high"` e `loading="eager"` na primeira secção.

---

## Página Home — secções

Ordem em `src/page/home/index.jsx` (cada uma envolvida em `ScrollReveal`):

1. **Renasça com nutrição** — hero texto + imagem.
2. **Living in Consciousness** — carrossel de produtos (`ProductCard`) + texto.
3. **Sua força vem de dentro** — faixa com imagem de fundo (parallax em desktop).
4. **Informação nutricional** + **Sua força** — em mobile o layout usa `flex-col-reverse` para ordem visual específica (`md:contents` no desktop).
5. **Avaliações** — grelha paginada.

---

## Marca e cópia

Nome de marca usado na interface: **noorskin**. Textos e preços são **exemplificativos** (sem checkout real).

---

Feito para o processo da **Essentia Group**.
