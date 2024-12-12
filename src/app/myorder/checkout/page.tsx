import { FormInformation } from '../components/FormInformaction/FormInformation';
import { ResumeProducts } from '../components/Resumen/resumen';
import { MercadoPagoButton } from '../components/button/MercadoPago';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { PaypalButton } from '../components/button/Paypal';
import { ContraEntregaButton } from '../components/button/ContraEntrega';

export default function Checkout() {
	return (
		<div className='flex gap-[10rem] justify-center md:flex-row flex-col mobile:gap-[5rem]'>
			<div className='flex flex-col gap-6 items-center justify-center mobile:mt-10'>
				<h4 className='text-secondary text-1/4 mb-2 mobile:text-1/5'>Métodos de pago</h4>
				<ContraEntregaButton></ContraEntregaButton>
				{/* <MercadoPagoButton></MercadoPagoButton> */}
				{/* <PaypalButton></PaypalButton> */}
			</div>
			<ResumeProducts></ResumeProducts>
		</div>
	);
}
