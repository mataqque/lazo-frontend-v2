import { CartProducts } from '../components/CartProducts/CartProducts';
import { FormInformation } from '../components/FormInformaction/FormInformation';
import { ResumeProducts } from '../components/Resumen/resumen';
import { ValidateProducts } from './validate';

export default function Information() {
	return (
		<div className='flex gap-6 justify-center items-center'>
			<ValidateProducts></ValidateProducts>
		</div>
	);
}
