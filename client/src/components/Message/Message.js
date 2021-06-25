import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	error: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.getContrastText(theme.palette.error.dark),
	},
}));

function Message(props) {
	const classes = useStyles();
	const { showMessage, message } = props;

	return (
		<Snackbar
			open={showMessage}
			onClose={props.onHideMessage}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
			autoHideDuration={3000}
		>
			<SnackbarContent
				className={classes.error}
				message={
					<div>
						<Typography>{message}</Typography>
					</div>
				}
				action={[
					<IconButton
						key="close"
						color="inherit"
						onClick={props.onHideMessage}
					>
						<CancelIcon />
					</IconButton>,
				]}
			/>
		</Snackbar>
	);
}

export default React.memo(Message);
