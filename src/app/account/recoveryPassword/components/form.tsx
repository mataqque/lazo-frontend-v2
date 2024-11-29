'use client';
import { FormContainer } from '@/common/form/Form';
import { LinkComponentRegister } from '../../components/linkcomponent';
import { passwordSchema, recoverySchema } from '@/common/constraints/ValidatonSchemas';
import { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import eye from '@/assets/multimedia/icons/eye-svg.svg';

import { useRouter } from 'next/navigation';
import { ToastNotify } from '@/common/alerts/alerts';
import { FormStyled } from '@/components/ui-global/Form/Form';
import { InputText, InputTextPassword } from '@/components/ui-global/Inputs/InputText';
import { ParametersForm } from '@/interface';
import { useChangePassMutation, useRecoveryUserMutation, useVerifyCodeMutation } from '@/store/apis/authApi.api';
export const FormRecoveryPass = ({ ip }: any) => {
	const router = useRouter();
	const [recoveryPass, {}] = useRecoveryUserMutation();
	const [verifyCode, {}] = useVerifyCodeMutation();
	const [changePass, {}] = useChangePassMutation();
	const [email, setEmail] = useState('');
	const [code, setCode] = useState<string>('');
	const [status, setStatus] = useState(401);
	const [type, setType] = useState('recovery');
	const [error, setError] = useState(false);
	const initialValues = {
		email: '',
	};
	const initialValuesPassword = {
		password: '',
		passwordConfirm: '',
	};
	const handleSubmit = async (values: any) => {
		const { data }: any = await recoveryPass(values);
		if (data && data?.status === 404) {
			ToastNotify({
				message: 'Error en estos momentos no podemos atender su solicitud',
				options: {
					type: 'error',
					position: 'top-center',
				},
			});
		}
		if (data && data?.status === 401) {
			setError(true);
		}
		if (data && data?.status === 200) {
			ToastNotify({
				message: 'Código de verificación enviada',
				options: {
					type: 'success',
					position: 'top-center',
				},
			});
			setEmail(values.email);
			setType('verify');
			setError(false);
		}
	};
	const codeHandler = async (value: any) => {
		setCode(value);
	};
	const eventVerifyCode = async () => {
		try {
			if (code.length >= 5) {
				const { data }: any = await verifyCode({ email, code });

				if (data.status == 200) {
					setType('changepassword');
				}
				if (data.verified == false) {
					setError(true);
				}
			}
		} catch (error: any) {}
	};
	const handleSubmitPassword = async (values: any) => {
		if (values.password == values.passwordConfirm) {
			const { data }: any = await changePass({ email, code, password: values.password });

			if (data.status == 404) {
				setError(true);
			}
			if (data.verified == true) {
				router.push('/account/login');
			}
		} else {
			setError(true);
		}
	};

	return (
		<div className='box z-[1] h-full flex flex-col items-center justify-center'>
			{type === 'recovery' && (
				<div className='flex flex-col'>
					<h1 className='text-center text-primary title mb-2 text-1/6 leading-tight mobile:text-1/8'>Olvidaste tu contraseña</h1>
					<span className='text-secondary text-center mb-4 text-center flex'>
						Ingrese la dirección de correo electrónico con la que se registró, y le enviaremos un código al whatsapp asociado a su número
					</span>
					<FormContainer initialValues={initialValues} validationSchema={recoverySchema} onSubmit={handleSubmit}>
						{(form: any) => {
							const { handleSubmit, isSubmitting }: ParametersForm = form;
							return (
								<FormStyled onSubmit={handleSubmit}>
									<div className='mb-3'>
										<InputText name='email' placeholder='Correo electrónico' />
									</div>
									{error === true && (
										<div className='alert text-red-600 text-center mb-3' role='alert'>
											Usuario no encontrado
										</div>
									)}
									<button type='submit' className='btn-submit h-12 w-full border border-solid rounded-lg border-secondary bg-secondary text-white'>
										Ingresar
									</button>
								</FormStyled>
							);
						}}
					</FormContainer>
					<LinkComponentRegister />
				</div>
			)}
			{type === 'verify' && (
				<div className='flex flex-col'>
					<h1 className='text-center text-primary title mb-2 text-1/6 leading-tight mobile:text-1/8'>Verificación</h1>
					<span className='text-secondary flex mb-4 text-center'>Se ha enviado un código de verificación a su whatsapp</span>
					<ReactCodeInput type='text' fields={6} name={''} inputMode={'numeric'} onChange={codeHandler} />
					{error === true && (
						<span className='alert text-red-600 text-center mt-3 ml-auto mr-auto flex  text-center justify-center' role='alert'>
							Código de verificación erroneo
						</span>
					)}
					<button
						type='submit'
						className='btn-submit h-12 w-full border border-solid rounded-lg border-secondary bg-secondary text-white mt-4'
						onClick={() => {
							eventVerifyCode();
						}}
					>
						Verificar
					</button>
				</div>
			)}
			{type === 'changepassword' && (
				<>
					<h1 className='text-center text-primary title mb-2 text-1/6 leading-tight mobile:text-1/8'>Olvidaste tu contraseña</h1>
					<span className='paragraph text-secondary text-center mb-4 text-center'>
						Puedes cambiar tu contraseña si asi lo deseas,de lo contrario puedes obviar este paso y regresar al login
					</span>
					<FormContainer initialValues={initialValuesPassword} validationSchema={passwordSchema} onSubmit={handleSubmitPassword}>
						{(form: any) => {
							const { handleSubmit, isSubmitting }: ParametersForm = form;
							return (
								<form onSubmit={handleSubmit} className='w-full'>
									<div className='mb-3'>
										<InputTextPassword name='password' placeholder='contraseña nueva' icon={eye} form={form} />
									</div>
									<div className='mb-3'>
										<InputTextPassword name='passwordConfirm' placeholder='confirmar contraseña nueva' icon={eye} form={form} />
									</div>
									{error === true && (
										<span className='alert text-red-600 text-center mb-3 ml-auto mr-auto flex mb-4 text-center justify-center' role='alert'>
											La contraseña no coincide
										</span>
									)}
									<button type='submit' className='btn-submit h-12 w-full border border-solid rounded-lg border-secondary bg-secondary text-white'>
										Ingresar
									</button>
								</form>
							);
						}}
					</FormContainer>
					<LinkComponentRegister />
				</>
			)}
		</div>
	);
};
