
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "../shared/index.css";
import '@mantine/core/styles.css';
import '../shared/global.css';
import App from './App.tsx'
import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </StrictMode>
)
