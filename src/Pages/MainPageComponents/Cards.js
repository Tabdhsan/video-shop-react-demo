import React, { useContext } from 'react';
import { Context } from '../../Context';
import { Grid } from '@material-ui/core';
import SingleCard from './SingleCard.js';

function Cards() {
	const { movies, pickedGenres } = useContext(Context);

	const allMoviesCards = movies.map(movie => (
		<SingleCard key={movie.title}>{movie}</SingleCard>
	));

	const filteredByGenre = movies.filter(movie =>
		pickedGenres.every(genre => movie.genres.includes(genre))
	);

	const totalGridTest =
		pickedGenres.length === 0
			? allMoviesCards
			: filteredByGenre.map(movie => (
					<SingleCard key={movie.title}>{movie}</SingleCard>
			  ));

	return (
		<Grid container style={{ width: '100%' }}>
			{totalGridTest}
		</Grid>
	);
}

export default Cards;
