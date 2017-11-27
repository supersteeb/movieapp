import React, { Component} from 'react';
import MovieCard from './MovieCard';
import {Card, Button} from 'bloomer';

export default class MovieList extends Component {

/*	async loadData() {
		console.log("this supposed to refresh");
		this.state.page;
		this.movieResults = await this.fetchMovies(this.state.page);
		this.setState({
		  movies: this.movieResults,
		  filterValue: ''
		});
	  } */

	render() {
		const { movies, handleLoadMoreClick, loadData } = this.props;
		 	return ( 
			 	<div>
					 <Button isColor="secondary" onClick={ (e) => loadData(e)}> Refresh </Button>

						{movies.map(movie => <MovieCard key={movie.id} title={movie.title} poster={movie.poster_path} genres={movie.genres} />)}
						<Button isColor="primary" onClick={ (e) => handleLoadMoreClick(e)}>Load More</Button>
				</div>
			);
		}
}
