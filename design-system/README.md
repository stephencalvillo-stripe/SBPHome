# Stripe Dashboard Home - Design System

**Version:** 1.0
**Last Updated:** January 21, 2026
**Status:** In Development

---

## Overview

This design system documents the visual language, components, and patterns used in the Stripe Dashboard Home redesign for Atlas, Financial Accounts, and Stripe Apps customers.

---

## 🎨 Color Palette

### Primary Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Stripe Purple** | `#635BFF` | Primary actions, links, active states, charts |
| **Stripe Purple Dark** | `#5145E5` | Hover states for purple elements |
| **Stripe Cyan** | `#00D4FF` | Accent color, gradients |
| **Dark Blue** | `#0A2540` | Primary text, headings |

### Neutral Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **White** | `#FFFFFF` | Backgrounds, cards, modules |
| **Light Gray** | `#F7FAFC` | Input backgrounds, subtle backgrounds |
| **Border Gray** | `#E3E8EE` | Borders, dividers |
| **Medium Gray** | `#697386` | Secondary text, placeholders |
| **Text Gray** | `#425466` | Body text, descriptions |

### Semantic Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Success Green** | `#10B981` | Success states, positive metrics |
| **Success Light** | `#D1FAE5` | Success backgrounds |
| **Warning Yellow** | `#F59E0B` | Warnings, alerts |
| **Warning Light** | `#FEF3C7` | Warning backgrounds |
| **Error Red** | `#DC2626` | Errors, critical alerts |
| **Error Light** | `#FEE2E2` | Error backgrounds |
| **Info Blue** | `#3B82F6` | Informational states |
| **Info Purple** | `#4F46E5` | Active info, selected states |
| **Info Light** | `#E0E7FF` | Info backgrounds, marketing module borders |

### Marketing Module Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Marketing Background** | `#FAFBFF` | Marketing module headers |
| **Marketing Gradient Start** | `#FAFBFF` | Banner gradient start |
| **Marketing Gradient End** | `#F0F4FF` | Banner gradient end |
| **Marketing Border** | `#E0E7FF` | Marketing module borders |

---

## 📝 Typography

### Font Family

- **Primary**: System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
- **Monospace**: `'Courier New', monospace` (for code, endpoints, technical data)

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **H1** | 24px | 700 | 1.3 | Marketing headlines |
| **H2** | 20px | 600 | 1.4 | Section titles |
| **H3** | 16px | 600 | 1.4 | Module headers |
| **Body Large** | 15px | 400 | 1.6 | Large body text |
| **Body** | 14px | 400 | 1.6 | Default body text |
| **Body Small** | 13px | 400 | 1.5 | Secondary text, metadata |
| **Caption** | 12px | 400 | 1.4 | Timestamps, small labels |
| **Label** | 14px | 500 | 1.4 | Form labels, metric labels |
| **Label Small** | 13px | 500 | 1.4 | Small labels |

### Font Weights

- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

---

## 📦 Components

### Modules

Standard container for content sections.

**Variants:**
- **Default** (`.module`) - 6 columns (50% width)
- **Large** (`.module.large`) - 12 columns (100% width)
- **Medium** (`.module.medium`) - 6 columns (50% width)
- **Small** (`.module.small`) - 4 columns (33% width)
- **Full Width** (`.module.full-width`) - 12 columns (100% width)

**Structure:**
```html
<div class="module">
    <div class="module-header">
        <h3>Module Title</h3>
        <span class="badge badge-info">Badge</span>
    </div>
    <div class="module-content">
        <!-- Content here -->
    </div>
</div>
```

**Styling:**
- Background: `#FFFFFF`
- Border: `1px solid #E3E8EE`
- Border radius: `8px`
- Header padding: `16px 20px`
- Content padding: `20px`

---

### Marketing Modules

Special modules for product upsells and promotional content.

**Variants:**
- **Standard** (`.marketing-module`)
- **Banner** (`.marketing-module.banner`) - Full-width with side-by-side layout
- **Compact** (`.marketing-module.compact`) - Tighter spacing for card grids

