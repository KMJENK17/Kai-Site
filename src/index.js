import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarComp from './components/NavbarComp'
import AboutMe from './components/AboutMe'
import Maintitle from './components/Maintitle'
import Resume from './components/Resume'
import Skills from './components/Skills'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComp />
    <Maintitle />
    <AboutMe />
    <Resume />
    <Skills />
    <App />
  </React.StrictMode>
);

reportWebVitals();
