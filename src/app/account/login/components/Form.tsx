'use client';
import eye from '@/assets/multimedia/icons/eye-svg.svg';
import person from '@/assets/multimedia/icons/user.svg';
import Link from 'next/link';
import loadingHeart from '@/assets/multimedia/animation/heart.json';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { LinkComponentRegister, ShowErrorLogin } from '../../components/linkcomponent';
import { GoogleProvider } from './ButtonGoogle';
import { ILogin } from '../interface';
// import { IconLottie } from '@/components/ui-global/IconLottie/IconLottie';
import { FormContainer } from '@/components/common/form/Form';
import { LoginSchema } from '@/components/common/form/constraints/ValidatonSchemas';
import { InputText, InputTextPassword } from '@/components/ui/inputs/InputText';
import { ParametersForm } from '@/components/common/form/interface';

export const FormLogin = () => {
	const session = useSession();
	const searchParams = useSearchParams();
	const [error, setError] = useState(false);
	const [initialValues, setInitialValues] = useState<ILogin>({
		email: '',
		password: '',
	});
	const properties = {
		class: 'loader-page',
		icon: loadingHeart,
		positionCss: 'relative',
		zIndex: 30,
	};
	const callbackUrl = searchParams.get('callbackUrl') || '/';
	const handleSubmit = async (values: ILogin) => {
		const result = await signIn('credentials', {
			email: values.email,
			password: values.password,
			redirect: false,
			callbackUrl: callbackUrl,
		});
		if (result?.error) {
			setError(true);
		}
		if (result?.ok) {
		}
	};
	if (session.status === 'loading') {
		return (
			<div className='w-full flex items-center justify-center'>
				{/* <div className='w-40'>
					<IconLottie properties={properties} delay={1800} />
				</div> */}
			</div>
		);
	}
	if (session.status === 'authenticated') {
		return (
			<div className='flex flex-col justify-center items-center w-full'>
				<span className='text-secondary text-1/4 mb-4'>Ya estas logeados</span>
				<Link href='/' className='border border-solid rounded-full border-secondary py-2 px-4 text-secondary w-60 flex items-center justify-center mb-2 bg-white'>
					Ir al Inicio
				</Link>
				<Link href='/myorder/cesta' className='border border-solid rounded-full border-secondary py-2 px-4 text-secondary  w-60 flex items-center justify-center mb-2 bg-white'>
					Ir al Carrito de compras
				</Link>
				<button className='border border-solid rounded-full border-secondary py-2 px-4 text-white bg-secondary  w-60' onClick={() => signOut()}>
					Cerrar la Sesión
				</button>
			</div>
		);
	}
	return (
		<div className='w-full'>
			<h1 className='text-center text-primary title mb-2 text-1/6 leading-tight mobile:text-1/8'>Accede a tu cuenta</h1>
			<p className='text-secondary text-center mb-4 ml-auto mr-auto leading-tight'>Ingresa tu datos para iniciar sesión</p>
			<GoogleProvider></GoogleProvider>
			<div className='or flex justify-center items-center py-3'>
				<div className='h-[1px] w-1/3 bg-gray-200'></div>
				<span className='text-letter mx-2'>O</span>
				<div className='h-[1px] w-1/3 bg-gray-200'></div>
			</div>
			<FormContainer initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
				{(form: any) => {
					const { handleSubmit, isSubmitting, errors, touched }: ParametersForm = form;
					return (
						<form className='form-styled' onSubmit={handleSubmit} autoComplete='off'>
							<div className='mb-2'>
								<InputText name='email' placeholder='Email' icon={person} />
							</div>
							<div className='mb-3'>
								<InputTextPassword name='password' placeholder='Contraseña' form={form} icon={eye} />
							</div>
							{error && (
								<div className='alert text-red-600 text-center mb-3' role='alert'>
									Usuario o contraseña inválidos
								</div>
							)}
							<button type='submit' className='btn-submit h-[3.5rem] w-full border border-solid rounded-lg border-secondary bg-secondary text-white'>
								Ingresar
							</button>
						</form>
					);
				}}
			</FormContainer>
			<LinkComponentRegister />
			<Link href='/account/recoveryPassword' className='reset-password flex w-max border rounded-full px-4 py-2 mx-auto text-gray-300'>
				Olvidaste tu contraseña
			</Link>
		</div>
	);
};