**Structure:**
```html
<!-- Standard Marketing Module -->
<div class="module marketing-module">
    <div class="module-header">
        <h3>Marketing Title</h3>
        <span class="badge badge-success">Recommended</span>
    </div>
    <div class="module-content">
        <p class="marketing-headline">Main headline</p>
        <p class="marketing-description">Supporting description</p>
        <div class="marketing-features">
            <!-- Features -->
        </div>
        <button class="btn btn-primary">Call to Action →</button>
    </div>
</div>

<!-- Banner Marketing Module -->
<div class="module full-width marketing-module banner">
    <div class="module-content">
        <div class="marketing-left">
            <h3>Banner Headline</h3>
            <p class="marketing-description">Description</p>
            <div class="marketing-features">
                <!-- Features -->
            </div>
        </div>
        <div class="marketing-right">
            <button class="btn btn-primary">Call to Action →</button>
            <a href="#" class="link-primary">Learn more</a>
        </div>
    </div>
</div>
```

**Styling:**
- Border: `2px solid #E0E7FF`
- Header background: `#FAFBFF`
- Banner gradient: `linear-gradient(135deg, #FAFBFF 0%, #F0F4FF 100%)`

---

### Buttons

**Primary Button** (`.btn.btn-primary`)
- Background: `#635BFF`
- Text: `#FFFFFF`
- Padding: `10px 20px`
- Border radius: `6px`
- Hover: `#5145E5`

**Secondary Button** (`.btn.btn-secondary`)
- Background: `#F7FAFC`
- Text: `#425466`
- Border: `1px solid #E3E8EE`
- Hover: `#E3E8EE`

**Dark Button** (`.btn.btn-dark`)
- Background: `#0A2540`
- Text: `#FFFFFF`
- Hover: `#1A3550`

**Small Button** (`.btn-sm`)
- Padding: `6px 12px`
- Font size: `13px`

**Link Button** (`.btn-link`)
- Background: Transparent
- Text: `#635BFF`
- No border
- Hover: `#5145E5`

---

### Badges

Small status indicators.

**Variants:**
- **Info** (`.badge.badge-info`) - Blue background
- **Success** (`.badge.badge-success`) - Green background
- **Warning** (`.badge.badge-warning`) - Yellow background

**Structure:**
```html
<span class="badge badge-info">Badge Text</span>
```

**Styling:**
- Padding: `4px 12px`
- Border radius: `12px`
- Font size: `13px`
- Font weight: `500`

| Type | Background | Text Color |
|------|------------|------------|
| Info | `#E0E7FF` | `#4F46E5` |
| Success | `#D1FAE5` | `#059669` |
| Warning | `#FEF3C7` | `#D97706` |

---

### Metrics Display

For displaying key numbers and statistics.

**Structure:**
```html
<div class="metric">
    <div class="metric-label">Label</div>
    <div class="metric-value">123,456</div>
    <div class="metric-change positive">+12.3%</div>
</div>
```

**Styling:**
- Label: `13px`, `#425466`, weight `500`
- Value: `24px`, `#0A2540`, weight `600`
- Change positive: `#059669`
- Change negative: `#DC2626`

**Variants:**
- **Large Value** (`.metric-value.large`) - `32px`

---

### Progress Indicators

**Progress Bar:**
```html
<div class="progress-bar">
    <div class="progress-fill" style="width: 66%"></div>
</div>
```

**Styling:**
- Height: `8px`
- Background: `#E3E8EE`
- Fill: `linear-gradient(90deg, #635BFF 0%, #00D4FF 100%)`
- Border radius: `4px`

**Quota Bar:**
```html
<div class="quota-bar">
    <div class="quota-fill" style="width: 84.7%; background: #10B981;"></div>
</div>
```

---

### Status Indicators

**Health Items:**
```html
<div class="health-item">
    <div class="health-label">Label</div>
    <div class="health-value success">Active</div>
</div>
```

**Status Colors:**
- Success: `#059669`
- Warning: `#D97706`
- Error: `#DC2626`

---

### Lists

**Document List:**
- Items have hover state: `background: #F6F9FC`
- Icon + text + action button layout

**Transaction List:**
- Similar hover treatment
- Icon color coding for transaction types

