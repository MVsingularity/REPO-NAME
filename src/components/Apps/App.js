import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Title from '../Title/Title';
import POPOSList from '../POPOSList/POPOSList';
import Footer from '../Footer/Footer.js';
import {HashRouter as Router, Route} from 'react-router-dom'
import About from '../About/About.js';
import POPOSDetails from '../POPOSDetails/POPOSDetails'


function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails}/>
        <POPOSList />
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
