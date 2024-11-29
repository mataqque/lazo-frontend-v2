import { toast } from 'react-toastify';
import { delayfunc } from '../helpers';

export interface IToastNotifyPromise {
	message_error: string;
	message: string;
	promise: Promise<unknown>;
}

interface IToast {
	message: string;
	options: {
		type: 'success' | 'info' | 'warning' | 'error';
		position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
	};
}
export const ToastNotify = (props: IToast) => {
	const { message, options } = props;
	toast(message, options);
};
export const ToastNotifyPromise = ({ message, message_error, promise }: IToastNotifyPromise) => {
	const resolvePromise = new Promise((resolve: any, reject) => {
		promise
			.then((response: any) => {
				const { data } = response;

				delayfunc(() => {
					try {
						if (data.status === 200) {
							resolve();
						} else if (data.status === 404) {
							toast.error('Hubo un problema con la solicitud al servidor.');
							reject();
						} else if (data.status === 405) {
							toast.error(message_error);
							reject();
						}
					} catch (error) {
						toast.error('Hubo un problema con la solicitud al servidor.');
						reject();
					}
				}, 2000);
			})
			.catch((error: any) => {
				// En caso de error en la promesa
				console.error('Error en la promesa:', error);
				// Puedes mostrar un mensaje de error genérico aquí si lo deseas
				toast.error('Hubo un problema con la solicitud al servidor.');
			});
	});

	toast.promise(resolvePromise, {
		pending: 'Conectando con el servidor...',
		success: message,
		// El mensaje de error se maneja en el catch de la promesa
	});
};
