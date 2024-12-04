'use client';

import { updateItems } from '@/store/globalSlice/cartbuy.slice';
import { setActiveCart } from '@/store/globalSlice/modalCart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import './targetProduct.scss';
import Slider from 'react-slick';

import { motion } from 'framer-motion';

import { IProductSchema } from '@/store/interface/global.interface';
import { currentConvert, resumeText } from '@/helpers/helpers';

const settings = {
	arrows: false,
	dots: true,
	infinite: true,
	speed: 1000,
	autoplaySpeed: 4000,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: false,
	pauseOnHover: false,
};

export const TargetProductV2 = ({ product, addedToCart }: { product: IProductSchema; addedToCart?: boolean }) => {
	const { selected = false, id } = product;

	const dispatch = useDispatch();
	const addCartBuy = (product: IProductSchema) => {
		dispatch(updateItems(product));
		dispatch(setActiveCart('open'));
	};
	return (
		<div className='scroll-element w-full bg-white flex flex-col rounded-2xl overflow-hidden card mobile:mx-1'>
			<div className='px-3 pt-3 mobile:px-0 mobile:pt-0'>
				<div className='w-full rounded-2xl overflow-hidden relative before:absolute before:pointer-events-none before:inset-0 ctn-img before:opacity-40 before:z-10 min-h-[13rem] mobile:min-h-[9rem]'>
					{
						<Slider {...settings}>
							{product.media.map((item, index: number) => {
								return (
									<div className='content-img h-[13rem] mobile:h-[9rem]' key={index + 'banner'}>
										<img src={item.url} alt='' className='w-full h-full object-cover' />
									</div>
								);
							})}
						</Slider>
					}
				</div>
			</div>
			<div className='flex flex-col py-5 px-4 h-full mobile:py-2 mobile:px-2'>
				<span className='flex font-ibm_medium justify-center text-center text-secondary text-1/2 leading-tight mb-3 mobile:mb-2 mobile:text-1/0'>{product.name}</span>
				<p className='text-secondary text-0/9 opacity-90  leading-normal mb-3 mobile:hidden'>{resumeText(product.description, 40)}</p>
				<span className='text-primary text-1/4 IBMPlexSans-Bold text-center flex justify-center mb-3 mt-auto mobile:text-1/1'>{currentConvert(product.price)}</span>
				<div className='flex justify-center gap-2'>
					<button
						className={`btn-buy rounded-full border border-solid border-green-100 h-10 max-w-[10rem] w-full flex items-center justify-center gap-3 mobile:gap-1 hover:bg-green-100 group transition duration-300 ${
							addedToCart ? 'added' : ''
						}`}
						onClick={() => {
							addCartBuy(product);
						}}
					>
						<div className={`mask-center icon-add-product bg-green-100 h-6 w-6 mobile:h-5 mobile:w-5 group-hover:bg-white transition duration-300`}></div>
						<span className={'text-green-100 group-hover:text-white transition duration-300 text-0/9'}>{addedToCart ? 'Agregado' : 'Añadir'}</span>
					</button>
					<Link href={`/regalos/${product.slug}`}>
						<button className='btn-round target btn-cart h-10 min-w-10 w-10 rounded-full border border-gray-200 border-solid flex items-center justify-center hover:border-success hover:bg-success transition duration-300 group'>
							<div className='mask-center icon-eye bg-gray-300 h-4 w-4 group-hover:bg-white'></div>
						</button>
					</Link>
					<button className='btn-round btn-heart rounded-full border min-w-[2.5rem] w-10 border-gray-200 border-solid flex items-center justify-center hover:border-primary hover:bg-primary transition duration-300 group mobile:hidden'>
						<div className='mask-center icon-heart bg-gray-300 h-5 w-5 group-hover:bg-white'></div>
					</button>
				</div>
			</div>
		</div>
	);
};
