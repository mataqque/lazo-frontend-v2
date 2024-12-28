import Image from 'next/image';
import './targetCategory.scss';
import Link from 'next/link';
import { Category } from '@/store/interface/global.interface';
export const TargetCategory = ({ category }: { category: Category }) => {
	console.log('product', category);
	if (category) {
		return (
			<Link className='target-category rounded-xl overflow-hidden ' href={'/regalos/' + category.slug}>
				<div className='content-img '>
					<Image src={category.banner.url} alt='background' width={300} height={300} />
				</div>
				<h2 className=' px-4 absolute top-0 font-ibm_semibold bottom-0 my-auto z-[2] xlg:text-1/8 text-1/6 text-white text-center leading-none left-0 right-0 h-max'>{category.name}</h2>
			</Link>
		);
	}
	return null;
};
