import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { get } from "lodash";

const initialState = {
	isLoading: false,
	data: [],
	value: 0,
	showMessage: false,
	message: "",
};

export const getCommits = createAsyncThunk(
	"timeline/getCommits",
	async (data, { dispatch }) => {
		try {
			const response = await axios.get(
				`https://api.github.com/repos/${data.owner}/${data.repo}/commits`
			);

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

			return groupArrays;
		} catch (err) {
			dispatch(
				showMessage({
					message: get(
						err,
						"msg",
						"Can not fetch data. Please try again."
					),
				})
			);
			throw err;
		}
	}
);

export const timelineSlice = createSlice({
	name: "timeline",
	initialState,
	reducers: {
		showMessage: (state, action) => {
			state.showMessage = true;
			state.message = action.payload.message;
		},
		hideMessage: (state, action) => {
			state.showMessage = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCommits.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCommits.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(getCommits.rejected, (state) => {
				state.isLoading = false;
				state.data = [];
			});
	},
});

export const { hideMessage, showMessage } = timelineSlice.actions;

export const selectIsLoading = (state) => state.timeline.isLoading;
export const selectData = (state) => state.timeline.data;
export const selectMessage = (state) => state.timeline.message;
export const selectShowMessage = (state) => state.timeline.showMessage;

export default timelineSlice.reducer;
