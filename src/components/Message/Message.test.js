import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import Message from "./Message";
import { Snackbar } from "@material-ui/core";

configure({ adapter: new Adapter() });

describe("Message component", () => {
	it("should render Message component", () => {
		const message = shallow(
			<Message
				onHideMessage={jest.fn()}
				showMessage={true}
				message={"message"}
			/>
		);

		expect(message.find(Snackbar).length).toEqual(1);
	});
});
