import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({});

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
