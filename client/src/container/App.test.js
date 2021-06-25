import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../store";
import App, { mapDispatchToProps } from "./App";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Message from "../components/Message/Message";
import CustomizedTimeline from "../components/CustomizedTimeline/CustomizedTimeline";

configure({ adapter: new Adapter() });

describe("App Container", () => {
	let wrapper;
	let props;
	let mock_initial_state;

	beforeEach(() => {
		props = {
			isLoading: false,
			data: [],
			showMessage: false,
			message: "",
			getCommits: jest.fn(),
			handleShowMessage: jest.fn(),
		};
		mock_initial_state = {
			isLoading: false,
			data: [],
			showMessage: false,
			message: "",
			getCommits: jest.fn(),
			handleShowMessage: jest.fn(),
		};
	});

	it("should render container", () => {
		wrapper = mount(
			<Provider store={store}>
				<App {...props} />
			</Provider>
		);
		expect(wrapper.find(Header).length).toEqual(1);
		expect(wrapper.find(Search).length).toEqual(1);
		expect(wrapper.find(CustomizedTimeline).length).toEqual(1);
		expect(wrapper.find(Message).length).toEqual(1);
	});

	it("should dispatch getCommits", () => {
		const dispatch = jest.fn();
		const props = mapDispatchToProps(dispatch);

		props.getCommits({
			owner: "owner",
			repo: "repo",
		});
		expect(dispatch).toHaveBeenCalled();
	});

	it("should dispatch handleShowMessage", () => {
		const dispatch = jest.fn();
		const props = mapDispatchToProps(dispatch);

		props.handleShowMessage(false);
		expect(dispatch).toHaveBeenCalled();
	});
});
