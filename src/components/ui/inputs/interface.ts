import { type ReactElement } from 'react';

export interface IInputPasswordProps {
	name: string;
	placeholder: string;
	defaultValue?: string;
	className?: string;
	form?: any;
	icon?: any;
	tabIndex?: number;
}

export type InputTypeSize = 'sm' | 'md' | 'lg';
export interface IInputProps {
	name: string;
	placeholder: string;
	defaultValue?: string;
	className?: string;
	icon?: any;
	form?: any;
	tabIndex?: number;
	extraClass?: string;
	type?: InputTypeSize;
}

export interface IInputEditor {
	name: string;
	form: any;
	data: string;
}
export interface IInputPropsDate {
	title?: string;
	type?: string;
	name: string;
	placeholder?: string;
	defaultValue?: string;
	value?: string;
	className?: string;
	form?: any;
	icon?: any;
	tabIndex?: number;
	disabledDate?: (date: Date) => boolean;
}

export interface ICheckboxDataProps {
	value: string;
	label: string;
	data?: ISelectDataProps[];
}
export interface ISelectDataProps {
	value: string;
	label: string;
}
export interface ISelectProps {
	defaultValue?: string;
	name: string;
	form: any;
	data: ISelectDataProps[];
	className?: string;
	extraClass?: string;
	color?: string;
	tabIndex?: number;
	text?: string;
	icon_color?: string;
}

export interface ISelectPropsV2 extends ISelectProps {
	eventChange: (e: any) => void;
}
export interface ISelectPropsV1 extends ISelectProps {
	onChange?: (e: any) => void;
}

export interface IMultiplyCheckBoxProps {
	name: string;
	form: any;
	dataChecks: ICheckboxDataProps[];
	data: ICheckboxDataProps[];
	className?: string;
}
export interface IInputCheckedProps {
	name: string;
	defaultValue?: string;
	className?: string;
	classIcon?: string;
}

type IButtonChildrenProps = ReactElement<HTMLButtonElement> | ReactElement<HTMLButtonElement>[];

export interface IInputOptionsProps {
	children: React.ReactNode;
	onClickHandler: (e: any) => any;
	name: string;
	form: any;
	data: ICheckboxDataProps[];
	className?: string;
	color?: string;
}
