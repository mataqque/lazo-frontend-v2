export const handleChecked = (e: any, form: any) => {
	form.setFieldValue(e.target.name, e.target.checked);
};

export function validate(getValidationSchema: any) {
	return (values: any) => {
		const validationSchema = getValidationSchema(values);
		try {
			validationSchema.validateSync(values, { abortEarly: false });
			return {};
		} catch (error) {
			return getErrorsFromValidationError(error);
		}
	};
}

function getErrorsFromValidationError(validationError: any) {
	const FIRST_ERROR = 0;
	return validationError.inner.reduce((errors: any, error: any) => {
		return {
			...errors,
			[error.path]: error.errors[FIRST_ERROR],
		};
	}, {});
}
