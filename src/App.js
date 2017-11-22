import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import {Container, Section} from 'bloomer';
import MovieList from './MovieList';

const movieData = require('./test.json'); //for the movie api file

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <Container>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>  
          </Container>
          <Container>
            <MovieList movies={movies}></MovieList>
            {
              movieData.map( (movies) => {
                return <p> {movies.ename} </p>
              })
            } 
          </Container>
        </Section>
      </div>
    );
  }
}

export 

export default App;
