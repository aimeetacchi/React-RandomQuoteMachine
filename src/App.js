import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/MainContainer';
import Footer from './components/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="quote-box" className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
