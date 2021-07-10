import React, { useContext } from 'react';
import { Context } from '../../Context';
import UploadDialog from './UploadDialog';
import { Grid, Typography, Button } from '@material-ui/core';
import SingleCard from '../MainPageComponents/SingleCard';

function YourUploads() {
	const { uploadDialog, setUploadDialog, movies, loggedInAs } =
		useContext(Context);

	const tester = () => {
		setUploadDialog(!uploadDialog);
	};

	const yourUploadedVids = movies.map(
		movie =>
			movie.uploader === loggedInAs && (
				<SingleCard key={movie.title}>{movie}</SingleCard>
			)
	);

	return (
		<Grid container direction='row' style={{ textAlign: 'center' }}>
			<Grid item xs={12}>
				<Typography
					variant='h4'
					style={{ marginTop: '80px', marginBottom: '20px' }}
				>
					Your Uploads
				</Typography>
			</Grid>

			<Grid xs={12}>
				<Button onClick={tester}>Add a video</Button>
			</Grid>
			<UploadDialog />

			{yourUploadedVids}
		</Grid>
	);
}
export default YourUploads;