**Compliance Items:**
- Urgency indicators (warning icons for time-sensitive items)
- Date displays

---

## 🎯 Icons

Uses **Google Material Symbols Outlined** icon font.

**Common Icons:**
- Home: `home`
- Settings: `settings`
- Check: `check_circle`
- Warning: `warning`
- Error: `error`
- Info: `info`
- Code: `code`
- Apps: `apps`
- Groups: `groups`
- Document: `description`
- Download: `download`
- Trending Up: `trending_up`
- Schedule: `schedule`

**Icon Sizing:**
- Small: `16px`
- Default: `20px`
- Medium: `24px`
- Large: `28px`

**Icon Colors:**
- Primary: `#635BFF`
- Success: `#10B981`
- Warning: `#F59E0B`
- Error: `#DC2626`
- Neutral: `#697386`

---

## 📐 Spacing System

Based on 4px base unit.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Minimal spacing |
| sm | 8px | Tight spacing |
| md | 12px | Default spacing |
| lg | 16px | Section spacing |
| xl | 20px | Module padding |
| 2xl | 24px | Module gaps |
| 3xl | 32px | Section gaps |

---

## 🏗️ Layout Grid

12-column grid system with 24px gaps.

**Column Spans:**
- 4 columns = 33% width (`.small`)
- 6 columns = 50% width (`.medium`)
- 12 columns = 100% width (`.large`, `.full-width`)

**Responsive Breakpoints:**
- Desktop: 1200px+ (full grid)
- Tablet: 900px-1199px (6 or 12 columns)
- Mobile: <900px (all 12 columns)

---

## 🎭 Patterns

### Utility vs. Marketing Modules

**Utility Modules (60-70%):**
- White background
- Standard `1px` border
- Focus on data and actions
- Minimal decoration

**Marketing Modules (30-40%):**
- Light purple tinted backgrounds
- `2px` borders for emphasis
- Gradient backgrounds for banners
- Clear CTAs

### Module Ordering

**Best Practice:**
1. **Row 1**: Primary utility modules (side-by-side)
2. **Row 2**: Secondary utility modules (side-by-side)
3. **Row 3**: Primary marketing banner (full-width)
4. **Row 4**: Secondary marketing cards (2-3 cards)

### Status Color Coding

- **Green**: Success, operational, completed
- **Yellow/Orange**: Warning, pending, needs attention
- **Red**: Error, critical, failed
- **Blue**: Info, neutral status
- **Purple**: Active selection, primary actions

---

## 🔤 Content Guidelines

### Tone & Voice

- **Clear and direct**: Avoid jargon when possible
- **Action-oriented**: Use verbs ("View", "Explore", "Get started")
- **Helpful, not salesy**: Focus on value, not features

### Button Labels

- ✅ "Get Started with Payments →"
- ✅ "Continue Setup →"
- ✅ "View Details"
- ❌ "Click Here"
- ❌ "Submit"

### Metric Labels

- Use sentence case
- Be specific: "Requests (24h)" not "Requests"
- Include units when relevant

---

## 📱 Responsive Behavior

### Desktop (1200px+)
- Full 12-column grid
- Side-by-side module layouts
- Banner marketing modules span full width

### Tablet (900px-1199px)
- Modules adapt to 6 or 12 columns
- Some side-by-side layouts maintained
- Marketing banners switch to stacked layout

### Mobile (<900px)
- All modules span 12 columns
- Vertical stacking
- Simplified navigation
- Touch-friendly targets (minimum 44px)

---

## 🎨 Design Principles

1. **Clarity First**: Information hierarchy is paramount
2. **Consistent Patterns**: Similar content uses similar treatments
3. **Progressive Disclosure**: Show most important info first
4. **Balanced Utility/Marketing**: Help users succeed, then upsell
5. **Accessible by Default**: High contrast, clear labels, semantic HTML

---

## 📚 Component Library Reference

See `design-system.html` for visual reference with live examples of all components.

---

## 🔄 Version History

### Version 1.0 (January 21, 2026)
- Initial design system documentation
- Established color palette and typography
- Documented core components (modules, buttons, badges)
- Defined layout grid and spacing system
- Created responsive breakpoint guidelines
