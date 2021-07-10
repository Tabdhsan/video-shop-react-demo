import React, { useState, useEffect } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [uploadDialog, setUploadDialog] = useState(false);
	const dialogCloser = () => setDialogOpen(false);
	const dialogOpener = () => setDialogOpen(true);
	const [cartItems, setCartItems] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [movies, setMovies] = useState([]);
	const [loggedInAs, setLoggedInAs] = useState('');
	const [genres, setGenres] = useState([]);
	const [defaultGenres, setDefaultGenres] = useState([]);
	const [pickedGenres, setPickedGenres] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		fetch('https://movie-demo-api.herokuapp.com/movies')
			.then(res => res.json())
			.then(data => setMovies(data));
		fetch('https://movie-demo-api.herokuapp.com/movies')
			.then(res => res.json())
			.then(data =>
				setGenres([
					...new Set(
						data
							.map(movie => movie.genres)
							.reduce((largeArr, eachArr) => largeArr.concat(eachArr), [])
					),
				])
			);
	}, []);

	return (
		<Context.Provider
			value={{
				dialogOpen,
				dialogOpener,
				dialogCloser,
				cartItems,
				setCartItems,
				isLoggedIn,
				setIsLoggedIn,
				uploadDialog,
				setUploadDialog,
				movies,
				setMovies,
				loggedInAs,
				setLoggedInAs,
				genres,
				setGenres,
				defaultGenres,
				setDefaultGenres,
				pickedGenres,
				setPickedGenres,
				searchText,
				setSearchText,
			}}
		>
			{props.children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
