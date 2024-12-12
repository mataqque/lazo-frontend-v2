'use client';

import Link from 'next/link';
import { ContentSteps } from '../../contentSteps/contentSteps';
import { signOut, useSession } from 'next-auth/react';

export const ContentResume = ({ children }: { children: React.ReactNode }) => {
	const session = useSession();

	if (session.status == 'loading') {
		return <div>Loading...</div>;
	}
	if (session.status == 'authenticated') {
		return (
			<div className='container pt-20 pb-40 z-[1] relative max-w-[70rem] mobile:pt-10'>
				<div className='flex item-center justify-center mb-10 mobile:mb-5'>
					<span className='text-secondary text-2/0 text-center'>Proceso de compra</span>
				</div>
				<div className='flex justify-center mb-12 mobile:mb-5'>
					<ContentSteps></ContentSteps>
				</div>
				{children}
			</div>
		);
	}

	return (
		<div className='container pt-20 pb-40 z-[1] relative max-w-[70rem] mobile:pt-10 flex items-center justify-center flex-col min-h-[50rem]'>
			<p className='paragraph text-1/3 text-secondary mb-4'>Para continuar con tu compra, necesitas iniciar sesión.</p>
			<Link href={'/account/login'} className='border border-solid rounded-full text-1/2 border-secondary py-3 px-10 text-white bg-secondary  flex items-center justify-center'>
				Inicia sesión
			</Link>
		</div>
	);
};
