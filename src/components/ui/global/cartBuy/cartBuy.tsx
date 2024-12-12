'use client';
import { useSelector } from 'react-redux';
import './cartbuy.scss';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cantItemsToSameProduct, cantItemsToSameProductLess, deleteItem } from '@/store/globalSlice/cartbuy.slice';
import Link from 'next/link';
import { PRICE_DELIVERY, SEND_FREE } from '@/store/config';
import { setActiveCart } from '@/store/globalSlice/modalCart';
import { currentConvert } from '@/helpers/helpers';
import { IProductSchema } from '@/store/interface/global.interface';
export const CartBuy = () => {
	const dispatch = useDispatch();
	const [active, setActive] = useState('');
	const items = useSelector((state: any) => state.cartbuySlice.items);
	const products: any = useSelector((state: any) => state.cartbuySlice.items);
	const activeCart = useSelector((state: any) => state.modalCartSlice.activeCart);
	const total = useSelector((state: any) => state.cartbuySlice.total);
	useEffect(() => {
		setActive(activeCart);
	}, [activeCart, items, total, products]);
	return (
		<div className={`cart-buy ${active}`}>
			<div className='header-cart'>
				<div
					className='icon mask-center icon-close'
					onClick={() => {
						dispatch(setActiveCart('close'));
					}}
				></div>
				CARRITO
			</div>
			<div className='content-items'>
				<div className='scroll-auto scroll'>
					{items.map((item: IProductSchema, index: number) => {
						return (
							<div className='item-product' key={index + 'cart-buy'}>
								<div className='content-img select-none'>
									<img src={item?.media[0].url} alt='' />
								</div>
								<div className='flex flex-col content-attr '>
									<span className='text-secondary select-none leading-tight'>{item.name}</span>
									<span className='text-primary select-none'>{currentConvert(item?.price)}</span>
								</div>
								<div className='content-cant'>
									<div
										className='btn'
										onClick={() => {
											dispatch(cantItemsToSameProduct(item.id));
										}}
									>
										<div className='icon mask-center icon-plus'></div>
									</div>
									<span className='text text-secondary select-none'>{item.cant ? item.cant : 0}</span>
									<div
										className='btn'
										onClick={() => {
											dispatch(cantItemsToSameProductLess(item.id));
										}}
									>
										<div className='icon mask-center icon-minus'></div>
									</div>
								</div>
								<div
									className='content-delete'
									onClick={() => {
										dispatch(deleteItem(item.id));
									}}
								>
									<div className='icon mask-center icon-delete'></div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='flex items-between px-8 py-4 border-t border-solid border-gray-100'>
					<div className='w-full flex flex-col'>
						<span className='text-secondary mb-1 flex'>
							{SEND_FREE - total <= 0 ? (
								<span className='text-secondary mb-1'>Tienes el delivery gratis.</span>
							) : (
								<span className='text-secondary mb-1'>Te faltan {currentConvert(SEND_FREE - total)} para el envio gratis</span>
							)}
						</span>
						<div className='loader h-2 bg-gray-100 rounded-full overflow-hidden '>
							<div className='charge h-full bg-primary duration-200' style={{ width: (total / SEND_FREE) * 100 >= 100 ? '100%' : (total / SEND_FREE) * 100 + '%' }}></div>
						</div>
					</div>
				</div>
				<div className='flex  justify-between w-full mt-auto total-products'>
					<span className='text-secondary leading-tight'>Precio delivery</span>
					<span className='text-secondary leading-tight'>{total >= SEND_FREE ? 'Gratis' : currentConvert(PRICE_DELIVERY)}</span>
				</div>
				<div className='flex  justify-between w-full mt-auto total-products'>
					<span className='text-secondary leading-tight'>Total del pedido</span>
					<span className='text-secondary leading-tight'>{currentConvert(total)}</span>
				</div>
			</div>
			<div className='header-footer'>
				<Link
					href='/myorder/cesta'
					className='flex justify-center items-center btn-buy bg-primary rounded-full h-12 mobile:h-14 w-full'
					onClick={() => {
						dispatch(setActiveCart('close'));
					}}
				>
					<span className='text-white mobile:text-1/3'>Iniciar compra</span>
				</Link>
			</div>
		</div>
	);
};
