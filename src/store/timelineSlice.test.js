import reducer, { hideMessage, showMessage } from "./timelineSlice";

test("should return the initial state", () => {
	expect(reducer(undefined, {})).toEqual({
		isLoading: false,
		data: [],
		value: 0,
		showMessage: false,
		message: "",
	});
});

test("should handle showMessage true", () => {
	const previousState = {
		isLoading: false,
		data: [],
		value: 0,
		showMessage: false,
		message: "",
	};
	expect(reducer(previousState, showMessage({ message: "Hi" }))).toEqual({
		isLoading: false,
		data: [],
		value: 0,
		showMessage: true,
		message: "Hi",
	});
});

test("should handle hideMessage true", () => {
	const previousState = {
		isLoading: false,
		data: [],
		value: 0,
		showMessage: false,
		message: "",
	};
	expect(reducer(previousState, hideMessage())).toEqual({
		isLoading: false,
		data: [],
		value: 0,
		showMessage: false,
		message: "",
	});
});
