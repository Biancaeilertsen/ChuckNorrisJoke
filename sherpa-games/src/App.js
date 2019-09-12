import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';


class App extends Component {
  render(){
      return (
        <div>
          <Router>
            <Route exact path="/" component={Home}></Route>
          </Router>
        </div>
      );
    }
  }

  export default App;
