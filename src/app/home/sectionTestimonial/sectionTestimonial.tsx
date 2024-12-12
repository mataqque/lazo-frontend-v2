'use client';

import { TargetTestimonial } from './TargetTestimonial';
import julebrio from '../../../assets/multimedia/images/global/photo/julebrio.jpg';
import antony from '../../../assets/multimedia/images/global/photo/antony.jpg';
import karen from '../../../assets/multimedia/images/global/photo/karen.jpg';
import laura from '../../../assets/multimedia/images/global/photo/laura.jpg';
import leonel from '../../../assets/multimedia/images/global/photo/leonel.jpg';
import micaela from '../../../assets/multimedia/images/global/photo/micaela.jpg';

export const SectionTestimonial = () => {
	const data = [
		{
			name: 'Jorge Luis',
			comment: '“Excelente servicio, muy recomendable”',
			calification: 5,
			photo: julebrio,
		},
		{
			name: 'María González',
			comment: '“Increíble experiencia, volveré seguro”',
			calification: 4,
			photo: karen,
		},
		{
			name: 'Carlos Rodríguez',
			comment: '“Buen servicio, precios Increibles',
			calification: 4,
			photo: antony,
		},
		{
			name: 'Ana Martínez',
			comment: '“Atención al cliente impecable, 100% recomendado”',
			calification: 5,
			photo: laura,
		},
		{
			name: 'Karina beltrán',
			comment: '“Rápido y eficiente, excelente atención”',
			calification: 4,
			photo: leonel,
		},
		{
			name: 'Laura Pérez',
			comment: '“Servicio de calidad, precios justos”',
			calification: 5,
			photo: micaela,
		},
	];
	return (
		<div className='bg-gray-50 flex items-center justify-center background_img py-20 relative'>
			<div className='w-full z-[1] container'>
				<div className='w-full mx-auto'>
					<div className='text-center max-w-xl mx-auto'>
						<h1 className='text-2/4 mb-5 text-secondary font-ibm_semibold'>Regalos Que Dejan Huella</h1>
						<div className='text-center mb-10'>
							<span className='inline-block w-1 h-1 rounded-full bg-secondary ml-1'></span>
							<span className='inline-block w-3 h-1 rounded-full bg-secondary ml-1'></span>
							<span className='inline-block w-40 h-1 rounded-full bg-secondary'></span>
							<span className='inline-block w-3 h-1 rounded-full bg-secondary ml-1'></span>
							<span className='inline-block w-1 h-1 rounded-full bg-secondary ml-1'></span>
						</div>
					</div>
					<div className='grid grid-cols-3 justify-center gap-10'>
						{data.map((data, index) => (
							<TargetTestimonial key={index} {...data}></TargetTestimonial>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
