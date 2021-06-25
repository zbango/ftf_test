import axios from "axios";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import thunk from "redux-thunk";
import { getCommits } from "./actionCreator";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore();

describe("store action creator", () => {
	beforeEach(() => {
		store.clearActions();
	});

	it("should call get commits", () => {
		const dispatch = jest.fn();
		axios.get = jest.fn().mockResolvedValue({ data: { response: [] } });
		getCommits({ repo: "repo", owner: "owner" })(
			dispatch,
			dispatch,
			undefined
		);

		expect(axios.get).toHaveBeenCalled();
	});

	it("should call get commits and throw error", async () => {
		const dispatch = jest.fn();
		axios.get = jest.fn().mockRejectedValue(new Error("error"));
		getCommits({ repo: "repo", owner: "owner" })(
			dispatch,
			dispatch,
			undefined
		);

		expect(axios.get).toHaveBeenCalled();
	});
});
