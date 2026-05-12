---
name: web-design
description: Expert web design guidance for creating beautiful, conversion-focused landing pages. Covers layout patterns, visual hierarchy, color theory, typography, spacing, responsive design, and UI component design. Use this when designing new pages, sections, or components.
license: MIT
metadata:
  audience: web-developers
  workflow: design-and-frontend
---

## What I do
- Guide layout decisions using proven patterns (hero, bento grid, feature cards, testimonials, pricing tables, CTA sections)
- Apply visual hierarchy principles to direct user attention
- Recommend spacing, sizing, and responsive breakpoint strategies
- Ensure design consistency with the Vitalia brand system
- Create accessible, performant, and mobile-first designs

## Vitalia Design System
- **Colors**: `vitalia-cyan` (#01B2F8), `vitalia-purple` (#7B2D91), `vitalia-yellow` (#FEE209), `vitalia-navy` (#180D95), `vitalia-dark` (#0a0545), `vitalia-darker` (#06032a)
- **Font**: Outfit (Google Fonts), weights 300-800
- **Style**: Modern, clean, rounded corners (use `rounded-[2.5rem]` for large containers, `rounded-full` for buttons/badges), subtle borders, backdrop blur effects
- **Backgrounds**: Light sections use `#f8f9fa`, dark sections use `vitalia-dark` or `vitalia-darker`
- **Buttons**: Pill-shaped (`rounded-full`), cyan primary with navy hover state
- **Cards**: Large rounded containers with subtle shadows and borders

## Layout Patterns

### Hero Section
- Full-width with max-width container
- Two-column on desktop (image/visual + headline/CTA), stacked on mobile
- Headline: 4xl-6xl, tight tracking, leading-tight
- Subheadline: lg text, muted color, max-width for readability
- Primary CTA: large pill button with icon, clear action verb
- Secondary CTA (optional): text link or outlined button

### Bento Grid Sections
- Use CSS grid with `gap-6`
- Cards have `rounded-[2.5rem]` and light background
- Mix of single and spanning cards for visual interest
- Each card should have a clear focal point

### Feature/Benefit Cards
- Icon or visual + heading + short description
- 3-column on desktop, 1-column on mobile
- Consistent padding and alignment

### Stats/Metrics Section
- Large numbers (5xl+), prominent color (cyan)
- Supporting label and description below
- 3-column grid, centered content

### CTA Sections
- Clear headline with benefit framing
- Supporting text addressing objections
- Prominent form or button
- Social proof nearby (testimonials, logos, numbers)

## Design Principles
1. **Whitespace is your friend**: Use generous padding (`p-10`, `p-14`) inside cards
2. **Limit visual noise**: Max 2-3 colors per section, let content breathe
3. **Consistent rhythm**: Use Tailwind's spacing scale, don't invent custom values
4. **Mobile first**: Design for mobile, enhance for desktop with `md:` and `lg:` breakpoints
5. **Accessibility**: Maintain contrast ratios, use semantic HTML, include alt text on images
6. **Performance**: Use Astro's `<Image />` component, lazy load below-fold images

## Responsive Breakpoints
- Mobile: default (no prefix)
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)

## When to use me
- Creating a new page or section from scratch
- Improving the visual design of an existing component
- Making a page responsive
- Deciding on layout structure, spacing, or color usage
- Creating UI components (cards, buttons, navigation, forms)

## Anti-patterns (avoid these)
- Using `div` wrappers without semantic meaning
- Inconsistent border-radius styles within the same section
- More than 3 font sizes in a single section
- Low contrast text (always test against background)
- Fixed pixel widths (use Tailwind's utility classes)
- Overusing animations or transitions
