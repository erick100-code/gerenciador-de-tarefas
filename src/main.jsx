import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Pagetwo from './page/Pagetwo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/gerenciador-de-tarefas">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pagina2" element={<Pagetwo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);