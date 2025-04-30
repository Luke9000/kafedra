
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../shared/global.css';
import App from './App.tsx';
import { AssetPreloader } from '../widgets/Preload/index.tsx';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <AssetPreloader></AssetPreloader>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </StrictMode>
)
