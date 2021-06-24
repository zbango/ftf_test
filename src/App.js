import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import GitHubIcon from "@material-ui/icons/GitHub";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedTimeline from "./components/Timeline/Timeline";
import { useSelector, useDispatch } from "react-redux";
import { getCommits } from "./store/timelineSlice";
import Message from "./components/Message/Message";

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		background: "#24292E",
	},
}));

function App() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const data = useSelector((state) => state.timeline.data);

	useEffect(() => {
		dispatch(
			getCommits({
				owner: "zbango",
				repo: "ftf_test",
			})
		);
	}, [dispatch]);

	return (
		<React.Fragment>
			<AppBar>
				<Toolbar className={classes.toolbar}>
					<GitHubIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						FTF - Git commit history
					</Typography>
				</Toolbar>
			</AppBar>

			<CustomizedTimeline data={data} />

			<Message />
		</React.Fragment>
	);
}

export default App;
