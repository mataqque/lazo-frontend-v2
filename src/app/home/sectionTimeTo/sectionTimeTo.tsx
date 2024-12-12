'use client';
import Lottie from 'react-lottie';
import { dataTimeTo } from './mock';
import { useEffect, useRef, useState } from 'react';

export const SectionTimeTo = () => {
	const ctn = useRef<HTMLDivElement>(null);
	const [start, setStart] = useState(false);
	const [review, setReview] = useState(false);
	const eventObserver = (e: any): void => {
		if (e[0].isIntersecting == true) {
			setReview(false);
			setStart(true);
		}
		if (e[0].isIntersecting == false) {
			setReview(true);
			setStart(false);
		}
	};
	useEffect(() => {
		const options = {
			// root: document.querySelector('nav'),
			rootMargin: '0px',
			threshold: 1,
		};
		const observer = new IntersectionObserver(eventObserver, options);
		observer.observe(ctn.current as Element);
	}, []);
	return (
		<section className='time-to bg-[#151d2e] relative' ref={ctn}>
			<div className='tapiz-corazon mask-tapiz bg-[#ffffff18] w-full h-full absolute'></div>
			<div className='container flex sxsm:gap-[10rem] gap-[3rem] justify-center z-[1] relative sxsm:flex-nowrap flex-wrap !py-20 mobile:py-10 mobile:gap-[2rem]'>
				{dataTimeTo.map((item, index) => {
					return (
						<div className='flex flex-col items-center justify-center gap-6 w-[14rem] mobile:w-[10rem] mobile:justify-start mobile:gap-2' key={'item-time-to' + index}>
							{item.animation && (
								<div className='xl:w-[8rem] xl:h-[8rem] w-[6rem] h-[6rem] mobile:w-[5rem] mobile:h-[5rem]'>
									<Lottie
										options={{
											loop: false,
											autoplay: false,
											animationData: item.animation,
											rendererSettings: {
												preserveAspectRatio: 'xMidYMid slice',
											},
										}}
										isPaused={!start}
										isStopped={review}
										speed={0.4}
										isClickToPauseDisabled={true}
									></Lottie>
								</div>
							)}
							{<AnimationCounter number={item.number} time={2000} steps={2} signal={item.signal} active={start}></AnimationCounter>}
							<span className='text-white text-center text-1/4 mobile:text-1/1 select-none'>{item.title}</span>
						</div>
					);
				})}
			</div>
			{/* <button className='h-[3rem] rounded-lg w-max px-10 bg-white text-black' onClick={() => setStart(!start)}>
				again
			</button>
			<button className='h-[3rem] rounded-lg w-max px-10 bg-white text-black' onClick={() => setReview(true)}>
				Stop
			</button> */}
		</section>
	);
};
interface IAnimation {
	number: number;
	time?: number;
	steps?: number;
	signal?: string;
	active: boolean;
}

const AnimationCounter = ({ number, time = 1000, steps = 60, signal = '', active }: IAnimation) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let animationFrameId: number;

		const startAnimation = (timestamp: number) => {
			const duration = time;
			const interval = duration / steps;
			const startTime = timestamp || new Date().getTime();

			const updateCount = () => {
				const currentTime = new Date().getTime();
				const progress = Math.min((currentTime - startTime) / duration, 1);

				setCount(Math.floor(progress * number));

				if (progress < 1) {
					animationFrameId = requestAnimationFrame(updateCount);
				}
			};

			const updateCountWithInterval = (step: number) => {
				setTimeout(() => {
					updateCount();
				}, step * interval);
			};

			for (let i = 0; i <= steps; i++) {
				updateCountWithInterval(i);
			}
		};

		if (active == false) {
			setCount(0);
		}
		if (!active) return;
		startAnimation(0);

		return () => cancelAnimationFrame(animationFrameId);
	}, [number, time, steps, active]);

	return (
		<span className='text-primary xl:text-5/0 text-4/0 leading-none text-center mobile:text-2/5 select-none	mobile:mt-2'>
			{count}
			{signal}
		</span>
	);
};
