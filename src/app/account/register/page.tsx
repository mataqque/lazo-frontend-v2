import '../Account.scss';
import { LinkComponentRegister, ShowErrorLogin } from '../components/linkcomponent';
import background from '../../../assets/images/home/banner/beautiful-flower-arrangement-with.jpg';
import brand from '@/assets/multimedia/icons/brand-lazo.svg';
import Link from 'next/link';
import Image from 'next/image';
import LayoutAccount from '@/components/page/layoutAccount';

import { headers } from 'next/headers';
import { FormRegister } from './components/register';

export default function Login(props: any) {
	const ip = headers().get('x-forwarded-for');

	return (
		<div className='flex flex-col h-full items-center justify-center'>
			<FormRegister></FormRegister>
		</div>
	);
}
