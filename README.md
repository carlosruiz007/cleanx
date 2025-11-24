# Crystal Cleaners

A modern, professional cleaning service website built with React, Vite, and TailwindCSS. Features a responsive design, booking system, and comprehensive service information.

## 🚀 Tech Stack

- **React 19** - UI library with latest features
- **React Router 7** - Client-side routing
- **Vite 7** - Lightning-fast build tool & dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Playwright** - End-to-end testing
- **Vercel** - Deployment platform

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with custom design system (CleanX)
- 📅 Integrated booking form
- 🏠 Multiple service offerings (House, Office, Deep Cleaning, Move In/Out)
- ⭐ Social proof with testimonials and ratings
- 🎯 SEO-friendly structure
- ⚡ Fast page loads with optimized assets

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd cleanservice

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
cleanservice/
├── src/
│   ├── cleanx/              # CleanX design system
│   │   ├── design/          # Design primitives & components
│   │   ├── sections/        # Page sections (Hero, Services, etc.)
│   │   └── layouts/         # Layout components
│   ├── pages/               # Route pages
│   ├── App.jsx              # Main app with routing
│   └── main.jsx             # React entry point
├── public/                  # Static assets
├── index.html               # HTML entry point
└── vite.config.js           # Vite configuration
```

## 🌐 Routes

| Path | Description |
|------|-------------|
| `/` | Homepage with hero, services, and testimonials |
| `/about` | Company information and why choose us |
| `/services` | Detailed service listings with pricing |

## 🎨 Design System

The project uses a custom design system called **CleanX** with:

- Reusable primitives (Heading, Text, Button, Card)
- Consistent color palette (Navy, Green, Gray)
- Responsive typography
- Modular component architecture

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploys on push to main branch

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to any static hosting service
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run vercel-build` - Vercel deployment build

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Private project - All rights reserved

## 📧 Contact

For questions or support, contact: 

---

Built with ❤️ using React + Vite
