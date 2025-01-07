import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import "./index.css";
import { Router } from "./core/routes/router.tsx";
import { ThemeProvider } from "./core/components/themes/theme-provider";
import Store from "./lib/redux/store.ts";
import { ToastContainer } from 'react-toastify';
  
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer></ToastContainer>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router></Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
