import React, {Component} from 'react';
import { Table } from 'bloomer';

export default class MovieDetails extends Component {
	render() {
		return (
			<Table>
				{ this.props.details }
			</Table>
		);
	}
}
