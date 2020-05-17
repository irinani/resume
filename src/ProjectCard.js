import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

const useStyles = makeStyles({
	root: {
		maxWidth: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	media: {
		height: 200,
	},
	actions: {
		marginTop: "auto",
		padding: "0 16px 16px",
	},
});

export default function ProjectCard(props) {
	const classes = useStyles();
	const { name, description, demo, github, image, technologies } = props;
	return (
		<Card className={classes.root}>
			{image && (
				<CardMedia className={classes.media} image={image} title={name} />
			)}
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{name}
				</Typography>
				{/* {for (let i = 0; i < description.length; i++) {
					return description[i];
				}} */}
				{description && (
					<div style={{ marginBottom: "1rem" }}>
						{description.map((item, key) => {
							return (
								<Typography gutterBottom color="textSecondary" key={key}>
									{item}
								</Typography>
							);
						})}
					</div>
				)}
				{technologies && (
					<React.Fragment>
						{technologies.map((tech, key) => {
							return <Chip key={key} label={tech} className="tech-chip" />;
						})}
					</React.Fragment>
				)}
			</CardContent>
			<CardActions className={classes.actions}>
				{github && (
					<Button
						variant="contained"
						color="primary"
						href={github}
						startIcon={<GitHubIcon />}
					>
						Github
					</Button>
				)}
				{demo && (
					<Button
						variant="contained"
						color="secondary"
						href={demo}
						startIcon={<WebIcon />}
					>
						Demo
					</Button>
				)}
			</CardActions>
		</Card>
	);
}
