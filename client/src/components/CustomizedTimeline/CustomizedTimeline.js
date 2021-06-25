import React from "react";
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
import Alert from "@material-ui/lab/Alert";
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
	commited: {
		display: "flex",
		alignItems: "center",
		marginTop: "6px",
	},
}));

function CustomizedTimeline(props) {
	const classes = useStyles();
	const { data, isLoading, filter } = props;

	return (
		<React.Fragment>
			<Container fixed>
				<RepoInformation filter={filter} />
				{isLoading ? (
					<LinearProgress />
				) : data.length > 0 ? (
					<Timeline>
						{data.map((record, i) => (
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
									{record.commits.map((commit, i) => (
										<Paper
											key={`paper${i}`}
											elevation={3}
											className={classes.paper}
										>
											<Typography variant="h5">
												{commit.message}
											</Typography>
											<div className={classes.commited}>
												<Typography variant="caption">
													{`Commited by ${commit.author}`}
												</Typography>
												<Avatar
													className={classes.avatar}
													alt="author avatar"
													src={commit.avatar_url}
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
