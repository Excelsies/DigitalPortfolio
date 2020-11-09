import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/AboutMe';
import Education from './components/pages/Education';
import Project from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/ContactMe';
import Hobbies from './components/pages/Hobbies';
import Navbar from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/DigitalPortfolio' exact component=
          {Home}/>
          <Route path='/DigitalPortfolio/about' component={About} />
          <Route path='/DigitalPortfolio/education' component={Education} />
          <Route path='/DigitalPortfolio/projects' component={Project} />
          <Route path='/DigitalPortfolio/skills' component={Skills} />
          <Route path='/DigitalPortfolio/work' component={Work} />
          <Route path='/DigitalPortfolio/contact-me' component={Contact} />
          <Route path='/DigitalPortfolio/hobbies' component={Hobbies} />
        </switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
