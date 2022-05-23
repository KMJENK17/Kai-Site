import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarComp from './components/NavbarComp'
import AboutMe from './components/AboutMe'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComp />
    <AboutMe />
    <App />
  </React.StrictMode>
);

reportWebVitals();
