'use client';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { settings } from './config';
import { AllProducts, AllProductsLiked } from '@/store/globalSlice/cartbuy.slice';
import { IProductSchema } from '@/store/interface/global.interface';
import { IResHome } from '@/app/fetching/home';
import { TargetProduct } from '@/components/ui/TargetProduct/TargetProduct';

export const SectionCollection = ({ products }: { products: IResHome['DProducts'] }) => {
	const cartProducts = useSelector(AllProducts);
	const likeProducts = useSelector(AllProductsLiked);
	function searchToCart(array: IProductSchema[], id: number) {
		return array.some(item => item.id === id);
	}
	function searchToLiked(array: IProductSchema[], id: number) {
		return array?.some(item => item.id === id) ?? false;
	}
	return (
		<motion.div initial={{ opacity: 0, width: '100%' }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<section className='section-collection relative pb-14 w-full'>
				<div className='w-full z-[1] relative'>
					<div className='mobile:px-8'>
						<motion.h2
							key='title-home'
							initial={{ y: -10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 0, opacity: 0 }}
							transition={{ duration: 0.2, type: 'spring', delay: 0.2, stiffness: 200 }}
							className='xlg:text-2/2 text-1/9 mobile:text-1/6 text-secondary text-center mb-4 mobile:mb-4 leading-tight'
						>
							Los Regalos Perfectos para <span className='xlg:text-2/2 text-1/9 mobile:text-1/6 text-primary'>Cada Ocasión</span>
						</motion.h2>
					</div>
					<p className='text-1/4 mobile:text-1/2 text-secondary mx-auto text-center flex mb-10 mobile:mb-2 IBMPlexSans-Light md:w-max w-full'>
						Encuentra el regalo ideal para sorprender y emocionar a tus seres queridos
					</p>
					<div className='grid xlg:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] xmd:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))]  grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] xlg:gap-10 sm:gap-5'>
						{products &&
							products.data.map((item: IProductSchema, index: number) => {
								return (
									<TargetProduct key={index + 'target'} product={item} addedToCart={searchToCart(cartProducts, item.id)} liked={searchToLiked(likeProducts, item.id)}></TargetProduct>
								);
							})}
						{/* {products &&
									products.map((item: IProductSchema, index: number) => {
										return (
											<TargetProduct
												key={index + 'target'}
												product={item}
												addedToCart={searchToCart(cartProducts, item.id)}
												liked={searchToLiked(likeProducts, item.id)}
											></TargetProduct>
										);
									})} */}
					</div>
				</div>
			</section>
		</motion.div>
	);
};
