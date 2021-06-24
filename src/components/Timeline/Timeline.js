import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import Avatar from "@material-ui/core/Avatar";
import Search from "../Search/Search";
import Alert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import RepoInformation from "../RepoInformation/RepoInformation";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: "6px 16px",
		marginTop: 20,
		"&:hover": {
			background: "#F6F8FA",
		},
	},
	content: {
		flex: 200,
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		marginLeft: "8px",
	},
	margin: {
		margin: theme.spacing(1),
	},
	alert: {
		marginTop: "10px",
	},
}));

function CustomizedTimeline(props) {
	const classes = useStyles();
	const data = [...props.data];
	const isLoading = useSelector((state) => state.timeline.isLoading);
	const [filter, setFilter] = useState({
		repo: "ftf_test",
		owner: "zbango",
	});

	const commits = data.reduce((commits, game) => {
		const date = game.commit.author.date.split("T")[0];
		if (!commits[date]) {
			commits[date] = [];
		}
		commits[date].push(game);
		return commits;
	}, {});

	const groupArrays = Object.keys(commits).map((date) => {
		return {
			date,
			commits: commits[date],
		};
	});

	return (
		<React.Fragment>
			<Search setFilter={setFilter} />
			<Container fixed>
				<RepoInformation filter={filter} />
				{isLoading ? (
					<LinearProgress />
				) : groupArrays.length > 0 ? (
					<Timeline>
						{groupArrays.map((record, i) => (
							<TimelineItem key={`item${i}`}>
								<TimelineSeparator>
									<TimelineDot>
										<CodeIcon />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>

								<TimelineContent className={classes.content}>
									<Typography variant="h6">
										{`Commits on ${record.date}`}
									</Typography>
									{record.commits.map((data, i) => (
										<Paper
											key={`paper${i}`}
											elevation={3}
											className={classes.paper}
										>
											<Typography variant="h5">
												{data.commit.message}
											</Typography>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													marginTop: "6px",
												}}
											>
												<Typography variant="caption">
													{`Commited by ${data.author.login}`}
												</Typography>
												<Avatar
													className={classes.avatar}
													alt="author avatar"
													src={data.author.avatar_url}
												/>
											</div>
										</Paper>
									))}
								</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				) : (
					<Alert severity="warning" className={classes.alert}>
						No records found.
					</Alert>
				)}
			</Container>
		</React.Fragment>
	);
}

export default CustomizedTimeline;
