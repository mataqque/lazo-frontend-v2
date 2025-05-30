import { URL_BASE_BACKEND } from '@/store/config';
import { SectionHeader } from '../home/sectionHeader/sectionheader';
import { SectionCollectionCategory } from './sectionColletion/sectioncollection';

const fetching = async () => {
	const res = await fetch(`${URL_BASE_BACKEND}/categories?populate=*`, { cache: 'no-cache' })
		.then(res => res.json())
		.catch(error => console.error(error));
	return res || { data: [], meta: { pagination: { total: 0 } } };
};

export default async function Regalos() {
	const data = await fetching();
	return (
		<main className='relative background_img'>
			<SectionCollectionCategory categories={data}></SectionCollectionCategory>
		</main>
	);
}
