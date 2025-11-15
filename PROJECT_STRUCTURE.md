# Crystal Cleaners - Project Structure

## Overview
Professional cleaning service website built with React, Vite, and TailwindCSS.

---

## Tech Stack
- **React 19** - UI library
- **React Router 6** - Client-side routing
- **Vite 7** - Build tool & dev server
- **TailwindCSS 3** - Utility-first CSS
- **Vercel** - Deployment platform

---

## Project Structure

```
cleanservice/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Homepage hero with booking form
│   │   ├── ServiceOfferings.jsx  # Service cards grid
│   │   ├── SocialProof.jsx  # Testimonials & ratings
│   │   └── Footer.jsx       # Site footer
│   │
│   ├── pages/               # Route pages
│   │   ├── Home.jsx         # Homepage (/)
│   │   ├── About.jsx        # About page (/about)
│   │   └── Services.jsx     # Services page (/services)
│   │
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
│
├── public/                  # Static files served as-is
│   ├── assets/              # Images & media
│   └── vite.svg
│
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── vercel.json              # Vercel deployment config
```

---

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Homepage with hero, services preview, testimonials |
| `/about` | About | Company info, why choose us, stats |
| `/services` | Services | Detailed service listings with pricing |

---

## Key Features

### 1. **Responsive Navigation**
- Desktop: Horizontal nav with CTA button
- Mobile: Hamburger menu
- React Router for page navigation

### 2. **Booking Form** (Hero component)
- Service type selector
- Property address input
- Date/time picker
- Bedroom/bathroom count
- Serves Bay Area

### 3. **Service Offerings**
- House Cleaning
- Office Cleaning
- Deep Cleaning
- Move In/Out Cleaning

### 4. **Social Proof**
- 2,500+ satisfied customers
- 4.9/5 average rating
- Customer testimonials
- Trust badges

---

## Development

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```
Visit: http://localhost:5173

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## Deployment

### Vercel (Automatic)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push to main

### Manual Deploy
```bash
npm run build
# Upload dist/ folder to any static host
```

---

## Component Breakdown

### Header
- Logo
- Navigation links (Services, About, Contact)
- "Book a service" CTA
- Mobile menu toggle

### Hero
- Main tagline: "Clean. Fresh. Pristine."
- Booking form with validation
- Background image
- Service area indicator

### ServiceOfferings
- Grid of 3 service cards
- Images, titles, descriptions
- "Learn more" links

### SocialProof
- Customer count
- Rating badges (TripAdvisor, Google, etc.)
- 2 featured testimonials with avatars

### Footer
- Company info & description
- Service links
- Contact information
- Social media links
- Copyright notice

---

## Pages

### Home (`/`)
Combines:
- Hero (booking form)
- ServiceOfferings (preview)
- SocialProof (testimonials)

### About (`/about`)
- Company story
- "Why Choose Us" section with image
- Key benefits (Experience, Eco-friendly, Guarantee)
- Stats section (customers, years, rating, availability)

### Services (`/services`)
- Detailed service listings
- Features list for each service
- Pricing information
- "Book Now" CTAs
- Alternating image/text layout

---

## Styling

### Tailwind Custom Colors
```js
// tailwind.config.js
colors: {
  'welcome-blue': '#0F172A',
  'welcome-green': '#10B981',
  'welcome-green-light': '#34D399',
  'welcome-gray': '#6B7280',
  'welcome-gray-light': '#F3F4F6',
}
```

### Design System
- **Primary**: Green (#10B981) - CTAs, highlights
- **Secondary**: Blue (#0F172A) - Headers, text
- **Neutral**: Gray scale for backgrounds
- **Typography**: System fonts with fallbacks
- **Spacing**: Tailwind's default scale
- **Breakpoints**: sm, md, lg, xl

---

## Scripts

```json
{
  "dev": "vite",                    // Start dev server
  "build": "vite build",            // Production build
  "preview": "vite preview",        // Preview production build
  "lint": "eslint .",               // Run ESLint
  "vercel-build": "vite build"      // Vercel deployment
}
```

---

## Environment

### Development
- Node.js 18+
- npm 9+
- Modern browser with ES6+ support

### Production
- Static site (no server required)
- CDN-friendly
- Fast page loads

---

## Best Practices

1. **Component Structure**
   - One component per file
   - Functional components with hooks
   - Props for reusability

2. **Routing**
   - React Router for navigation
   - Proper Link components (no anchor tags for internal routes)
   - Scroll to top on route change

3. **Styling**
   - Tailwind utility classes
   - Consistent spacing/sizing
   - Mobile-first responsive design

4. **Performance**
   - Code splitting via React Router
   - Optimized images
   - Lazy loading where appropriate

---

## Future Enhancements

- [ ] Contact form with backend integration
- [ ] Online booking system
- [ ] Customer portal
- [ ] Blog/articles section
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Analytics integration

---

## Support

For questions or issues, contact: info@carlosclean.com
