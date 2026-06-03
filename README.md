# Lucas - opaa!!

Uma aplicação moderna e escalável construída com React, TypeScript e Vite.

## 🚀 Quick Start

### Pré-requisitos
- Node.js v18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lucas00923/lucas.git
cd lucas

# Instale as dependências
npm install

# Copie o arquivo de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em **http://localhost:3000** 🎉

## 📋 Features

- ✨ Interface moderna e responsiva
- ⚡ Performance otimizada com Vite
- 🎨 Estilo com Tailwind CSS
- 📝 TypeScript para type safety
- 🧪 Testes com Vitest
- 🔀 Roteamento com React Router
- 📦 Axios para HTTP requests
- 🎯 Zustand para state management
- 🐳 Docker & Docker Compose
- 🔐 Variáveis de ambiente seguras
- ✅ ESLint & Prettier configurados

## 🛠️ Scripts

```bash
# Desenvolvimento
npm run dev              # Iniciar servidor dev
npm run build            # Build para produção
npm run preview          # Pré-visualizar build

# Qualidade
npm run lint             # Verificar linting
npm run lint:fix         # Corrigir linting
npm run type-check       # Verificar tipos
npm run format           # Formatar código

# Testes
npm run test             # Rodar testes
npm run test:watch       # Testes em watch mode
npm run test:coverage    # Coverage report

# Deploy
npm run deploy           # Deploy para GitHub Pages
```

## 📁 Estrutura do Projeto

```
lucas/
├── src/
│   ├── __tests__/           # Testes unitários
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Serviços (API, etc)
│   ├── utils/              # Utilitários
│   ├── App.tsx            # Componente raiz
│   ├── App.css            # Estilos globais
│   └── main.tsx           # Entry point
├── public/                # Arquivos estáticos
├── .github/              # Configuração GitHub
├── docs/                 # Documentação
├── docker/               # Configuração Docker
│   ├── Dockerfile
│   └── docker-compose.yml
├── vite.config.ts        # Config Vite
├── tsconfig.json         # Config TypeScript
├── tailwind.config.js    # Config Tailwind
├── vitest.config.ts      # Config Vitest
├── postcss.config.js     # Config PostCSS
├── index.html           # HTML principal
├── package.json         # Dependências
├── .env.example         # Variáveis exemplo
├── .gitignore          # Arquivos ignorados
├── README.md           # Este arquivo
├── CONTRIBUTING.md     # Guia de contribuição
├── CHANGELOG.md        # Histórico de versões
├── SECURITY.md         # Política de segurança
└── LICENSE.md          # Licença MIT
```

## 🧪 Testes

```bash
# Rodar todos os testes
npm run test

# Testes em watch mode (reexecuta ao salvar)
npm run test:watch

# Coverage report
npm run test:coverage
```

Os testes estão localizados em `src/__tests__/`

## 🎨 Estilos

O projeto usa **Tailwind CSS** para estilização. Configure temas em `tailwind.config.js`

Variáveis CSS customizadas:
```css
--color-primary: #4f46e5
--color-secondary: #7c3aed
--color-success: #10b981
--color-error: #ef4444
--color-warning: #f59e0b
```

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` baseado em `.env.example`:

```bash
VITE_API_URL=http://localhost:3000
VITE_API_TIMEOUT=30000
VITE_APP_NAME=Lucas
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

## 🐳 Docker

### Build da imagem
```bash
docker build -t lucas:latest .
```

### Rodar container
```bash
docker run -p 3000:3000 lucas:latest
```

### Com Docker Compose
```bash
docker-compose up
```

Serviços:
- **App**: http://localhost:3000
- **Database**: localhost:5432 (PostgreSQL)

## 📦 Dependências Principais

- **react** (18.2.0) - UI Framework
- **react-dom** (18.2.0) - DOM manipulation
- **react-router-dom** (6.20.0) - Roteamento
- **axios** (1.6.0) - HTTP Client
- **zustand** (4.4.0) - State management
- **tailwindcss** (3.4.0) - CSS Framework

## 👥 Contribuindo

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para saber como contribuir.

### Quick Steps:
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `perf:` Performance
- `test:` Testes
- `chore:` Manutenção

## 🔒 Segurança

Veja [SECURITY.md](./SECURITY.md) para reportar vulnerabilidades.

## 📝 Licença

Este projeto está sob a licença MIT. Veja [LICENSE.md](./LICENSE.md).

## 📞 Suporte

- 📖 [Documentação](./docs/)
- 🐛 [Issues](https://github.com/lucas00923/lucas/issues)
- 💬 [Discussions](https://github.com/lucas00923/lucas/discussions)

## 🎯 Roadmap

- [ ] Autenticação com OAuth
- [ ] Backend com Node.js/Express
- [ ] Integração com banco de dados
- [ ] PWA features
- [ ] Testes e2e com Cypress
- [ ] Performance monitoring
- [ ] Analytics

## 📊 Status

![Build Status](https://github.com/lucas00923/lucas/workflows/CI/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

**Desenvolvido com ❤️ por [lucas00923](https://github.com/lucas00923)**

Última atualização: Junho 2024
