import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Title from "../Title";
import ResumeHeading from "../Resume/ResumeHeading";
import ResumeDivider from "../Resume/ResumeDivider";
import ResumeItem from "../Resume/ResumeItem";
import ResumeSkill from "../Resume/ResumeSkill";

import GetAppIcon from "@material-ui/icons/GetApp";

import { skills, contactInfo } from "../utils/irinaInfo";
import experience from "../utils/experience";
import education from "../utils/education";

import resume from "../assets/cv-nissinen-irina.pdf";

export default function Resume() {
	return (
		<Container maxWidth="lg">
			<Title
				title="Resume"
				ctaText="Download pdf"
				ctaIcon={<GetAppIcon />}
				ctaHref={resume}
			/>
			<Grid container spacing={4}>
				<Grid item xs={12} md={4} className="resume-col">
					<ResumeHeading heading="Contact" />
					<ul className="list-unstyled">
						{contactInfo.map((item, key) => {
							return (
								<li key={key}>
									<Button
										color="inherit"
										className="link-hover"
										href={item.href}
										startIcon={item.icon}
									>
										{item.text}
									</Button>
								</li>
							);
						})}
					</ul>
					<ResumeDivider />
					<ResumeHeading heading="Languages" />
					<Typography variant="body2" gutterBottom>
						Finnish - Native proficiency
					</Typography>
					<Typography variant="body2">
						English - Full professional proficiency
					</Typography>
					<ResumeDivider />
					<ResumeHeading heading="Skills" />
					<ul className="list-unstyled">
						{skills.map((skill, key) => {
							return (
								<li key={key}>
									<ResumeSkill skill={skill.skill} level={skill.level} />
								</li>
							);
						})}
					</ul>
					<ResumeDivider hideLg />
				</Grid>
				<Grid item xs={12} md={8} className="resume-col">
					<ResumeHeading heading="Work experience" />
					{experience.map((item, key) => {
						return (
							<ResumeItem
								key={key}
								startDate={item.startDate}
								endDate={item.endDate}
								company={item.company}
								position={item.position}
								description={item.description}
								technologies={item.technologies}
							/>
						);
					})}
					<ResumeDivider hideLg />
					<ResumeHeading heading="Education" />
					{education.map((item, key) => {
						return (
							<ResumeItem
								key={key}
								startDate={item.startDate}
								endDate={item.endDate}
								company={item.company}
								position={item.position}
								description={item.description}
								technologies={item.technologies}
								activities={item.activities}
							/>
						);
					})}
				</Grid>
			</Grid>
		</Container>
	);
}
