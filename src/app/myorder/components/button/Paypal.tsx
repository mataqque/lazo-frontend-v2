'use client';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export const PaypalButton = () => {
	const createOrder = async (data: any, actions: any) => {
		const res = await fetch('/api/checkout/paypal', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				return res.json();
			})
			.then(res => {
				return res.result;
			});
		return res.id;
	};
	return (
		<PayPalScriptProvider
			options={{
				clientId: 'AYNYx-xiZHgxsytC9KMbJF2eG7FhoNClPo1W3a1kY1I-jmkg6Z__HWLtmJ_ULUzc87WbFFxB6DLXwCC6',
			}}
		>
			<PayPalButtons style={{ layout: 'horizontal', label: 'pay' }} createOrder={createOrder} />
		</PayPalScriptProvider>
	);
};
