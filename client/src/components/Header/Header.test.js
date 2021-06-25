import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Header from "./Header";
import { AppBar, Toolbar } from "@material-ui/core";

configure({ adapter: new Adapter() });

describe("Header component", () => {
	it("should render Header component", () => {
		const header = shallow(<Header />);

		expect(header.find(AppBar).length).toEqual(1);
        expect(header.find(Toolbar).length).toEqual(1);
	});
});
