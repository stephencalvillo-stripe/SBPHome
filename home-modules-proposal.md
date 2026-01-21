# Stripe Dashboard Home - Module Proposals for Non-Payments Products

**Project:** Reimagining Dashboard Home for Atlas, Financial Accounts, and Stripe Apps customers
**Date:** January 21, 2026
**Status:** Brainstorming & Ideation

## Overview

The current Stripe Dashboard Home page is optimized for Payments and Billing customers, featuring charts and graphs primarily relevant to payment processing. This document outlines proposed modules for customers who primarily use Atlas, Financial Accounts, or Stripe Apps.

## Strategic Framework

### Dual Purpose of Home

The Home page must balance two critical objectives:

1. **Utility** - Help users succeed with their current products
   - Quick insights for daily operations
   - Action items requiring immediate attention
   - Shortcuts to common workflows in their dedicated product tabs
   - At-a-glance status (not deep analytics - that lives in product tabs)

2. **Growth** - Introduce users to complementary Stripe products
   - Show value of products they're not using
   - Quick setup CTAs with low friction
   - Social proof ("Companies like yours use...")
   - Use case education and success stories

### Product Upsell Strategy

**Atlas Customers → Recommend:**
- **Payments** (Primary) - Accept online payments for their new business
- **Billing** - Subscription management for SaaS companies
- **Financial Accounts** - Embedded banking for their platform
- **Issuing** - Corporate cards for spending

**Financial Accounts Customers → Recommend:**
- **Payments** (Primary) - Full payment processing beyond embedded banking
- **Issuing** - Card programs complement account management
- **Treasury** - Cash management and yield optimization
- **Billing** - Subscription billing for their end users

**Stripe Apps Customers → Recommend:**
- **Payments** (Primary) - Core payment processing if not already using
- **Billing** - Recurring revenue management
- **Radar** - Fraud prevention and risk management
- **Data Pipeline** - Enhanced analytics and reporting

### Module Composition Guidelines

Each customer Home view should contain:
- **60-70% Utility Modules** - Help them with their current product
- **30-40% Marketing Modules** - Introduce complementary products
- **Above the fold**: 1-2 key utility modules + 1 high-value upsell
- **Below the fold**: Additional utility modules + educational marketing content

### Design Principles

Each module should:
- Provide actionable insights or quick access to key workflows
- Surface time-sensitive information that requires attention
- Enable customers to understand health/status at a glance
- Reduce navigation depth to common tasks
- For marketing modules: Show clear value, not just feature lists

---

## Atlas Customers

Atlas customers are typically founders and startups using Stripe to incorporate their company and manage business formation logistics.

### UTILITY MODULES

#### Module: Company Setup Progress

**Type:** Utility (Core product insight)

**Purpose:** Help founders track their company formation and setup journey

**Key Elements:**
- Visual progress indicator showing formation milestones
- Current status (e.g., "Incorporation filed", "EIN received", "Banking connected")
- Next recommended action with CTA button
- Estimated timeline to completion

**User Value:** Reduces anxiety about formation status and clarifies next steps without needing to dig through documentation.

---

#### Module: Compliance Dashboard

**Type:** Utility (Action items & alerts)

**Purpose:** Surface upcoming compliance requirements and deadlines

**Key Elements:**
- Upcoming tax deadlines (federal, state, local)
- Annual report filing dates by jurisdiction
- Required business filings tracker
- Alert badges for items due within 30/60/90 days
- Compliance health score or status indicator

**User Value:** Prevents missed filings and penalties by proactively surfacing requirements.

---

#### Module: Document Vault Quick Access

**Type:** Utility (Quick access shortcut)

**Purpose:** Provide fast access to critical business documents

**Key Elements:**
- Recently accessed documents
- Quick links to key documents:
  - Certificate of Incorporation
  - EIN confirmation letter
  - Operating Agreement
  - Registered agent information
- Upload/organize documents CTA

**User Value:** Centralizes essential documents that founders need frequently for banking, contracts, and other business needs.

---

#### Module: Business Health Overview

**Type:** Utility (Status dashboard)

**Purpose:** Quick snapshot of entity and operational status

**Key Elements:**
- Entity status across jurisdictions (active/good standing)
- Registered agent status
- Banking connection health
- Quick links to state filing portals
- Any alerts or required actions

**User Value:** Single-glance view of critical business infrastructure status.

---

### MARKETING MODULES

#### Module: Start Accepting Payments

**Type:** Marketing (Primary upsell to Payments)

**Purpose:** Introduce founders to Stripe Payments as their business launches

**Key Elements:**
- Headline: "Ready to accept your first payment?"
- Value props: "97% of Atlas companies use Stripe Payments to get paid"
- Integration options: No-code (Payment Links), Low-code (Checkout), Full API
- Quick setup CTA: "Get started in 5 minutes"
- Revenue opportunity calculator (optional)

