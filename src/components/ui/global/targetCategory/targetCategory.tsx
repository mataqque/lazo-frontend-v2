import Image from 'next/image';
import './targetCategory.scss';
import Link from 'next/link';
export const TargetCategory = ({ product }: { product: any }) => {
	if (product.attributes.image.data) {
		return (
			<Link className='target-category rounded-xl overflow-hidden ' href={'/regalos/' + product.attributes.slug}>
				<div className='content-img '>
					<Image src={product.attributes.image.data.attributes.url} alt='background' width={300} height={300} />
				</div>
				<h2 className='name_category px-4'>{product.attributes.name}</h2>
			</Link>
		);
	}
	return null;
};
