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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <switch>
          <Route path='/' exact component=
          {Home}/>
          <Route path='/about' component={About} />
          <Route path='/education' component={Education} />
          <Route path='/projects' component={Project} />
          <Route path='/skills' component={Skills} />
          <Route path='/work' component={Work} />
          <Route path='/contact-me' component={Contact} />
          <Route path='/hobbies' component={Hobbies} />
        </switch>
      </Router>
    </>
  );
}

export default App;
