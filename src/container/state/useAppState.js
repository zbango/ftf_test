import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommits, hideMessage, selectMessage, selectShowMessage, selectIsLoading, selectData } from "../../store/timelineSlice";
import { useForm } from "react-hook-form";

export const useAppState = (props) => {
	const dispatch = useDispatch();

	const data = useSelector(selectData);
	const isLoading = useSelector(selectIsLoading);
	const showMessage = useSelector(selectShowMessage);
	const message = useSelector(selectMessage);
	const [filter, setFilter] = useState({
		repo: "ftf_test",
		owner: "zbango",
	});

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		mode: "onChange",
	});

	useEffect(() => {
		dispatch(
			getCommits({
				owner: "zbango",
				repo: "ftf_test",
			})
		);
	}, [dispatch]);

	const onHideMessage = () => {
		dispatch(hideMessage());
	};

	const onSubmit = (data) => {
		setFilter(data);
		dispatch(getCommits(data));
	};

	return {
		state: {
			isLoading,
			data,
			showMessage,
			message,
			filter,
		},

		form: {
			register,
			errors,
			handleSubmit,
		},
		handler: {
			onHideMessage,
			onSubmit,
		},
	};
};
