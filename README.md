# DEMO Corporate Workplaces Web Application

A clean, responsive, and pixel-perfect corporate website built with **Next.js (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **React**. This project faithfully recreates the Figma dashboard design, optimizing layout responsiveness across all major device widths and featuring subtle interactive components.

---

##  Key Features

*   **Pixel-Perfect Figma Adaptation**: Matches the exact colors, layout proportions, borders, and margins of the design screenshots.
*   **Fully Responsive Structure**: Optimized for viewports from `320px` (mobile devices) up to `1920px` (desktop monitors) without layout overflow or content clipping.
*   **Tailwind CSS v4 Core Utility Styling**: Styled entirely with Tailwind CSS utility classes and custom `@utility` declarations.
*   **Dynamic Visual Accordion**: An interactive gallery inside the "Inspiration & Insights" section where clicking different category items expands the corresponding visual image card with smooth transitions.
*   **Custom Curved Dividers & SVG Backdrops**: Smooth desktop diagonal S-curves, responsive mobile curve transitions, and map backdrops are generated natively via vector SVGs.
*   **Performance Optimization**: Fonts (`Outfit` and `Inter`) are loaded locally via Next.js `next/font/google` optimizations.

---

##  Technology Stack

*   **Framework**: Next.js 14+ (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4 + PostCSS
*   **Icons**: Lucide React
*   **Core**: React 19

---

##  Folder Structure

```text
ui-dasboard-designdot/
│
├── public/                     # Static media files (favicon, generated images)
│   ├── hero-office.png
│   ├── office-building.png
│   ├── coins-calculator.png
│   ├── insights-operations.png
│   └── insights-growth.png
│
├── src/
│   ├── app/                    # Next.js App Router root layout and configuration
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global styling rules and custom Tailwind v4 themes
│   │   ├── layout.tsx          # Root structural layout (loads Google Fonts)
│   │   └── page.tsx            # Main page assembly entry point
│   │
│   └── components/             # Reusable UI component modules
│       ├── Navbar.tsx          # Sticky header navigation and mobile drawer menu
│       ├── Hero.tsx            # Hero banner with custom S-curve mask and slant button
│       ├── HotTopics.tsx       # Slanted label banner and responsive news grid
│       ├── AboutFirm.tsx       # Statistics layout with map overlay and building card
│       └── InspirationInsights.tsx # Interactive accordion tabs and animated gallery
```

---

##  Installation & Setup

Follow these steps to clone, configure, and launch the development environment locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### 1. Install Dependencies
Run the install command inside the root folder of the project to download React, Next.js, and Lucide React:
```bash
npm install
```

### 2. Start the Development Server
Launch the compiler and launch hot reloading in development mode:
```bash
npm run dev
```

### 3. Open in Browser
Open your browser and navigate to:
*   [http://localhost:3000](http://localhost:3000)

---

##  Responsive Breakpoints

The layouts are optimized and tested across the following responsive states:
*   `320px` to `425px` (Mobile) — Navigation collapses to hamburger icon; hero section columns stack vertically; news columns display as stacked lists; statistics shift to single column cards.
*   `768px` (Tablets) — Main layout changes to rows/grids; statistics render as a balanced 2x2 grid.
*   `1024px` to `1920px` (Desktop / Ultrawide) — Headers display horizontal menu links, select buttons, and dropdown tools; hero section implements S-curve masks; accordion columns expand horizontally.
