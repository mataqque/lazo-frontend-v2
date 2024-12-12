import { ContentSteps } from './contentSteps/contentSteps';
import { ContentResume } from './components/contentResume/contentResume';
import Layout from '@/components/layout/layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Layout>
			<main className='main bg-white animated pt-[8.3rem] mobile:pt-[7rem] background_img relative'>
				<ContentResume>{children}</ContentResume>
			</main>
		</Layout>
	);
}
