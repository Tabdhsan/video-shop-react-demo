import React, { useState, useContext } from 'react';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Context } from '../../Context';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
	Dialog,
	TextField,
	Button,
	Radio,
	RadioGroup,
	FormControlLabel,
	Grid,
} from '@material-ui/core';

function MyDialog() {
	const { dialogOpen, dialogCloser, setIsLoggedIn, setLoggedInAs } =
		useContext(Context);
	const [dialogPage, setDialogPage] = useState('Sign Up');
	const [usernameInput, setUsernameInput] = useState('');
	const [passInput, setPassInput] = useState('');
	const [users, setUsers] = useState([]);
	const [usernameError, setUsernameError] = useState(false);
	const [usernameErrorText, setUsernameErrorText] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [passwordErrorText, setPasswordErrorText] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const clearDialogErrors = () => {
		setUsernameError(false);
		setUsernameErrorText('');
		setPasswordError(false);
		setPasswordErrorText('');
	};
	const dialogPageChanger = e => {
		setDialogPage(e.target.value);
		clearDialogErrors();
	};

	const closeDialog = () => {
		dialogCloser();
		clearDialogErrors();
	};

	const handleSignUp = () => {
		setUsers(prevUsers => [
			...prevUsers,
			{ user: usernameInput, pass: passInput },
		]);
		clearDialogErrors();
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
		setLoggedInAs(usernameInput);
		closeDialog();
	};

	const errorHandler = () => {
		const userInput = { user: usernameInput, pass: passInput };
		const userExists = users.some(
			item => item.user.toLowerCase() === userInput.user.toLowerCase()
		);

		const userPassExists = users.some(
			item => item.user === userInput.user && item.pass === userInput.pass
		);

		const usernameRegex = /\W/g;
		const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/;
		if (dialogPage === 'Sign Up') {
			if (userExists) {
				setUsernameError(true);
				setUsernameErrorText('Username already exists');
			} else if (userInput.user.length < 4) {
				setUsernameError(true);
				setUsernameErrorText('Username must be at least 4 characters');
			} else if (usernameRegex.test(userInput.user)) {
				setUsernameError(true);
				setUsernameErrorText(
					'Username can only contain alphanumeric characters'
				);
			} else if (userInput.pass.length < 5) {
				clearDialogErrors();
				setPasswordError(true);
				setPasswordErrorText('Password must be at least 5 characters long');
			} else if (passRegex.test(userInput.pass) === false) {
				setPasswordError(true);
				setPasswordErrorText(
					'Password must contain a lowercase character, uppercase character, digit and a symbol'
				);
			} else {
				setUsernameError(false);
				handleSignUp();
			}
		} else if (userExists === false) {
			setUsernameError(true);
			setUsernameErrorText('Username does not exists');
		} else if (userPassExists === false) {
			clearDialogErrors();
			setPasswordError(true);
			setPasswordErrorText('Password is incorrect');
		} else {
			handleLogin();
		}
	};

	const handleSubmit = e => {
		e.target.value === 'Sign Up'
			? errorHandler('signup')
			: errorHandler('login');
	};

	return (
		<Dialog open={dialogOpen}>
			<RadioGroup
				row
				value={dialogPage}
				onChange={dialogPageChanger}
				style={{ margin: '5%', justifyContent: 'center' }}
			>
				<FormControlLabel
					label='Sign Up'
					value='Sign Up'
					labelPlacement='top'
					control={<Radio color='primary' />}
				/>
				<FormControlLabel
					value='Sign In'
					label='Sign In'
					control={<Radio color='primary' />}
					labelPlacement='top'
				/>
			</RadioGroup>
			<Grid container direction='column'>
				<Grid>
					<Grid>
						<TextField
							label='Username'
							onChange={e => setUsernameInput(e.target.value)}
							error={usernameError}
							helperText={usernameErrorText}
						/>
					</Grid>
					<TextField
						label='Password'
						onChange={e => setPassInput(e.target.value)}
						error={passwordError}
						helperText={passwordErrorText}
						type={showPassword ? 'text' : 'password'}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										edge='end'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Button type='submit' onClick={handleSubmit}>
					{dialogPage}
				</Button>
				<Button onClick={closeDialog}>Close</Button>
			</Grid>
		</Dialog>
	);
}

export default MyDialog;
