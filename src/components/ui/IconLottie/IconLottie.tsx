'use client';

import Lottie from 'react-lottie';
import { useState, useEffect } from 'react';

interface ILoader {
	properties: {
		class?: string;
		icon: any;
		positionCss?: string;
		witdh?: number;
		height?: number;
		zIndex: number;
	};
	/** delay: number; content miliseconds*/
	delay?: number;
}

export const IconLottie = (props: ILoader) => {
	const [hidden, setHidden] = useState<boolean>(false);
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: props.properties.icon,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
		zIndex: props.properties.zIndex,
		positionCss: props.properties.positionCss || 'absolute',
	};
	return (
		<div className={`loader ${props.properties.class ? props.properties.class : ''} ${hidden === true ? 'hidden' : ''}`} style={{ zIndex: defaultOptions.zIndex }}>
			<Lottie
				key={props.properties.icon}
				options={defaultOptions}
				// isStopped={this.state.isStopped}
				// isPaused={this.state.isPaused}
				// speed={this.state.speed}
			></Lottie>
		</div>
	);
};
