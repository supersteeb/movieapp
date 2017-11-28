import React, {Component} from 'react';
import { Card, Box, Collapse } from 'bloomer';
import './MovieCard.css';
import { MovieDetails } from './MovieDetails';
import { CardHeader,
	CardHeaderTitle,
	CardImage, 
	CardBody, 
	Image, 
	CardContent,
	Content,
	CardFooter,
	CardFooterItem,
	Icon, 
	Tile,
	CardTitle, 
	CardText } from 'bloomer/lib/components/Card/CardImage';
import { Button } from 'bloomer/lib/elements/Button';

export default class MovieCard extends Component {
	constructor(props) {
		super(props);
		this.clickMore = this.clickMore.bind(this);
		this.state = {
			showMore: false
		};
	}

	clickMore(collapsed) {
		this.setState({
			isCollapsed: !collapsed
		})
	}
/*	let movieObj = {
		title: type === 'movie' ? movie.title : movie.original_name,
		release_date: type === 'movie' ? movie.release_date.split('-')[0] : movie.first_air_date.split('-')[0],
		poster_path: movie.poster_path ? main_path.concat(movie.poster_path) : NoImage,
		description: movie.overview,
		vote: movie.vote_average
	}; */

	render() {
		const toggleDescription = e => {
			e.preventDefault();
			this.setState({
				showMore: !this.state.showMore
			});
		};

		let description;
		if (this.state.showMore) {
		  description = (
			<div>
			  <CardContent>
				<Content>{this.props.movie.overview}</Content>
			  </CardContent>
			  <CardFooter>
				<CardFooterItem href="#" onClick={toggleDescription}>
				  Description <Icon icon="angle-double-up" />
				</CardFooterItem>
			  </CardFooter>
			</div>
		  );
		} else {
		  description = (
			<div>
			  <CardFooter>
				<CardFooterItem href="#" onClick={toggleDescription}>
				  Description <Icon icon="angle-double-down" />
				</CardFooterItem>
			  </CardFooter>
			</div>
		  );
		}

		return (

			<Box className="MovieCard-Box">
				{this.props.title}
				</Box>


		);
	}
}

/* 
How can you tell when a component has too many responsibilities?
Separating container components from presentational components helps to answer that question. 
It shows you when it might be a good time to divide a component into smaller components. 
It also shows you how to perform that division. */