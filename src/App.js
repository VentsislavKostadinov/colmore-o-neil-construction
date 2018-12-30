import React, { Component } from 'react';
import './App.css';

import Header from './Tang-Construction/Header/Header';
import Routes from './Tang-Construction/Routes';
import Footer from './Tang-Construction/Footer/Footer';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

    return (

        <div className="App">
                <Header/>
            <Routes/>
            <Footer/>
            </div>
    );
  }
}

export default App;
