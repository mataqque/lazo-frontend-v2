'use client';

import { updateItems, updateLiked } from '@/store/globalSlice/cartbuy.slice';
import { setActiveCart } from '@/store/globalSlice/modalCart';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import './targetProduct.scss';
import { motion } from 'framer-motion';

import Slider from 'react-slick';
import { IProductSchema } from '@/store/interface/global.interface';
import { currentConvert, resumeText } from '@/helpers/helpers';
import Image from 'next/image';

const settings = {
	arrows: true,
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
export const TargetProduct = ({ product, addedToCart, liked }: { product: IProductSchema; addedToCart?: boolean; liked: boolean }) => {
	const { media, selected = false, id } = product;
	const dispatch = useDispatch();
	const addCartBuy = (product: IProductSchema) => {
		dispatch(updateItems(product));
		dispatch(setActiveCart('open'));
	};
	const addLiked = (product: IProductSchema) => {
		dispatch(updateLiked(product));
	};
	return (
		<div className='scroll-element w-full bg-white flex flex-col rounded-2xl overflow-hidden card mobile:mx-1 group/img'>
			<div className='px-3 pt-3'>
				<div className='w-full rounded-2xl overflow-hidden relative before:absolute before:pointer-events-none before:inset-0 ctn-img before:opacity-40 before:z-10 min-h-[13rem]'>
					{product.media.length <= 1 && (
						<div className='content-img h-[13rem] overflow-hidden'>
							<img src={product.media[0].url} alt='' className='w-full h-full object-cover group-hover/img:scale-110 transition-transform' />
						</div>
					)}
					{product.media.length > 1 && (
						<Slider {...settings} className='slider-card'>
							{product.media.map((item, index: number) => {
								return (
									<div className='content-img h-[13rem] overflow-hidden' key={index + 'banner'}>
										<img src={item.url} alt='' className='w-full h-full object-cover group-hover/img:scale-110 transition-transform' />
									</div>
								);
							})}
						</Slider>
					)}
				</div>
			</div>
			<div className='flex flex-col py-5 px-4 h-full'>
				<span className='flex font-ibm_medium justify-center text-center text-secondary text-1/2 leading-tight mb-3'>{product.name}</span>
				<p className='text-secondary text-1/0 opacity-90  leading-normal mb-3'>{resumeText(product.description, 70)}</p>
				<span className='text-primary text-1/4 IBMPlexSans-Bold text-center flex justify-center mb-3 mt-auto'>{currentConvert(product.price)}</span>
				<div className='flex justify-center gap-3'>
					<button
						className={`btn-buy rounded-full border border-solid border-green-100 h-12 max-w-[10rem] w-full flex items-center justify-center gap-3 pr-3 hover:bg-green-100 group transition duration-300 ${
							addedToCart ? 'added' : ''
						}`}
						onClick={() => {
							addCartBuy(product);
						}}
					>
						<div className={`mask-center icon-add-product bg-green-100 h-6 w-6 group-hover:bg-white transition duration-300`}></div>
						<span className={'text-green-100 group-hover:text-white transition duration-300'}>{addedToCart ? 'Agregado' : 'Añadir'}</span>
					</button>
					<Link href={`/regalos/${product.slug}`}>
						<button className='btn-round target btn-cart h-12 min-w-12 w-10 rounded-full border border-gray-200 border-solid flex items-center justify-center hover:border-success hover:bg-success transition duration-300 group'>
							<div className='mask-center icon-eye bg-gray-300 h-4 w-4 group-hover:bg-white'></div>
						</button>
					</Link>
					<button
						className={`btn-round btn-heart rounded-full border min-w-[3rem] w-12 border-gray-200 border-solid flex items-center justify-center hover:border-primary hover:bg-primary hover:opacity-70 [&.liked]:bg-primary [&.liked]:opacity-100 [&.liked]:border-white transition duration-300 group ${
							liked ? 'liked' : ''
						}`}
						onClick={() => {
							addLiked(product);
						}}
					>
						<div className='mask-center icon-heart bg-gray-300 h-5 w-5 group-hover:bg-white group-[&.liked]:bg-white'></div>
					</button>
				</div>
			</div>
		</div>
	);
};
