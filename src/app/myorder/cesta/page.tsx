import { CartProducts } from '../components/CartProducts/CartProducts';
import { ResumeProducts } from '../components/Resumen/resumen';

export default function Cesta() {
	return (
		<div className='flex gap-6 md:flex-row flex-col-reverse'>
			<CartProducts></CartProducts>
			<ResumeProducts></ResumeProducts>
		</div>
	);
}
