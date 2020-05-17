import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import "./ResumeItem.scss";

export default function ResumeItem(props) {
	const {
		startDate,
		endDate,
		company,
		position,
		description,
		technologies,
		activities,
	} = props;

	return (
		<div className="resume-item">
			<Typography className="gutterBottomSmall">
				<b>{company}</b>
				<span style={{ margin: "0 0.5rem" }}>—</span>
				{position}
			</Typography>
			<Typography variant="body2" color="textSecondary" gutterBottom>
				{startDate} — {endDate ? endDate : "present"}
			</Typography>
			<Typography gutterBottom>{description}</Typography>
			{technologies && (
				<React.Fragment>
					<Typography className="gutterBottomSmall tech-heading">
						<b>Technologies used: </b>
					</Typography>
					{technologies.map((item, key) => {
						return (
							<Chip
								key={key}
								label={item}
								className="tech-chip"
								color={key % 2 === 0 ? "primary" : "secondary"}
							/>
						);
					})}
				</React.Fragment>
			)}
			{activities && (
				<React.Fragment>
					<Typography className="gutterBottomSmall">
						<b>Activities and Societies:</b>
					</Typography>
					<Typography>{activities}</Typography>
				</React.Fragment>
			)}
		</div>
	);
}
