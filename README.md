# Ferracini Piracicaba — Dia dos Namorados 2026

App de curadoria de presentes pro Dia dos Namorados da Ferracini Piracicaba.

## 🚀 Deploy no Vercel (passo a passo)

### Opção 1: Deploy via interface web (mais fácil)

1. Faça login em https://vercel.com
2. Clique em **"Add New Project"**
3. Arraste a pasta inteira deste projeto pra área de upload
   - Alternativamente, suba pra um repositório no GitHub e importe
4. Vercel detecta automaticamente que é um projeto Next.js
5. Clique em **"Deploy"** — em 1-2 minutos seu site está no ar

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI (uma vez só)
npm install -g vercel

# Dentro desta pasta:
vercel

# Pra produção (URL final):
vercel --prod
```

### Opção 3: Via GitHub

```bash
git init
git add .
git commit -m "Ferracini app inicial"

# Crie um repositório novo no GitHub e:
git remote add origin https://github.com/SEU_USUARIO/ferracini-app.git
git branch -M main
git push -u origin main

# Depois vá em vercel.com e importe o repositório
```

## 🛠 Rodar localmente (opcional)

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## 📁 Estrutura

```
ferracini/
├── app/
│   ├── layout.js       # Layout raiz + metadata
│   └── page.js         # App principal (toda a lógica)
├── public/
│   └── produtos/       # 19 fotos dos produtos (01.jpg a 19.jpg)
├── package.json
├── next.config.js
└── .gitignore
```

## ✏️ Como editar produtos depois

No arquivo `app/page.js`, procure por `const PRODUCTS = [`. Cada produto é um objeto com:

```js
{
  id: 1,
  name: 'Fluence',
  desc: 'Descrição curta',
  price: 399.90,
  image: IMAGES.img01,
  category: 'esporte-fino',  // social | esporte-fino | mocassim | sapatenis | sneaker | bota
  range: '380-430',          // ate-380 | 380-430 | acima-430
  details: ['Couro legítimo', 'Sola anatômica', ...],  // detalhes técnicos no modal
}
```

Pra trocar uma foto, basta substituir o arquivo correspondente em `public/produtos/` (mantendo o mesmo nome).

## 📱 WhatsApp

Número configurado: **+55 19 99865-0936**

Pra alterar, busque `WHATSAPP_NUMBER` no `app/page.js`.

## 🎨 Identidade visual

- **Paleta:** creme premium (`#F4F0EA`) + preto profundo (`#1A1A1A`) + vermelho Ferracini (`#D9001E`)
- **Tipografia:** Playfair Display (serif) + Inter (sans) + JetBrains Mono (técnico)
- **Inspiração:** alfaiataria digital, editorial masculino
- **Detalhe da marca:** o risco vermelho diagonal da logo aparece como assinatura em vários pontos

## 🗂 Categorias do catálogo

- **Social** — 3 modelos (Ambience, London, Bentley)
- **Esporte Fino** — 3 modelos (Fluence, Kingston, Wembley)
- **Mocassim & Dock Side** — 3 modelos (Buzios, Prisma, Malta)
- **Sapatênis** — 4 modelos (Star, Vox Náutico, New Blady, Vox Azul Marinho)
- **Sneaker** — 3 modelos (Energy Knit, Still, Mid)
- **Bota** — 3 modelos (Cross, Columbia, Firenze)

Total: **19 produtos**
