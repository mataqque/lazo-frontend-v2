import Layout from '@/components/layout/layout';
import { Whatsapp } from '@/components/ui/global/whatsapp/whatsapp';
import { SectionHeader } from './home/sectionHeader/sectionheader';
import { fetchingHome, fetchingMoreRecents, fetchingMoreVisits } from './fetching/home';
import { SectionCategory } from './home/sectionCategory/sectionCategory';
import { SectionCollection } from './home/sectionCollection/sectionCollection';
import { SectionSidebar } from './home/sectionSidebar/sectionSidebar';
import { SectionTimeTo } from './home/sectionTimeTo/sectionTimeTo';
import { SectionTestimonial } from './home/sectionTestimonial/sectionTestimonial';

export default async function Home() {
	const res = await fetchingHome();
	const moreVisits = await fetchingMoreVisits();
	const moreRecents = await fetchingMoreRecents();
	const dataHome = [
		{ title: 'Mas visitados', data: moreVisits },
		{ title: 'Mas recientes', data: moreRecents },
	];
	return (
		<Layout>
			<Whatsapp />
			<main className='main animated bg-[#fff5f5]'>
				<SectionHeader />
				<div className='bg-rose'>
					<SectionCategory categories={res.DCategories}></SectionCategory>
					<div className='container flex gap-10 xmd:flex-row flex-col mobile:!px-0 '>
						<SectionCollection products={res.DProducts} />
						<SectionSidebar dataArray={dataHome}></SectionSidebar>
					</div>
				</div>
				<SectionTimeTo />
				<SectionTestimonial></SectionTestimonial>
			</main>
		</Layout>
	);
}
