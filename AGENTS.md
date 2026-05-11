# AGENTS.md

## Project

This repository contains the public website for Schoenmakerij Donders / De Rompert Craft Showcase.

Primary goal: evolve the current showcase into a clear, polished website for a shoe repair business with multiple locations, while keeping the warm craft-focused style and aligning colors with the brand assets.

Public product direction:

- Let visitors choose between locations early, so location-specific information stays clearly separated.
- Keep the family-company story visible without inventing details.
- Photos can be added later; use tasteful placeholders or existing assets until real shop/team/work photos are supplied.
- Do not invent unavailable facts, email addresses, domain details, reviews, or opening hours.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide React

## Commands

Use Windows-native commands in PowerShell. If `npm` is blocked by PowerShell execution policy, use `npm.cmd`.

- Install dependencies: `npm.cmd install`
- Start local dev server: `npm.cmd run dev`
- Build production bundle: `npm.cmd run build`
- Lint: `npm.cmd run lint`
- Preview production build: `npm.cmd run preview`

## Repository Layout

- `src/pages/` contains routed page views.
- `src/components/` contains shared app components.
- `src/components/ui/` contains shadcn/ui primitives.
- `src/assets/` contains image assets.
- `.github/workflows/deploy.yml` deploys to GitHub Pages on pushes to `main`.
- `docs/` contains public project/process notes only.

## Development Rules

- Prefer small, focused changes that match the current React/Tailwind style.
- Keep location data centralized or clearly grouped when changing Vught/Den Bosch content.
- Use existing shadcn/ui and local components before adding new component patterns.
- Use `lucide-react` for icons when an icon is needed.
- Avoid adding production dependencies unless they clearly reduce implementation risk or complexity.
- Preserve accessibility: semantic headings, readable contrast, keyboard-friendly navigation, and useful link labels.
- Keep mobile layouts first-class, especially for contact, location choice, and opening hours.

## Content Source Of Truth

Use the current chat or local-only notes for private client details. Do not commit raw client emails, private briefs, credentials, domain-provider details, or personal workflow configuration.

Local private context may exist in `docs/client-brief.md`, `docs/private/`, or `.codex/`; those paths are intentionally ignored by Git.

## Verification

Before claiming work is complete, run the smallest meaningful checks:

- For content/style-only frontend changes: `npm.cmd run build`
- For TypeScript/component logic changes: `npm.cmd run lint` and `npm.cmd run build`
- For visual or responsive changes: open the local site in the Codex browser and check desktop and mobile widths.

Report any command that could not be run and why.

## Git Workflow

- Work from the GitHub repo at `https://github.com/Lito073/de-rompert-craft-showcase`.
- Keep `main` deployable because GitHub Pages deploys from `main`.
- Use commits as checkpoints after meaningful setup or feature slices.
- Do not force-push, reset, or discard existing work unless explicitly requested.
- Keep public commits free of private client correspondence and personal Codex configuration.
