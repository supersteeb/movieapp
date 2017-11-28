import React, { Component } from 'react';
import logo from './movie.png';
import './App.css';
import 'bulma/css/bulma.css';
import {Container, 
        Section,
        Field,
        Label,
        Control,
        Input } from 'bloomer';
import MovieList from './MovieList'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      filterValue: ''
    };
    //this.handleOnChange = this.handleOnChange.bind(this); (?)
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async getMoviesUrl(page) {
    "https://api.themoviedb.org/3/movie/now_playing?api_key=77d418dbeff26425474604053b0ed4f4&page=$(page)";
  }

  async fetchMovies(page) {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=77d418dbeff26425474604053b0ed4f4&page=$(page)";
    const results = await fetch(url);
    const data = await results.json();
    return data.results;
  }

  //  .production_companies.name, .adult, genres, 

  async componentDidMount() {
    this.movieResults = await this.fetchMovies(this.state.page);
    await this.sleep(500);
    this.setState({
      movies: this.movieResults,
      isLoading: false,
    });
  }

  async loadMore() {
    const page = this.state.page + 1;
    const newMovies = await this.fetchMovies(page);
    this.movieResults = this.movieResults.concat(newMovies);
    await this.sleep(500);
    this.setState({
      page,
      movies: this.movieResults,
    });
  }

  /* let movieObj = {
		title: type === 'movie' ? movie.title : movie.original_name,
		release_date: type === 'movie' ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0],
		poster_path: movie.poster_path ? main_path.concat(movie.poster_path) : NoImage,
		description: movie.overview,
		vote: movie.vote_average
	};*/

  async loadData() {
    console.log("this supposed to refresh");
    this.state.page;
    this.movieResults = await this.fetchMovies(this.state.page);
    this.setState({
      movies: this.movieResults,
      filterValue: ''
    });
  }

  handleOnChange(e) {
    let val = e.target.value;
    this.setState({
      filterValue: val,
      movies: this.movieResults.filter( (m) => m.title.toLowerCase().includes(val.toLowerCase()))
    });
  }

  render() {
    let content;
    if (this.state.isLoading) {
      content = <p> I'm loading </p>;
    } else {
      content = <MovieList handleLoadMoreClick={(e) => this.loadMore(e)}movies={this.state.movies} />;
    }

    return (
      <div className="App">
        <Section>
          <Container>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to the Movie App</h1>
            </header>  
          </Container>
          <Container>
            <Field>
              <Label>Filter by name:</Label>
              <Control>
                  <Input type="text" 
                    value={this.state.filterValue}
                    placeholder='Text Input' onChange={this.handleOnChange.bind(this)}/>
              </Control>
            </Field>

          </Container>
          <Container>
            {content}
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
