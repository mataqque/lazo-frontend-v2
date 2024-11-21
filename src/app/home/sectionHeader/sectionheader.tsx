'use client';
import Slider from 'react-slick';
import './sectionheader.scss';
import banner from '../../../assets/multimedia/images/banner/compress-background-gift.webp';
import pedido from '../../../assets/multimedia/images/banner/compress-pedidos_desde_web.webp';
import banner_accesorios from '../../../assets/multimedia/images/banner/compress-accesorios-mujer-tulipanes-rojos-mesa.webp';
import mobile_banner from '../../../assets/multimedia/images/banner/mobile-compress-background-gift.webp';
import mobile_pedido from '../../../assets/multimedia/images/banner/mobile-compress-pedidos_desde_web.webp';
import mobile_banner_accesorios from '../../../assets/multimedia/images/banner/mobile-compress-accesorios-mujer-tulipanes-rojos-mesa.webp';

import { memo, useRef, useState } from 'react';
import { settingsHeader } from './config';

import { WrapperText } from '@/components/ui/animation/wordping';
import { LinkPath } from '@/components/ui/link/link';

export const SectionHeader = memo(function Section({}) {
	const [indexActive, setIndexActive] = useState(0);
	const refSlick = useRef<Slider>(null);
	const arraySlides = [
		{
			title: 'REGALOS PARA TUS MOMENTOS ESPECIALES',
			image: banner,
			image_mobile: mobile_banner,
			type: 'flores',
		},
		{
			title: 'PÍDELO DESDE DE LA COMIDAD DE TU HOGAR',
			image: pedido,
			image_mobile: mobile_pedido,
			type: 'regalos',
		},
		{
			title: 'TENEMOS LO QUE NECESITAS',
			image: banner_accesorios,
			image_mobile: mobile_banner_accesorios,
			type: 'accesorios',
		},
	];
	const beforeChange = (current: any, next: any) => {
		setIndexActive(next);
	};
	return (
		<section className='section-header'>
			<div className='collection-banner relative'>
				<div className='container !absolute left-0 right-0 top-0 bottom-0'>
					<div
						className='slick-arrow slick-next z-[1]'
						onClick={() => {
							refSlick?.current?.slickNext();
						}}
					></div>
					<div
						className='slick-arrow slick-prev z-[1]'
						onClick={() => {
							refSlick?.current?.slickPrev();
						}}
					></div>
				</div>
				<Slider {...settingsHeader} beforeChange={beforeChange} ref={refSlick}>
					{arraySlides.map((item, index) => {
						return (
							<div className='banner banner-text w-full flex overflow-hidden' key={'slide-' + index}>
								<picture className='w-full'>
									<source media='(min-width: 500px)' srcSet={item.image.src} />
									<img src={item.image_mobile.src} alt='' className='w-full background-banner'></img>
								</picture>
								<div className='w-full h-full gradient_bg absolute'>
									<div className='container mobile:!px-8 flex-col '>
										<WrapperText
											active={indexActive === index}
											className='xl:text-3/0 text-2/4 text-white xlg:w-max md:w-[46rem] w-[30rem] mobile:w-full mobile:text-1/8 font-ibm_bold text-center mb-4 leading-tight flex justify-center flex-wrap gap-2'
										>
											{item.title}
										</WrapperText>
										<LinkPath
											href={{
												route: '/regalos/[...category]',
												routeParams: { category: [item.type] },
											}}
											className='bg-secondary text-white rounded-full border border-solid border-secondary h-12 flex items-center justify-center gap-3 px-8 hover:bg-secondary group transition duration-300 w-max'
										>
											Ver productos
										</LinkPath>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
});
