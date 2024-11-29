import { FormLogin } from './components/Form';
import { headers } from 'next/headers';

export default function Login(props: any) {
	return (
		<div className='box mx-auto w-full relative flex h-full flex items-center justify-center mobile:pb-10'>
			<FormLogin></FormLogin>
		</div>
	);
}
