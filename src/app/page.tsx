import Layout from '@/components/layout/layout';
import { Whatsapp } from '@/components/ui/global/whatsapp/whatsapp';
import { SectionHeader } from './home/sectionHeader/sectionheader';

export default function Home() {
	return (
		<Layout>
			<Whatsapp />
			<main className='main pt-[8.3rem] animated bg-[#fff5f5] mobile:pt-[7rem]'>
				<SectionHeader />
			</main>
		</Layout>
	);
}
