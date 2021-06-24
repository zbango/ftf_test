import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { get } from "lodash";

const initialState = {
	isLoading: false,
	data: [],
	value: 0,
	showMessage: false,
	message: ""
};

export const getCommits = createAsyncThunk(
	"timeline/getCommits",
	async (data, { dispatch }) => {
		try {
			const response = await axios.get(
				`https://api.github.com/repos/${data.owner}/${data.repo}/commits`
			);
			return response.data;
		} catch (err) {
			dispatch(
				showMessage({
					message: get(err, "msg", "Can not fetch data. Please try again."),
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
			state.message = action.payload.message
		},
		hideMessage: (state, action) => {
			state.showMessage = false;
			state.message = ""
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

export default timelineSlice.reducer;
