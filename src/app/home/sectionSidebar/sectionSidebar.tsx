'use client';

import Slider from 'react-slick';
import { Sidebar } from '@/components/ui/widget/sidebar';
import { IProductSchema } from '@/store/interface/global.interface';

interface DataEntity {
	title: string;
	data: { data: IProductSchema[] };
}
export const SectionSidebar = ({ dataArray }: { dataArray: DataEntity[] }) => {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 6000,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		pauseOnHover: false,
	};
	return (
		<div className=' md:gap-14 gap-4 flex xmd:flex-col flex-wrap top-[11rem] sticky h-max mb-10 mobile:w-full overflow-hidden min-w-[17rem] w-[17rem]'>
			{dataArray.map((item, index) => {
				return <Sidebar title={'LO MAS GUSTADO'} data={item.data.data} key={index + 'sidebar'} />;
			})}
			{/* <Slider {...settings}>
				</Slider> */}
		</div>
	);
};
