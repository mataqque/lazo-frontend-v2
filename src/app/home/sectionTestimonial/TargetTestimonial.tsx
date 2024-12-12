import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
export const TargetTestimonial = ({ name, calification, comment, photo }: { name: string; comment: string; calification: number; photo: any }) => {
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
			transition={{ duration: 0.6, delay: 0.3 }}
			variants={{
				hidden: { opacity: 0, y: 50 },
				visible: { opacity: 1, y: 0 },
			}}
			className='w-full rounded-[1rem] shadow-xl shadow-[#d8c0c04f] overflow-hidden'
		>
			<div className='p-16 h-full bg-white' data-path='0.0.2.3.0'>
				<div className='flex flex-col justify-between h-full gap-6' data-path='0.0.2.3.0.0'>
					<div className='flex flex-wrap' data-path='0.0.2.3.0.0.0.0'>
						{[...Array(calification)].map((item, index) => (
							<div className='w-auto p-0.5' data-path='0.0.2.3.0.0.0.0.0' key={index + 'stars'}>
								<svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg' data-config-id='auto-svg-16-5' data-path='0.0.2.3.0.0.0.0.0.0'>
									<path
										d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
										fill='#F59E0B'
									></path>
								</svg>
							</div>
						))}
					</div>
					<p className='text-1/6 font-ibm_light' data-config-id='auto-txt-12-5'>
						{comment}
					</p>

					<div className='flex flex-wrap items-center'>
						<div className='w-auto w-12 h-12 rounded-full overflow-hidden'>
							<img src={photo.src} alt='' className='w-full h-full object-cover' />
						</div>
						<div className='w-auto p-2'>
							<h3 className='text-1/0 font-ibm_bold'>{name}</h3>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
