import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer className={"z-index-[1000] top-0 right-0"} />
    <QueryClientProvider client={queryClient} >
    <App />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
); 
