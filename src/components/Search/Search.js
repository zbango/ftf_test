import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BookIcon from "@material-ui/icons/Book";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: "6px 16px",
		marginTop: 20,
		"&:hover": {
			background: "#F6F8FA",
		},
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
	info: {
		background: "#FAFBFC",
		padding: 26,
		marginTop: "50px",
		width: "100%",
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		marginLeft: "8px",
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

function Search(props) {
	const classes = useStyles();

	const {
		isLoading,
		form: { register, errors, handleSubmit },
	} = props;

	return (
		<>
			<form
				id="search-form"
				noValidate
				onSubmit={handleSubmit(props.onSubmit)}
				className={classes.info}
			>
				<Grid container alignItems="center">
					<Grid item>
						<TextField
							autoComplete="off"
							className={classes.margin}
							label="Owner"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
							}}
							required
							id="owner"
							{...register("owner", {
								required: "Required field",
							})}
							helperText={
								errors.owner ? errors.owner.message : ""
							}
							error={!!errors.owner}
						/>
						<TextField
							autoComplete="off"
							className={classes.margin}
							label="Repository"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<BookIcon />
									</InputAdornment>
								),
							}}
							required
							id="repo"
							{...register("repo", {
								required: "Required field",
							})}
							helperText={errors.repo ? errors.repo.message : ""}
							error={!!errors.repo}
						/>
					</Grid>

					<Grid item>
						<Button
							color="primary"
							variant="contained"
							startIcon={<SearchIcon />}
							type="submit"
							form="search-form"
							size="medium"
							disabled={isLoading}
						>
							Search
							{isLoading && (
								<Box ml={1} display="flex" alignItems="center">
									<CircularProgress
										color="inherit"
										size={20}
									/>
								</Box>
							)}
						</Button>
					</Grid>
				</Grid>
			</form>
		</>
	);
}

export default Search;
