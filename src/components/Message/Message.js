import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../../store/timelineSlice";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	error: {
		backgroundColor: theme.palette.error.dark,
		color: theme.palette.getContrastText(theme.palette.error.dark),
	},
}));

function Message() {
	const dispatch = useDispatch();
	const showMessage = useSelector((state) => state.timeline.showMessage);
	const message = useSelector((state) => state.timeline.message);
	const classes = useStyles();

	return (
		<Snackbar
			open={showMessage}
			onClose={() => dispatch(hideMessage())}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
			autoHideDuration={5000}
		>
			<SnackbarContent
				className={classes.error}
				message={
					<div className="flex items-center">
						<Typography className="mx-8">{message}</Typography>
					</div>
				}
				action={[
					<IconButton
						key="close"
                        color="inherit" 
						onClick={() => dispatch(hideMessage())}
					>
						<CancelIcon />
					</IconButton>,
				]}
			/>
		</Snackbar>
	);
}

export default React.memo(Message);
