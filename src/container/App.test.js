import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import App from "./App";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import CustomizedTimeline from "../components/CustomizedTimeline/CustomizedTimeline";
import Message from "../components/Message/Message";

configure({ adapter: new Adapter() });

describe("App component", () => {
	it("should render App container", () => {
		const app = shallow(<App />);

		expect(app.find(Header).length).toEqual(1);
		expect(app.find(Search).length).toEqual(1);
		expect(app.find(CustomizedTimeline).length).toEqual(1);
		expect(app.find(Message).length).toEqual(1);
	});
});
