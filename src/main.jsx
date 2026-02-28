import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactDOM from 'react-dom/client'; // Por que tem ponto e vírgula no final desse import. 27/02/2026 ; 22:42
import { BrowserRouter } from 'react-router-dom'; // Por que tem ponto e vírgula no final desse import. 27/02/2026 ; 22:42

import './estilos/reset.css'
import './estilos/globals.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);