import * as Yup from 'yup';

export const formSchemaFooter = (values: any) =>
	Yup.object().shape({
		email: Yup.string().email().required(),
	});
