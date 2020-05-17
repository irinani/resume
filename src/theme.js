import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: { main: "#c63f3e" },
		secondary: { main: "#037e63" },
		text: {
			primary: "#333333",
		},
	},
	typography: {
		fontFamily: "Raleway, sans-serif",
		body1: {
			fontSize: "1.2rem",
		},
		body2: {
			fontSize: "1rem",
		},
		h2: {
			fontSize: "3rem",
		},
		h6: {
			fontWeight: "600",
		},
		button: {
			fontWeight: "600",
		},
	},
});
export default theme;
