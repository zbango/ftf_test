import reducer, { hideMessage, showMessage } from "./timelineSlice";

const initialSate = {
	isLoading: false,
	data: [],
	value: 0,
	showMessage: false,
	message: "",
};
test("should return the initial state", () => {
	expect(reducer(undefined, {})).toEqual(initialSate);
});

test("should handle showMessage true", () => {
	expect(reducer(initialSate, showMessage({ message: "Hi" }))).toEqual({
		isLoading: false,
		data: [],
		value: 0,
		showMessage: true,
		message: "Hi",
	});
});

test("should handle hideMessage true", () => {
	expect(reducer(initialSate, hideMessage())).toEqual({
		isLoading: false,
		data: [],
		value: 0,
		showMessage: false,
		message: "",
	});
});
