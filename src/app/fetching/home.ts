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
    // try {
    //     const DCategories = await fetch(`${URL_BASE_BACKEND}/categories?populate=*`, { cache: 'no-cache' })
    //         .then(res => res.json())
    //         .catch(error => console.error(error));
    //     const DProducts = await fetch(`${URL_BASE_BACKEND}/products?populate=*`)
    //         .then(res => res.json())
    //         .catch(error => console.error(error));
    //     if (DCategories && DProducts && DCategories.data && DProducts.data) {
    //         return { DCategories, DProducts };
    //     }
    //     return { DCategories: { data: [], meta: { pagination: { total: 0 } } }, DProducts: { data: [], meta: { pagination: { total: 0 } } } };

    // } catch (error) {
    //     return { DCategories: { data: [], meta: { pagination: { total: 0 } } }, DProducts: { data: [], meta: { pagination: { total: 0 } } } };
    // }
};
