# Agent Instructions — Portfolio

This project uses Cursor rules and skills from [ponytail](https://github.com/DietrichGebert/ponytail), [agent-skills](https://github.com/addyosmani/agent-skills), and [awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules).

## Always-on rules (`.cursor/rules/`)

| Rule | Source | Purpose |
|------|--------|---------|
| `ponytail.mdc` | ponytail | YAGNI ladder — simplest solution, no over-engineering |
| `anti-overengineering.mdc` | awesome-cursorrules | Scope changes to what was asked |
| `anti-sycophancy.mdc` | awesome-cursorrules | Verify APIs, no false confidence, honest status |

## Context rules (auto-attach by file pattern)

| Rule | When |
|------|------|
| `portfolio-react-vite.mdc` | `src/**/*.{js,jsx,css}` — project stack & structure |
| `javascript-quality.mdc` | `src/**/*.{js,jsx}` — JS conventions |
| `landing-page-image-quality.mdc` | UI work — real assets, alt text, no placeholders |

## Skills (`.cursor/skills/` — invoke when relevant)

| Skill | Source | Use when |
|-------|--------|----------|
| `using-agent-skills` | agent-skills | Pick the right workflow |
| `frontend-ui-engineering` | agent-skills | Building or changing UI |
| `performance-optimization` | agent-skills | Core Web Vitals, bundle size |
| `browser-testing-with-devtools` | agent-skills | Runtime debugging in browser |
| `security-and-hardening` | agent-skills | Contact form, env vars, client data |
| `incremental-implementation` | agent-skills | Multi-file features |
| `code-review-and-quality` | agent-skills | Pre-merge review |
| `shipping-and-launch` | agent-skills | Vercel deploy checklist |
| `ponytail-review` | ponytail | Review diff for over-engineering |
| `ponytail-audit` | ponytail | Repo-wide simplicity audit |

## Quick prompts

- "Follow ponytail — what's the minimal change?"
- "Use frontend-ui-engineering for this component"
- "ponytail-review this diff"
- "Run shipping-and-launch checklist before deploy"
