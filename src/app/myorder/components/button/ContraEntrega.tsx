'use client';

import { ToastNotify } from '@/common/alerts/alerts';
import { useCreateOrderMutation } from '@/store/apis/sellProducts';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export const ContraEntregaButton = () => {
	const router = useRouter();
	const dataForm = useSelector((state: any) => state.paymentSlice.data);
	const items = useSelector((state: any) => state.cartbuySlice.items);
	const [createOrder, {}] = useCreateOrderMutation();
	const eventButton = async () => {
		const res = await createOrder({ data: { contact: dataForm, items } }).unwrap();
		if (res.status == 500) {
			ToastNotify({ message: 'Hubo un problema con la solicitud al servidor.', options: { type: 'error', position: 'top-center' } });
			return;
		}
		if (res.status == 200) {
			router.push('/gracias');
		}
	};
	return (
		<div className='flex flex-col'>
			<button
				className='h-14 w-[23rem] bg-secondary text-white rounded-lg mb-1 text-1/1 hover:scale-105 duration-300'
				onClick={() => {
					eventButton();
				}}
			>
				Contra Entrega
			</button>
			<span className='text-letter text-center text-gray-400'>Te contactaremos</span>
		</div>
	);
};
