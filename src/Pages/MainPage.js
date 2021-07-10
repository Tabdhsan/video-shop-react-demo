import React from 'react';
import { Grid } from '@material-ui/core';
import Cards from './MainPageComponents/Cards';
import MainPageGenres from './MainPageComponents/MainPageGenres';
import MovieSearch from './MainPageComponents/MovieSearch';

function MainPage() {
	return (
		<Grid container direction='column'>
			<MovieSearch />
			<MainPageGenres />
			<Cards />
		</Grid>
	);
}

export default MainPage;
