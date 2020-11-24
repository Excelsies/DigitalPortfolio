import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/AboutMe';
import Project from './components/pages/Projects';
import Work from './components/pages/Work';
import Contact from './components/pages/ContactMe';
import Hobbies from './components/pages/Hobbies';
import Footer from './components/Footer';
import ScrollIntoView from './components/ScrollIntoView'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollIntoView>
          <Switch>
            <Route path='/DigitalPortfolio' exact component=
            {Home}/>
            <Route path='/DigitalPortfolio/about' component={About} />
            <Route path='/DigitalPortfolio/projects' component={Project} />
            <Route path='/DigitalPortfolio/work-history' component={Work} />
            <Route path='/DigitalPortfolio/contact-me' component={Contact} />
            <Route path='/DigitalPortfolio/hobbies' component={Hobbies} />
          </Switch>
        </ScrollIntoView>
        <Footer />
      </Router>
    </>
  );
}

export default App;
