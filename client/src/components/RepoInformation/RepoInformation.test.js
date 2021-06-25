import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import RepoInformation from "./RepoInformation";
import { AppBar, Toolbar } from "@material-ui/core";

configure({ adapter: new Adapter() });

describe("RepoInformation component", () => {
	it("should render RepoInformation component", () => {
		const repoInformation = shallow(
			<RepoInformation filter={{ owner: "owner", repo: "repo" }} />
		);

		expect(
			repoInformation.find('[id="repoInformation"]').find("span").length
		).toEqual(3);

		expect(repoInformation.find('[id="owner"]').props().href).toEqual(
			"https://github.com/owner"
		);
		expect(repoInformation.find('[id="repo"]').props().href).toEqual(
			"https://github.com/owner/repo"
		);
	});
});
