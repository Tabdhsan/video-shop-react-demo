import React, { useState, useContext } from 'react';
import { Context } from '../../Context';
import { TextField, Button, Typography, Dialog } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

function UploadDialog() {
	const {
		uploadDialog,
		setUploadDialog,
		movies,
		setMovies,
		loggedInAs,
		genres,
	} = useContext(Context);
	const [userVidName, setUserVidName] = useState('');
	const [userVidPrice, setUserVidPrice] = useState('');
	const [userVidGenre, setUserVidGenre] = useState();
	const [userVidPlot, setUserVidPlot] = useState();
	const [userVidRuntime, setUserVidRuntime] = useState();

	const movieDuplicationCheck = movies.some(
		movie => movie.title === userVidName
	);

	const addToAllMovies = () => {
		setMovies(prevMovies => [
			...prevMovies,
			{
				id: parseInt(prevMovies[prevMovies.length - 1].id) + 1,
				title: userVidName,
				genres: [userVidGenre],
				posterUrl: 'https://i.imgur.com/eh0X0Rn.jpg',
				price: userVidPrice,
				uploader: loggedInAs,
				plot: userVidPlot,
				runtime: userVidRuntime,
			},
		]);
		setUserVidGenre('');
		setUserVidName('');
		setUserVidPrice('');
		setUserVidPlot('');
		setUserVidRuntime('');
		setUploadDialog(false);
	};

	return (
		<Dialog open={uploadDialog}>
			<Typography variant='h5' align='center' >
				Upload a vid
			</Typography>
			<TextField
				id='Vid Name'
				label='Vid Name'
				onChange={e => setUserVidName(e.target.value)}
				
			/>
			<TextField
				label='Vid Price'
				onChange={e => setUserVidPrice(e.target.value)}
				
			/>

			<TextField
				label='Runtime (min)'
				onChange={e => setUserVidRuntime(e.target.value)}
				
			/>

			<TextField
				placeholder='Enter Plot Here'
				multiline
				rows={2}
				rowsMax={4}
				onChange={e => setUserVidPlot(e.target.value)}
				
			/>

			<Autocomplete
				multiple
				options={genres}
				getOptionLabel={option => option}
				filterSelectedOptions
				onChange={(e, value) => setUserVidGenre(value)}
				renderInput={params => (
					<TextField {...params} label='Genres' />
				)}
				
			/>
			<Button
				disabled={
					movieDuplicationCheck ||
					userVidName === '' ||
					userVidGenre === '' ||
					userVidPrice === '' ||
					isNaN(parseInt(userVidPrice)) ||
					isNaN(parseInt(userVidRuntime)) ||
					userVidPlot === ''
				}
				onClick={addToAllMovies}
			>
				Add Video
			</Button>
			<Button onClick={() => setUploadDialog(false)}>Close</Button>
		</Dialog>
	);
}
export default UploadDialog;
