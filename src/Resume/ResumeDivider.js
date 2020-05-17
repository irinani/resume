import React from "react";
import Divider from "@material-ui/core/Divider";

export default function ResumeDivider(props) {
	const hideLg = props.hideLg;
	return <Divider className={hideLg ? 'hide-lg' : ''} style={{ margin: "1rem 0", backgroundColor: '#037e63' }} />;
}
