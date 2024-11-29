import './Account.scss';
import Image from 'next/image';
import background from '../../assets/multimedia/images/account/beautiful-flower-arrangement-with.jpg';
import { headers } from 'next/headers';
import brand from '../../assets/images/global/icons/brand-lazo.svg';
import { WrapperAnimationText } from './components/wrapper';
import LayoutAccount from '@/components/layout/layoutAccount';
export default function Account(props: any) {
	const ip = headers().then(headers => {
		return headers.get('x-forwarded-for');
	});
	return (
		<LayoutAccount>
			<main className='auth-page flex bg-white h-[calc(100vh)] min-h-[700px] mobile:pt-[7rem]'>
				<div className='content-img md:flex w-full hidden relative'>
					<Image className='object-cover w-full h-full' src={background} alt=''></Image>
					<WrapperAnimationText></WrapperAnimationText>
				</div>
				<div className='flex flex-col md:min-w-[35rem] md:w-[35rem] w-full  md:px-20 px-6 py-8 bg-white background_img relative'>
					{props.children}
					<div className='text-0/8 text-letter text-center mt-auto'>@2022 - Todos los derechos reservados, Lazo</div>
				</div>
			</main>
		</LayoutAccount>
	);
}
