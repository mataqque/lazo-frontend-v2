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
				<h2 className='name_category px-4'>{category.name}</h2>
			</Link>
		);
	}
	return null;
};
