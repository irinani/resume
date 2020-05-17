import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import projects from "../utils/projects";

export default function Projects() {
	return (
		<Container maxWidth="lg">
			<Title
				title="Projects"
				ctaText="Github"
				ctaIcon={<GitHubIcon />}
				ctaHref="https://github.com/irinani"
			/>
			<Grid container spacing={4}>
				{projects.map((project, key) => {
					return (
						<Grid item xs={12} sm={6}>
							<ProjectCard
								key={key}
								name={project.name}
								description={project.description}
								github={project.github}
								demo={project.demo}
								image={project.image}
								technologies={project.technologies}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}
