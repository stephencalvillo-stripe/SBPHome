# Stripe Dashboard Home Prototype

A clickable prototype demonstrating reimagined Home page experiences for Atlas, Financial Accounts, and Stripe Apps customers.

## Getting Started

Simply open `index.html` in your web browser. No build process or server required!

```bash
open index.html
```

Or drag the `index.html` file into your browser window.

## Features

### Three Product Views

Use the shortcuts dropdown in the left navigation to switch between:
1. **Atlas** - Company formation and compliance tracking
2. **Financial accounts** - Embedded banking operations
3. **Apps** - App marketplace and management

Click on the shortcut item with the down arrow to reveal the product switcher dropdown.

### Interactive Elements

- **Hover Effects**: All modules and cards respond to mouse hover
- **Click Animations**: Buttons provide visual feedback on click
- **Launch/Install Actions**: App buttons simulate launching and installation
- **Smooth Transitions**: View switching includes fade animations
- **Responsive Design**: Adapts to different screen sizes

### Keyboard Shortcuts

- `Alt + 1` - Switch to Atlas view
- `Alt + 2` - Switch to Financial Accounts view
- `Alt + 3` - Switch to Stripe Apps view

## Module Highlights

### Atlas View
- Company Setup Progress with step tracking
- Compliance & Deadlines with urgency indicators
- Document Vault with quick access
- Business Health status overview
- Founder Resources and community

### Financial Accounts View
- Account Overview with growth metrics
- Transaction Activity feed with real-time updates
- Card Program metrics and spending categories
- Compliance Queue with pending reviews
- Liquidity Management with balance visualization

### Stripe Apps View
- Installed Apps Hub with status indicators
- Usage Insights showing most-used apps
- App Marketplace Discovery with recommendations
- Developer Dashboard for published apps
- Integration Health monitoring

## Design Notes

- Color scheme matches Stripe's brand (Indigo #635BFF, Cyan #00D4FF)
- Typography uses system fonts for performance
- Spacing and layout follow Stripe's design patterns
- Modules use card-based layouts with consistent padding
- Status indicators use semantic colors (green=success, yellow=warning, red=error)
- Header features a prominent search bar and icon-based action buttons
- Navigation uses product-specific sidebars with dropdown switching

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## File Structure

```
prototype/
├── index.html    # Main HTML structure with all three views
├── styles.css    # Complete styling matching Stripe's aesthetic
├── script.js     # Interactivity and view switching logic
└── README.md     # This file
```

## Next Steps

This prototype can be used for:
- Stakeholder presentations and feedback sessions
- User testing with actual Atlas, Financial Accounts, and Apps customers
- Design iteration and refinement
- Developer handoff for implementation planning
