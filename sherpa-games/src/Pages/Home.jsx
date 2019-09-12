import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from '../logo.svg';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';


// bruker følgende API https://api.chucknorris.io/

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        icon_url: "",
        id: "",
        url: "",
        value:""
      };

      this.newJoke = this.newJoke.bind(this)
    }

    newJoke(){
      fetch(`https://api.chucknorris.io/jokes/random`)
      .then(result => result.json())
      .then(joke => this.setState({joke,
        icon_url: joke.icon_url,
        id: joke.id,
        url: joke.url,
        value: joke.value
      }))
  }

    componentDidMount() {
      fetch(`https://api.chucknorris.io/jokes/random`)
      .then(result => result.json())
      .then(joke => this.setState({joke,
        icon_url: joke.icon_url,
        id: joke.id,
        url: joke.url,
        value: joke.value
        }))
    }


  render(){
      return (
        <div align="center">
          <Container maxWidth="xs">
            <p>{this.state.value}</p>
            <br/>
            <Chip
              label="New joke?"
              onClick={this.newJoke}
            />
          </Container>
        </div>
      );
    }
  }

  export default Home;
