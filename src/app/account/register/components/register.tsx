'use client';
import eye from '@/assets/multimedia/icons/eye-svg.svg';
import person from '@/assets/multimedia/icons/user.svg';
import mail from '@/assets/multimedia/icons/mail.svg';
import gender from '@/assets/multimedia/icons/icons-gender.svg';
import PhoneInput from 'react-phone-input-2';
import ReactCodeInput from 'react-code-input';
import { initValuesWorker, IRegisterWorker } from '../interfaces/register.interface';
import { LinkComponentLogin } from '../../components/linkcomponent';
import { InputSelect } from '../../../../components/ui-global/Inputs/inputSelect';
import { FormContainer } from '@/common/form/Form';
import { RegisterSchema } from '@/common/constraints/ValidatonSchemas';

import { ToastNotify, ToastNotifyPromise } from '@/common/alerts/alerts';
import { ParametersForm } from '@/interface';
import { InputText, InputTextPassword } from '@/components/ui-global/Inputs/InputText';
import { FormStyled } from '@/components/ui-global/Form/Form';
import { useCreateUserMutation, useVerifiedNumberMutation } from '@/store/apis/authApi.api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IValues {
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	phone: string;
	code: string;
}
export const FormRegister = () => {
	const router = useRouter();
	const [verifiedPhone, {}] = useVerifiedNumberMutation();
	const [initialValuesWorker, setInitialValuesWorker] = useState<IRegisterWorker>(initValuesWorker);
	const [cel, setCel] = useState({ valid: false, value: '' });
	const [createUser, {}] = useCreateUserMutation();
	const [code, setCode] = useState<string>('');
	const genders = [
		{
			label: 'Seleccionar',
			value: '',
		},
		{
			label: 'Masculino',
			value: 'masculino',
		},
		{
			label: 'Femenino',
			value: 'femenino',
		},
	];
	const isValidPhone = (value: string) => {
		const expresionRegular = /^51\d{9}$/;
		return expresionRegular.test(value);
	};
	const handleSubmit = async (values: IValues) => {
		if (cel.valid == true && code.length == 6) {
			values.phone = cel.value;
			values.username = values.email;
			values.code = code;
			const { data }: any = await createUser(values);
			if (data.status == 404) {
				ToastNotify({ message: 'Error en estos momentos no podemos atender su solicitud', options: { type: 'error', position: 'top-center' } });
			}
			if (data.status == 401) {
				ToastNotify({ message: 'Email ya registrado y/o celular verificado', options: { type: 'error', position: 'top-center' } });
			}
			if (data.status == 200) {
				ToastNotify({ message: 'Su registro fue exitoso,gracias', options: { type: 'success', position: 'top-center' } });
				router.push('/account/login');
			}
		}
	};
	const sendCode = async () => {
		if (!cel.valid) return;
		const values = { phone: cel.value };
		ToastNotifyPromise({ message: 'Se le envió un código de verificación', message_error: 'Ya se le envió un código', promise: verifiedPhone(values) });
	};
	const codeHandler = async (value: any) => {
		if (value.length == 6) {
			setCode(value);
		} else {
			setCode('');
		}
	};
	const eventValid = (value: any, data: any, event: any, formattedValue: any) => {
		let isValid = isValidPhone(value);
		if (isValid) {
			setCel({ valid: true, value: value });
		} else {
			setCel({ valid: false, value: value });
		}
	};

	useEffect(() => {}, []);
	return (
		<main className='box z-[1]'>
			<h1 className='text-center text-primary title mb-2 text-1/6 leading-tight mobile:text-1/8'>Registrate</h1>
			<p className='text-secondary text-center mb-4 ml-auto mr-auto leading-tight'>Ingresa tu datos para crear un usuario</p>
			<div className='content-forms'>
				<div className={`content-form active`}>
					<FormContainer initialValues={initialValuesWorker} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
						{(form: any) => {
							const { handleSubmit, isSubmitting, touched, errors }: ParametersForm = form;
							return (
								<FormStyled onSubmit={handleSubmit}>
									<div className='mb-2'>
										<InputText name='firstname' placeholder='Nombre' icon={person} tabIndex={0} />
									</div>
									<div className='mb-2'>
										<InputText name='lastname' placeholder='Apellido' icon={person} />
									</div>
									<div className='mb-2'>
										<InputText name='email' placeholder='Email' icon={mail} />
									</div>
									<div className='mb-2'>
										<InputSelect name='gender' data={genders} label='Género' form={form} />
									</div>
									<div className='mb-2'>
										<InputTextPassword name='password' placeholder='Contraseña' form={form} icon={eye} />
									</div>
									<div className='mb-2 relative'>
										<span
											className='absolute right-3 text-0/9xl top-0 bottom-0 my-auto z-[1] h-max text-secondary opacity-70 hover:opacity-100 cursor-pointer transition duration-150 ease-out select-none leading-none'
											onClick={() => sendCode()}
										>
											Enviar código <br />a whatsapp
										</span>
										<PhoneInput
											country={'pe'}
											enableAreaCodeStretch={true}
											onlyCountries={['pe']}
											enableClickOutside={true}
											isValid={(value: string, country: object, countries: object[], hiddenAreaCodes: object[]) => {
												return isValidPhone(value);
											}}
											placeholder='Celular'
											onChange={(phone: any, data, event, formattedValue) => {
												eventValid(phone, data, event, formattedValue);
											}}
											inputProps={{ required: true, name: 'cel' }}
										/>
									</div>
									<span className='text-secondary mb-2 flex'>Ingresa el código de verificación</span>

									<div className='mb-4'>
										<ReactCodeInput isValid={code.length == 6} type='text' fields={6} name={''} inputMode={'numeric'} onChange={codeHandler} />
									</div>
									<button type='submit' className='btn-submit h-12 w-full border border-solid rounded-lg border-secondary bg-secondary text-white'>
										Registrar
									</button>
								</FormStyled>
							);
						}}
					</FormContainer>
				</div>
			</div>
			<LinkComponentLogin />
		</main>
	);
};
