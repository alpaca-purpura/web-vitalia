---
name: url-reference
description: Analyze a given URL, extract its structure, design patterns, content strategy, and technical implementation to use as a reference base for building or improving pages. Use this when the user provides a URL and says "use this as reference", "make it like this site", or similar.
license: MIT
metadata:
  audience: web-developers
  workflow: content-and-design
---

## What I do
- Fetch and analyze a provided URL's page structure, layout, visual hierarchy, and content organization
- Extract design patterns: navigation style, hero section approach, CTA placement, color usage, typography choices
- Identify content strategy: headline formulas, section ordering, social proof placement, conversion flow
- Note technical implementation details: framework clues, animation patterns, responsive breakpoints
- Summarize findings as actionable reference points the agent can apply to the current project

## How to analyze a URL
1. **Fetch the page** using the `webfetch` tool to get the full HTML/markdown content
2. **Analyze structure**: Identify the main sections, their order, and purpose (hero, features, pricing, testimonials, CTA, footer)
3. **Analyze design**: Note layout patterns (grid, bento, cards), spacing approach, color palette, typography hierarchy
4. **Analyze content**: Study headline formulas, value proposition framing, benefit vs feature language, CTA copy
5. **Analyze conversion flow**: Map the user journey from entry to conversion action
6. **Extract actionable patterns**: List 3-7 specific patterns that can be adapted to the current project

## When to use me
- User provides a URL and asks to "make it like this" or "use this as inspiration"
- User wants to understand how a competitor or reference site is structured
- User wants to replicate a specific design pattern or content approach from another site
- User asks to analyze a landing page for best practices

## Output format
When analyzing a URL, provide:
1. **Page overview**: 1-2 sentence summary of what the page does and for whom
2. **Structure map**: Ordered list of sections with their purpose
3. **Design patterns**: 3-5 notable visual/layout choices
4. **Content patterns**: 2-4 notable copy/content strategies
5. **Adaptable takeaways**: Specific patterns that can be applied to the current Vitalia project

## Constraints
- Always respect copyright — extract patterns and structure, never copy text verbatim
- Adapt patterns to Vitalia's brand (vitalia-* colors, Outfit font, Latin American Spanish)
- Focus on what makes the reference effective, not just what exists
- If the URL cannot be fetched, ask the user for a screenshot or description instead
