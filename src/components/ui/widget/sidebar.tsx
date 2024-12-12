'use client';
import image from '@/assets/multimedia/images/global/img-example.jpg';
import { currentConvert } from '@/helpers/helpers';
import { timeAgo } from '@/store/config';
import { IProductSchema } from '@/store/interface/global.interface';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es.json';
import Image from 'next/image';
import Link from 'next/link';
export const Sidebar = ({ title, data }: { title: string; data: IProductSchema[] }) => {
	const mock = [
		{
			title: 'Nuevo Producto ',
			img: image,
			price: 100,
			updated: '2022-01-01',
		},
		{
			title: 'Nuevo Producto ',
			img: image,
			price: 100,
			updated: '2022-01-01',
		},
		{
			title: 'Nuevo Producto ',
			img: image,
			price: 100,
			updated: '2022-01-01',
		},
		{
			title: 'Nuevo Producto ',
			img: image,
			price: 100,
			updated: '2022-01-01',
		},
	];
	return (
		<div className='w-full h-max mobile:w-[70vw] mobile:min-w-[70vw] mobile:mx-2'>
			<h3 className='text-1/3 text-third leading-none mb-4 font-ibm_bold'>{title}</h3>
			<div className='flex flex-col bg-white rounded-lg p-4 gap-4 content-sidebar'>
				{data.map((item, index) => {
					return (
						<Link
							href={``}
							key={index + 'sidebar'}
							className='w-full flex gap-3 before:content-[""] before:h-[1px] before:w-full before:bg-gray-100 before:absolute before:left-0 before:bottom-[-0.5rem] relative item-sidebar'
						>
							<div className='min-w-[4rem] w-[4rem] h-[4rem] rounded-lg overflow-hidden'>
								<img src={item.media[0].url} alt='' className='w-full h-full object-cover' />
							</div>
							<div className='flex flex-col gap-1'>
								<h1 className='text-1/0 text-secondary leading-none'>{'Product'}</h1>
								<p className='paragraph text-primary'>{currentConvert(item.price)}</p>
								<span className='text-0/8 text-letter'>{timeAgo.format(Date.now() - 60 * 1000)}</span>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
