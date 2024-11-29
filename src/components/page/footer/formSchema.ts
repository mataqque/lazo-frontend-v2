import * as Yup from 'yup';

export const formSchemaFooter = (values: any) =>
	Yup.object().shape({
		name: Yup.string().required(),
		cel: Yup.number()
			.integer()
			.test('len', (val: any) => val.toString().length >= 9 && val.toString().length <= 9)
			.required(),
		email: Yup.string().email().required(),
		motive: Yup.string().required(),
	});
