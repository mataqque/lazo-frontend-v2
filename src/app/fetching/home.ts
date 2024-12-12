import { URL_BASE_BACKEND } from "@/store/config";
import { Category, IProductSchema } from "@/store/interface/global.interface";
import { Meta } from "@/store/interface/products.interface";

export interface IResHome {
    DCategories: {
        data: Category[];
        meta: Meta
    };
    DProducts: {
        data: IProductSchema[];
        meta: Meta
    };
}

export const fetchingHome = async (): Promise<IResHome> => {
    const categories = await fetch(`${URL_BASE_BACKEND}/categories?populate=*`, { cache: 'no-cache' })
        .then(res => res.json())
        .catch(error => console.error(error));

    const products = await fetch(`${URL_BASE_BACKEND}/products?populate=*`, { cache: 'no-cache' })
        .then(res => res.json())
        .catch(error => console.error(error));

    return { DCategories: categories, DProducts: products };
};

export const fetchingMoreVisits = async () => {
    const products = await fetch(`${URL_BASE_BACKEND}/products?populate=*`, { cache: 'no-cache' })
        .then(res => res.json())
        .catch(error => console.error(error));
    return products;
};

export const fetchingMoreRecents = async () => {
    const products = await fetch(`${URL_BASE_BACKEND}/products?populate=*`, { cache: 'no-cache' })
        .then(res => res.json())
        .catch(error => console.error(error));
    return products;
};
