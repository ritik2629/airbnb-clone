import { createRoot } from "react-dom/client";
import { App } from "./App";
import { UserContextProvider } from "./context/UserContext";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
