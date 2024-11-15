'use client';
import wpp from '@/assets/multimedia/animation/whatsapp.json';
import { IconLottie } from '../../IconLottie/IconLottie';
export const Whatsapp = () => {
	const properties = {
		class: 'animation-wpp',
		icon: wpp,
		positionCss: 'relative',
		zIndex: 30,
	};
	return (
		<a
			href='https://api.whatsapp.com/send?phone=51970028774&text=Hola,%20Me%20gustar%C3%ADa%20encontrar%20el%20regalo%20perfecto'
			target='_blank'
			className='fixed xlg:bottom-[4rem] xlg:right-[4rem] bottom-[2rem] right-[2rem] mobile:right-[1rem] z-[10] lg:w-[6rem] w-[4rem] wpp'
		>
			<IconLottie properties={properties} delay={1800} />
		</a>
	);
};
