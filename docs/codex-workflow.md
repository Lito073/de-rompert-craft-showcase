# Codex Workflow

This project uses a task-based Codex workflow.

## Project Setup

- Open this repository folder as the Codex project.
- Keep reusable, non-private engineering guidance in `AGENTS.md`.
- Keep private client notes, raw emails, credentials, and personal Codex settings out of Git.
- Use `docs/client-brief.md`, `docs/private/`, or the active chat for local-only private context.

## Per-Task Flow

1. Start a new Codex thread for each coherent task.
2. Use Plan mode first for ambiguous, multi-step, design, content, or deployment work.
3. Give the task a compact prompt with:
   - Goal
   - Relevant context or files
   - Constraints
   - Done-when checks
4. Let Codex implement only after the plan is clear.
5. Verify with the smallest meaningful checks before accepting the work.
6. Commit a focused checkpoint when the task is complete.

## When To Reuse A Thread

Stay in the same thread when:

- You are still working on the same bug, feature, or content change.
- The next request depends directly on decisions from the current task.
- You are reviewing or fixing the work just produced.

Start a new thread when:

- You begin a different feature or page.
- The thread has become noisy or broad.
- You need a fresh plan for a separate task.
- You want to avoid carrying old assumptions into new work.

## Recommended Task Slices

Good task slices for this site:

- Plan the new information architecture for the two-location site.
- Implement location choice and routing.
- Update public copy from approved client facts.
- Align colors and visual language with the logo.
- Add real photos and optimize image loading.
- Configure domain and deployment.
- Run final review before publishing.

## Verification

Use these default checks:

- `npm.cmd run lint`
- `npm.cmd run build`

For visual work, also open the site locally in the Codex browser and check desktop and mobile layouts.

## GitHub

The remote is:

`https://github.com/Lito073/de-rompert-craft-showcase.git`

Authenticate Git once on the machine before pushing. On Windows, GitHub recommends GitHub CLI or Git Credential Manager for HTTPS authentication.

