# Add `Components > Collapse`

## Summary

Create an accessible Collapse component and `/components/collapse` showcase route following the existing component-page convention. The page will demonstrate a single disclosure and coordinated control of multiple targets.

## Implementation Changes

- Add a client-side `Collapse` primitive with:
  - required `id` and `open` state
  - animated content container
  - `children` for arbitrary panel content
- Keep trigger controls as native buttons in the showcase, with `aria-expanded` and `aria-controls` bound to the matching Collapse IDs.
- Build the Collapse showcase with:
  - **Basic Example**: one button toggles one contextual content panel.
  - **Multiple Targets**: individual buttons toggle each panel, plus one control toggles both panels together.
- Use clear visible labels, icon-supported buttons where helpful, 180–220ms transitions, and accessible keyboard behavior inherited from native buttons.
- Add responsive/light/dark Collapse styling that matches the Accordion, Alert, Badge, and Button cards.
- Add `/components/collapse` metadata; extend the shell navigation union; add Collapse below Button in the Components sidebar and show the matching top-nav location.

## Test Plan

- Run targeted ESLint for Collapse, its route, and changed shell navigation files.
- Run `npx tsc --noEmit` and `npm run build`; verify `/components/collapse` is statically generated.
- Verify the single and multi-target controls at desktop and ≤760px widths, including correct expanded states and `aria-controls` relationships.

## Assumptions

- Collapse panels use showcase-local state; no application data is changed.
- “Multiple Targets” includes individual controls and one toggle-all control.
- Context7 is unavailable as a callable integration in this workspace; bundled UI/UX and installed project guidance are used instead.
