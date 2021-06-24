import React, { useEffect } from "react";
import CustomizedTimeline from "./components/Timeline/Timeline";
import { useSelector, useDispatch } from "react-redux";
import { getCommits } from "./store/timelineSlice";
import Message from "./components/Message/Message";
import Header from "./components/Header/Header";

function App() {
	const dispatch = useDispatch();
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
			<Header />
			<CustomizedTimeline data={data} />
			<Message />
		</React.Fragment>
	);
}

export default App;
