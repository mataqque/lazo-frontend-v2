'use client';

import { WrapperText } from '@/components/ui/animation/wordping';
import { delayfunc } from '@/helpers/helpers';
import { useEffect, useState } from 'react';

export const WrapperAnimationText = () => {
	const [active, setActive] = useState(false);
	useEffect(() => {
		delayfunc(() => {
			setActive(true);
		}, 1000);
	}, []);
	return (
		<div className='absolute top-0 left-0 right-0 bottom-0 z-10 m-auto h-max w-[30rem]'>
			<WrapperText
				active={active}
				className='xl:text-3/0 text-6/4 text-secondary mobile:w-full mobile:text-1/8 font-ibm_bold text-center mb-4 leading-tight flex justify-center flex-wrap gap-2 w-full'
			>
				Unete a la comunidad de Lazo y disfruta de los beneficios que tenemos para ti
			</WrapperText>
		</div>
	);
};
