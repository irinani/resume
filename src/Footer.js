import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import EmailIcon from "@material-ui/icons/Email";

import menuItems from "./utils/menuItems";
import { links } from "./utils/irinaInfo";

import "./Footer.scss";

export default function Footer() {
	return (
		<Box
			component="footer"
			position="absolute"
			bottom={0}
			width="100%"
			color="white"
			bgcolor="#333333"
			py={1}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<Box component="ul" className="list-unstyled">
							{links.map((item, key) => {
								return (
									<li key={key}>
										<Button
											color="inherit"
											className="link-hover"
											startIcon={item.icon}
											href={item.href}
										>
											{item.text}
										</Button>
									</li>
								);
							})}
							<li>
								<Button
									color="inherit"
									className="link-hover"
									startIcon={<EmailIcon />}
									href="mailto:moi@irinanissi.fi"
								>
									moi@irinanissi.fi
								</Button>
							</li>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box
							component="ul"
							className="list-unstyled"
							textAlign={{ xs: "left", sm: "right" }}
						>
							{menuItems.map((item, key) => {
								return (
									<li key={key}>
										<NavLink
											to={item.link}
											className="link-hover"
											style={{
												display: "inline-flex",
												alignItems: "center",
												color: "white",
											}}
										>
											{item.text}
											<NavigateNextIcon fontSize="inherit" />
										</NavLink>
									</li>
								);
							})}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
