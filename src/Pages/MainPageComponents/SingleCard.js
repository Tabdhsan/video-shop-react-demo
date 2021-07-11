import React, { useContext } from 'react';
import { Context } from '../../Context';
import {
	Card,
	CardContent,
	Typography,
	CardActions,
	IconButton,
	Grid,
	Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AddShoppingCart } from '@material-ui/icons';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

function SingleCard({ children }) {
	const { setMovies, setCartItems, loggedInAs, movies } = useContext(Context);

	const deleteIconClicker = () => {
		if (children.uploader !== loggedInAs) {
			setMovies(prevMovies => [...prevMovies, children]);
			setCartItems(prevItems =>
				prevItems.filter(card => card.id !== children.id)
			);
		} else {
			setMovies(movies.filter(movie => movie.id !== children.id));
		}
	};

	const useStyles = makeStyles({
		cardStyle: {
			backgroundColor: 'lightblue',
			margin: '10px',
			textAlign: 'center',
			paddingTop: '10px',
		},
		cardActionStyle: { padding: '0', justifyContent: 'center' },
	});

	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={3}>
			<Card key={children.id} id={children.title} className={classes.cardStyle}>

					<Paper variant="outlined" component={Link} to={`/movies/${children.id}`}>
						<img
							src={`${children.posterUrl}`}
							alt={`${children.title} poster`}
							width='200'
							height='300'
						/>
					</Paper>

				<CardContent>
					<Typography
						component={Link}
						to={`/movies/${children.id}`}
						variant='body2'
					>
						{children.title}
					</Typography>
					<Typography variant='body2'>{`$${children.price}`} </Typography>
				</CardContent>
				<CardActions className={classes.cardActionStyle}>
					{movies.some(movie => children.title === movie.title) &&
					children.uploader !== loggedInAs ? (
						<IconButton
							onClick={() =>
								setCartItems(
									prevItems => [...prevItems, children],
									setMovies(prevMovies =>
										prevMovies.filter(film => film.title !== children.title)
									)
								)
							}
						>
							<AddShoppingCart />
						</IconButton>
					) : (
						<IconButton onClick={deleteIconClicker}>
							<DeleteRoundedIcon />
						</IconButton>
					)}
				</CardActions>
			</Card>
		</Grid>
	);
}
export default SingleCard;
