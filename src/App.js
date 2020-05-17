import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

// Components
import ScrollToTop from "./ScrollToTop";
import Header from "./Header/Header";
import Footer from "./Footer";

// Pages
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Resume from "./pages/Resume";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router basename="/demo">
				<ScrollToTop>
					<Header />
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/about-me" component={AboutMe} />
							<Route path="/projects" component={Projects} />
							<Route path="/resume" component={Resume} />
							<Route component={PageNotFound} />
						</Switch>
					</main>
					<Footer />
				</ScrollToTop>
			</Router>
		</ThemeProvider>
	);
}
