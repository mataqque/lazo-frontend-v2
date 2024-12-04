import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/assets/scss/index.scss';
import '@/assets/scss/index.css';
import StoreProvider from '@/store/provider';
import { Framer } from '@/lib/framer';
import AuthProvider from '@/components/ui/global/AuthProvider';

export const metadata: Metadata = {
	title: 'Lazo detalles - tienda de regalos',
	description: 'Tienda de regalos online, regalos para ti y tus seres queridos',
	keywords: 'tienda de regalos, regalos online, regalos para ti, regalos para tus seres queridos',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<meta name='theme-color' content='#000030' />
			<link rel='icon' href='/lazo-favicon.svg' sizes='any' type='image/x-icon' />
			<meta name='viewport' content='width=device-width,height=device-height,initial-scale=1,maximum-scale=1' />
			<body className={`root`}>
				<AuthProvider>
					<StoreProvider>
						<Framer>{children}</Framer>
					</StoreProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
