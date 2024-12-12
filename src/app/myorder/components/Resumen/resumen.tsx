'use client';
import { PRICE_DELIVERY, SEND_FREE } from '@/store/config';
import { cantItemsToSameProduct, cantItemsToSameProductLess, deleteItem } from '@/store/globalSlice/cartbuy.slice';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initialValues } from './config';
import { currentConvert } from '@/helpers/helpers';

export const ResumeProducts = () => {
	const path_name = usePathname();
	const [step, setStep] = useState(1);
	const products = useSelector((state: any) => state.cartbuySlice.items);
	const total = useSelector((state: any) => state.cartbuySlice.total);
	const handleSubmit = (values: string) => {};
	return (
		<div className='flex flex-col min-w-[21rem] border border-solid border-gray-200 rounded-lg p-4 h-max bg-white md:sticky md:top-[9.3rem]'>
			<div className='resumen mb-6 text-secondary'>
				<span className='text-secondary mb-1 flex'>
					{SEND_FREE - total <= 0 ? (
						<span className='text-secondary'>Tienes el delivery gratis.</span>
					) : (
						<span className=''>Te faltan {currentConvert(SEND_FREE - total)} para el envío gratis</span>
					)}
				</span>
				<div className='loader h-2 w-full bg-gray-100 rounded-full'>
					<div className='h-full bg-secondary rounded-full' style={{ width: (total / SEND_FREE) * 100 >= 100 ? '100%' : (total / SEND_FREE) * 100 + '%' }}></div>
				</div>
			</div>
			{/* {path_name === '/myorder/cesta' ? (
				<div className='flex mb-6'>
					<FormContainer initialValues={initialValues} validationSchema={cuponSchema} onSubmit={handleSubmit}>
						{(form: any) => {
							const { handleSubmit, isSubmitting }: ParametersForm = form;
							return (
								<FormStyled onSubmit={handleSubmit} className='w-full'>
									<span className='text-secondary mb-1 flex'>Ingresa tu cupón de descuento</span>
									<div className='flex gap-2'>
										<InputText name='cupon' placeholder='Cupón de descuento' />
										<button type='submit' className='w-max px-4 h-12 w-full border border-solid rounded-lg border-secondary bg-secondary text-white'>
											Validar
										</button>
									</div>
								</FormStyled>
							);
						}}
					</FormContainer>
				</div>
			) : null} */}
			<div className='resumen'>
				<h2 className='text-secondary text-1/3 mb-4 leading-none'>Resumen de la compra</h2>
				<div className='flex justify-between mb-2'>
					<span className='text-letter text-1/2 font-ibm_regular'>Subtotal de Artículos: </span>
					<span className='text-1/2 text-secondary font-ibm_regular'>{currentConvert(total)}</span>
				</div>
				<div className='flex justify-between mb-2'>
					<span className='text-letter text-1/2 font-ibm_regular'>Descuento: </span> <span className='text-1/2 text-secondary font-ibm_regular'>{currentConvert(0)}</span>
				</div>
				<div className='flex justify-between'>
					<span className='text-letter text-1/2 font-ibm_regular'>Envío: </span>
					<span className='text-1/2 text-secondary font-ibm_regular'>{SEND_FREE - total <= 0 ? 'Gratis' : currentConvert(PRICE_DELIVERY)}</span>
				</div>
				<div className='w-full h-[1px] bg-gray-200 my-4'></div>
				<div className='flex justify-between'>
					<span className='text-secondary text-1/4 font-ibm_regular'>Total: </span> <span className='price text-1/4 text-secondary IBMPlexSans-Bold'>{currentConvert(total)}</span>
				</div>
				{path_name === '/myorder/cesta' && (
					<Link
						href='/myorder/information'
						className='bg-secondary text-white w-full h-12 mobile:h-14 rounded-lg mt-4 relative flex justify-center items-center items-center mobile:text-1/2'
					>
						Continuar
					</Link>
				)}
			</div>
		</div>
	);
};
