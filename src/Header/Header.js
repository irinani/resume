import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

import "./Navigation.scss";

export default function Header() {
	return (
		<Box
			component="header"
			position="fixed"
			color="secondary.main"
			bgcolor="white"
			width="100%"
			zIndex="2"
			borderBottom={3}
			py={{ xs: 2, md: 1 }}
		>
			<Container
				maxWidth="lg"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<NavLink to="/" style={{ color: "#c63f3e" }}>
					<Typography>
						<b>irinanissi.fi</b>
					</Typography>
				</NavLink>
				<Navigation />
				<NavigationMobile />
			</Container>
		</Box>
	);
}
