import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import ThemeContextProvider from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);