import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Title from "../Title";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const randomInfo = [
	"I like sled dog racing",
	"I love winter and snow",
	"I'm not a morning person",
	"As a kid, I played the flute in an orchestra",
	"I drink waaaay to much coffee",
	"I try to live an eco-friendly life",
];

const aboutMe = [
	"I'm a 26-year-old front-end developer based in the Oulu area. I live about 30 minutes away from the city center with my family.",
	"I have two kids: a 2-year-old and a 4-year-old. Someone once said that kids are just like tiny drunk adults and that is 100% correct.",
	"I also have two dogs and a cat. Our seven-year-old cat Kaapo spends his days sleeping and trying to eat plastic. I have no idea how he's still alive after everything he's put his intestines through.",
	"Our two dogs are a five-year-old samoyed called Masi and his newly welcomed sister, an alaskan malamute puppy named Nova. If you haven't heard alaskan malamute puppy noises, I highly recommend not listening to them. It's terrible, please protect your ears from it!",
	// "Our dogs are a 5-year-old samoyed Masi and an alaskan malamute puppy Nova. If you have not heard an alaskan malamute puppy noices, I highly recommend not listening to them. The sound is terrible. Please, protect your ears from it!",
	// "When I'm not hanging out with my children, binge watching Netflix or practising my coding skills, I'm outside with my dogs.",
];

const asDeveloper = [
	"As a developer, my main goal is to create a beautiful and functional product. Accessibility issues are close to my heart and I try to make sure everyone can enjoy using the products I make.",
	"So far in my web developer career I've mostly worked with websites and in my current workplace I've worked with HTML, CSS/SASS, Bootstrap and JQuery.",
	"In my spare time I've started to study JavaScript, React and React Native to keep up with modern technologies. MongoDB, GraphQL and Node are next on my list and I already have a project in mind where I could utilize them.",
	"I'm a team player. I enjoy working with other people and learning from them. I'm not afraid to ask for help when I'm stuck with my projects. Likewise, I enjoy helping others whenever I can.",
];

export default function AboutMe() {
	return (
		<div style={{ marginBottom: "-2rem" }}>
			<Container maxWidth="lg">
				<Title
					title="About me"
					ctaText="LinkedIn"
					ctaIcon={<LinkedInIcon />}
					ctaHref="https://www.linkedin.com/in/irinanissi/"
				/>
				<Grid container spacing={4}>
					<Grid item xs={12} md={8}>
						{aboutMe.map((text, key) => {
							return (
								<Typography gutterBottom key={key}>
									{text}
								</Typography>
							);
						})}

						{/* <Divider className="content-hr" /> */}
						{/* <Typography variant="h2" component="h2" gutterBottom>
						Me as a developer
						</Typography>
						{asDeveloper.map((text, key) => {
							return (
								<Typography gutterBottom key={key}>
								{text}
								</Typography>
								);
							})} */}
					</Grid>
					<Grid item xs={12} md={4}>
						<Box bgcolor="grey.300" p={3}>
							<Typography
								component="h3"
								gutterBottom
								style={{ fontWeight: "600" }}
							>
								Random info:
							</Typography>
							<Box component="ul" pl={1} m={0}>
								{randomInfo.map((info, key) => {
									return (
										<li key={key}>
											<Typography>{info}</Typography>
										</li>
									);
								})}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>

			<Box py={4} pb={3} bgcolor="secondary.main" color="white">
				<Container maxWidth="lg">
					<Grid container>
						<Grid item xs={12} md={8}>
							<Typography variant="h2" component="h2" gutterBottom>
								Me as a developer
							</Typography>
							{asDeveloper.map((text, key) => {
								return (
									<Typography gutterBottom key={key}>
										{text}
									</Typography>
								);
							})}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	);
}