**User Value:** Natural next step after company formation. Helps them start generating revenue quickly.

---

#### Module: Founder Resources & Community

**Type:** Marketing/Education (Soft upsell + value-add)

**Key Elements:**
- Curated Atlas guides based on company stage
- Recent webinars or events
- Community forum highlights
- Recommended service partners (legal, accounting, banking)

**User Value:** Provides contextual learning and support as founders navigate business building. Subtly introduces other products through case studies.

---

#### Module: Subscription Billing for SaaS

**Type:** Marketing (Upsell to Billing)

**Purpose:** Introduce Billing to SaaS founders who need recurring revenue

**Key Elements:**
- Headline: "Building a SaaS product? Manage subscriptions with Billing"
- Use case: "Handle trials, upgrades, and renewals automatically"
- Social proof: "Used by [X] Atlas companies for subscription management"
- Key features: Recurring billing, usage-based pricing, failed payment recovery
- CTA: "Explore Billing" or "See how it works"

**User Value:** Introduces automated subscription management for founders building recurring revenue products.

**Note:** Only show if customer profile suggests SaaS/subscription model.

---

## Financial Accounts Customers

Financial Accounts customers are businesses embedding banking services, managing financial accounts for their users, or running card programs.

### UTILITY MODULES

#### Module: Account Overview

**Type:** Utility (Core product metrics)

**Purpose:** High-level view of financial accounts under management

**Key Elements:**
- Total balance across all managed accounts
- Number of active accounts
- Number of active account holders/users
- Month-over-month growth indicators
- Recent account openings feed

**User Value:** Provides portfolio-level visibility for platforms managing multiple financial accounts.

---

#### Module: Transaction Activity

**Type:** Utility (Real-time monitoring)

**Purpose:** Real-time transaction monitoring and trends

**Key Elements:**
- Transaction volume (count and dollar amount)
- Time-series chart showing daily/weekly trends
- Recent transaction feed (last 10-20 transactions)
- Failed transaction count with alert if elevated
- Filter by transaction type (ACH, wire, internal transfer)

**User Value:** Monitors platform health and quickly identifies transaction issues or anomalies.

---

#### Module: Card Program Metrics

**Type:** Utility (Product performance)

**Purpose:** Track card issuance and spending activity

**Key Elements:**
- Total active cards issued
- Card spend volume (daily/weekly/monthly)
- Authorization success rate
- Top spending categories
- Recent card activations

**User Value:** Provides visibility into card program performance and user engagement.

**Note:** Only show if customer has card issuance enabled.

---

#### Module: Compliance & Operations Queue

**Type:** Utility (Action items)

**Purpose:** Surface accounts requiring review or action

**Key Elements:**
- KYC verification queue (pending count)
- Accounts under review or restricted
- Risk alerts requiring attention
- Time in queue indicators
- Quick action buttons to review/resolve

**User Value:** Prioritizes operational work and prevents backlog of compliance tasks.

---

#### Module: Liquidity Management

**Type:** Utility (Cash management)

**Purpose:** Monitor cash flow and funding status

**Key Elements:**
- Available balance vs. reserved funds visualization
- Scheduled incoming/outgoing transfers
- Funding status and health
- Low balance warnings
- Quick access to fund accounts

**User Value:** Helps platforms manage working capital and avoid insufficient fund situations.

---

### MARKETING MODULES

#### Module: Accept Payments from Your Users

**Type:** Marketing (Primary upsell to Payments)

**Purpose:** Introduce full payment processing capabilities beyond embedded banking

**Key Elements:**
- Headline: "Enable payments for your platform"
- Value prop: "Process payments alongside account management"
- Use cases: Marketplace payments, platform fees, transaction processing
- Social proof: "Platforms using Financial Accounts process $X in payments"
- Integration preview: Show how Payments + Financial Accounts work together
- CTA: "Explore Payments"

**User Value:** Natural expansion from managing accounts to processing payments. Increases platform revenue opportunities.

---

#### Module: Launch Card Programs with Issuing

**Type:** Marketing (Upsell to Issuing)

**Purpose:** Introduce card issuance if not already using it

**Key Elements:**
- Headline: "Issue cards for your users"
- Value props: Physical & virtual cards, spending controls, instant issuance
- Use cases: Corporate cards, rewards programs, expense management
- Quick stats: "Launch in weeks, not months"
- CTA: "See how Issuing works"

**User Value:** Complements account management with card programs, increases user engagement.

**Note:** Only show if customer is NOT already using Issuing.

---

#### Module: Optimize Cash with Treasury

**Type:** Marketing (Upsell to Treasury)

