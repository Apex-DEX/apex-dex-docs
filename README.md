# 📑 Apex DEX | Documentation Portal

<div align="center">
  <img src="public/logo.png" width="120" height="120" alt="Apex Logo" />
  <h3>The central source of truth for Apex Protocol architecture, guides, and integration details.</h3>
  
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
</div>

---

## 🌟 Overview

**Apex DEX Documentation** is a standalone web application built to provide a high-fidelity, interactive documentation experience. It serves as the primary resource for developers and users to understand the internal workings of the Apex Protocol.

### Key Features:
- **Interactive Architecture Diagrams**: Visual representations of the Frontend-Indexer-Blockchain bridge.
- **Smart Contract Directory**: Real-time access to deployed contract addresses on Sepolia Testnet.
- **Modern UI/UX**: Built with React and Tailwind CSS v4 for a premium, fast-loading experience.
- **Modular Design**: Each documentation section is a standalone React component for easy maintenance.

---

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS v4 (PostCSS)
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Navigation**: React Router DOM (v7 components)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Yarn](https://yarnpkg.com/)

### Installation
```bash
# Clone the repository
git clone https://github.com/Apex-DEX/apex-dex-docs.git

# Enter the directory
cd apex-dex-docs

# Install dependencies
yarn install
```

### Development
```bash
yarn dev
```

### Build
```bash
yarn build
```

---

## 📂 Project Structure

```text
apex-dex-docs/
├── src/
│   ├── components/       # Reusable UI components (Header, Sidebar)
│   ├── components/Sections/ # Documentation content split by sections
│   ├── config/           # Application configuration and constants
│   ├── App.tsx           # Main routing and layout logic
│   └── main.tsx          # Entry point
├── public/               # Static assets (Logo, Icons)
├── tailwind.config.js    # Tailwind configuration
└── .env                  # Environment variables
```

---

## 🌍 Ecosystem Links

- **[Apex DEX App](https://apex-dex.onrender.com)**
- **[Apex Backend](https://github.com/Apex-DEX/apex-dex-backend)**
- **[Apex Indexer](https://github.com/Apex-DEX/apex-dex-indexer)**
- **[Apex Contracts](https://github.com/Apex-DEX/apex-dex-contracts)**

---

<div align="center">
  <p>Built with 💜 by Apex Team</p>
</div>
