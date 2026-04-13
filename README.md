# Clínica Luciano Noceti — Site Institucional

Landing page institucional desenvolvida com **Next.js 14** + **TailwindCSS** + **TypeScript**.

---

## Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- npm, yarn ou pnpm

---

## Instalação e uso

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
# → Acesse http://localhost:3000

# 3. Build de produção
npm run build
npm start
```

---

## Estrutura de pastas

```
clinica-noceti/
├── app/
│   ├── layout.tsx       # Layout raiz (fontes, metadata SEO)
│   ├── page.tsx         # Página principal (importa todos os componentes)
│   └── globals.css      # Estilos globais + utilitários customizados
│
├── components/
│   ├── Header.tsx        # Menu fixo com navegação e botão WhatsApp
│   ├── Hero.tsx          # Seção hero com CTA e citação
│   ├── Diferenciais.tsx  # Faixa com 4 diferenciais rápidos
│   ├── Sobre.tsx         # Sobre a clínica + estatísticas
│   ├── Abordagens.tsx    # Grid de 9 abordagens terapêuticas
│   ├── CorpoClinico.tsx  # Cards dos profissionais (com placeholders)
│   ├── Depoimentos.tsx   # Grid de depoimentos de pacientes
│   ├── Convenios.tsx     # Planos aceitos + seção de locação
│   ├── Footer.tsx        # Rodapé completo com aviso de emergência
│   └── WhatsAppFab.tsx   # Botão flutuante do WhatsApp
│
├── public/              # Imagens e assets estáticos
├── tailwind.config.ts   # Paleta de cores e tipografia customizadas
└── next.config.mjs
```

---

## Customizações essenciais

### 1. Fotos dos profissionais (CorpoClinico.tsx)

Substitua o componente `<PlaceholderPhoto>` pelo componente `<Image>` do Next.js:

```tsx
// Antes (placeholder):
<PlaceholderPhoto iniciais="LN" bgCor="..." cor="..." />

// Depois (foto real):
import Image from 'next/image'

<Image
  src="/fotos/luciano-noceti.jpg"   // coloque a foto em /public/fotos/
  alt="Luciano Noceti e Vieira"
  width={96}
  height={96}
  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-soft"
/>
```

### 2. Adicionar/editar profissionais (CorpoClinico.tsx)

Edite o array `profissionais` no início do arquivo. Substitua os cards com `iniciais: '?'` pelos dados reais dos profissionais.

### 3. Foto da hero / clínica (Hero.tsx)

Substitua o bloco `<div>` do placeholder pelo componente `<Image>`:

```tsx
import Image from 'next/image'

<Image
  src="/fotos/clinica.jpg"
  alt="Clínica Luciano Noceti"
  fill
  className="object-cover rounded-3xl"
  priority
/>
```

### 4. Google Maps no rodapé (Footer.tsx)

Substitua o bloco `<div>` "Mini map placeholder" por um `<iframe>`:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."  // pegue o embed no Google Maps
  width="100%"
  height="112"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="rounded-xl"
/>
```

### 5. Número de WhatsApp

Todos os links de WhatsApp usam a constante `WA_LINK` definida em cada componente:
```ts
const WA_LINK = 'https://wa.me/5548998056893'
```
Se o número mudar, atualize em: `Header.tsx`, `Hero.tsx`, `CorpoClinico.tsx`, `Convenios.tsx`, `Footer.tsx`, `WhatsAppFab.tsx`.

### 6. Logo personalizada

No `Header.tsx` e `Footer.tsx`, substitua o ícone `<Brain>` pela logo real:

```tsx
import Image from 'next/image'

<Image src="/logo.svg" alt="Clínica Luciano Noceti" width={36} height={36} />
```

---

## Paleta de cores (tailwind.config.ts)

| Token               | Hex       | Uso                        |
|---------------------|-----------|----------------------------|
| `brand-blue`        | `#4A90C4` | Cor primária               |
| `brand-blue-mid`    | `#6BAED6` | Azul médio / badges        |
| `brand-blue-light`  | `#DCEEFB` | Fundos claros              |
| `brand-blue-pale`   | `#EBF5FC` | Fundos hero / seções       |
| `brand-teal`        | `#4BA3A3` | Cor secundária / acentos   |
| `brand-teal-light`  | `#D6EFEF` | Fundos teal claros         |
| `brand-sage`        | `#8FAF98` | Cor terciária / ícones     |
| `brand-sage-light`  | `#E8F0EB` | Fundos sage                |

---

## Aviso ético obrigatório

O **rodapé já inclui** o aviso de segurança conforme orientação do CFP:

> *"Este site não oferece atendimento emergencial. Em caso de crise ou risco à vida, ligue para o CVV (188) ou procure o hospital mais próximo."*

---

## Deploy recomendado

A forma mais simples é via [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Ou conecte o repositório GitHub diretamente ao painel da Vercel para deploy automático.
