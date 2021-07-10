import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';

function EnterPage() {
	return (
		<Grid
			container
			direction='column'
			className='verticalCenter'
			align='center'
			spacing={2}
		>
			<Grid item xs={12}>
				<Typography variant='h3'>Click Below to Enter</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant='body1'>
					Must be 13+ to create an account
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Button
					variant='outlined'
					item
					xs={12}
					component={Link}
					to={'/MainPage'}
				>
					Click Here
				</Button>
			</Grid>
		</Grid>
	);
}

export default EnterPage;
