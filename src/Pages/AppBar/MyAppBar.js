import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import HomeButton from './HomeButton';
import MyDialog from './LogInDialog';
import {
	AppBar,
	Grid,
	Toolbar,
	Button,
	IconButton,
	Badge,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

function MyAppBar() {
	const { dialogOpener, isLoggedIn, setIsLoggedIn, cartItems, setLoggedInAs } =
		useContext(Context);

	const logout = () => {
		setIsLoggedIn(false);
		setLoggedInAs('');
	};

	return (
		<AppBar position='fixed' elevation={0}>
			<Toolbar>
				{!isLoggedIn ? (
					<Grid>
						<HomeButton />
					</Grid>
				) : (
					<Grid>
						<HomeButton />
						<Button component={Link} to='/YourUploads'>
							Your Uploads
						</Button>
					</Grid>
				)}

				<Grid style={{ flexGrow: '1' }} />
				<Grid>
					{isLoggedIn ? (
						<Button onClick={logout} component={Link} to={'/MainPage'}>
							LogOut
						</Button>
					) : (
						<Button onClick={dialogOpener}>LogIn</Button>
					)}
					<MyDialog />
					<IconButton component={Link} to={'/CartPage'}>
						<Badge badgeContent={cartItems.length} color='secondary'>
							<ShoppingCart style={{ color: 'lightgrey' }} />
						</Badge>
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default MyAppBar;
