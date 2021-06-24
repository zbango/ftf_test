import expect from "expect";
import rootReducer from "./reducer";
import {
	SET_DATA,
	SET_IS_LOADING,
	SET_MESSAGE,
	SHOW_MESSAGE,
} from "./actionType";

describe("store reducer", () => {
	let mock_initial_state;

	beforeEach(() => {
		mock_initial_state = {
			isLoading: false,
			data: [],
			showMessage: false,
			message: "",
		};
	});

	it("should return the initial state", () => {
		expect(rootReducer(undefined, { type: "" })).toEqual(
			mock_initial_state
		);
	});

	it("should return SET_DATA", () => {
		const action = {
			type: SET_DATA,
			payload: [],
		};
		expect(rootReducer(mock_initial_state, action)).toEqual({
			...mock_initial_state,
			data: [],
		});
	});

	it("should return SET_IS_LOADING", () => {
		const action = {
			type: SET_IS_LOADING,
			payload: true,
		};
		expect(rootReducer(mock_initial_state, action)).toEqual({
			...mock_initial_state,
			isLoading: true,
		});
	});

	it("should return SET_MESSAGE", () => {
		const action = {
			type: SET_MESSAGE,
			payload: "message",
		};
		expect(rootReducer(mock_initial_state, action)).toEqual({
			...mock_initial_state,
			message: "message",
		});
	});

	it("should return SHOW_MESSAGE", () => {
		const action = {
			type: SHOW_MESSAGE,
			payload: false,
		};
		expect(rootReducer(mock_initial_state, action)).toEqual({
			...mock_initial_state,
			showMessage: false,
		});
	});
});
