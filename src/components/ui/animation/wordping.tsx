'use client';
import { HTMLMotionProps } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useCallback } from 'react';
export interface IAnimationWord {
	text?: any;
	className?: any;
	regex: any;
	space?: boolean;
}
export const animation = ({ text, className = '', regex, space }: IAnimationWord) => {
	if (text.length > 0) {
		let reduce = '';
		const arrayWords = text.split(regex);
		let spaceLetter = ' ';
		if (space) {
			spaceLetter = '';
		}
		const createSpan = arrayWords.map((e: any, index: any) => {
			reduce += `<span class='${className} y-hidden'><p class='animate animate-${index}'>${e}</p></span>${spaceLetter}`;
		});
		return reduce;
	}
	return '';
};

export const verifyViewPort = () => {};

export interface IWrapperText {
	children: ReactNode;
	className?: string;
	active: boolean;
}

export const WrapperText = ({ children, className = '', active = false }: IWrapperText) => {
	const [arrayString, setArrayString] = useState<string[]>([]);
	const getArrayWords = useCallback(() => {
		if (typeof children === 'string') {
			const words = children.split(' ');
			setArrayString(words);
		}
	}, []);

	useEffect(() => {
		getArrayWords();
	}, []);

	return (
		<div className={className}>
			{arrayString.map((e: any, index: any) => {
				return (
					<div className='y-hidden h-max leading-tight select-none' key={index + 'span-animation'}>
						<span className={`xmd:text-2/0 text-1/7 mobile:text-1/4 font-ibm_bold animate select-none ${active ? 'active' : ''} animate-` + index}>{e}</span>
					</div>
				);
			})}
		</div>
	);
};
