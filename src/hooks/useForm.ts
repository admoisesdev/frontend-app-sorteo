import { ChangeEvent, useState } from 'react';

interface FormValues {
	[key: string]: string;
}

type typesInput = ChangeEvent<HTMLInputElement>;

export const useForm = (initialState: FormValues) => {
	const [formValues, setFormValues] = useState(initialState);

	const handleChange = (e: typesInput) => {
		const { name, value } = e.target;

		const newFormValue = {
			...formValues,
			[name]: value,
		};

		setFormValues(newFormValue);
	};

	const reset = () => {
		setFormValues(initialState);
	};

	return {
		formValues,
		handleChange,
		reset,
	};
};
