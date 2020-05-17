import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

export default function Title(props) {
	const title = props.title;
	const ctaText = props.ctaText;
	const ctaIcon = props.ctaIcon;
	const ctaHref = props.ctaHref;
	return (
		<Box className="Title" mt={4} mb={3}>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Typography variant="h2" component="h1" gutterBottom>
					{title}
				</Typography>
				{ctaText && (
					<Button
						variant="contained"
						color="primary"
						href={ctaHref}
						startIcon={ctaIcon}
						className="hide-sm"
					>
						{ctaText}
					</Button>
				)}
			</Box>
			<Divider mb={4} />
		</Box>
	);
}
