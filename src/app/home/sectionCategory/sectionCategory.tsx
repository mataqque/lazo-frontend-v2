'use client';
import './sectioncategory.scss';
import Slider from 'react-slick';
import Link from 'next/link';
import { useRef } from 'react';
import { IResHome } from '@/app/fetching/home';
import { Category } from '@/store/interface/global.interface';

export const SectionCategory = ({ categories }: { categories: IResHome['DCategories'] }) => {
	const slick = useRef<any>(null);
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 3000,
		autoplay: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		variableWidth: false,
		pauseOnHover: false,
		margin: 20,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	const slickNext = () => {
		slick.current.slickNext();
	};
	const slickPrev = () => {
		slick.current.slickPrev();
	};
	return (
		<section className='section-category'>
			<div className='container'>
				<div className='flex gap-2 py-6 relative mb-[6rem] mobile:mb-[4rem]'>
					<div
						className='absolute left-0 rounded-full top-0 bottom-0 my-auto z-10 h-[3rem] w-[3rem] slick-arrow slick-prev bg-secondary border border-solid border-secondary flex justify-center items-center cursor-pointer pr-[2px]'
						onClick={() => {
							slickPrev();
						}}
					>
						<div className='mask-center icon-signal-left w-6 h-6 bg-white'></div>
					</div>
					<Slider {...settings} ref={slick}>
						{categories.data &&
							categories.data.map((item: Category, index: number) => {
								return (
									<Link href={'/regalos/' + item.slug} className='h-[10rem] mobile:h-[8rem] !w-[16rem] px-2' key={index + 'target'}>
										<div className='w-full h-full rounded-lg overflow-hidden relative group'>
											<div className='absolute w-full h-full bg-[#0000003d] z-[1]'></div>
											<picture className='w-full h-full'>
												<source media='(min-width: 500px)' srcSet={item.banner.url} />
												<img src={item.banner.url} alt='' className='w-full h-full object-cover group-hover:scale-[1.1] duration-300' />
											</picture>
											<div className='text-white absolute top-0 left-0 z-[2] right-0 bottom-0 text-1/4 leading-none text-center m-auto flex items-center justify-center w-ful h-max px-4 w-[90%]'>
												{item.name}
											</div>
										</div>
									</Link>
								);
							})}
					</Slider>

					<div
						className='absolute right-0 rounded-full top-0 bottom-0 my-auto z-10 h-[3rem] w-[3rem] slick-arrow slick-next bg-secondary border border-solid border-secondary flex justify-center items-center cursor-pointer pl-[4px]'
						onClick={() => {
							slickNext();
						}}
					>
						<div className='mask-center icon-signal-right w-6 h-6 bg-white'></div>
					</div>
				</div>
			</div>
		</section>
	);
};
