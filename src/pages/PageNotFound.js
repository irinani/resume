import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Title from "../Title";

const href = window.location.href;
const host = window.location.host;
const hrefSplitted = href.split(`${host}/`)[1];
const name = hrefSplitted.charAt(0).toUpperCase() + hrefSplitted.slice(1);

export default function PageNotFound() {
	return (
		<Container maxWidth="lg">
			<Title title="Page not found" />
			<p>
				<img
					src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif"
					alt="Whoops, page not found"
				/>
			</p>
			<Typography class="gutterBottomLarge">
				The page {name} was not found.
			</Typography>
			<Button variant="contained" href="/" color="primary">
				Back to home page
			</Button>
		</Container>
	);
}
