'use client';
import { setActiveCart } from '@/store/globalSlice/modalCart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export const ButtonCart = () => {
	const items = useSelector((state: any) => state.cartbuySlice.items);
	const dispatch = useDispatch();
	return (
		<button
			className='relative rounded-full flex gap-4 items-center justify-center  h-12 duration-300 cursor-pointer h-max'
			onClick={() => {
				dispatch(setActiveCart('open'));
			}}
		>
			<div className='icon-add-product mask-center rounded-full w-7 h-7 bg-white'></div>
			<span className='text-white mobile:hidden'>Carrito</span>
			<div className='h-6 w-6 rounded-full bg-success flex items-center justify-center absolute top-[-1rem] left-[1rem] text-white text-shadow'>{items.length}</div>
		</button>
	);
};
