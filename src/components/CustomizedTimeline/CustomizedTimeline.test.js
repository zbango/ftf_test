import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import CustomizedTimeline from "./CustomizedTimeline";
import {  LinearProgress } from "@material-ui/core";
import {Alert, Timeline} from "@material-ui/lab";

configure({ adapter: new Adapter() });

describe("Timeline component", () => {
    it("should render LinearProgress on isLoading state", () => {
		const timeline = shallow(
			<CustomizedTimeline
				data={[]}
				isLoading={true}
				filter={{ repo: "repo", owner: "owner" }}
			/>
		);

		expect(timeline.find(LinearProgress).length).toEqual(1);
	});
	it("should render alert for empty data", () => {
		const timeline = shallow(
			<CustomizedTimeline
				data={[]}
				isLoading={false}
				filter={{ repo: "repo", owner: "owner" }}
			/>
		);

		expect(timeline.find(Alert).length).toEqual(1);
        expect(timeline.find(Alert).at(0).prop("severity")).toEqual("warning");

	});
    it("should render Timeline component", () => {
		const timeline = shallow(
			<CustomizedTimeline
				data={[{
                    date: "2020-01-01",
                    commits: [{
                        message:"message",
                        author: "author",
                        avatarUrl: ""
                    }]
                }]}
				isLoading={false}
				filter={{ repo: "repo", owner: "owner" }}
			/>
		);

		expect(timeline.find(Timeline).length).toEqual(1);
	});
});
