import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/assets/scss/index.scss';
import '@/assets/scss/index.css';
import StoreProvider from '@/store/provider';
import { Framer } from '@/lib/framer';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<meta name='theme-color' content='#000030' />
			<link rel='icon' href='/favicon.svg' sizes='any' type='image/x-icon' />
			<meta name='viewport' content='width=device-width,height=device-height,initial-scale=1,maximum-scale=1' />
			<body className={`root`}>
				<StoreProvider>
					<Framer>{children}</Framer>
				</StoreProvider>
			</body>
		</html>
	);
}