**Purpose:** Introduce yield-bearing accounts and cash management tools

**Key Elements:**
- Headline: "Earn yield on your balance"
- Value prop: Current APY displayed prominently
- Features: FDIC-insured accounts, automated sweeps, liquidity management
- Revenue calculator: Show potential earnings on current balance
- CTA: "Learn about Treasury"

**User Value:** Help platforms and their users earn returns on idle cash.

---

## Stripe Apps Customers

Stripe Apps customers are either using installed apps to extend Stripe functionality or building/publishing their own apps.

### UTILITY MODULES

#### Module: Installed Apps Hub

**Type:** Utility (Quick access)

**Purpose:** Quick access to active apps and their status

**Key Elements:**
- Grid or list of installed apps with icons
- Quick launch buttons for each app
- Health status indicators (operational, warning, error)
- Recent activity or updates from apps
- "Manage apps" link to full apps directory

**User Value:** Reduces navigation time to frequently used apps and surfaces app issues immediately.

---

#### Module: Usage Insights

**Type:** Utility (Engagement metrics)

**Purpose:** Show app engagement and value delivery

**Key Elements:**
- Most-used apps with usage frequency
- App-generated transactions or revenue (if applicable)
- Time saved or efficiency metrics
- Integration health scores
- Comparison to previous period

**User Value:** Demonstrates ROI of installed apps and identifies underutilized tools.

---

#### Module: Developer Dashboard (App Builders)

**Type:** Utility (For app publishers)

**Purpose:** Track performance of apps they're building/publishing

**Key Elements:**
- Active installs count
- Install growth trend
- API call volume and quotas
- Recent errors or issues
- App rating and review highlights
- Version adoption (if multiple versions published)

**User Value:** Essential metrics for teams building on the Stripe Apps platform.

**Note:** Only show for users who have published apps or are in developer mode.

---

### MARKETING MODULES

#### Module: App Marketplace Discovery

**Type:** Marketing/Utility Hybrid (Upsell apps + utility)

**Purpose:** Help users discover relevant apps to extend functionality

**Key Elements:**
- Recommended apps based on usage patterns and product mix
- New or recently updated apps
- Trending apps in relevant categories
- Personalized suggestions (e.g., "Teams like yours use...")
- Quick install CTAs

**User Value:** Drives app adoption and helps users optimize their Stripe setup. Serves both utility (finding useful apps) and growth (expanding Stripe usage).

---

#### Module: Power Your Apps with Payments

**Type:** Marketing (Primary upsell to Payments)

**Purpose:** Introduce core payment processing for apps that don't use it yet

**Key Elements:**
- Headline: "Accept payments in your workflow"
- Value prop: "Apps work better when integrated with payments"
- Use cases: Process payments, manage subscriptions, handle refunds
- Integration showcase: Popular apps that integrate with Payments
- Quick start: "Add payments to your setup in minutes"
- CTA: "Start with Payments"

**User Value:** Shows how Payments enhances app functionality and enables new use cases.

**Note:** Only show if customer is NOT already using Payments.

---

#### Module: Manage Subscriptions with Billing

**Type:** Marketing (Upsell to Billing)

**Purpose:** Introduce recurring revenue management

**Key Elements:**
- Headline: "Automate your subscription business"
- Value props: Recurring billing, usage tracking, revenue recognition
- App integrations: "10+ apps in the marketplace integrate with Billing"
- Use case: "Perfect for SaaS products and membership sites"
- CTA: "Explore Billing"

**User Value:** Helps businesses with recurring revenue automate billing workflows.

---

#### Module: Prevent Fraud with Radar

**Type:** Marketing (Upsell to Radar)

**Purpose:** Introduce fraud prevention and risk management

**Key Elements:**
- Headline: "Protect your business from fraud"
- Value props: Machine learning fraud detection, custom rules, dispute management
- Social proof: "Blocks $X in fraudulent charges daily"
- Quick stat: "Reduce fraud by up to 80%"
- Integration: Works seamlessly with apps and payment flows
- CTA: "Learn about Radar"

**User Value:** Introduces advanced fraud protection to reduce losses and chargebacks.

---

## Cross-Cutting Modules

These modules could be valuable across all three customer types with product-specific customization:

### Module: Action Items & Notifications

**Purpose:** Surface time-sensitive tasks requiring attention

**Customization by Product:**
- **Atlas:** Formation steps, compliance deadlines, document requests
- **Financial Accounts:** KYC reviews, risk alerts, low balance warnings
- **Stripe Apps:** App errors, update notifications, security patches

---

### Module: Quick Actions

**Purpose:** One-click access to common workflows

**Customization by Product:**
- **Atlas:** File annual report, download document, contact registered agent
- **Financial Accounts:** Create account, review transaction, fund account
- **Stripe Apps:** Launch app, install new app, view app logs

