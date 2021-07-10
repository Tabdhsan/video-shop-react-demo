import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function MoviePage(props) {
	const { movieID } = useParams();
	const { movies } = useContext(Context);
	const movieInfo = movies.filter(movie => movie.id === parseInt(movieID))[0];

	const useStyles = makeStyles({
		typography: { margin: '10px' }
	});

	const classes = useStyles();

	return movieInfo !== undefined ? (
		<Grid container direction='column' style={{ textAlign: 'center' }}>
			<Typography
				variant='h4'
				style={{ marginTop: '80px', marginBottom: '20px' }}
			>
				{movieInfo.title}
			</Typography>
			<Grid>
				<img
					src={`${movieInfo.posterUrl}`}
					alt={`${movieInfo.title} poster`}
					width='250'
					height='300'
				/>
			</Grid>
			<Typography className={classes.typography}>
				Year: {movieInfo.year}
			</Typography>
			<Typography className={classes.typography}>
				Runtime: {`${movieInfo.runtime} min`}
			</Typography>
			<Typography className={classes.typography}>{movieInfo.plot}</Typography>
		</Grid>
	) : (
		<Typography>Loading...</Typography>
	);
}
export default MoviePage;
