import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LinkMaterial from "@material-ui/core/Link";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from '@material-ui/core/Box';

import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { links } from "../utils/irinaInfo";
import menuItems from "../utils/menuItems";

const useStyles = makeStyles({
	list: {
		width: 500,
		maxWidth: "100vw",
	},
	fullList: {
		width: "auto",
	},
	button: {
		marginLeft: "auto",
		// color: "white",
		// border: "1px solid white",
	},
	drawerHeader: {
		display: "flex",
		justifyContent: "space-between",
		padding: "1rem 1rem 0",
	},
});

export default function NavigationMobile() {
	const classes = useStyles();
	const [menuIsOpen, setMenuIsOpen] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift" || event.key === "Enter")
		) {
			return;
		}

		setMenuIsOpen(open);
	};

	const list = () => (
		<div
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
			className={classes.list}
		>
			<List component="nav" aria-label="Main navigation" className="main-nav">
				{menuItems.map((item, key) => {
					return (
						<React.Fragment key={key}>
							<Link to={item.link}>
								<ListItem button tabIndex="-1">
									<ListItemText primary={item.text} />
								</ListItem>
							</Link>
							<Divider />
						</React.Fragment>
					);
				})}
			</List>
			<List>
				<ListItem>
					<ListItemText primary="You can find me at:" />
				</ListItem>
				{links.map((item, key) => {
					return (
						<React.Fragment key={key}>
							<LinkMaterial href={item.href} color="textPrimary">
								<ListItem button tabIndex="-1">
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText primary={item.text} />
								</ListItem>
							</LinkMaterial>
							<Divider />
						</React.Fragment>
					);
				})}
			</List>
		</div>
	);

	return (
		<Box component="nav" className="nav-mobile" display={{ xs: "block", md: "none" }}>
			<Button
				onClick={toggleDrawer(true)}
				className={classes.button}
				aria-label="Open menu"
				variant="outlined"
			>
				<MenuIcon />
			</Button>
			<Drawer anchor="right" open={menuIsOpen} onClose={toggleDrawer(false)}>
				<div className={classes.drawerHeader}>
					<Typography variant="h6" component="h2">
						Navigation
					</Typography>
					<Button
						onClick={toggleDrawer(false)}
						aria-label="Close menu"
						variant="outlined"
					>
						<CloseIcon />
					</Button>
				</div>
				{list()}
			</Drawer>
		</Box>
	);
}
