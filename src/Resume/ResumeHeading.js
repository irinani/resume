import React from "react";
import Typography from "@material-ui/core/Typography";

export default function ResumeHeading(props) {
	const heading = props.heading;
	return (
		<Typography
			variant="h6"
			component="h2"
			gutterBottom
			className="resume-heading"
			color="secondary"
		>
			{heading}
		</Typography>
	);
}
