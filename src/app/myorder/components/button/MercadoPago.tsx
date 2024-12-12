'use client';
import { useEffect, useState } from 'react';
import iconMercadopago from '@/assets/multimedia/icons/icon-mercado-pago.svg';
import Image from 'next/image';
import { IProductSchema } from '@/common/interface/products.interface';
import { URL_BASE_API_BACKEND, URL_BASE_BACKEND } from '@/store/config';
import { useSelector } from 'react-redux';
import { dataPaymentState } from '@/store/interface';

interface MercadoPagoButtonProps {
	products: IProductSchema[];
}
interface ISendData {
	products: {
		id: number;
		quantity: number;
	}[];
	form: dataPaymentState;
}

export const MercadoPagoButton = () => {
	const [url, setUrl] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const dataForm = useSelector((state: any) => state.paymentSlice.data);

	const dataProducts = useSelector((state: any) => state.cartbuySlice.items).map((product: IProductSchema) => {
		return {
			id: product.id,
			quantity: product.cant,
		};
	});
	useEffect(() => {
		const generateLink = async () => {
			setLoading(true);
			try {
				const data: ISendData = {
					products: dataProducts,
					form: dataForm,
				};
				const res = await fetch(`${URL_BASE_API_BACKEND}/mercadopago`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: data && JSON.stringify(data),
				})
					.then(res => res.json())
					.catch(error => console.error(error));
				setUrl(res.body.init_point);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};
		generateLink();
	}, []);

	return (
		<div className=''>
			{loading ? (
				<div className='border border-solid flex items-center justify-center gap-4 border-[#009ee3] rounded-lg h-14 flex bg-[#009ee3] text-white px-12 cursor-pointer w-[23rem]'>
					<svg aria-hidden='true' className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
							fill='white'
						/>
						<path
							d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
							fill='#00c8ff'
						/>
					</svg>
					<span className='sr-only'>Loading...</span>
				</div>
			) : (
				<div className='flex items-center justify-center flex-col'>
					<a
						className={
							'border border-solid flex items-center justify-center gap-4 border-[#009ee3] rounded-lg h-14 flex bg-[#009ee3] text-white px-12 cursor-pointer w-[23rem] mb-1 text-1/1 whitespace-nowrap'
						}
						href={url}
					>
						<Image src={iconMercadopago} alt='icon mercado pago' className='h-10 w-max'></Image>
						Comprar con Mercado Pago
					</a>
					<span className={'text-letter text-center text-gray-400'}>Paga de forma segura</span>
				</div>
			)}
		</div>
	);
};
