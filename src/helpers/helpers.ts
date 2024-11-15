import { IFile } from '@/store/interface/file.interface';
import { ICombined, Item, TypeGeneric } from './interface';

export const resumeText = (text: string, number: number) => {
	if (text?.length <= number) {
		return text;
	} else {
		return text?.slice(0, number) ?? '' + '...';
	}
};

export const generateUrl = (props: IFile) => {
	const { fileName, dir } = props;
	const url = dir + '/' + fileName;
	return url;
};
export const combinedFilters = ({ array = [], data = [] }: ICombined) => {
	let result: any[] = data || [];
	array.forEach((item: Item) => {
		result = item.fn(result, item.parameter);
	});
	return result;
};

export const generateId = ({ type }: { type: string }): string => {
	const typeid: TypeGeneric = {
		number: new Date().getTime().toString(),
		string: Math.random().toString(36).substr(2, 18),
	};
	const typeIdDefault: string = typeid.string;
	return typeid[type as keyof TypeGeneric] || typeIdDefault;
};

export const dispatchEvent = (element: any, event: any, value: string) => {
	element.setAttribute('value', value);
	element.dispatchEvent(new Event(event, { bubbles: true }));
};
export const dispatchEventSelect = (element: any, event: any, value: string) => {
	element.value = value;
	element.dispatchEvent(new Event(event, { bubbles: true }));
};

export const verifyExtension = (file: any) => {
	const extension = file.fileName.split('.').pop();
	if (extension == 'pdf') {
		return 'file.png';
	} else if (extension == 'mp4') {
		return 'video.png';
	} else if (extension == 'mp3') {
		return 'file.png';
	} else if (
		extension == 'webp' ||
		extension == 'jpg' ||
		extension == 'png' ||
		extension == 'jpeg' ||
		extension == 'gif' ||
		extension == 'svg' ||
		extension == 'PNG' ||
		extension == 'JPG' ||
		extension == 'JPEG' ||
		extension == 'GIF' ||
		extension == 'SVG'
	) {
		return file.compress.length > 0 ? file.compress : file.file_name;
	} else {
		return 'file.png';
	}
};

export const bytesToSize = (bytes: number): string => {
	const sizes = ['Bytes', 'Kb', 'Mb', 'gb', 'Tb'];
	if (bytes === 0) {
		return '0 Byte';
	}
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
};

export const convertToDate = (date: string) => {
	if (date == undefined) return '';
	const date_ = new Date(date);
	return date_.toLocaleDateString('es-Es', { year: 'numeric', month: 'long', day: 'numeric' });
};

interface IResponse {
	status: number;
	data: unknown;
}

export const HandleResponse = (callback: Function, response: IResponse, callbackError: Function) => {
	switch (response.status) {
		case 200:
			callback(response.data);
			break;
		case 401:
			break;
		case 500:
			callbackError();
			break;
	}
};

export const getCheckables = (container: string) => {
	// get values of checked checkboxes
	const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(`${container} input[type="checkbox"]`);
	const values = [];
	for (let i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			values.push(checkboxes[i].value);
		}
	}
	return values;
};
export const disableCheckables = (container: string) => {
	const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(`${container} input[type="checkbox"]`);
	checkboxes.forEach(e => {
		e.checked = false;
	});
};

export const delayfunc = (func: Function, time: number) => {
	return new Promise((resolve: any) => {
		const delay = setTimeout(() => {
			func();
			clearTimeout(delay);
			resolve();
		}, time);
	});
};

export const uncheckAllChecbox = (ElementContent: string) => {
	const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(ElementContent + ' input[type="checkbox"]');
	for (let i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = false;
	}
};

export const checkAllChecbox = (ElementContent: string) => {
	const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(ElementContent + ' input[type="checkbox"]');
	for (let i = 0; i < checkboxes.length; i++) {
		checkboxes[i].checked = true;
	}
};

export const currentConvert = (price: number | string) => {
	return price ? price.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' }) : 'S/ 00.00';
};

export const dateToString = (date: Date) => {
	if (!(date instanceof Date)) return '';
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 al mes porque en JavaScript los meses van de 0 a 11
	const day = date.getDate().toString().padStart(2, '0');
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
};

// type DateFormat = `${number}-${number}-${number}`;

export const stringToDate = (date: string | null) => {
	if (date != null) {
		const [year, month, day] = date.split('-');
		return new Date(+year, +month - 1, +day);
	}
	return null;
};

export type TClass = 'active' | 'inactive' | '';

export const toggleClass = (classname: TClass): TClass => {
	switch (classname) {
		case '':
			return 'inactive';
		case 'inactive':
			return 'active';
		case 'active':
			return 'inactive';
		default:
			return '';
	}
};
