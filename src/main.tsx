import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";
import { SkeletonTheme } from "react-loading-skeleton";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <SkeletonTheme baseColor="#00000036" highlightColor="#00000036">
        <App />
      </SkeletonTheme>
    </UserProvider>
  </StrictMode>
);
