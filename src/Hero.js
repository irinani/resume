import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./Hero.scss";
import img from "./img/hero.jpg";

export default function Hero(props) {
	const title = props.title;
	const text = props.text;
	return (
		<Box
			className="Hero"
			position="relative"
			display="flex"
			alignItems="center"
			mb={4}
			style={{ backgroundImage: `url(${img})` }}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} justify="flex-end">
					<Grid item xs={12} md={7} style={{ zIndex: "1" }}>
						<div className="Hero__text">
							<Typography variant="h1" component="h1" gutterBottom>
								{title}
							</Typography>
							{text.map((text, key) => (
								<Typography key={key} variant="h5" component="p" gutterBottom>
									{text}
								</Typography>
							))}
						</div>
						{/* <Button
							variant="outlined"
							color="secondary"
							href="/about-me"
							endIcon={<NavigateNextIcon />}
						>
							More about me
						</Button> */}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
