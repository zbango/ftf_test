import axios from "axios";
import {
	SET_DATA,
	SET_IS_LOADING,
	SHOW_MESSAGE,
	SET_MESSAGE,
} from "./actionType";
import { get } from "lodash";

export const showMessage = (payload) => {
	return {
		type: SHOW_MESSAGE,
		payload,
	};
};

export const setIsLoading = (payload) => {
	return {
		type: SET_IS_LOADING,
		payload,
	};
};

export const setData = (payload) => {
	return {
		type: SET_DATA,
		payload,
	};
};

export const setMessage = (payload) => {
	return {
		type: SET_MESSAGE,
		payload,
	};
};

export const getCommits = (payload) => (dispatch) => {
	dispatch(showMessage(false));
	dispatch(setIsLoading(true));
	axios
		.get(
			`http://localhost:4000/api/v1/commits/${payload.owner}/${payload.repo}`
		)
		.then((response) => {
			dispatch(setData(response.data));
			dispatch(setIsLoading(false));
		})
		.catch((e) => {
			dispatch(setIsLoading(false));
			dispatch(showMessage(true));
			dispatch(
				setMessage(
					get(e, "msg", "Can not fetch data. Please try again.")
				)
			);
			dispatch(setData([]));
		});
};
