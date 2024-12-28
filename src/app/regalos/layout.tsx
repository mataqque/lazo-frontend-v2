import Layout from '@/components/layout/layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <Layout>{children}</Layout>;
}
