import React from "react";
import CustomizedTimeline from "../components/CustomizedTimeline/CustomizedTimeline";
import Message from "../components/Message/Message";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import { useAppState } from "./state/useAppState";
import { getCommits, showMessage } from "../store/actionCreator";
import { connect } from "react-redux";

function App(props) {
	const { state, handler, form } = useAppState(props);

 	return (
		<React.Fragment>
			<Header />
			<Search
				isLoading={props.isLoading}
				form={form}
				onSubmit={handler.onSubmit}
			/>
			<CustomizedTimeline
				data={props.data}
				isLoading={props.isLoading}
				filter={state.filter}
			/>
			<Message
				onHideMessage={handler.onHideMessage}
				showMessage={props.showMessage}
				message={props.message}
			/>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	isLoading: state.isLoading,
	data: state.data,
	showMessage: state.showMessage,
	message: state.message,
});

export const mapDispatchToProps = (dispatch) => ({
	getCommits: (payload) => dispatch(getCommits(payload)),
	handleShowMessage: (payload) => dispatch(showMessage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
