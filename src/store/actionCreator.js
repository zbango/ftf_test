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
			`https://api.github.com/repos/${payload.owner}/${payload.repo}/commits`
		)
		.then((response) => {
			const commits = response.data.reduce((commits, game) => {
				const date = game.commit.author.date.split("T")[0];
				if (!commits[date]) {
					commits[date] = [];
				}
				commits[date].push(game);
				return commits;
			}, {});

			const groupArrays = Object.keys(commits).map((date) => {
				return {
					date,
					commits: commits[date].map((c) => ({
						message: c.commit.message,
						author: c.author.login,
						avatarUrl: c.author.avatar_url,
					})),
				};
			});
			dispatch(setData(groupArrays));
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
