import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { ContextProvider } from './Context';
import EnterPage from './Pages/EnterPage';
import MainPage from './Pages/MainPage';
import CartPage from './Pages/CartPage';
import MyAppBar from './Pages/AppBar/MyAppBar';
import YourUploads from './Pages/UploadPageComponents/YourUploads';
import MoviePage from './Pages/MoviePage';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme';

function App() {

	return (
		<ContextProvider>
			<ThemeProvider theme={theme}>
				<Grid container>
					<MyAppBar />
					<Switch>
						<Route exact path='/'>
							<EnterPage />
						</Route>
						<Route path='/MainPage'>
							<MainPage />
						</Route>
						<Route path='/CartPage'>
							<CartPage />
						</Route>
						<Route path='/YourUploads'>
							<YourUploads />
						</Route>
						<Route path='/movies/:movieID'>
							<MoviePage />
						</Route>
					</Switch>
				</Grid>
			</ThemeProvider>
		</ContextProvider>
	);
}

export default App;
