import Layout from '@/components/layout/layout';
import { Whatsapp } from '@/components/ui/global/whatsapp/whatsapp';
import { SectionHeader } from './home/sectionHeader/sectionheader';
import { fetchingHome } from './fetching/home';
import { SectionCategory } from './home/sectionCategory/sectionCategory';
import { SectionCollection } from './home/sectionCollection/sectionCollection';

export default async function Home() {
	const res = await fetchingHome();
	return (
		<Layout>
			<Whatsapp />
			<main className='main animated bg-[#fff5f5]'>
				<SectionHeader />
				<div className='bg-rose'>
					<SectionCategory categories={res.DCategories}></SectionCategory>
					<div className='container flex gap-10 xmd:flex-row flex-col mobile:!px-0 '>
						<SectionCollection products={res.DProducts} />
						{/* 
						<SectionSidebar dataArray={dataHome}></SectionSidebar> */}
					</div>
				</div>
			</main>
		</Layout>
	);
}
