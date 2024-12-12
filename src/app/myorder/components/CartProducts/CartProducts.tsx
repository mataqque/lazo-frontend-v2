'use client';
import { currentConvert } from '@/helpers/helpers';
import { cantItemsToSameProduct, cantItemsToSameProductLess, deleteItem } from '@/store/globalSlice/cartbuy.slice';
import { IProductSchema } from '@/store/interface/global.interface';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const CartProducts = () => {
	const dispatch = useDispatch();
	const products: IProductSchema[] = useSelector((state: any) => state.cartbuySlice.items);
	return (
		<div className='flex flex-col border border-solid border-gray-200 rounded-lg p-4 gap-4 w-full bg-white'>
			<div className='flex justify-between'>
				<span className='text-secondary mobile:text-1/2'>Descripción</span>
				<span className='text-secondary w-[9rem] mobile:text-1/2'>Acciones</span>
			</div>
			<div className='w-full h-[1px] bg-gray-100'></div>
			{products.map((product: IProductSchema, index: number) => {
				return (
					<>
						<div key={'product' + product.id} className='flex gap-4'>
							<Link href={`/products/${product.id}`} className='w-[6rem] h-[6rem] rounded-lg overflow-hidden border border-solid border-gray-200'>
								<img src={product.media[0].url} alt='' className='w-full h-full object-cover' />
							</Link>
							<div className='flex flex-col'>
								<Link href={`/products/${product.id}`} className='text-secondary text-1/2'>
									{product.name}
								</Link>
								<span className='text-primary text-1/3'>{currentConvert(product.price)}</span>
							</div>
							<div className='flex ml-auto h-max w-max justify-center items-center gap-4'>
								<div className='flex items-center gap-4'>
									<div
										className='flex w-8 h-8 rounded-lg shadow justify-center items-center cursor-pointer'
										onClick={() => {
											dispatch(cantItemsToSameProduct(product.id));
										}}
									>
										<div className='icon mask-center icon-plus w-1/2 h-1/2 bg-secondary'></div>
									</div>
									<span className='text text-secondary select-none'>{product.cant ? product.cant : 0}</span>
									<div
										className='flex w-8 h-8 rounded-lg shadow justify-center items-center cursor-pointer'
										onClick={() => {
											dispatch(cantItemsToSameProductLess(product.id));
										}}
									>
										<div className='icon mask-center icon-minus w-1/2 h-1/2 bg-secondary'></div>
									</div>
								</div>
								<div
									className='content-delete h-max'
									onClick={() => {
										dispatch(deleteItem(product.id));
									}}
								>
									<div className='icon mask-center icon-delete w-6 h-6 bg-danger cursor-pointer'></div>
								</div>
							</div>
						</div>
						{index !== products.length - 1 && <div className='w-full h-[1px] bg-gray-100'></div>}
					</>
				);
			})}
		</div>
	);
};
