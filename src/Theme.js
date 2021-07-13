import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({});

theme.props = {
	MuiButton: {
		color: 'inherit',
	},
	MuiTextField: {
		variant: 'outlined',
		style: { margin: '10%' },
	},
};

export default theme;
