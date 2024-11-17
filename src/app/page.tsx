import Layout from '@/components/layout/layout';
import { Whatsapp } from '@/components/ui/global/whatsapp/whatsapp';
import { SectionHeader } from './home/sectionHeader/sectionheader';

export default function Home() {
	return (
		<Layout>
			<Whatsapp />
			<main className='main animated bg-[#fff5f5]'>
				<SectionHeader />
			</main>
		</Layout>
	);
}
