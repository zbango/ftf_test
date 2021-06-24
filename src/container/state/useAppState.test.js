import React from "react";
import { configure, mount, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { useAppState } from "./useAppState";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe("useRulesIndexState", () => {
	let wrapper;
	let props;

	function mountComponent() {
		const App = (props) => {
			const useProps = useAppState(props);

			return <div {...useProps} />;
		};
		wrapper = mount(<App {...props} />);
	}

	beforeEach(() => {
		props = {
			isLoading: false,
			data: [],
			showMessage: false,
			message: "",
			getCommits: jest.fn(),
			handleShowMessage: jest.fn(),
		};
		mountComponent();
	});

	it("should have rootComponent", () => {
		expect(wrapper).toBeTruthy();
	});

	it("should handle onHideMessage", () => {
		const spyHandleShowMessage = jest.spyOn(props, "handleShowMessage");

		act(() => {
			wrapper.childAt(0).prop("handler").onHideMessage();
		});

		wrapper.update();
		expect(spyHandleShowMessage).toHaveBeenCalledWith(false);
	});

	it("should handle onSubmit", () => {
		const spyGetCommits = jest.spyOn(props, "getCommits");

		act(() => {
			wrapper.childAt(0).prop("handler").onSubmit();
		});

		wrapper.update();
		expect(spyGetCommits).toHaveBeenCalledWith({
			owner: "zbango",
			repo: "ftf_test",
		});
	});
});
