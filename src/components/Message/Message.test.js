import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";
import Message from "./Message";
import { AppBar, Toolbar } from "@material-ui/core";
import {Provider} from "react-redux";
import store from "../../store/index";

configure({ adapter: new Adapter() });

describe("Message component", () => {
	it("should render Message component", () => {
		const message = mount(
            <Provider store={store}>
                <Message/>
            </Provider>
        );

		expect(message.find(AppBar).length).toEqual(1);
        expect(message.find(Toolbar).length).toEqual(1);
	});
});
