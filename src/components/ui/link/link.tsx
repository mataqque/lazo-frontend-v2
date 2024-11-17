import { $path, AllRoutes, PathOptions } from 'next-typesafe-url';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

export const LinkPath = <T extends AllRoutes>({
	href,
	className = '',
	target = '_self',
	children,
}: {
	href: PathOptions<T>;
	children: React.ReactNode;
	target?: HTMLAttributeAnchorTarget;
	className?: string;
}) => {
	return (
		<Link target={target} className={className} href={$path(href)}>
			{children}
		</Link>
	);
};
