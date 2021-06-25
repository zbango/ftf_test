import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Search from "./Search";
import { Grid } from "@material-ui/core";

configure({ adapter: new Adapter() });

describe("Search component", () => {
	it("should render Search component", () => {
		const search = shallow(
			<Search
				setFilter={jest.fn()}
				isLoading={false}
				onSubmit={jest.fn()}
                form={{register: jest.fn(), errors:{}, handleSubmit:jest.fn()}}
			/>
		);

		expect(search.find(Grid).length).toEqual(3);
	});
});
