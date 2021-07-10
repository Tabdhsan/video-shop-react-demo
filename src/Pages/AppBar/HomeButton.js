import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Context } from '../../Context';

function HomeButton() {
	const { movies } = useContext(Context);
	return (
		<Button
			component={Link}
			to='/MainPage'
			onClick={() =>
				movies.sort(function (a, b) {
					return a.id - b.id;
				})
			}
		>
			Home
		</Button>
	);
}
export default HomeButton;
