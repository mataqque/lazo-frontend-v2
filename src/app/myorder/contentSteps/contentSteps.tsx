'use client';
import './contentSteps.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { NavbarLink } from '@/components/page/navbar/components/link';
import { usePathname } from 'next/navigation';
export const ContentSteps = () => {
	const pathName = usePathname();
	const step_data = [
		{
			step: 1,
			title: 'Cesta',
			route: '/myorder/cesta',
		},
		{
			step: 2,
			title: 'Información de envío',
			route: '/myorder/information',
		},
		{
			step: 3,
			title: 'Método de pago',
			route: '/myorder/checkout',
		},
	];
	const position = step_data.findIndex((item: any) => item.route === pathName);
	return (
		<div className='content-steps flex gap-4 mobile:gap-2'>
			{step_data.map((item: any, index: any) => (
				<>
					<Link href={item.route} className={`${position >= index ? 'active' : ''} step w-[4rem] flex justify-start items-center flex-col `}>
						<div className={`ball-step rounded-full h-12 w-12 flex flex-col items-center justify-center bg-gray-300 mb-2 cursor-pointer`}>
							<span className='text-white text-1/2'>{item.step}</span>
						</div>
						<span className='text-gray-500 text-center leading-tight text-0/9'>{item.title}</span>
					</Link>
					{index !== step_data.length - 1 && (
						<div
							className={`[&.active]:bg-secondary ${
								position > index ? 'active' : ''
							} h-[2px] mobile:h-[1px] bg-gray-300 md:w-[12rem] sm:w-[7rem] mobile:w-[3rem]  rounded-full top-[20px] relative `}
							key={'line-step' + index}
						></div>
					)}
				</>
			))}
		</div>
	);
};
