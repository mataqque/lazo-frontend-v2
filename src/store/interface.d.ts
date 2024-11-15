export interface CartbuyState {
	items: IProductSchema[];
	likeds: IProductSchema[];
	discount: number;
	delivery: number;
	total: number;
}
export interface AccountState {
	changePass: any;
	verifyCode: any;
	verifiedNumber: any;
	recoveryUser: any;
	sendCreateCode: any;
	createUser: any;
}

export interface PaymentState {
	data: dataPaymentState | object;
}
export interface dataPaymentState {
	full_name: string;
	address: string;
	data_additional: string;
	date_delivery: string;
	time_delivery: string;
	email: string;
}
