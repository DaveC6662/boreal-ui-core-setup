import "@boreal-ui/core/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "@boreal-ui/core/ThemeProvider";
import { setBorealStyleConfig } from "@boreal-ui/core/styleConfig";
import { ThemeProvider, setBorealStyleConfig } from "@boreal-ui/core";

setBorealStyleConfig({
  defaultTheme: "primary",
  defaultSize: "medium",
  defaultRounding: "medium",
  defaultShadow: "light",
  defaultBorderWidth: "none",
});

// Mount the React app to the root element in index.html.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 
      ThemeProvider makes Boreal UI theming available throughout the app.

      - initialSchemeName sets the default active theme
      - customSchemes allows you to define your own color palette(s)

      This is useful when you want your project to start with a custom
      branded look right away.
    */}
    <ThemeProvider
      initialSchemeName="Cyberpunk Pulse"
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
    >
      {/* Your application starts here. */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
