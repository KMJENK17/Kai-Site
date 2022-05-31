import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/CSS/index.css';
import reportWebVitals from './reportWebVitals';
import NavbarComp from './components/NavbarComp'
import AboutMe from './components/AboutMe'
import Maintitle from './components/Maintitle'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Contactme from './components/Contactme';
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <NavbarComp />
    <Maintitle />
    <AboutMe />
    <Resume />
    <Skills />
    <Projects />
    <Contactme />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
