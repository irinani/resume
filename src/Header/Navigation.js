import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";

import menuItems from "../utils/menuItems";

export default function Navigation() {
	return (
		<Box
			component="nav"
			className="nav-desktop"
			display={{ xs: "none", md: "block" }}
		>
			<Box
				component="ul"
				display="flex"
				alignItems="center"
				style={{ listStyleType: "none" }}
			>
				{menuItems.map((item, key) => {
					return (
						<Box component="li" mr={3} key={key}>
							<NavLink key={key} to={item.link} exact activeClassName="current">
								{item.text}
							</NavLink>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
