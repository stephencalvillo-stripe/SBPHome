# Stripe Dashboard Home Redesign

A redesigned Home page experience for Stripe Dashboard customers using Atlas, Financial Accounts, and Stripe Apps.

## 🎨 [View Live Prototype](https://stephencalvillo-stripe.github.io/SBPHome/prototype/)

Click the link above to interact with the prototype in your browser.

## Overview

The current Stripe Dashboard Home page is optimized for Payments and Billing customers. This project reimagines the Home experience for customers who primarily use:

- **Atlas** - Company formation and compliance tracking
- **Financial Accounts** - Embedded banking and account management
- **Stripe Apps** - App marketplace and integrations

## Project Structure

```
├── prototype/              # Interactive HTML/CSS/JS prototype
│   ├── index.html         # Main prototype file
│   ├── styles.css         # Styling matching Stripe design system
│   ├── script.js          # Interactive functionality
│   └── README.md          # Prototype documentation
├── home-modules-proposal.md   # Strategic module design document
└── Screenshots/           # Reference screenshots from Stripe Dashboard
```

## Design System

This project uses a shared design system located at `/Users/stephencalvillo/stripe-design-system/` (separate git repository). The design system includes:

- Color palette, typography, and spacing specifications
- Component library (buttons, badges, modules, metrics)
- 12-column grid system documentation
- Interactive visual style guide with live examples

This allows the design system to be reused across multiple projects while maintaining consistency.

## Key Features

### Strategic Framework

The Home page balances two critical objectives:

1. **Utility (60-70%)** - Help users succeed with their current products
   - Quick insights for daily operations
   - Action items requiring immediate attention
   - Shortcuts to common workflows

2. **Growth (30-40%)** - Introduce users to complementary Stripe products
   - Contextual upsells based on product usage
   - Social proof and use case education
   - Low-friction setup CTAs

### Three Product Views

Switch between product views using the shortcuts dropdown in the left navigation:

- **Atlas View** - Company setup progress, compliance dashboard, document vault
- **Financial Accounts View** - Account overview, transaction activity, card metrics, compliance queue
- **Stripe Apps View** - Installed apps hub, usage insights, app marketplace discovery

### Interactive Prototype

The prototype includes:
- Product-specific navigation sidebars
- Dropdown product switcher
- Search bar and icon-based actions in header
- Utility and marketing modules for each product type
- Hover states and smooth transitions
- Keyboard shortcuts (Alt+1/2/3)

## Getting Started

### View Online

The easiest way to view the prototype is via GitHub Pages:
👉 **[https://stephencalvillo-stripe.github.io/SBPHome/prototype/](https://stephencalvillo-stripe.github.io/SBPHome/prototype/)**

### Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/stephencalvillo-stripe/SBPHome.git
   cd SBPHome
   ```

2. Open the prototype:
   ```bash
   open prototype/index.html
   ```
   Or drag `prototype/index.html` into your browser.

No build process or dependencies required!

## Documentation

- **[Module Proposals](./home-modules-proposal.md)** - Detailed documentation of utility vs. marketing strategy, module specifications for each product type, and implementation roadmap
- **[Prototype README](./prototype/README.md)** - Technical details about the prototype implementation

## Design Principles

- Match Stripe's design system (Indigo #635BFF primary color)
- Clean, minimal aesthetic with white backgrounds
- Material Design icons for consistency
- Product-specific navigation that adapts based on user's primary product
- Contextual upsells that rotate based on current product usage

## Technical Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- Google Material Symbols for icons
- Responsive grid layouts
- CSS transitions for smooth interactions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

This is an internal prototype for design exploration and stakeholder feedback. If you have suggestions or feedback:

1. Review the [live prototype](https://stephencalvillo-stripe.github.io/SBPHome/prototype/)
2. Read the [module proposals](./home-modules-proposal.md)
3. Share feedback via your preferred channel

## Status

**Status:** Prototype & Ideation
**Last Updated:** January 21, 2026

---

Built with ❤️ for Stripe users
