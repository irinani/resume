import React from "react";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

export default function ResumeSkill(props) {
	const skill = props.skill;
	const level = props.level;

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
			}}
		>
			<Rating
				name={skill}
				value={level}
				readOnly
				precision={0.1}
				style={{ marginRight: "0.5rem" }}
			/>
			<Typography>
				<b>{skill}</b>
			</Typography>
		</div>
	);
}
