'use client';
import Image, { StaticImageData } from 'next/image';
import cart from '../../../assets/multimedia/images/global/shopping-cart.png';
import buy from '../../../assets/multimedia/images/global/paga.png';
import send from '../../../assets/multimedia/images/global/envios-de-regalos-en-lima.png';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
export const SectionStepToSell = (props: any) => {
	const data = [
		{
			title: 'Elige el regalo o personaliza tu pedido.',
			icon: cart,
			paragraph: 'Selecciona el regalo que más te guste o elige productos de nuestras categorías y añádelos al carrito. Nosotros nos encargaremos de entregar tu pedido.',
		},
		{
			title: 'Completa los datos del destinatario y paga online',
			icon: buy,
			paragraph: 'Revisa lo que hay en tu pedido, proporciona todos los detalles del destinatario y selecionar el metodo de pago.',
		},
		{
			title: 'Entregamos tu regalo a domicilio',
			icon: send,
			paragraph: 'Tu pedido estará en tus manos en un plazo máximo de 2 días laborables, cubriendo los distritos principales de Lima. Garantizamos una entrega segura y confiable.',
		},
	];
	return (
		<section className='section-step-to-sell bg-rose py-20'>
			<div className='container'>
				<h1 className='xl:text-2/4 text-2/1 mobile:text-1/6 text-center text-secondary mb-14 Poppins-SemiBold leading-tight'>
					Cómo enviar regalos <br className='mobile:flex hidden'></br>
					<span className='xl:text-2/4 text-2/1 text-primary Poppins-SemiBold leading-tight'>a domicilio en 3 pasos:</span>
				</h1>
				<div className='flex gap-[3rem] justify-center xmd:flex-nowrap flex-wrap'>
					{data.map((e, index) => {
						return <TargetInfoToBuy data={e} key={index + 'target-info'} />;
					})}
				</div>
			</div>
		</section>
	);
};

const cardVariants: Variants = {
	offscreen: {
		y: 80,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 2,
		},
	},
};
interface IData {
	title: string;
	icon: any;
	paragraph: string;
}

const squareVariants = {
	visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
	hidden: { opacity: 0, scale: 0 },
};
const TargetInfoToBuy = ({ data }: { data: IData }) => {
	const { title, icon, paragraph } = data;
	const ref = useRef(null);
	const controls = useAnimation();
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
		if (isInView == false) {
			controls.start('hidden');
		}
	}, [controls, isInView]);
	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={controls}
			transition={{ duration: 0.6, delay: 0.6 }}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: { opacity: 1, y: 0 },
			}}
			className='step flex flex-col items-center bg-white rounded-xl p-8 shadow-xl w-[22rem] '
		>
			<Image className='img w-[11rem] h-[8rem] object-contain mb-6' src={icon} alt='' />
			<h3 className='title-step text-secondary text-1/4 mb-4 text-center leading-tight'>{title}</h3>
			<p className='text-secondary'>{paragraph}</p>
		</motion.div>
	);
};