---

### Module: Product-Specific Resources

**Purpose:** Contextual help and documentation

**Customization by Product:**
- **Atlas:** Formation guides, tax resources, founder community
- **Financial Accounts:** API docs, compliance guides, integration examples
- **Stripe Apps:** App development docs, marketplace guidelines, OAuth setup

---

### Module: Account Health Score

**Purpose:** Overall health indicator tailored to their product suite

**Customization by Product:**
- **Atlas:** Formation progress, compliance status, document completeness
- **Financial Accounts:** KYC completion rate, transaction success rate, balance health
- **Stripe Apps:** App uptime, integration health, security posture

---

## Module Prioritization & Layout Strategy

### Recommended Module Order (Above the Fold)

**Atlas Home:**
1. Company Setup Progress (Utility) - Most critical for new founders
2. Compliance Dashboard (Utility) - Time-sensitive action items
3. Start Accepting Payments (Marketing) - Primary revenue opportunity

**Financial Accounts Home:**
1. Compliance & Operations Queue (Utility) - Requires immediate attention
2. Account Overview (Utility) - Key metrics at a glance
3. Accept Payments from Your Users (Marketing) - Natural expansion path

**Stripe Apps Home:**
1. Installed Apps Hub (Utility) - Quick access to active apps
2. Usage Insights (Utility) - Show app value
3. App Marketplace Discovery (Marketing/Utility Hybrid) - Drive adoption

### Below the Fold Strategy

- Additional utility modules for deeper insights
- 2-3 marketing modules introducing complementary products
- Educational content and resources
- Community/support modules

### Module Rotation & Personalization

**Marketing modules should be smart:**
- Don't show Payments upsell if already using Payments
- Rotate secondary upsells based on user behavior/profile
- A/B test messaging and placement for conversion optimization
- Use customer data to predict product fit (e.g., SaaS → Billing)

**Utility modules should adapt:**
- Hide modules with no data (e.g., Card Metrics if no cards issued)
- Prioritize modules with pending actions/alerts
- Show most relevant time-sensitive information first

---

## Next Steps

### Phase 1: Validation & Design (Weeks 1-2)
1. **Stakeholder Review:** Present utility vs. marketing framework to product leadership
2. **User Research:** Interview 5-10 customers from each segment to validate module priorities
3. **Competitive Analysis:** Review how other platforms balance utility and upselling on Home
4. **Design Mockups:** Create high-fidelity prototypes showing module layouts and interactions

### Phase 2: Technical Planning (Weeks 3-4)
1. **Data Requirements:** Map each module to available data sources and APIs
2. **Personalization Logic:** Define rules for showing/hiding modules based on product usage
3. **Performance Requirements:** Determine acceptable load times and refresh rates
4. **A/B Test Plan:** Design experiments to measure marketing module conversion rates

### Phase 3: Build & Launch (Weeks 5-8)
1. **Phased Rollout:** Launch to 10% of each customer segment first
2. **Metrics Tracking:** Monitor engagement, conversion, and satisfaction
3. **Iteration:** Refine based on user feedback and data
4. **Full Launch:** Roll out to 100% after validation

### Success Metrics

**Utility Module Success:**
- Time to complete key workflows (decrease)
- Support ticket volume for common issues (decrease)
- Daily active usage of Home page (increase)
- Task completion rate from Home (increase)

**Marketing Module Success:**
- Product activation rate (increase)
- Click-through rate on upsell CTAs
- Time to first transaction on new product (decrease)
- Revenue expansion per customer (increase)

**Overall Home Success:**
- Home page as entry point for workflows (increase)
- Session starts from Home vs. direct navigation (increase)
- User satisfaction (NPS/CSAT increase)
- Reduction in "empty state" perception

---

## Open Questions

### Product Strategy
- How should Home adapt for customers using multiple products (e.g., Atlas + Financial Accounts)?
- What's the hierarchy when multiple products are in use? (Show all utility, rotate marketing?)
- Should we have a "Getting Started" mode for new customers vs. "Power User" mode?

### Personalization & Targeting
- How do we identify customer profile for smart targeting (SaaS vs. marketplace vs. other)?
- What's the threshold for hiding a marketing module after multiple dismissals?
- Should marketing modules be permanently dismissible or rotate back eventually?

### Technical & UX
- Should module layout be customizable by users?
- What's the minimum data refresh rate needed for each module?
- How do we handle customers who haven't fully onboarded to their product yet?
- Should there be different views for different roles (admin vs. developer vs. finance)?

### Measurement
- How do we attribute product adoption to Home page marketing modules vs. other channels?
- What's the expected conversion rate for marketing modules?
- How do we measure cannibalization (are we just moving conversions, not creating new ones)?
