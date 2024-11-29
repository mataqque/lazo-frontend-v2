import { NavbarLink } from './link';
import React from 'react';
interface Iprops {
	children: React.ReactNode;
}
interface IpropsChild {
	type: {
		name: string;
	};
}
export const ContentLinks = (props: Iprops) => {
	return (
		<div className='content-links flex w-max gap-12 xmd:h-full xmd:flex-row flex-col'>
			{React.Children.map(props.children, (child, index) => {
				if (React.isValidElement(child) && (child.type as React.FunctionComponent).name === 'NavbarLink') {
					return React.cloneElement(child, {}, <>{child.props.children}</>);
				}
				return child;
			})}
		</div>
	);
};
