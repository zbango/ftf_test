import {
	SET_DATA,
	SET_IS_LOADING,
	SET_MESSAGE,
	SHOW_MESSAGE,
} from "./actionType";

export const initialState = {
	isLoading: false,
	data: [],
	showMessage: false,
	message: "",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: action.payload,
			};
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case SHOW_MESSAGE:
			return {
				...state,
				showMessage: action.payload,
			};
		case SET_MESSAGE:
			return {
				...state,
				message: action.payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
