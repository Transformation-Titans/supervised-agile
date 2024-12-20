// src/App.js
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import About from './components/About';
import MyCV from './components/MyCV';

import './index.css';

const App = () => (
  <>
    <Header />
    <About />
    <MyCV />
    <Portfolio />
    <Certifications />
    <Section id="speaking" bgColor="linear-gradient(135deg, #1a0040, #320066)">
      Coaching Engagements
    </Section>
  </>
);

export default App;
