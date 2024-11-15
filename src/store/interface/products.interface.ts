export interface ICategorySchema {
	data?: DataEntity[] | null;
	meta: Meta;
}
export interface DataEntity {
	id: number;
	attributes: Attributes;
}
export interface Attributes {
	name: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	description?: string | null;
	image: Image;
}
export interface Image {
	data?: Data | null;
}
export interface Data {
	id: number;
	attributes: Attributes1;
}
export interface Attributes1 {
	name: string;
	alternativeText?: null;
	caption?: null;
	width?: number | null;
	height?: number | null;
	formats?: Formats | null;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl?: null;
	provider: string;
	provider_metadata?: null;
	createdAt: string;
	updatedAt: string;
}
export interface Formats {
	thumbnail: ThumbnailOrXsmall;
	xsmall: ThumbnailOrXsmall;
}
export interface ThumbnailOrXsmall {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path?: null;
	width: number;
	height: number;
	size: number;
	url: string;
}
export interface Meta {
	pagination: Pagination;
}
export interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface IProductSchema {
	id: number;
	cant: number;
	selected: boolean;
	liked: boolean;
	attributes: {
		nameproduct: string;
		description: string;
		date: string;
		slug: string;
		resume: string;
		price: number;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		cant: number;
		image: {
			data: ImageProduct[];
		};
		category: {
			data?: {
				id: number;
				attributes: {
					name: string;
					createdAt: string;
					updatedAt: string;
					publishedAt: string;
					Description: string | null;
					slug: string;
				};
			};
		};
	};
}

export interface ImageProduct {
	id: number;
	attributes: {
		name: string;
		alternativeText: string | null;
		caption: string | null;
		width: number;
		height: number;
		formats: {
			thumbnail: {
				name: string;
				hash: string;
				ext: string;
				mime: string;
				path: string | null;
				width: number;
				height: number;
				size: number;
				url: string;
			};
			medium: {
				name: string;
				hash: string;
				ext: string;
				mime: string;
				path: string | null;
				width: number;
				height: number;
				size: number;
				url: string;
			};
			large: {
				name: string;
				hash: string;
				ext: string;
				mime: string;
				path: string | null;
				width: number;
				height: number;
				size: number;
				url: string;
			};
			small: {
				name: string;
				hash: string;
				ext: string;
				mime: string;
				path: string | null;
				width: number;
				height: number;
				size: number;
				url: string;
			};
		};
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: string | null;
		provider: string;
		provider_metadata: any | null;
		createdAt: string;
		updatedAt: string;
	};
}
