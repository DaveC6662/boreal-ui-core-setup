import "./App.css";

// Boreal UI components imported directly from the core build.
import Typography from "boreal-ui/core/Typography";
import Button from "boreal-ui/core/Button";
import { ThemeSelect } from "boreal-ui";

function App() {
  return (
    <div className="app-shell">
      {/* 
        Starter page wrapper content.
        This gives you a basic example of how Boreal UI components can be used
        inside your own layout and custom CSS.
      */}
      <main className="hero">
        <section>
          {/* Starter logo */}
          <img src="/favicon.ico" alt="Boreal UI logo" className="hero-logo" />

          {/* Intro text */}
          <Typography as="p" variant="body">
            React Core Setup
          </Typography>

          {/* Page title */}
          <Typography as="h1" variant="h1">
            Boreal UI is ready to go
          </Typography>

          {/* Description text */}
          <Typography as="p" variant="body">
            Your project is now connected and styled. This starter screen gives
            you a clean place to begin building with Boreal UI components.
          </Typography>
        </section>
      </main>

      {/* 
        Example action area.
        You can replace these with your own buttons, cards, forms, or layouts
        as you begin building your app.
      */}
      <div className="component-section">
        <Button>Primary!</Button>
        <Button theme="secondary">Secondary!</Button>
        <Button theme="tertiary">Tertiary!</Button>
        <Button theme="quaternary">Quaternary!</Button>
      </div>

      {/* Built-in scheme selector for quick theme switching */}
      <div className="theme-select-section">
        <Typography as="p" variant="body">
          Try switching themes
        </Typography>
        <ThemeSelect />
      </div>
    </div>
  );
}

export default App;
