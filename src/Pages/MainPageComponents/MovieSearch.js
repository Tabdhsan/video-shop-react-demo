import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Context } from '../../Context';

function MovieSearch() {
	const { movies, searchText, setSearchText } = useContext(Context);

	return (
		<Grid container direction="column" style={{marginTop: "80px", alignItems: "center"}} >
			<Autocomplete 
				style={{width: "50%"}}
				id='MovieSearch'
				options={movies}
				getOptionLabel={option => option.title}
				onChange={(e, value) => setSearchText(value)}
				renderInput={params => (
					<TextField {...params} label='Movies' style={{textAlign: "center"}}/>
				)}
			/>
			<Button
				component={Link}
				to={`${
					searchText === '' || searchText === null
						? '/MainPage'
						: '/movies/' + searchText.id
				}`}
				onClick={() => setSearchText('')}
			>
				Search
			</Button>
		</Grid>
	);
}
export default MovieSearch;
