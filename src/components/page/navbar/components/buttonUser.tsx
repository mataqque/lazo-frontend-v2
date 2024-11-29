'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

export const ButtonUser = () => {
	const userName = (fullname: string) => {
		const palabras = fullname.split(' ');
		return palabras[0];
	};
	const session = useSession();
	if (session.status == 'loading') {
		return (
			<Link href='/account/login' className='btn-cart-transactional rounded-full flex items-center justify-center duration-300 cursor-pointer gap-1 h-full relative'>
				<div className='icon-user mask-center rounded-full w-7 h-7 bg-white'></div>
				<span className='text-white'>Login</span>
			</Link>
		);
	}
	if (session.status == 'authenticated') {
		return (
			<div className='btn-session-user rounded-full flex items-center duration-300 cursor-pointer gap-1 h-full relative'>
				<Link href='/dashboard/profile' className='flex h-full items-center gap-2'>
					<div className='icon-user mask-center rounded-full w-7 h-7 bg-white'></div>
					<span className='text-white'>{userName(session.data.user?.name ?? '')}</span>
				</Link>
				<div className='options_session shadow md:flex mobile:!hidden flex-col absolute bottom-0 left-0 translate-y-[100%] bg-white h-0 overflow-hidden'>
					<Link href='/dashboard/profile' className='link text-gray-400 py-2 px-4 hover:bg-black duration-200 group whitespace-nowrap'>
						<span className='text-letter whitespace-nowrap leading-tight'>Perfil</span>
					</Link>
					<div className='link text-gray-400 py-2 px-4 hover:bg-black duration-200 group whitespace-nowrap' onClick={() => signOut()}>
						<span className='text-letter whitespace-nowrap leading-tight'>Me gustan</span>
					</div>
					<div className='link text-gray-400 py-2 px-4 hover:bg-black duration-200 group whitespace-nowrap' onClick={() => signOut()}>
						<span className='text-letter whitespace-nowrap leading-tight'>Cerrar sesión</span>
					</div>
				</div>
			</div>
		);
	}
	return (
		<Link href='/account/login' className='btn-cart-transactional rounded-full flex items-center duration-300 cursor-pointer gap-1 h-full relative'>
			<div className='icon-user mask-center rounded-full w-7 h-7 bg-white'></div>
			<span className='text-white'>Login</span>
		</Link>
	);
};
