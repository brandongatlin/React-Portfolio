import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [categories] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="app">
      <div id="header">
        <Header></Header>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Navigation>
      </div>
      <div id="main">
        {currentCategory === categories[0] && <About></About>}
        {currentCategory === categories[1] && <Project></Project>}
        {currentCategory === categories[2] && <Contact></Contact>}
        {currentCategory === categories[3] && <Resume></Resume>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;