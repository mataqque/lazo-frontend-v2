'use client';
import './footer.scss';
import iconBrand from '../../../assets/images/global/icons/icon-brand.png';
import Image from 'next/image';
import { FormContainer } from '@/common/form/Form';
import { formSchemaFooter } from './formSchema';
import { FormStyled } from '@/components/ui-global/Form/Form';
import { ParametersForm } from '@/interface';
import { InputText } from '@/components/ui-global/Inputs/InputText';
import Link from 'next/link';
// import { ParametersForm } from '@/app/account/interfaces/interface';
export const Footer = (props: any) => {
	const initialValues = {
		newletters: '',
	};
	const onsubmit = (values: any) => {};
	return (
		<footer className='footer z-10 relative'>
			<div className='container flex flex-row py-10 md:flex-wrap !py-12'>
				<div className='content-brand '>
					<div className='mask-left icon-brand bg-secondary w-5 bg-white' />
					<div className='flex'>
						<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-white border-solid'>
							<div className='icon-mask icon-facebook h-4 w-4 mask-center bg-white'></div>
						</a>
						<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-white border-solid'>
							<div className='icon-mask icon-instagram h-4 w-4 mask-center bg-white'></div>
						</a>
						<a href='' target='_blank' className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-white border-solid'>
							<div className='icon-mask icon-youtube h-4 w-4 mask-center bg-white'></div>
						</a>
					</div>
				</div>
				<div className='flex content-column mr-auto w-max'>
					<div className='column flex flex-col'>
						<Link href='/' className='t-column text-secondary IBMPlexSans-Bold text-white'>
							Inicio
						</Link>
						<Link href='/producto' className='sub-t-column IBMPlexSans-Bold text-white'>
							Producto
						</Link>
						<Link href='/contacto' className='sub-t-column text-white'>
							Contacto
						</Link>
					</div>
					<div className='column flex flex-col'>
						<Link href='/peluches' className='t-column text-secondary IBMPlexSans-Bold text-white'>
							Peluches
						</Link>
						<Link href='/osos' className='sub-t-column text-white'>
							Osos
						</Link>
						<Link href='/animes' className='sub-t-column text-white'>
							Animes
						</Link>
						<Link href='/fantasia' className='sub-t-column text-white'>
							Fantasía
						</Link>
						<Link href='/animales' className='sub-t-column text-white'>
							Animales
						</Link>
					</div>
					<div className='column flex flex-col'>
						<Link href='/Bisuteria' className='t-column text-secondary IBMPlexSans-Bold text-white'>
							Bisutería
						</Link>
						<Link href='/anillos' className='sub-t-column text-white'>
							Anillos
						</Link>
						<Link href='/cadenas' className='sub-t-column text-white'>
							Cadenas
						</Link>
					</div>
				</div>
				<div className='flex flex-col newletters'>
					<span className='t-column text-secondary IBMPlexSans-Bold text-white mb-4'>Noticias</span>
					<FormContainer initialValues={initialValues} validationSchema={formSchemaFooter} onSubmit={onsubmit}>
						{(form: any) => {
							const { handleSubmit, isSubmitting }: ParametersForm = form;
							return (
								<FormStyled onSubmit={handleSubmit}>
									<span className='text-white mb-2 flex'>Recibe noticias sobre nuestros productos</span>
									<div className='flex content-newletters gap-4'>
										<div className='inp'>
											<InputText name='name' placeholder='Example@example.com' />
										</div>
										<button type='submit' className='submit rounded-lg bg-secondary border-solid border-white border text-white px-8 mx-auto flex items-center'>
											<span>Subscribir</span>
										</button>
									</div>
								</FormStyled>
							);
						}}
					</FormContainer>
				</div>
			</div>
			<div className='w-full py-6 bar-footer'>
				<div className='container flex justify-between items-between'>
					<span className='text-white'>Derechos reservados Lazo, 2023 </span>

					<div className=''>
						<span className='mx-2 text-white'>Legal</span>
						<span className='mx-2 text-white'>Politicas de privacidad</span>
						<a href='/terminos-y-condiciones' className='mx-2 text-white'>
							Términos y Condiciones
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
