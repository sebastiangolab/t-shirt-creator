import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/colors.css';
import './styles/font-weights.css';
import './styles/breakpoints.css';
import './styles/global.css';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement,
);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
