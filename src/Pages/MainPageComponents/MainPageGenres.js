/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { Grid, Chip } from '@material-ui/core';

function MainPageGenres() {
	const {
		genres,
		defaultGenres,
		setDefaultGenres,
		pickedGenres,
		setPickedGenres,
	} = useContext(Context);

	useEffect(() => {
		setDefaultGenres(genres.sort());
	}, [genres]);

	const defaultGenresChips = defaultGenres.map(genre => (
		<Chip
			key={genre}
			label={genre}
			onClick={() =>
				setTimeout(() => {
					setPickedGenres(prevGenres => [...prevGenres, genre]);
					setDefaultGenres(prevGenres =>
						prevGenres.filter(item => item !== genre)
					);
				}, 1)
			}
		/>
	));
	const pickedGenresChips = pickedGenres.map(genre => (
		<Chip
			key={genre}
			label={genre}
			color='secondary'
			onDelete={() =>
				setTimeout(() => {
					setDefaultGenres(prevGenres => [...prevGenres, genre].sort());
					setPickedGenres(prevGenres =>
						prevGenres.filter(item => item !== genre)
					);
				}, 1)
			}
		/>
	));

	return (
		<Grid style={{ textAlign: 'center', margin: '2%' }}>
			{pickedGenresChips}
			{defaultGenresChips}
		</Grid>
	);
}
export default MainPageGenres;
