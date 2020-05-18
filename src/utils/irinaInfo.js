import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
// import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";

const links = [
	{
		text: "LinkedIn",
		href: "https://www.linkedin.com/in/irinanissi/",
		icon: <LinkedInIcon />,
	},
	{
		text: "Github",
		href: "https://github.com/irinani",
		icon: <GitHubIcon />,
	},
	{
		text: "CodeSandbox",
		href: "https://codesandbox.io/u/irinani",
		icon: <CodeIcon />,
	},
];

const skills = [
	{
		skill: "HTML",
		level: 5,
	},
	{
		skill: "CSS",
		level: 5,
	},
	{
		skill: "jQuery",
		level: 4,
	},
	{
		skill: "SASS",
		level: 4,
	},
	{
		skill: "Bootstrap",
		level: 4,
	},
	{
		skill: "Accessibility",
		level: 4,
	},
	{
		skill: "React",
		level: 3.5,
	},
	{
		skill: "JavaScript",
		level: 3,
	},
	{
		skill: "Wordpress",
		level: 3,
	},
	{
		skill: "Material-UI",
		level: 2.5,
	},
	{
		skill: "React Native",
		level: 2,
	},
];

const contactInfo = [
	{
		text: "moi@irinanissi.fi",
		href: "mailto:moi@irinanissi.fi",
		icon: <EmailIcon />,
	},
	{
		text: "linkedin.com/in/irinanissi",
		href: "https://linkedin.com/in/irinanissi/",
		icon: <LinkedInIcon />,
	},
	{
		text: "github.com/irinani",
		href: "https://github.com/irinani",
		icon: <GitHubIcon />,
	},
	{
		text: "codesandbox.io/u/irinani",
		href: "https://codesandbox.io/u/irinani",
		icon: <CodeIcon />,
	},
	{
		text: "irinanissi.fi",
		href: "/",
		icon: <LaptopMacIcon />,
	},
];

export { links, skills, contactInfo };
