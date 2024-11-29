import Layout from '@/components/layout/layout';
import { Whatsapp } from '@/components/ui/global/whatsapp/whatsapp';
import { SectionHeader } from './home/sectionHeader/sectionheader';
import { SectionCollectionCategory } from './regalos/sectionColletion/sectioncollection';
import { fetchingHome } from './fetching/home';

export default async function Home() {
	const data = await fetchingHome();
	console.log(data);
	return (
		<Layout>
			<Whatsapp />
			<main className='main animated bg-[#fff5f5]'>
				<SectionHeader />
				<div className='bg-rose'>{/* <SectionCollectionCategory products={}></SectionCategory> */}</div>
			</main>
		</Layout>
	);
}
