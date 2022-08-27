// Navbar Justine
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Autolistings from './components/pages/Autolistings';
import About from './components/pages/About';
import Testimonials from './components/pages/Testimonials';
import SignUp from './components/pages/SignUp';
import News from './components/pages/News';
import Contact from './components/pages/Contact';

//react bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Autolistings' component={Autolistings} />
        <Route path='/About' component={About} />
        <Route path='/Testimonials' component={Testimonials} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/News' component={News} />
        <Route path='/Contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
