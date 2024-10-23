/**
 * @file
 *
 * Summary.
 * <p>Create a root to display React components inside a browser DOM node.</p>
 *
 * @since 10/10/2024
 * @author Paulo Roma.
 * @see <a href="../src/main.jsx">source</a>
 * @see <a href="https://rpe-gold.vercel.app/">link</a>
 * @see {@link external:react-dom/client.createRoot createRoot}
 * @see {@link external:react-three/fiber R3F}
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
