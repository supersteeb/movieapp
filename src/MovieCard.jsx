import React, {Component} from 'react';
import { Card, Box, Collapse } from 'bloomer';
import './MovieCard.css';
import { MovieDetails } from './MovieDetails';
import { CardImage, CardBody, CardTitle, CardText } from 'bloomer/lib/components/Card/CardImage';
import { Button } from 'bloomer/lib/elements/Button';

export default class MovieCard extends Component {
	constructor(props) {
		super(props);
		this.clickMore = this.clickMore.bind(this);
		this.state = {
			isCollapsed: false
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
		return (
			/*<Card>
				<CardImage
				top
				width="50%"
				alt="poster card"
				//src={/*this.getSrcPoster(this.props.poster_path)*/  //}
			//	/> 
			/*	<CardBody>
					<CardTitle>{ this.props.title }</CardTitle>;
					<Button
						color="primary"
						onClick={ () => this.clickMore(this.state.isCollapsed)}
						style={{ marginBottom: "1rem" }} 
					> More
					</Button>
					<Collapse isOpen={this.state.isCollapsed}>
						<CardText>{this.props.overview}</CardText>
					</Collapse>
				</CardBody>
			</Card> */ 
			<Box className="MovieCard-Box">
			{this.props.poster_path}
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