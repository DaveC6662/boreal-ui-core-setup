# Boreal UI React Core Starter

A lightweight starter template for building a React + TypeScript + Vite project with **Boreal UI**.

This setup gives you a clean starting point with Boreal UI already connected, themed, and ready to use so you can jump straight into building your interface.

## Included in this starter

- React + TypeScript + Vite
- Boreal UI core setup
- Boreal UI global CSS import
- ThemeProvider configured at the app root
- A custom starter theme example
- A simple starter page using Boreal UI `Typography` and `Button`

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Boreal UI setup

This starter already includes the required Boreal UI setup in `main.tsx`:

- `@boreal-ui/core/globals.css` is imported once at the root
- `ThemeProvider` wraps the application
- a custom scheme is registered using `customSchemes`
- `initialSchemeName` sets the default active theme

Example:

```tsx
import "@boreal-ui/core/globals.css";
import { ThemeProvider } from "@boreal-ui/core";
```

## Project structure

```txt
src/
  App.tsx        # Starter page using Boreal UI components
  App.css        # Layout styles for the starter screen
  main.tsx       # App entry point and ThemeProvider setup
  index.css      # Project-level global styles
```

## Starter theme

This template includes a custom scheme called `Cyberpunk Pulse` to demonstrate how Boreal UI themes can be registered.

You can update the theme values in `main.tsx`:

```tsx
customSchemes={[
  {
    name: "Cyberpunk Pulse",
    primaryColor: "#792348ff",
    secondaryColor: "#8338ec",
    tertiaryColor: "#3a0ca3",
    quaternaryColor: "#fb5607",
    backgroundColor: "#000000ff",
  },
]}
```

You can also add multiple custom schemes and switch the default by changing `initialSchemeName`.

## Using Boreal UI components

This starter uses direct imports from the Boreal UI core build:

```tsx
import Typography from "@boreal-ui/core/Typography";
import Button from "@boreal-ui/core/Button";
```

You can continue building your app by adding more Boreal UI components into `App.tsx` or by creating your own pages and layouts.

## Styling notes

Boreal UI internally handles its component styling through its global setup and theme system.

In this project:

- `@boreal-ui/core/globals.css` provides Boreal UI’s required base styling
- `index.css` is for your project-wide global styles
- `App.css` is only used here to style the starter page layout

You do not need to manually style Boreal UI components just to get started.

## Recommended next steps

A few good next steps after cloning this starter:

- replace the starter hero content with your own app content
- add more Boreal UI components
- create additional custom color schemes
- build out your own layout and page structure
- connect your app to your own data, routes, or APIs

## Learn more

To explore more Boreal UI components and patterns, check the Boreal UI documentation and examples that accompany the library.

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for full details.
