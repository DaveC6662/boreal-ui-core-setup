# AGENTS.md

Guidance for AI agents working in this React project with Boreal UI.

## Boreal UI Usage

- Import components from `@boreal-ui/core`.
- Import Boreal globals once from `@boreal-ui/core/globals.css`, usually in the app entry or root layout.
- Use `@boreal-ui/types` for public type imports in TypeScript projects.
- Do not import from Boreal source files, package internals, or generated build paths.
- Prefer Boreal components over hand-rolled equivalents when a matching component exists.

## Theming And Styling

- Wrap the app in Boreal `ThemeProvider` when using themes or color schemes.
- Set app-wide defaults with `setBorealStyleConfig` instead of repeating props everywhere.
- Customize components with supported props, class names, CSS variables, and the Boreal theme system.
- Keep Boreal global styles loaded once; avoid broad resets that remove component spacing.
- Do not edit `node_modules` or Boreal package files to change component appearance.

## Accessibility

- Keep semantic labels, ARIA props, helper text, and error text connected when using Boreal form components.
- Prefer accessible names for icon-only buttons and controls.
- Preserve keyboard interaction and visible focus states when wrapping or composing Boreal components.

## React Notes

- Import from `@boreal-ui/core` unless this project intentionally uses the Next.js build.
- Keep the Boreal provider near the root of the React tree so components share the same theme context.

