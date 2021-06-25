import React from "react";
import AppBar from "@material-ui/core/AppBar";
import GitHubIcon from "@material-ui/icons/GitHub";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		background: "#24292E",
	},
}));

function Header() {
	const classes = useStyles();

	return (
		<AppBar>
			<Toolbar className={classes.toolbar}>
				<GitHubIcon className={classes.icon} />
				<Typography variant="h6" color="inherit" noWrap>
					FTF - Git commit history
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
