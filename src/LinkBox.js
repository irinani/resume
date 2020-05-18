import React from "react";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import "./LinkBox.scss";

export default function LinkBox(props) {
	const title = props.title;
	const link = props.link;
	const Icon = props.icon;

	return (
		<React.Fragment>
			{link && (
				<NavLink to={link} className="LinkBox" style={{ color: "#333333" }}>
					<Box
						p={3}
						bgcolor="grey.300"
						textAlign="center"
						className="LinkBox__content"
						display="flex"
						flexDirection="column"
						justifyContent="center"
					>
						{Icon && (
							<Box component="span" mx="auto" mb={1} fontSize="3rem">
								<Icon fontSize="inherit" />
							</Box>
						)}
						{title && (
							<Typography variant="h5" component="h2">
								{title}
							</Typography>
						)}
					</Box>
				</NavLink>
			)}
		</React.Fragment>
	);
}
