import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useAppState = (props) => {
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
		props.getCommits({
			owner: "zbango",
			repo: "ftf_test",
		});
	}, []);

	const onHideMessage = () => {
		props.handleShowMessage(false);
	};

	const onSubmit = (data) => {
		setFilter(data);
		props.getCommits(data);
	};

	return {
		state: {
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
