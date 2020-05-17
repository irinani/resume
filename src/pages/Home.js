import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

// Components
import Hero from "../Hero";
import LinkBox from "../LinkBox";

// Icons
import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import DescriptionIcon from "@material-ui/icons/Description";

const linkBoxes = [
	{
		title: "About me",
		url: "/about-me",
		icon: PersonIcon,
	},
	{
		title: "Projects",
		url: "/projects",
		icon: CodeIcon,
	},
	{
		title: "Full resume",
		url: "/resume",
		icon: DescriptionIcon,
	},
];

const heroText = [
	"Nice to meet you! My name is Irina and I'm a front-end developer based in Northern Finland.",
	"My strength is in web development but I'm eager to learn more about other stuff as well!",
];

export default function Home() {
	return (
		<div className="Home" style={{ marginBottom: "-2rem" }}>
			<Hero title="Hello there!" text={heroText} />
			<Container maxWidth="md">
				<Grid container spacing={3}>
					{linkBoxes.map((box, key) => {
						return (
							<Grid item xs={12} sm={4} key={key}>
								<LinkBox title={box.title} icon={box.icon} link={box.url} />
							</Grid>
						);
					})}
				</Grid>
			</Container>

			<Box
				bgcolor="secondary.main"
				pt={4}
				pb={3}
				mt={4}
				color="white"
				textAlign="center"
			>
				<Container maxWidth="md">
					<Typography variant="h2" component="h2" gutterBottom>
						Want to contact me?
					</Typography>
					<Typography gutterBottom>
						If you have any tips or comments about this website, feel free to
						share them with me!
					</Typography>
					<Typography gutterBottom>
						I'm always open for new challenges so let me know if you think I
						would be a good fit for your team.
					</Typography>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="flex-start"
						flexWrap="wrap"
						mt={5}
					>
						<Button
							variant="outlined"
							color="inherit"
							href="https://www.linkedin.com/in/irinanissi/"
							style={{ marginRight: "1rem", marginBottom: "1rem" }}
						>
							LinkedIn
						</Button>
						<Button
							variant="outlined"
							color="inherit"
							href="mailto:moi@irinanissi.fi"
						>
							Send me an email
						</Button>
					</Box>
				</Container>
			</Box>
		</div>
	);
}
