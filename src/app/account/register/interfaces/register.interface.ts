export interface IRegisterWorker {
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	gender: string;
}

export interface IRegisterCompany {
	organization: string;
	url: string;
	employment: string;
	email: string;
	password: string;
	phone: string;
}

export const initValuesWorker: IRegisterWorker = {
	username: '',
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	gender: '',
};

export const initValuesCompany: IRegisterCompany = {
	organization: '',
	url: '',
	employment: '',
	email: '',
	password: '',
	phone: '',
};
