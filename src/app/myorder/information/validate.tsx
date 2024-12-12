'use client';

import { useSelector } from 'react-redux';
import { FormInformation } from '../components/FormInformaction/FormInformation';
import { ResumeProducts } from '../components/Resumen/resumen';
import Link from 'next/link';

export const ValidateProducts = () => {
	const products = useSelector((state: any) => state.cartbuySlice.items);
	return (
		<div className='flex gap-6 w-full w-max justify-center xsm:flex-row flex-col'>
			{products.length === 0 ? (
				<div className='flex w-max justify-center items-center flex flex-col min-h-[15rem]'>
					<span className='text-secondary text-1/2 mb-4'>Necesitas agregar productos a tu cesta antes de seguir.</span>
					<Link
						href='/myorder/cesta'
						className='bg-success text-white rounded-full border border-solid border-green-100 h-12 w-full flex items-center justify-center gap-3 px-8 hover:bg-green-100 group transition duration-300 w-max'
					>
						Regresar a la cesta
					</Link>
				</div>
			) : (
				<>
					<FormInformation></FormInformation>
					<ResumeProducts></ResumeProducts>
				</>
			)}
		</div>
	);
};
