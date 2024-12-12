'use client';

import { DeliverySchema } from '@/common/constraints/ValidatonSchemas';
import { FormContainer } from '@/common/form/Form';
import { dateToString } from '@/common/helpers';
import { FormStyled } from '@/components/ui-global/Form/Form';
import { InputText } from '@/components/ui-global/Inputs/InputText';
import { InputDate } from '@/components/ui-global/Inputs/inputDate';
import { ParametersForm } from '@/interface';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { FormikSubmitHandler } from '../../../../common/constraints/ValidatonSchemas';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setData } from '@/store/globalSlice/payment.slice';
import { dataPaymentState } from '@/store/interface';
import { useSelector } from 'react-redux';
import { InputDatePicker } from '@/components/ui-global/Inputs/inputDatePicker';
import { useSession } from 'next-auth/react';

export const FormInformation = () => {
	const session = useSession();
	const dispatch = useDispatch();
	const dataForm: dataPaymentState = useSelector((state: any) => state.paymentSlice.data);
	const router = useRouter();
	const date = dayjs().add(2, 'day').toDate();
	const initialValues = {
		full_name: dataForm.full_name,
		address: dataForm.address,
		data_additional: dataForm.data_additional,
		date_delivery: dateToString(date),
		time_delivery: dataForm.time_delivery,
		email: dataForm.email,
	};
	const schemaTypes = DeliverySchema();
	const handleSubmit: FormikSubmitHandler<Yup.InferType<typeof schemaTypes>> = (values, form) => {
		dispatch(setData({ ...values, email: session.data?.user?.email }));
		router.push('/myorder/checkout');
	};
	const disabledDate = (date: Date) => {
		const today = dayjs().startOf('day');
		const oneWeekAgo = today.add(1, 'day');
		const oneWeekFromNow = today.add(6, 'day');
		const selectedDate = dayjs(date).startOf('day');
		return selectedDate.isBefore(oneWeekAgo, 'day') || selectedDate.isAfter(oneWeekFromNow, 'day');
	};
	return (
		<FormContainer initialValues={initialValues} validationSchema={DeliverySchema} onSubmit={handleSubmit}>
			{(form: any) => {
				const { handleSubmit, isSubmitting, touched, errors }: ParametersForm = form;
				return (
					<FormStyled onSubmit={handleSubmit} className={'w-full'}>
						<div className='flex flex-wrap w-full gap-2'>
							<div className='flex gap-4 w-full'>
								<div className='mb-2 w-full'>
									<span className='text-secondary mb-1 flex'>Nombre completo del receptor del pedido</span>
									<InputText name='full_name' placeholder='Nombre completo' defaultValue={dataForm.full_name} tabIndex={1} />
								</div>
							</div>
							<div className='mb-2 w-full'>
								<span className='text-secondary mb-1 flex'>Dirección</span>
								<InputText name='address' placeholder='Dirección' tabIndex={2} defaultValue={dataForm.address} />
							</div>
							<div className='mb-2 w-full'>
								<span className='text-secondary mb-1 flex'>Datos adicionales</span>
								<InputText name='data_additional' placeholder='datos adicionales' tabIndex={3} defaultValue={dataForm.data_additional} />
							</div>
						</div>
						<div className='flex gap-4 w-full relative z-[1]'>
							<div className='flex gap-4 w-full md:flex-nowrap flex-wrap'>
								<div className='md:w-1/2 w-full'>
									<span className='text-secondary mb-1 flex'>Fecha de entrega</span>
									<InputDatePicker name='date_delivery' disabled={disabledDate} placeholder={'00/00/0000'} defaultValue={dataForm.date_delivery} />
								</div>
								<div className='md:w-1/2 w-full'>
									<span className='text-secondary mb-1 flex'>Hora de entrega</span>
									<InputText name='time_delivery' placeholder='00:00' tabIndex={5} defaultValue={dataForm.time_delivery} />
								</div>
							</div>
						</div>
						<button type='submit' className='bg-secondary text-white w-full h-12 mobile:h-14 rounded-lg mt-4 relative flex justify-center items-center items-center mobile:text-1/2 mb-6'>
							Continuar
						</button>
						<div className='nota'>
							<span className='text-secondary font-ibm_bold'>Fecha de entrega:</span>
							<p className='text-secondary mb-4'>La fecha de entrega seleccionada debe ser un dia después de la fecha de compra hasta 1 semana después.</p>
							<span className='text-secondary font-ibm_bold'>Hora de entrega</span>
							<p className='text-secondary mb-4'>La hora de entrega seleccionada debe ser de entre las 12:00 y las 20:00hrs.</p>
						</div>
					</FormStyled>
				);
			}}
		</FormContainer>
	);
};
