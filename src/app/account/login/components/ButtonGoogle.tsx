'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import google from '../../../../assets/multimedia/icons/google.svg';

export const GoogleProvider = () => {
	const handleSignIn = () => {
		signIn('google');
	};
	return (
		<div className='flex items-center justify-center border border-solid rounded-lg border-gray-200 py-2 px-4 text-secondary bg-white cursor-pointer' onClick={handleSignIn}>
			<Image src={google} alt='google' className='mr-4'></Image>
			<span className='text-secondary'>Acceder con Google</span>
		</div>
	);
};
