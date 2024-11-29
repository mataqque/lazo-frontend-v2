import { URL_BASE_BACKEND } from "@/store/config";

interface IProps {
    DCategories: any;
    DProducts: any;
}

export const fetchingHome = async (): Promise<any> => {
    const DCategories = await fetch(`${URL_BASE_BACKEND}/sentences`, { cache: 'no-cache' })
        .then(res => res.json())
        .catch(error => console.error(error));
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
