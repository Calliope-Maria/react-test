import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';

class App extends Component {
  constructor(){
    super();
    this.state ={
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count * 1 });
  }
  render() {
    return (
      <Router>
      <div className="App">
        <button onClick={this.increment}>Increment</button>
        {this.state.count}

        <Header />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/About' component={About} />
        

        <Footer />
      
      </div>
      </Router>
    );
  }
}

export default App;
