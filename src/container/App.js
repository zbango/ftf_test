import React from "react";
import CustomizedTimeline from "../components/CustomizedTimeline/CustomizedTimeline";
import Message from "../components/Message/Message";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import { useAppState } from "./state/useAppState";

function App() {
	 const {state, handler, form} = useAppState();

	return (
		<React.Fragment>
			<Header />
			<Search
				isLoading={state.isLoading}
				form={form}
				onSubmit={handler.onSubmit}
			/>
			<CustomizedTimeline
				data={state.data}
				isLoading={state.isLoading}
				filter={state.filter}
			/>
			<Message
				onHideMessage={handler.onHideMessage}
				showMessage={state.showMessage}
				message={state.message}
			/>
		</React.Fragment>
	);
}

export default App;
