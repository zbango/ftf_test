import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	owner: {
		color: "#0366d6",
		textDecoration: "none",
	},
	repo: {
		color: "#0366d6",
		fontWeight: "600",
		textDecoration: "none",
	},
	divider: {
		marginLeft: "4px",
		marginRight: "4px",
	},
}));

function RepoInformation(props) {
	const classes = useStyles();
	const { owner, repo } = props.filter;

	return (
		<div id="repoInformation">
			Displaying history for{" "}
			<span>
				<a
					id="owner"
					href={`https://github.com/${owner}`}
					target="_blank"
					rel="noreferrer"
					className={classes.owner}
				>
					{owner}
				</a>
			</span>
			<span className={classes.divider}>/</span>
			<span>
				<a
					id="repo"
					href={`https://github.com/${owner}/${repo}`}
					target="_blank"
					rel="noreferrer"
					className={classes.repo}
				>
					{repo}
				</a>
			</span>
		</div>
	);
}

export default RepoInformation;
