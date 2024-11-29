import { headers } from 'next/headers';
import { FormRecoveryPass } from './components/form';
export default function RecoveryPassword(props: any) {
	const ip = headers().get('x-forwarded-for');
	return <FormRecoveryPass ip={ip}></FormRecoveryPass>;
}
