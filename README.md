# 🪙 Web Mining Event

This is a modular web application built with **React**, **TypeScript**, and **React Router v7**. It uses a scalable feature-based folder structure and includes support for localization, middleware, and component reuse.

---

## 🚀 Getting Started

### 📦 Installation

```bash
npm install
# or
yarn install

🧪 Run the App

npm run dev
# or
yarn dev

🔨 Build for Production

npm run build
# or
yarn build
```

### 🌐 Tech Stack

    ⚛️ React

    🔀 React Router v7

    🧠 TypeScript

    🌍 i18n (English & Indonesian support)

    🧪 Testing support (Jest / Vitest - optional)

    🧩 Modular architecture

### 🗂️ Project Structure
```bash
web-mining-event/
├── .react-router/              # Optional: Router configs/meta
├── app/
│   ├── components/             # Global/shared UI components
│   ├── features/               # Feature-based modules
│   │   ├── events/
│   │   │   ├── __tests__/      # Unit/integration tests for Events
│   │   │   ├── components/     # Components specific to Events
│   │   │   ├── models/         # Domain models (types/interfaces)
│   │   │   ├── services/       # API/data logic for Events
│   │   ├── home/
│   │   │   ├── __tests__/
│   │   │   ├── components/
│   │   │   ├── models/
│   │   │   ├── services/
│   ├── lib/
│   │   └── utils.ts            # Global utility functions
│   ├── locales/                # i18n folder
│   │   ├── en/                 # English translations
│   │   ├── id/                 # Indonesian translations
│   ├── middleware/             # Custom middleware (auth, logging, etc.)
│   ├── routes/                 # React Router v7 route files
│   └── root.tsx                # App entry 
│   └── routes.tsx              # Setup routes
```

### 🧭 Routing

This project uses React Router v7 manually defined in the routes/ folder and linked to components from features.
```bash
Example:

// routes/event.tsx
import { EventPage } from "~/features/events/components/EventPage";
```

### 🌍 Localization

    All translation files are under /locales

    Supports English (en) and Indonesian (id)

    Translation files are separated by:

        index.ts

        error.ts

        translation.ts

🧪 Testing

Tests are colocated in __tests__ folders inside each feature module:
```bash
features/
└── events/
    └── __tests__/
```
Supports tools like Jest, Vitest, or your preferred test runner.