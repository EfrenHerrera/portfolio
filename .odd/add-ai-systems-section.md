# Add AI systems section

## Objective
Position Efren as a full-stack engineer who ships AI-enabled products, and turn Navi into a contextual, recoverable guide rather than a one-time notification.

## Problem
The portfolio did not surface concrete AI work. The first Navi iteration showed each contextual message only once, then made it impossible to reopen and still allowed the character to cross content.

## Scope
- In scope: AI Systems content, hero/navigation alignment, factual Dealergeek AI copy, accessible focus states, and a section-aware interactive Navi guide with safe routes.
- Out of scope: RAG claims, live LLM/chatbot calls, new dependencies, global theme changes, and résumé content changes.

## Authorized scope
`src/app/components/AISystems/index.tsx`, `src/app/components/LinksReferences/index.tsx`, `src/app/components/NaviFly/index.tsx`, `src/app/page.tsx`, `src/config/index.ts`, and this tracking document. No other repository is authorized.

## TDD
standard: UI behavior is implemented first, then verified with lint, TypeScript, deterministic inspection, and desktop/mobile runtime checks.

## Delivery
Branch `main`, working tree `/Users/efrenhhi/workspace/personal/portfolio`, no topology change. Base commit for the exact feature delta: `7f0ca6e`.

## Acceptance criteria
- AI Systems content is factual, responsive, accessible, and omits unconfirmed RAG claims.
- Navi uses section themes and reduced particle load, respects reduced motion, and cleans up animation resources.
- Navi can always be clicked to reopen the current message.
- Navi remains a stable bottom launcher when closed, moves to and plays along the panel's top edge while open, and exposes navigation to About, AI Systems, Experience, and Résumé.
- Mobile and desktop layouts avoid persistent obstruction and all mandatory checks pass.

## Tasks
- [x] Add the AI Systems section, hero/navigation alignment, and factual Experience copy — files: `src/app/components/AISystems/index.tsx`, `src/app/page.tsx`, `src/config/index.ts`, `src/app/components/LinksReferences/index.tsx` — depends on: none — route: delegated direct (trigger: writer; multiple non-trivial UI files) — evidence: `npm run lint` and `npx tsc --noEmit --incremental false` passed; runtime inspected at 1440×900 and 390×844.
- [x] Add section themes, contextual messages, reduced-motion handling, resource cleanup, and lower-cost particles — files: `src/app/components/NaviFly/index.tsx` — depends on: task 1 — route: direct inline — evidence: lint and TypeScript passed; About, AI Systems, and Experience themes/messages observed in runtime.
- [x] Replace one-time Navi notifications with an interactive docked guide and section menu — files: `src/app/components/NaviFly/index.tsx` — depends on: task 2 — route: direct inline — evidence: Playwright observed automatic open → six-second close → successful click reopen; About/AI Systems/Experience/Resume menu, outside click, keyboard Enter/Escape, focus return, desktop/mobile docking, and reduced-motion stationary mode with zero particles all passed.
- [x] Replace the competing dock/route behavior with a stable bottom launcher and panel-top play motion — files: `src/app/components/NaviFly/index.tsx` — depends on: task 3 — route: direct inline — evidence: Playwright observed stable desktop/mobile bottom positions, click-to-open movement to the panel edge, changing horizontal positions while open, return to the bottom after close, and reduced-motion stationary placement with zero particles; clean reload reported zero console errors/warnings.
- [ ] Run final checks, exact risk assessment, and required review gate — files: `src/app/components/AISystems/index.tsx`, `src/app/components/LinksReferences/index.tsx`, `src/app/components/NaviFly/index.tsx`, `src/app/page.tsx`, `src/config/index.ts` — depends on: bottom-launcher correction — route: direct inline — evidence: pending.

## Findings & adjustments
- Initial implementation treated the contextual message as a five-second, once-per-section notification. User review clarified that the message must remain recoverable and that Navi should become the interaction point.
- The feature grew from a scoped content/UI change into a five-file, medium-risk interaction change, so it was reclassified as substantial and this living document was created before the corrective implementation.
- `scraft-judge` was started after the first medium-risk assessment but interrupted when the user paused execution to review the behavior. A fresh review remains required after the corrected implementation.
- Playwright initially could not click a continuously moving Navi. The route now pauses at waypoints and pointer/focus pauses motion, preserving the playful path while making the control reliably clickable.
- React rerenders could clear imperative `left`/`top` styles when the button also owned a React `style` prop, leaving Navi at the viewport origin. The React-owned style prop was removed, CSS supplies a safe initial position, and runtime verification confirmed stable persisted coordinates.
- Next.js Fast Refresh performed full reloads while `NaviFly` was replaced during development. A clean navigation afterward had zero console errors or warnings; this was a recovered development-only state, not a remaining runtime failure.
- User review found that the docked Navi and bottom panel still competed for space. This supersedes the edge-route/docked-open interaction: Navi will be a stable bottom launcher when closed, move to the panel's top edge when opened, and play horizontally along that edge until the panel closes.
- The in-progress judge run was cancelled because the interaction target changed during user review. It must not be resumed against the superseded target; a fresh judge run is required after this correction.

## Next step
Run the exact risk assessment and fresh review gate.
