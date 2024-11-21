'use client';
import { IProductSchema } from '@/store/interface/products.interface';
// import { useEffect, useState } from 'react';
import './sectionCollections.scss';
import './sectionCollections.scss';
import { TargetCategory } from '@/components/ui/global/targetCategory/targetCategory';
interface IProps {
	products: {
		data: IProductSchema[];
	};
}

export const SectionCollectionCategory = ({ products }: IProps) => {
	const { data } = products;
	return (
		<section className='section-collection z-[1] relative py-20'>
			<div className='container'>
				<h1 className='text-5xl mobile:text-3xl text-center text-secondary mb-5 Poppins-SemiBold'>
					Variedad de <span className='text-5xl mobile:text-3xl text-primary Poppins-SemiBold'>Regalos</span>
				</h1>
				<h2 className='sm:text-1/3 mobile:text-1/5 text-secondary text-center mb-20'>Encuentra el regalo ideal para sorprender y emocionar a tus seres queridos</h2>
				<div className='gap-8 grid grid-cols-5'>
					{data.map((item: any, index: number) => {
						return <TargetCategory key={index + 'target'} product={item} />;
					})}
				</div>
			</div>
		</section>
	);
};
