export interface Meta {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}
export interface Category {
    banner: {
        url: string;
    };
    createdAt: string;
    description: string;
    documentId: string;
    id: number;
    locale: string | null;
    localizations: Array<Record<string, unknown>>;
    name: string;
    publishedAt: string;
    updatedAt: string;
    slug: string | null;
}

export interface Media {
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
export interface IProductSchema {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    price: number;
    cant: number;
    description: string;
    quantity: number;
    discount: number;
    like: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    media: Media[];
    selected?: boolean;
}

