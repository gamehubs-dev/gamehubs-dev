# 🎮 GameHubs Dev

> Data-Driven Insights for the Global Online Gaming Industry

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Stage: Production](https://img.shields.io/badge/Stage-Production-blue.svg)](https://gamehubs.top)

A comprehensive research platform and developer ecosystem for the online gaming (iGaming) industry, providing market intelligence, regulatory analysis, and industry data across 20+ markets worldwide.

---

## 🌟 Features

### 📊 Market Intelligence
- Real-time market size and growth analytics
- Regional market breakdowns (Asia-Pacific, Latin America, Europe)
- Investment opportunity identification
- Competitive landscape analysis

### ⚖️ Regulatory Compliance
- Multi-jurisdiction regulatory guides (PAGCOR, Kominfo, MeitY, COFEPIs)
- KYC/AML compliance resources
- Licensing requirements by country
- Real-time regulatory updates

### 📈 Industry Data
- 500M+ players analyzed
- 20+ countries tracked
- 6 languages supported
- Quarterly market refresh

### 🔍 Research Categories
| Category | Description |
|----------|-------------|
| **Market Reports** | In-depth market sizing, growth forecasts, and investment analysis |
| **Regulations** | Legal frameworks, licensing requirements, and compliance guides |
| **Trends** | Emerging technologies, consumer shifts, and industry developments |
| **Comparisons** | Platform analysis, payment methods, and market segments |
| **Glossary** | 80+ essential industry terms (RMG, GGR, KYC, RNG) |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or yarn 1.22+
- Git 2.x

### Installation

```bash
# Clone the repository
git clone https://github.com/gamehubs-dev/gamehubs-dev.git

# Navigate to project directory
cd gamehubs-dev

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with the following variables:

```env
# Application
NODE_ENV=development
PORT=3000

# API Configuration
API_BASE_URL=https://api.gamehubs.top
API_KEY=your_api_key

# Analytics (optional)
ANALYTICS_ID=your_analytics_id

# Feature Flags
ENABLE_CACHE=true
ENABLE_LOGGING=true
```

---

## 📁 Project Structure

```
gamehubs-dev/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/           # Shared components
│   │   ├── layout/          # Layout components
│   │   └── features/        # Feature-specific components
│   ├── pages/               # Next.js pages (App Router)
│   ├── styles/              # Global styles and themes
│   ├── lib/                 # Utilities and helpers
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services
│   ├── types/               # TypeScript definitions
│   └── data/                # Static data and mock data
├── public/
│   ├── images/              # Static images
│   └── icons/               # SVG icons
├── content/
│   ├── reports/             # Markdown market reports
│   ├── regulations/         # Regulatory documentation
│   ├── trends/              # Industry trend articles
│   └── glossary/            # Glossary terms
├── docs/                    # Documentation files
├── scripts/                  # Build and deployment scripts
├── tests/                   # Test suites
└── configs/                 # Configuration files
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, Next.js 14 (App Router), TypeScript |
| **Styling** | Tailwind CSS, CSS Modules |
| **State** | React Query, Zustand |
| **Forms** | React Hook Form, Zod |
| **Testing** | Jest, React Testing Library, Playwright |
| **Deployment** | Vercel, Docker |
| **Analytics** | Google Analytics, Plausible |
| **CMS** | Markdown (MDX) |

---

## 📖 Documentation

Detailed documentation is available in the [`docs/`](docs/) directory:

| Document | Description |
|----------|-------------|
| [Getting Started](docs/getting-started.md) | Quick start guide and setup |
| [Contributing](CONTRIBUTING.md) | How to contribute to the project |
| [API Reference](docs/api-reference.md) | API endpoints and data formats |
| [Deployment](docs/deployment.md) | Deployment guides |
| [Troubleshooting](docs/troubleshooting.md) | Common issues and solutions |

---

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run dev:debug    # Start with debugger

# Building
npm run build        # Build for production
npm run build:analyze # Build with bundle analysis

# Testing
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run end-to-end tests
npm run lint         # Lint code
npm run format       # Format code

# Content
npm run content:validate  # Validate markdown content
npm run content:export    # Export data to JSON
```

---

## 🌏 Regional Coverage

### Asia-Pacific (Primary Focus)

| Country | Market Size | Key Regulators | Payment Methods |
|---------|-------------|----------------|------------------|
| 🇮🇳 India | $7.5B+ | MeitY, GST Council | UPI, Paytm, PhonePe |
| 🇵🇭 Philippines | $7.16B GGR | PAGCOR, CEZA | GCash, Maya, Bank Transfer |
| 🇮🇩 Indonesia | $3B+ | Kominfo | OVO, Dana, GoPay |
| 🇹🇭 Thailand | Growing | BCP, upcoming regulations | PromptPay, TrueMoney |
| 🇻🇳 Vietnam | $1.5B+ | MCA, Decree 147/2024 | MoMo, ZaloPay, VNPay |
| 🇲🇾 Malaysia | $1.2B+ | MGA | Touch 'n Go, Boost |

### Latin America

| Country | Market Size | Key Regulators | Payment Methods |
|---------|-------------|----------------|------------------|
| 🇲🇽 Mexico | $2B+ | COFEPIs | OXXO, SPEI, Mercado Pago |
| 🇧🇷 Brazil | $1.8B+ | SPA/MF | Pix, Boleto, Pay4Fun |
| 🇨🇴 Colombia | $600M+ | Coljuegos | PSE, Nequi, Daviplata |

---

## 📊 Key Industry Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Global Online Gaming Market (2026) | $119.55B | Industry Reports |
| Asia-Pacific Market Share | 50%+ | GameHubs Research |
| Active Gamers Worldwide | 3.8B+ | Industry Analytics |
| Mobile Gaming Revenue | $120B+ | Market Analysis |
| Cloud Gaming Market (2030) | $21B+ | Growth Projections |

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting pull requests.

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution

- 🔬 New market research and data
- 📝 Documentation improvements
- 🌐 Translation support
- 🐛 Bug fixes
- 💡 Feature suggestions
- 📊 Data validation

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Related Resources

### Official Sites
- [GameHubs Research](https://gamehubs.top) - Main research platform
- [Documentation](https://docs.gamehubs.top) - Full documentation

### Industry Resources
- [Asia-Pacific Gaming Market Report](https://gamehubs.top/reports/asia-pacific-market-2026)
- [Global Gaming Regulations Guide](https://gamehubs.top/regulations/global-regulations-comparison)
- [Mobile Gaming Trends 2026](https://gamehubs.top/trends/mobile-gaming-trends-2026)
- [Online Gaming Glossary](https://gamehubs.top/glossary/gaming-glossary)

### Connect
- 📧 Email: contact@gamehubs.top
- 💬 Discussions: [GitHub Discussions](https://github.com/gamehubs-dev/gamehubs-dev/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/gamehubs-dev/gamehubs-dev/issues)

---

## 📈 Statistics

![Contributors](https://img.shields.io/github/contributors/gamehubs-dev/gamehubs-dev)
![Stars](https://img.shields.io/github/stars/gamehubs-dev/gamehubs-dev)
![Forks](https://img.shields.io/github/forks/gamehubs-dev/gamehubs-dev)
![Last Commit](https://img.shields.io/github/last-commit/gamehubs-dev/gamehubs-dev)

---

<p align="center">
  <strong>Stay informed. Stay competitive.</strong><br>
  Made with ❤️ for the gaming industry
</p>
